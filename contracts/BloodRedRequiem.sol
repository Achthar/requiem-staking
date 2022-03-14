// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.12;

import "./libraries/ERC20BurnableLock.sol";
import "./libraries/SafeERC20.sol";
import "./libraries/Ownable.sol";
import "./libraries/EnumerableSet.sol";
import "./interfaces/IGovernanceLock.sol";

contract BloodRedRequiem is ERC20BurnableLock, IGovernanceLock, Ownable {
  using SafeERC20 for IERC20;
  using EnumerableSet for EnumerableSet.UintSet;

  // flags
  uint256 private _unlocked;

  uint256 public constant MINDAYS = 1;
  uint256 public constant MAXDAYS = 3 * 365;

  uint256 public constant MAXTIME = MAXDAYS * 1 days; // 3 years
  uint256 public constant MAX_WITHDRAWAL_PENALTY = 50000; // 50%
  uint256 public constant PRECISION = 100000; // 5 decimals

  address public lockedToken;
  address public penaltyCollector;
  uint256 public minLockedAmount;
  uint256 public earlyWithdrawPenaltyRate;

  mapping(address => mapping(uint256 => uint256)) public mintedForLock;

  // each address has a dictionary of locked data
  // they will be simply numbered from 0 to n
  mapping(address => mapping(uint256 => LockedBalance)) public lockedBalances;

  // the dictionary that contains the locked positions for each
  // endtime
  mapping(address => mapping(uint256 => uint256)) public lockedPosition;

  // count of entries for which a lock has been created
  // used as a reference to lockedBalances to know which entries exist
  mapping(address => uint256) public lockIds;
  mapping(address => EnumerableSet.UintSet) private lockEnds;
  /* ========== MODIFIERS ========== */

  modifier lock() {
    require(_unlocked == 1, "LOCKED");
    _unlocked = 0;
    _;
    _unlocked = 1;
  }

  constructor(
    string memory _name,
    string memory _symbol,
    address _lockedToken,
    uint256 _minLockedAmount
  ) ERC20Lock(_name, _symbol, 18) {
    lockedToken = _lockedToken;
    minLockedAmount = _minLockedAmount;
    earlyWithdrawPenaltyRate = 30000; // 30%
    _unlocked = 1;
  }

  /* ========== PUBLIC FUNCTIONS ========== */

  function locked_of(address _addr, uint256 _id)
    external
    view
    override
    returns (uint256)
  {
    return lockedBalances[_addr][_id].amount;
  }

  function locked_end(address _addr, uint256 _id)
    external
    view
    override
    returns (uint256)
  {
    return lockedBalances[_addr][_id].end;
  }

  // returns locks created by and for user
  function get_locks(address _addr)
    external
    view
    override
    returns (LockedBalance[] memory _balances)
  {
    uint256 length = lockIds[_addr];
    _balances = new LockedBalance[](length);
    for (uint256 i = 0; i < length; i++) {
      _balances[i] = lockedBalances[_addr][i];
    }
  }

  // returns locks created by and for user
  function get_minted_for_locks(address _addr)
    external
    view
    override
    returns (uint256[] memory _minted)
  {
    uint256 length = lockIds[_addr];
    _minted = new uint256[](length);
    for (uint256 i = 0; i < length; i++) {
      _minted[i] = mintedForLock[_addr][i];
    }
  }

  // returns locks created by and for user
  function get_minted_for_lock(address _addr, uint256 _id)
    external
    view
    override
    returns (uint256 _minted)
  {
    _minted = mintedForLock[_addr][_id];
  }

  function voting_power_unlock_time(uint256 _value, uint256 _unlock_time)
    public
    view
    override
    returns (uint256)
  {
    uint256 _now = block.timestamp;
    if (_unlock_time <= _now) return 0;
    uint256 _lockedSeconds = _unlock_time - _now;
    if (_lockedSeconds >= MAXTIME) {
      return _value;
    }
    return (_value * _lockedSeconds) / MAXTIME;
  }

  function voting_power_locked_days(uint256 _value, uint256 _days)
    public
    pure
    override
    returns (uint256)
  {
    if (_days >= MAXDAYS) {
      return _value;
    }
    return (_value * _days) / MAXDAYS;
  }

  function deposit_for_id(
    address _addr,
    uint256 _value,
    uint256 _id
  ) external override {
    require(_value >= minLockedAmount, "less than min amount");
    _deposit_for_id(_addr, _value, 0, _id);
  }

  function create_lock(uint256 _value, uint256 _days) external override {
    uint256 newId = lockIds[_msgSender()];
    require(_value >= minLockedAmount, "less than min amount");
    require(_days >= MINDAYS, "Voting lock can MINDAYS min");
    require(_days <= MAXDAYS, "Voting lock can MAXDAYS max");

    _deposit_for_id(_msgSender(), _value, _days, newId);
  }

  function increase_amount(uint256 _value, uint256 _id) external override {
    require(_value >= minLockedAmount, "less than min amount");
    _deposit_for_id(_msgSender(), _value, 0, _id);
  }

  function increase_unlock_time(uint256 _days, uint256 _id) external override {
    require(_days >= MINDAYS, "Voting lock can be MINDAYS min");
    require(_days <= MAXDAYS, "Voting lock can be MAXDAYS max");
    _deposit_for_id(_msgSender(), 0, _days, _id);
  }

  // withdraws from all locks whenever possible
  function withdrawAll() external override lock {
    uint256 _ids = lockIds[_msgSender()];
    for (uint256 i = 0; i < _ids; i++) {
      LockedBalance storage _locked = lockedBalances[_msgSender()][i];
      uint256 _now = block.timestamp;
      if (_locked.amount > 0 && _now >= _locked.end) {
        uint256 _amount = _locked.amount;
        _locked.end = 0;
        _locked.amount = 0;
        _burn(_msgSender(), mintedForLock[_msgSender()][i]);
        mintedForLock[_msgSender()][i] = 0;
        IERC20(lockedToken).safeTransfer(_msgSender(), _amount);
        emit Withdraw(_msgSender(), _amount, _now);
      }
    }
  }

  function withdraw(uint256 _id) external override lock {
    LockedBalance storage _locked = lockedBalances[_msgSender()][_id];
    uint256 _now = block.timestamp;
    require(_locked.amount > 0, "Nothing to withdraw");
    require(_now >= _locked.end, "The lock didn't expire");
    uint256 _amount = _locked.amount;
    _locked.end = 0;
    _locked.amount = 0;
    _burn(_msgSender(), mintedForLock[_msgSender()][_id]);
    mintedForLock[_msgSender()][_id] = 0;
    IERC20(lockedToken).safeTransfer(_msgSender(), _amount);

    emit Withdraw(_msgSender(), _amount, _now);
  }

  // This will charge PENALTY if lock is not expired yet
  function emergencyWithdraw(uint256 _id) external lock {
    LockedBalance storage _locked = lockedBalances[_msgSender()][_id];
    uint256 _now = block.timestamp;
    require(_locked.amount > 0, "Nothing to withdraw");
    uint256 _amount = _locked.amount;
    if (_now < _locked.end) {
      uint256 _fee = (_amount * earlyWithdrawPenaltyRate) / PRECISION;
      _penalize(_fee);
      _amount = _amount - _fee;
    }
    _locked.end = 0;
    _locked.amount = 0;
    _burn(_msgSender(), mintedForLock[_msgSender()][_id]);
    mintedForLock[_msgSender()][_id] = 0;

    IERC20(lockedToken).safeTransfer(_msgSender(), _amount);

    emit Withdraw(_msgSender(), _amount, _now);
  }

  // This will charge PENALTY if lock is not expired yet
  function emergencyWithdrawAll() external lock {
    uint256 _ids = lockIds[_msgSender()];
    for (uint256 i = 0; i < _ids; i++) {
      LockedBalance storage _locked = lockedBalances[_msgSender()][i];
      uint256 _now = block.timestamp;
      if (_locked.amount > 0) {
        uint256 _amount = _locked.amount;
        if (_now < _locked.end) {
          uint256 _fee = (_amount * earlyWithdrawPenaltyRate) / PRECISION;
          _penalize(_fee);
          _amount = _amount - _fee;
        }
        _locked.end = 0;
        _locked.amount = 0;
        _burn(_msgSender(), mintedForLock[_msgSender()][i]);
        mintedForLock[_msgSender()][i] = 0;

        IERC20(lockedToken).safeTransfer(_msgSender(), _amount);

        emit Withdraw(_msgSender(), _amount, _now);
      }
    }
  }

  function transferLock(
    uint256 _amountThis,
    uint256 _id,
    address _to
  ) public {
    // transfer the lock to recipient
    _transferLock(_amountThis, _id, _to);

    // send the underying amount of this token
    IERC20(address(this)).safeTransferFrom(
      _msgSender(),
      address(this),
      _amountThis
    );
  }

  function transferFullLock(uint256 _id, address _to) public {
    // for a full transfer, the full minted amount has to be paid
    uint256 _minted = mintedForLock[_msgSender()][_id];

    // send the underying amount of this token
    IERC20(address(this)).safeTransferFrom(_msgSender(), _to, _minted);
  }

  /* ========== INTERNAL FUNCTIONS ========== */

  function _deposit_for_id(
    address _addr,
    uint256 _value,
    uint256 _days,
    uint256 _id
  ) internal lock {
    LockedBalance storage _locked = lockedBalances[_addr][_id];
    uint256 _now = block.timestamp;
    uint256 _amount = _locked.amount;
    uint256 _end = _locked.end;
    uint256 _vp;
    if (_amount == 0) {
      _vp = voting_power_locked_days(_value, _days);
      _locked.amount = _value;
      _locked.end = _now + _days * 1 days;
      lockIds[_addr] += 1;
    } else if (_days == 0) {
      _vp = voting_power_unlock_time(_value, _end);
      _locked.amount = _amount + _value;
    } else {
      require(
        _value == 0,
        "Cannot increase amount and extend lock in the same time"
      );
      _vp = voting_power_locked_days(_amount, _days);
      _locked.end = _end + _days * 1 days;
      require(
        _locked.end - _now <= MAXTIME,
        "Cannot extend lock to more than MAXTIME"
      );
    }
    require(_vp > 0, "No benefit to lock");
    if (_value > 0) {
      IERC20(lockedToken).safeTransferFrom(_msgSender(), address(this), _value);
    }
    _mint(_addr, _vp);
    mintedForLock[_addr][_id] += _vp;

    emit Deposit(_addr, _locked.amount, _locked.end, _now);
  }

  function _penalize(uint256 _amount) internal {
    if (penaltyCollector != address(0)) {
      // send to collector if `penaltyCollector` set
      IERC20(lockedToken).safeTransfer(penaltyCollector, _amount);
    } else {
      ERC20BurnableLock(lockedToken).burn(_amount);
    }
  }

  /**
   * @dev Before transfer function that moves the respective locks to the recipient
   * Standard ERC20 function adjusted for ERC20 lock which does NOT execute these lines
   * for minting and burning as it would interfere with the lock logic.
   * @param from sender
   * @param to recipient
   * @param amount amount of this token to be sent
   */
  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override {
    uint256 _ids = lockIds[from];
    uint256 _amountLeft = amount;
    for (uint256 i = 0; i < _ids; i++) {
      uint256 minted = mintedForLock[from][i];
      if (_amountLeft >= minted) {
        _transferFullLock(from, to, i);
        _amountLeft -= minted;
      } else if (_amountLeft > 0) {
        // here we just transfer the last bit left
        _transferLock(_amountLeft, i, to);
        break;
      } else break;
    }
  }

  /**
  * @dev Function that transfers the share of the underlying lock amount to the recipient.
  @param _amountThis amount of this token to transfer
  @param _id id of lock to transfer
  @param _to recipient address
  */
  function _transferLock(
    uint256 _amountThis,
    uint256 _id,
    address _to
  ) internal {
    LockedBalance storage _lock = lockedBalances[_msgSender()][_id];
    uint256 _mintedForLock = mintedForLock[_msgSender()][_id];

    // define the share of the lock.amount that has to be transferred
    uint256 _undelyingAmount = (_amountThis * _lock.amount) / _mintedForLock;

    // make sure that the amount to transfer is not too much
    require(_undelyingAmount <= _lock.amount, "Insufficient funds in Lock");

    // log the amount for the recipient
    _receiveLock(_undelyingAmount, _lock.end, _to);

    // reduce this users lock amount
    _lock.amount -= _undelyingAmount;
    mintedForLock[_msgSender()][_id] -= _undelyingAmount;
  }

  /**
  * @dev Function that transfers the full lock of the user to the recipient.
  @param _id id of lock to transfer
  @param _to recipient address
  */
  function _transferFullLock(
    address _from,
    address _to,
    uint256 _id
  ) internal {
    LockedBalance storage _lock = lockedBalances[_from][_id];
    // log the amount for the recipient
    _receiveLock(_lock.amount, _lock.end, _to);

    // reduce this users lock amount
    _lock.amount = 0;

    mintedForLock[_from][_id] = 0;
  }

  /**
  Function that logs the recipients lock
  All locks will searched and once a match is found the lock amount is added
  @param _lockAmount locked amount that is received
  @param _lockEnd lock end time
  @param _recipient recipient address
  - does NOT reduce the senders lock, that has to be done before
   */
  function _receiveLock(
    uint256 _lockAmount,
    uint256 _lockEnd,
    address _recipient
  ) internal {
    uint256 _id = lockIds[_recipient];
    bool _lockExists = false;
    for (uint256 i = 0; i < _id; i++) {
      if (lockedBalances[_recipient][i].end == _lockEnd) {
        _lockExists = true;
        lockedBalances[_recipient][i].amount += _lockAmount;
        mintedForLock[_recipient][i] += _lockAmount;
        break;
      }
    }
    if (!_lockExists) {
      lockedBalances[_recipient][_id] = LockedBalance(_lockAmount, _lockEnd);
      mintedForLock[_recipient][_id] = _lockAmount;
      lockIds[_recipient] += 1;
    }
  }

  function _getEarliestEnd(address _addr) internal view returns (uint256 _min) {
    uint256 _count = lockEnds[_addr].length();
    if (_count == 0) return 0;
    _min = lockEnds[_addr].at(0);
    for (uint256 i = 1; i < lockEnds[_addr].length(); i++) {
      uint256 _current = lockEnds[_addr].at(i);
      if (_current < _min) {
        _min = _current;
      }
    }
    return _min;
  }

  function _getLatestEnd(address _addr) internal view returns (uint256 _max) {
    uint256 _count = lockEnds[_addr].length();
    if (_count == 0) return 0;
    _max = lockEnds[_addr].at(0);
    for (uint256 i = 1; i < lockEnds[_addr].length(); i++) {
      uint256 _current = lockEnds[_addr].at(i);
      if (_current > _max) {
        _max = _current;
      }
    }
    return _max;
  }

  /* ========== RESTRICTED FUNCTIONS ========== */

  function setMinLockedAmount(uint256 _minLockedAmount) external onlyOwner {
    minLockedAmount = _minLockedAmount;
    emit MinLockedAmountSet(_minLockedAmount);
  }

  function setEarlyWithdrawPenaltyRate(uint256 _earlyWithdrawPenaltyRate)
    external
    onlyOwner
  {
    require(
      _earlyWithdrawPenaltyRate <= MAX_WITHDRAWAL_PENALTY,
      "withdrawal penalty is too high"
    ); // <= 50%
    earlyWithdrawPenaltyRate = _earlyWithdrawPenaltyRate;
    emit EarlyWithdrawPenaltySet(_earlyWithdrawPenaltyRate);
  }

  function setPenaltyCollector(address _addr) external onlyOwner {
    penaltyCollector = _addr;
    emit PenaltyCollectorSet(_addr);
  }

  /* =============== EVENTS ==================== */
  event Deposit(
    address indexed provider,
    uint256 value,
    uint256 locktime,
    uint256 timestamp
  );
  event Withdraw(address indexed provider, uint256 value, uint256 timestamp);
  event PenaltyCollectorSet(address indexed addr);
  event EarlyWithdrawPenaltySet(uint256 indexed penalty);
  event MinLockedAmountSet(uint256 indexed amount);
}
