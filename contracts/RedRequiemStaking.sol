// SPDX-License-Identifier: MIT

pragma solidity 0.8.11;

import "./interfaces/ERC20/IERC20.sol";
import "./libraries/SafeERC20.sol";
import "./libraries/proxy/UUPSUpgradeable.sol";
import "./libraries/security/ReentrancyGuardUpgradeable.sol";
import "./libraries/access/OwnableUpgradeable.sol";
import "./interfaces/IRewarder.sol";
import "./interfaces/IFundDistributor.sol";

// solhint-disable max-line-length

contract RedRequiemStaking is Initializable, OwnableUpgradeable, UUPSUpgradeable, ReentrancyGuardUpgradeable {
    using SafeERC20 for IERC20;

    struct UserInfo {
        uint256 amount;
        int256 rewardDebt;
    }

    IERC20 public usdc;
    IERC20 public blueICE;

    // governance
    address public reserveFund;

    uint256 public accRewardPerShare;
    uint256 public lastRewardTime;
    uint256 public endRewardTime;
    uint256 public startRewardTime;

    uint256 public rewardPerSecond;
    uint256 private constant ACC_REWARD_PRECISION = 1e12;
    uint256 private constant MISSING_DECIMALS = 12;

    mapping (address => UserInfo) public userInfo;

    /* ========== Modifiers =============== */

    modifier onlyReserveFund() {
        require(reserveFund == msg.sender || owner() == msg.sender, "RedRequiemStaking: caller is not the reserveFund");
        _;
    }

    /** This required by UUPS pattern */
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    function initialize(
        IERC20 _usdc,
        IERC20 _blueICE
    ) external initializer {
        __Ownable_init();
        __ReentrancyGuard_init();
        usdc = _usdc;
        blueICE = _blueICE;
        lastRewardTime = block.timestamp;
        startRewardTime = block.timestamp;
    }

    /* ========== PUBLIC FUNCTIONS ========== */

    function getRewardForDuration(uint256 _from, uint256 _to) public view returns (uint256) {
        uint256 _rewardPerSecond = rewardPerSecond;
        if (_from >= _to || _from >= endRewardTime) return 0;
        if (_to <= startRewardTime) return 0;
        if (_from <= startRewardTime) {
            if (_to <= endRewardTime) return (_to - startRewardTime) * _rewardPerSecond;
            else return (endRewardTime - startRewardTime) * _rewardPerSecond;
        }
        if (_to <= endRewardTime) return (_to - _from) * _rewardPerSecond;
        else return (endRewardTime - _from) * _rewardPerSecond;
    }

    function getRewardPerSecond() public view returns (uint256) {
        return getRewardForDuration(block.timestamp, block.timestamp + 1);
    }


    /// @notice View function to see pending reward on frontend.
    /// @param _user Address of user.
    /// @return pending reward for a given user.
    function pendingReward(address _user) external view returns (uint256 pending) {
        UserInfo storage user = userInfo[_user];
        uint256 supply = blueICE.balanceOf(address(this));
        uint256 _accRewardPerShare = accRewardPerShare;
        if (block.timestamp > lastRewardTime && supply != 0) {
            uint256 rewardAmount = getRewardForDuration(lastRewardTime, block.timestamp);
            _accRewardPerShare += (rewardAmount * ACC_REWARD_PRECISION) / supply;
        }
        pending = uint256(int256(user.amount * _accRewardPerShare / ACC_REWARD_PRECISION) - user.rewardDebt) / (10 ** MISSING_DECIMALS);
    }

    /// @notice Update reward variables of the given pool.
    function updatePool() public {
        if (block.timestamp > lastRewardTime) {
            uint256 supply = blueICE.balanceOf(address(this));
            if (supply > 0) {
                uint256 rewardAmount = getRewardForDuration(lastRewardTime, block.timestamp);
                accRewardPerShare += rewardAmount * ACC_REWARD_PRECISION / supply;
            }
            lastRewardTime = block.timestamp;
            emit LogUpdatePool(lastRewardTime, supply, accRewardPerShare);
        }
    }

    /// @notice Deposit LP tokens to MCV2 for reward allocation.
    /// @param amount LP token amount to deposit.
    /// @param to The receiver of `amount` deposit benefit.
    function deposit(uint256 amount, address to) public {
        updatePool();
        UserInfo storage user = userInfo[to];

        // Effects
        user.amount += amount;
        user.rewardDebt += int256(amount * accRewardPerShare / ACC_REWARD_PRECISION);

        blueICE.safeTransferFrom(msg.sender, address(this), amount);

        emit Deposit(msg.sender, amount, to);
    }

    /// @notice Withdraw LP tokens from MCV2.
    /// @param amount LP token amount to withdraw.
    /// @param to Receiver of the LP tokens.
    function withdraw(uint256 amount, address to) public {
        updatePool();
        UserInfo storage user = userInfo[msg.sender];

        // Effects
        user.rewardDebt -= int256(amount * accRewardPerShare / ACC_REWARD_PRECISION);
        user.amount -= amount;

        blueICE.safeTransfer(to, amount);

        emit Withdraw(msg.sender, amount, to);
    }

    /// @notice Harvest proceeds for transaction sender to `to`.
    /// @param to Receiver of rewards.
    function harvest(address to) public {
        updatePool();
        UserInfo storage user = userInfo[msg.sender];
        int256 accumulatedReward = int256(user.amount * accRewardPerShare / ACC_REWARD_PRECISION);
        uint256 _pendingReward = uint256(accumulatedReward - user.rewardDebt) / (10 ** MISSING_DECIMALS);

        // Effects
        user.rewardDebt = accumulatedReward;

        // Interactions
        if (_pendingReward > 0) {
            usdc.safeTransfer(to, _pendingReward);
        }

        emit Harvest(msg.sender, _pendingReward);
    }

    /// @notice Withdraw LP tokens from MCV2 and harvest proceeds for transaction sender to `to`.
    /// @param amount LP token amount to withdraw.
    /// @param to Receiver of the LP tokens and rewards.
    function withdrawAndHarvest(uint256 amount, address to) public {
        updatePool();
        UserInfo storage user = userInfo[msg.sender];
        int256 accumulatedReward = int256(user.amount * accRewardPerShare / ACC_REWARD_PRECISION);
        uint256 _pendingReward = uint256(accumulatedReward - user.rewardDebt) / (10 ** MISSING_DECIMALS);

        // Effects
        user.rewardDebt = accumulatedReward - int256(amount * accRewardPerShare / ACC_REWARD_PRECISION);
        user.amount -= amount;

        // Interactions
        if (_pendingReward > 0) {
            usdc.safeTransfer(to, _pendingReward);
        }

        blueICE.safeTransfer(to, amount);

        emit Withdraw(msg.sender, amount, to);
        emit Harvest(msg.sender, _pendingReward);
    }

    /// @notice Withdraw without caring about rewards. EMERGENCY ONLY.
    /// @param to Receiver of the LP tokens.
    function emergencyWithdraw(address to) public {
        UserInfo storage user = userInfo[msg.sender];
        uint256 amount = user.amount;
        user.amount = 0;
        user.rewardDebt = 0;

        // Note: transfer can fail or succeed if `amount` is zero.
        blueICE.safeTransfer(to, amount);
        emit EmergencyWithdraw(msg.sender, amount, to);
    }

    /* ========== RESTRICTED FUNCTIONS ========== */

    /// @notice Sets the reward per second to be distributed. Can only be called by the owner.
    /// @param _rewardPerSecond The amount of reward to be distributed per second.
    function setRewardPerSecond(uint256 _rewardPerSecond) public onlyOwner {
        rewardPerSecond = _rewardPerSecond;
        emit LogRewardPerSecond(_rewardPerSecond);
    }

    function allocateMoreRewards(uint256 _addedReward, uint256 _days) external onlyReserveFund {
        updatePool();
        uint256 _pendingSeconds = (endRewardTime >  block.timestamp) ? (endRewardTime - block.timestamp) : 0;
        uint256 _newPendingReward = (rewardPerSecond * _pendingSeconds) + _addedReward * (10 ** MISSING_DECIMALS);
        uint256 _newPendingSeconds = _pendingSeconds + (_days * (1 days));
        uint256 _newRewardPerSecond = _newPendingReward / _newPendingSeconds;
        rewardPerSecond = _newRewardPerSecond;
        if (_days > 0) {
            if (endRewardTime <  block.timestamp) {
                endRewardTime =  block.timestamp + (_days * (1 days));
            } else {
                endRewardTime = endRewardTime +  (_days * (1 days));
            }
        }
        usdc.safeTransferFrom(msg.sender, address(this), _addedReward);
        emit LogRewardPerSecond(_newRewardPerSecond);
    }

    function setReserveFund(address _reserveFund) external onlyReserveFund {
        reserveFund = _reserveFund;
    }

    function rescueFund(uint256 _amount) external onlyOwner {
        require(_amount > 0 && _amount <= usdc.balanceOf(address(this)), "invalid amount");
        usdc.safeTransfer(owner(), _amount);
        emit FundRescued(owner(), _amount);
    }

    /* =============== EVENTS ==================== */

    event Deposit(address indexed user, uint256 amount, address indexed to);
    event Withdraw(address indexed user, uint256 amount, address indexed to);
    event EmergencyWithdraw(address indexed user, uint256 amount, address indexed to);
    event Harvest(address indexed user, uint256 amount);
    event LogUpdatePool(uint256 lastRewardTime, uint256 lpSupply, uint256 accRewardPerShare);
    event LogRewardPerSecond(uint256 rewardPerSecond);
    event FundRescued(address indexed receiver, uint256 amount);
}