// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "./libraries/SafeERC20.sol";
import "./libraries/Manageable.sol";
import "./interfaces/IWarmup.sol";
import "./interfaces/IDistributor.sol";
import "./interfaces/IsREQT.sol";

contract RequiemStaking is Manageable {
  using SafeERC20 for IERC20;

  address public immutable REQT;
  address public immutable sREQT;

  struct Epoch {
    uint256 length;
    uint256 number;
    uint256 endBlock;
    uint256 distribute;
  }
  Epoch public epoch;

  address public distributor;

  address public locker;
  uint256 public totalBonus;

  address public warmupContract;
  uint256 public warmupPeriod;

  constructor(
    address _REQT,
    address _sREQT,
    uint256 _epochLength,
    uint256 _firstEpochNumber,
    uint256 _firstEpochBlock
  ) {
    require(_REQT != address(0));
    REQT = _REQT;
    require(_sREQT != address(0));
    sREQT = _sREQT;

    epoch = Epoch({
      length: _epochLength,
      number: _firstEpochNumber,
      endBlock: _firstEpochBlock,
      distribute: 0
    });
  }

  struct Claim {
    uint256 deposit;
    uint256 gons;
    uint256 expiry;
    bool lock; // prevents malicious delays
  }
  mapping(address => Claim) public warmupInfo;

  /**
        @notice stake REQT to enter warmup
        @param _amount uint
        @return bool
     */
  function stake(uint256 _amount, address _recipient) external returns (bool) {
    rebase();

    IERC20(REQT).safeTransferFrom(msg.sender, address(this), _amount);

    Claim memory info = warmupInfo[_recipient];
    require(!info.lock, "Deposits for account are locked");

    warmupInfo[_recipient] = Claim({
      deposit: info.deposit + _amount,
      gons: info.gons + IsREQT(sREQT).gonsForBalance(_amount),
      expiry: epoch.number + warmupPeriod,
      lock: false
    });

    IERC20(sREQT).safeTransfer(warmupContract, _amount);
    return true;
  }

  /**
        @notice retrieve sREQT from warmup
        @param _recipient address
     */
  function claim(address _recipient) public {
    Claim memory info = warmupInfo[_recipient];
    if (epoch.number >= info.expiry && info.expiry != 0) {
      delete warmupInfo[_recipient];
      IWarmup(warmupContract).retrieve(
        _recipient,
        IsREQT(sREQT).balanceForGons(info.gons)
      );
    }
  }

  /**
        @notice forfeit sREQT in warmup and retrieve REQT
     */
  function forfeit() external {
    Claim memory info = warmupInfo[msg.sender];
    delete warmupInfo[msg.sender];

    IWarmup(warmupContract).retrieve(
      address(this),
      IsREQT(sREQT).balanceForGons(info.gons)
    );
    IERC20(REQT).safeTransfer(msg.sender, info.deposit);
  }

  /**
        @notice prevent new deposits to address (protection from malicious activity)
     */
  function toggleDepositLock() external {
    warmupInfo[msg.sender].lock = !warmupInfo[msg.sender].lock;
  }

  /**
        @notice redeem sREQT for REQT
        @param _amount uint
        @param _trigger bool
     */
  function unstake(uint256 _amount, bool _trigger) external {
    if (_trigger) {
      rebase();
    }
    IERC20(sREQT).safeTransferFrom(msg.sender, address(this), _amount);
    IERC20(REQT).safeTransfer(msg.sender, _amount);
  }

  /**
        @notice returns the sREQT index, which tracks rebase growth
        @return uint
     */
  function index() public view returns (uint256) {
    return IsREQT(sREQT).index();
  }

  /**
        @notice trigger rebase if epoch over
     */
  function rebase() public {
    if (epoch.endBlock <= block.number) {
      IsREQT(sREQT).rebase(epoch.distribute, epoch.number);

      epoch.endBlock += epoch.length;
      epoch.number++;

      if (distributor != address(0)) {
        IDistributor(distributor).distribute();
      }

      uint256 balance = contractBalance();
      uint256 staked = IsREQT(sREQT).circulatingSupply();

      if (balance <= staked) {
        epoch.distribute = 0;
      } else {
        epoch.distribute = balance - staked;
      }
    }
  }

  /**
        @notice returns contract REQT holdings, including bonuses provided
        @return uint
     */
  function contractBalance() public view returns (uint256) {
    return IERC20(REQT).balanceOf(address(this)) + totalBonus;
  }

  /**
        @notice provide bonus to locked staking contract
        @param _amount uint
     */
  function giveLockBonus(uint256 _amount) external {
    require(msg.sender == locker);
    totalBonus += _amount;
    IERC20(sREQT).safeTransfer(locker, _amount);
  }

  /**
        @notice reclaim bonus from locked staking contract
        @param _amount uint
     */
  function returnLockBonus(uint256 _amount) external {
    require(msg.sender == locker);
    totalBonus -= _amount;
    IERC20(sREQT).safeTransferFrom(locker, address(this), _amount);
  }

  enum CONTRACTS {
    DISTRIBUTOR,
    WARMUP,
    LOCKER
  }

  /**
        @notice sets the contract address for LP staking
        @param _contract address
     */
  function setContract(CONTRACTS _contract, address _address)
    external
    onlyManager
  {
    if (_contract == CONTRACTS.DISTRIBUTOR) {
      // 0
      distributor = _address;
    } else if (_contract == CONTRACTS.WARMUP) {
      // 1
      require(
        warmupContract == address(0),
        "Warmup cannot be set more than once"
      );
      warmupContract = _address;
    } else if (_contract == CONTRACTS.LOCKER) {
      // 2
      require(locker == address(0), "Locker cannot be set more than once");
      locker = _address;
    }
  }

  /**
   * @notice set warmup period for new stakers
   * @param _warmupPeriod uint
   */
  function setWarmup(uint256 _warmupPeriod) external onlyManager {
    warmupPeriod = _warmupPeriod;
  }
}
