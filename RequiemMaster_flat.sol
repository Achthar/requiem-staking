
// File: contracts/interfaces/IRewardDistributor.sol



pragma solidity ^0.8.13;

interface IRewardDistributor {
  function distributeTo(address _receiver, uint256 _amount, uint256 _maturity) external;
}

// File: contracts/interfaces/ERC20/IERC20.sol


pragma solidity 0.8.13;

interface IERC20 {
    function decimals() external view returns (uint8);

    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function transfer(address recipient, uint256 amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(address indexed owner, address indexed spender, uint256 value);
}
// File: contracts/libraries/SafeERC20.sol



// Based on the ReentrancyGuard library from OpenZeppelin Contracts, altered to reduce gas costs.
// The `safeTransfer` and `safeTransferFrom` functions assume that `token` is a contract (an account with code), and
// work differently from the OpenZeppelin version if it is not.

pragma solidity ^0.8.13;


/**
 * @title SafeERC20
 * @dev Wrappers around ERC20 operations that throw on failure (when the token
 * contract returns false). Tokens that return no value (and instead revert or
 * throw on failure) are also supported, non-reverting calls are assumed to be
 * successful.
 * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,
 * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.
 */
library SafeERC20 {
  function safeTransfer(
    IERC20 token,
    address to,
    uint256 value
  ) internal {
    _callOptionalReturn(
      address(token),
      abi.encodeWithSelector(token.transfer.selector, to, value)
    );
  }

  function safeTransferFrom(
    IERC20 token,
    address from,
    address to,
    uint256 value
  ) internal {
    _callOptionalReturn(
      address(token),
      abi.encodeWithSelector(token.transferFrom.selector, from, to, value)
    );
  }

  function safeIncreaseAllowance(
    IERC20 token,
    address spender,
    uint256 value
  ) internal {
    uint256 newAllowance = token.allowance(address(this), spender) + value;
    _callOptionalReturn(
      address(token),
      abi.encodeWithSelector(token.approve.selector, spender, newAllowance)
    );
  }

  /**
   * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement
   * on the return value: the return value is optional (but if data is returned, it must not be false).
   *
   * WARNING: `token` is assumed to be a contract: calls to EOAs will *not* revert.
   */
  function _callOptionalReturn(address token, bytes memory data) private {
    // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since
    // we're implementing it ourselves.
    (bool success, bytes memory returndata) = token.call(data);

    // If the low-level call didn't succeed we return whatever was returned from it.
    assembly {
      if eq(success, 0) {
        returndatacopy(0, 0, returndatasize())
        revert(0, returndatasize())
      }
    }

    // Finally we check the returndata size is either zero or true - note that this check will always pass for EOAs
    require(
      returndata.length == 0 || abi.decode(returndata, (bool)),
      "SAFE_ERC20_CALL_FAILED"
    );
  }
}

// File: contracts/interfaces/IRewarder.sol



pragma solidity ^0.8.13;


interface IRewarder {
  function onReward(
    uint256 pid,
    address user,
    address recipient,
    uint256 rewardAmount,
    uint256 newLpAmount
  ) external;

  function pendingTokens(
    uint256 pid,
    address user,
    uint256 rewardAmount
  ) external view returns (IERC20[] memory, uint256[] memory);
}

// File: contracts/interfaces/IOwnable.sol


pragma solidity 0.8.13;

interface IOwnable {
  function owner() external view returns (address);

  function renounceOwnership() external;
  
  function transferOwnership( address newOwner_ ) external;
}
// File: contracts/libraries/Ownable.sol


pragma solidity 0.8.13;


contract Ownable is IOwnable {
    
  address internal _owner;

  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

  constructor () {
    _owner = msg.sender;
    emit OwnershipTransferred( address(0), _owner );
  }

  function owner() public view override returns (address) {
    return _owner;
  }

  modifier onlyOwner() {
    require( _owner == msg.sender, "Ownable: caller is not the owner" );
    _;
  }

  function renounceOwnership() public virtual override onlyOwner() {
    emit OwnershipTransferred( _owner, address(0) );
    _owner = address(0);
  }

  function transferOwnership( address newOwner_ ) public virtual override onlyOwner() {
    require( newOwner_ != address(0), "Ownable: new owner is the zero address");
    emit OwnershipTransferred( _owner, newOwner_ );
    _owner = newOwner_;
  }
}
// File: contracts/RequiemMaster.sol



pragma solidity ^0.8.13;






using SafeERC20 for IERC20 global;

/*  RequiemChef is a fork from Sushi's MiniChef v2 with slightly modification.
    1.  Rewards will be transferred from a seperated contract so that it will be more flexible to switch between:
        [mint reward token directly] OR [transfer them instead]
    2.  Add a Harvest all function to quickly harvest rewards from all the deposited pools
*/
contract RequiemMaster is Ownable {

  struct UserInfo {
    uint256 amount;
    int256 rewardDebt;
  }

  struct PoolInfo {
    uint256 accRewardPerShare;
    uint256 lastRewardTime;
    uint256 allocPoint;
    uint256 maturity;
  }

  IERC20 public reward;
  IRewardDistributor public fund;

  /// @notice Info of each MCV2 pool.
  PoolInfo[] public poolInfo;
  /// @notice Address of the LP token for each MCV2 pool.
  IERC20[] public lpToken;
  /// @notice Address of each `IRewarder` contract in MCV2.
  IRewarder[] public rewarder;

  /// @notice Info of each user that stakes LP tokens.
  mapping(uint256 => mapping(address => UserInfo)) public userInfo;
  /// @dev Total allocation points. Must be the sum of all allocation points in all pools.
  uint256 public totalAllocPoint = 0;

  uint256 public rewardPerSecond;
  uint256 private constant ACC_REWARD_PRECISION = 1e12;

  constructor(IERC20 _reward, IRewardDistributor _fund) {
    reward = _reward;
    fund = _fund;
  }

  /* ========== PUBLIC FUNCTIONS ========== */

  /// @notice Returns the number of MCV2 pools.
  function poolLength() public view returns (uint256 pools) {
    pools = poolInfo.length;
  }

  /// @notice View function to see pending reward on frontend.
  /// @param _pid The index of the pool. See `poolInfo`.
  /// @param _user Address of user.
  /// @return pending reward for a given user.
  function pendingReward(uint256 _pid, address _user)
    external
    view
    returns (uint256 pending)
  {
    PoolInfo memory pool = poolInfo[_pid];
    UserInfo storage user = userInfo[_pid][_user];
    uint256 accRewardPerShare = pool.accRewardPerShare;
    uint256 lpSupply = lpToken[_pid].balanceOf(address(this));
    if (block.timestamp > pool.lastRewardTime && lpSupply != 0) {
      uint256 time = block.timestamp - pool.lastRewardTime;
      uint256 rewardAmount = (time * rewardPerSecond * pool.allocPoint) /
        totalAllocPoint;
      accRewardPerShare += (rewardAmount * ACC_REWARD_PRECISION) / lpSupply;
    }
    pending = uint256(
      int256((user.amount * accRewardPerShare) / ACC_REWARD_PRECISION) -
        user.rewardDebt
    );
  }

  /// @notice Update reward variables of the given pool.
  /// @param pid The index of the pool. See `poolInfo`.
  /// @return pool Returns the pool that was updated.
  function updatePool(uint256 pid) public returns (PoolInfo memory pool) {
    pool = poolInfo[pid];
    if (block.timestamp > pool.lastRewardTime) {
      uint256 lpSupply = lpToken[pid].balanceOf(address(this));
      if (lpSupply > 0) {
        uint256 time = block.timestamp - pool.lastRewardTime;
        uint256 rewardAmount = (time * rewardPerSecond * pool.allocPoint) /
          totalAllocPoint;
        pool.accRewardPerShare +=
          (rewardAmount * ACC_REWARD_PRECISION) /
          lpSupply;
      }
      pool.lastRewardTime = block.timestamp;
      poolInfo[pid] = pool;
      emit LogUpdatePool(
        pid,
        pool.lastRewardTime,
        lpSupply,
        pool.accRewardPerShare
      );
    }
  }

  /// @notice Update reward variables for all pools. Be careful of gas spending!
  /// @param pids Pool IDs of all to be updated. Make sure to update all active pools.
  function massUpdatePools(uint256[] calldata pids) external {
    uint256 len = pids.length;
    for (uint256 i = 0; i < len; ++i) {
      updatePool(pids[i]);
    }
  }

  /// @notice Deposit LP tokens to MCV2 for reward allocation.
  /// @param pid The index of the pool. See `poolInfo`.
  /// @param amount LP token amount to deposit.
  /// @param to The receiver of `amount` deposit benefit.
  function deposit(
    uint256 pid,
    uint256 amount,
    address to
  ) public {
    PoolInfo memory pool = updatePool(pid);
    UserInfo storage user = userInfo[pid][to];

    // Effects
    user.amount += amount;
    user.rewardDebt += int256(
      (amount * pool.accRewardPerShare) / ACC_REWARD_PRECISION
    );

    // Interactions
    IRewarder _rewarder = rewarder[pid];
    if (address(_rewarder) != address(0)) {
      _rewarder.onReward(pid, to, to, 0, user.amount);
    }

    lpToken[pid].safeTransferFrom(msg.sender, address(this), amount);

    emit Deposit(msg.sender, pid, amount, to);
  }

  /// @notice Withdraw LP tokens from MCV2.
  /// @param pid The index of the pool. See `poolInfo`.
  /// @param amount LP token amount to withdraw.
  /// @param to Receiver of the LP tokens.
  function withdraw(
    uint256 pid,
    uint256 amount,
    address to
  ) public {
    PoolInfo memory pool = updatePool(pid);
    UserInfo storage user = userInfo[pid][msg.sender];

    // Effects
    user.rewardDebt -= int256(
      (amount * pool.accRewardPerShare) / ACC_REWARD_PRECISION
    );
    user.amount -= amount;
    // Interactions
    IRewarder _rewarder = rewarder[pid];
    if (address(_rewarder) != address(0)) {
      _rewarder.onReward(pid, msg.sender, to, 0, user.amount);
    }

    lpToken[pid].safeTransfer(to, amount);

    emit Withdraw(msg.sender, pid, amount, to);
  }

  /// @notice Harvest proceeds for transaction sender to `to`.
  /// @param pid The index of the pool. See `poolInfo`.
  /// @param to Receiver of rewards.
  function harvest(uint256 pid, address to) public {
    PoolInfo memory pool = updatePool(pid);
    UserInfo storage user = userInfo[pid][msg.sender];
    int256 accumulatedReward = int256(
      (user.amount * pool.accRewardPerShare) / ACC_REWARD_PRECISION
    );
    uint256 _pendingReward = uint256(accumulatedReward - user.rewardDebt);

    // Effects
    user.rewardDebt = accumulatedReward;

    // Interactions
    fund.distributeTo(to, _pendingReward, pool.maturity);

    IRewarder _rewarder = rewarder[pid];
    if (address(_rewarder) != address(0)) {
      _rewarder.onReward(pid, msg.sender, to, _pendingReward, user.amount);
    }

    emit Harvest(msg.sender, pid, _pendingReward);
  }

  /// @notice Withdraw LP tokens from MCV2 and harvest proceeds for transaction sender to `to`.
  /// @param pid The index of the pool. See `poolInfo`.
  /// @param amount LP token amount to withdraw.
  /// @param to Receiver of the LP tokens and rewards.
  function withdrawAndHarvest(
    uint256 pid,
    uint256 amount,
    address to
  ) public {
    PoolInfo memory pool = updatePool(pid);
    UserInfo storage user = userInfo[pid][msg.sender];
    int256 accumulatedReward = int256(
      (user.amount * pool.accRewardPerShare) / ACC_REWARD_PRECISION
    );
    uint256 _pendingReward = uint256(accumulatedReward - user.rewardDebt);

    // Effects
    user.rewardDebt =
      accumulatedReward -
      int256((amount * pool.accRewardPerShare) / ACC_REWARD_PRECISION);
    user.amount -= amount;

    // Interactions
    fund.distributeTo(to, _pendingReward, pool.maturity);

    IRewarder _rewarder = rewarder[pid];
    if (address(_rewarder) != address(0)) {
      _rewarder.onReward(pid, msg.sender, to, _pendingReward, user.amount);
    }

    lpToken[pid].safeTransfer(to, amount);

    emit Withdraw(msg.sender, pid, amount, to);
    emit Harvest(msg.sender, pid, _pendingReward);
  }

  /// @notice Withdraw without caring about rewards. EMERGENCY ONLY.
  /// @param pid The index of the pool. See `poolInfo`.
  /// @param to Receiver of the LP tokens.
  function emergencyWithdraw(uint256 pid, address to) public {
    UserInfo storage user = userInfo[pid][msg.sender];
    uint256 amount = user.amount;
    user.amount = 0;
    user.rewardDebt = 0;

    IRewarder _rewarder = rewarder[pid];
    if (address(_rewarder) != address(0)) {
      _rewarder.onReward(pid, msg.sender, to, 0, 0);
    }

    // Note: transfer can fail or succeed if `amount` is zero.
    lpToken[pid].safeTransfer(to, amount);
    emit EmergencyWithdraw(msg.sender, pid, amount, to);
  }

  function harvestAllRewards(address to) external {
    uint256 length = poolInfo.length;
    for (uint256 pid = 0; pid < length; ++pid) {
      if (userInfo[pid][msg.sender].amount > 0) {
        harvest(pid, to);
      }
    }
  }

  /* ========== INTERNAL FUNCTIONS ========== */

  function checkPoolDuplicate(IERC20 _lpToken) internal view {
    uint256 length = poolInfo.length;
    for (uint256 pid = 0; pid < length; ++pid) {
      require(lpToken[pid] != _lpToken, "add: existing pool?");
    }
  }

  /* ========== RESTRICTED FUNCTIONS ========== */

  /// @notice Add a new LP to the pool. Can only be called by the owner.
  /// DO NOT add the same LP token more than once. Rewards will be messed up if you do.
  /// @param allocPoint AP of the new pool.
  /// @param _lpToken Address of the LP ERC-20 token.
  /// @param _rewarder Address of the rewarder delegate.
  function add(
    uint256 allocPoint,
    uint256 maturity,
    IERC20 _lpToken,
    IRewarder _rewarder
  ) public onlyOwner {
    checkPoolDuplicate(_lpToken);

    totalAllocPoint += allocPoint;
    lpToken.push(_lpToken);
    rewarder.push(_rewarder);

    poolInfo.push(
      PoolInfo({
        allocPoint: allocPoint,
        lastRewardTime: block.timestamp,
        accRewardPerShare: 0,
        maturity: maturity
      })
    );
    emit LogPoolAddition(lpToken.length - 1, allocPoint, _lpToken, _rewarder);
  }

  /// @notice Update the given pool's reward allocation point and `IRewarder` contract. Can only be called by the owner.
  /// @param _pid The index of the pool. See `poolInfo`.
  /// @param _allocPoint New AP of the pool.
  /// @param _rewarder Address of the rewarder delegate.
  /// @param overwrite True if _rewarder should be `set`. Otherwise `_rewarder` is ignored.
  function set(
    uint256 _pid,
    uint256 _allocPoint,
    IRewarder _rewarder,
    bool overwrite
  ) public onlyOwner {
    totalAllocPoint = totalAllocPoint - poolInfo[_pid].allocPoint + _allocPoint;
    poolInfo[_pid].allocPoint = _allocPoint;
    if (overwrite) {
      rewarder[_pid] = _rewarder;
    }
    emit LogSetPool(
      _pid,
      _allocPoint,
      overwrite ? _rewarder : rewarder[_pid],
      overwrite
    );
  }

  /// @notice Sets the reward per second to be distributed. Can only be called by the owner.
  /// @param _rewardPerSecond The amount of reward to be distributed per second.
  function setRewardPerSecond(uint256 _rewardPerSecond) public onlyOwner {
    rewardPerSecond = _rewardPerSecond;
    emit LogRewardPerSecond(_rewardPerSecond);
  }

  /// @notice Set the new fund contract.
  /// @param _fund The address of new fund contract.
  function setFund(IRewardDistributor _fund) public onlyOwner {
    fund = _fund;
    emit PoolFundChanged(address(_fund));
  }

  /* =============== EVENTS ==================== */

  event Deposit(
    address indexed user,
    uint256 indexed pid,
    uint256 amount,
    address indexed to
  );
  event Withdraw(
    address indexed user,
    uint256 indexed pid,
    uint256 amount,
    address indexed to
  );
  event EmergencyWithdraw(
    address indexed user,
    uint256 indexed pid,
    uint256 amount,
    address indexed to
  );
  event Harvest(address indexed user, uint256 indexed pid, uint256 amount);
  event LogPoolAddition(
    uint256 indexed pid,
    uint256 allocPoint,
    IERC20 indexed lpToken,
    IRewarder indexed rewarder
  );
  event LogSetPool(
    uint256 indexed pid,
    uint256 allocPoint,
    IRewarder indexed rewarder,
    bool overwrite
  );
  event LogUpdatePool(
    uint256 indexed pid,
    uint256 lastRewardTime,
    uint256 lpSupply,
    uint256 accRewardPerShare
  );
  event LogRewardPerSecond(uint256 rewardPerSecond);
  event PoolFundChanged(address indexed fund);
}
