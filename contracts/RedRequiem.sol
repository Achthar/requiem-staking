// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "./libraries/ERC20Burnable.sol";
import "./libraries/SafeERC20.sol";
import "./libraries/Ownable.sol";
import "./libraries/EnumerableSet.sol";
import "./interfaces/IGovernanceLock.sol";

using SafeERC20 for IERC20 global;
using EnumerableSet for EnumerableSet.UintSet global;

contract RedRequiem is ERC20Burnable, IGovernanceLock, Ownable {
  // flags
  uint256 private _unlocked;

  // constants
  uint256 public constant REF_DATE = 1640991600; // 20220101 00:00
  
  uint256 public constant MAXDAYS = 3 * 365;
  uint256 public constant YEAR = 365 * 1 days;
  uint256 public constant MAXTIME = MAXDAYS * 1 days; // 3 years
  uint256 public constant MINTIME = 60 * 60; // 1 hour
  uint256 public constant MAX_WITHDRAWAL_PENALTY = 50000; // 50%
  uint256 public constant PRECISION = 100000; // 5 decimals

  address public lockedToken;
  address public penaltyCollector;
  uint256 public minLockedAmount;
  uint256 public earlyWithdrawPenaltyRate;

  // user address -> end times -> locked position
  mapping(address => mapping(uint256 => LockedBalance)) public lockedPositions;

  // tracks the maturities for locks per user
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
  ) ERC20(_name, _symbol, 18) {
    lockedToken = _lockedToken;
    minLockedAmount = _minLockedAmount;
    earlyWithdrawPenaltyRate = 30000; // 30%
    _unlocked = 1;
  }

  /* ========== PUBLIC FUNCTIONS ========== */

  /**
   * Gets lock data for user
   * @param _addr user to get data of
   */
  function get_locks(address _addr)
    external
    view
    override
    returns (LockedBalance[] memory _balances)
  {
    uint256 length = lockEnds[_addr].length();
    _balances = new LockedBalance[](length);
    for (uint256 i = 0; i < length; i++) {
      uint256 _end = lockEnds[_addr].at(i);
      _balances[i] = lockedPositions[_addr][_end];
    }
  }

  function lock_exists(address _addr, uint256 _end) public view override returns(bool){
    return lockEnds[_addr].contains(_end);
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

  function get_share(address _addr) public view returns (uint256 _vote) {
    uint256 _length = lockEnds[_addr].length();
    _vote = 0;
    for (uint256 i = 0; i < _length; i++) {
      uint256 _end = lockEnds[_addr].at(i);
      _vote += lockedPositions[_addr][_end].amount * lockedPositions[_addr][_end].multiplier;
    }

    _vote /= 1e18;
  }

  function get_voting_power(address _addr, uint256 _amount)
    public
    view
    returns (uint256 _votingPower)
  {
    uint256 _length = lockEnds[_addr].length();
    uint256 _locked = 0;
    _votingPower = 0;
    for (uint256 i = 0; i < _length; i++) {
      uint256 _end = lockEnds[_addr].at(i);
      LockedBalance memory _lock = lockedPositions[_addr][_end];
      _votingPower += (_lock.minted * _lock.multiplier) / 1e18;
      _locked += _lock.amount;
    }

    // we pick the minimum of amount and locked, otherwise
    _votingPower =
      (_votingPower * _amount > _locked ? _locked : _amount) /
      _locked /
      1e18;
  }

  function get_amount_minted(uint256 _value, uint256 _unlock_time)
    public
    pure
    returns (uint256)
  {
    return (_value * (_unlock_time - REF_DATE)) / MAXTIME;
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

  /**
   * Create new lock with defined maturity time
   * - That shall help standardizing these positions
   * @param _value amount to lock
   * @param _end expiry timestamp
   */
  function create_lock(uint256 _value, uint256 _end, address _recipient) external override {
    uint256 _now = block.timestamp;
    uint256 _duration = _end - _now;
    require(_value >= minLockedAmount, "less than min amount");
    require(_duration >= MINTIME, "Shorter than MINTIME");
    require(_duration <= MAXTIME, "Longer than MAXTIME");
    _create_lock(_recipient, _value, _end);
  }

  /**
   * Increases the maturity of _amount from _end to _newEnd
   * @param _amount amount to change the maturity for
   * @param _end maturity
   * @param _newEnd new maturity
   */
  function increase_time_to_maturity(
    uint256 _amount,
    uint256 _end,
    uint256 _newEnd
  ) external {
    uint256 _now = block.timestamp;
    uint256 _duration = _newEnd - _now;
    require(_duration >= MINTIME, "Voting lock can MINTIME min");
    require(_duration <= MAXTIME, "Voting lock can MAXTIME max");
    _extend_maturity(_msgSender(), _amount, _end, _newEnd);
  }

  /**
   * Function to increase position for given _end
   * @param _value increase position for position in _end by value
   * @param _end maturity of the position to increase
   */
  function increase_position(uint256 _value,  uint256 _end, address _recipient) external {
    require(_value >= minLockedAmount, "less than min amount");
    _increase_position(_recipient, _value, _end);
  }

  // withdraws from all locks whenever possible
  function withdrawAll() external override lock {
    uint256 _endsLength = lockEnds[_msgSender()].length();
    for (uint256 i = 0; i < _endsLength; i++) {
      uint256 _end = lockEnds[_msgSender()].at(i);
      LockedBalance storage _lock = lockedPositions[_msgSender()][_end];
      uint256 _locked = _lock.amount;
      uint256 _now = block.timestamp;
      if (_locked > 0 && _now >= _end) {
        uint256 _minted = _lock.minted;

        // burn minted amount
        _burn(_msgSender(), _minted);

        // delete lock entry
        delete lockedPositions[_msgSender()][_end];

        // delete _end entry
        lockEnds[_msgSender()].remove(_end);

        IERC20(lockedToken).safeTransfer(_msgSender(), _locked);

        emit Withdraw(_msgSender(), _locked, _now);
      }
    }
  }

  function withdraw(uint256 _end, uint256 _amount) external override lock {
    LockedBalance memory _lock = lockedPositions[_msgSender()][_end];
    uint256 _now = block.timestamp;
    uint256 _locked = _lock.amount;
    require(_locked > 0, "Nothing to withdraw");
    require(_now >= _end, "The lock didn't expire");
    if (_amount >= _locked) {
      uint256 _minted = _lock.minted;

      // burn minted amount
      _burn(_msgSender(), _minted);

      // delete lock entry
      delete lockedPositions[_msgSender()][_end];

      // delete _end entry
      lockEnds[_msgSender()].remove(_end);
    } else {
      uint256 _minted = get_amount_minted(_amount, _end);
      _lock.amount -= _amount;
      _lock.minted -= _minted;
      _burn(_msgSender(), _minted);
    }

    IERC20(lockedToken).safeTransfer(_msgSender(), _amount);

    emit Withdraw(_msgSender(), _amount, _now);
  }

  // This will charge PENALTY if lock is not expired yet
  function emergencyWithdraw(uint256 _end) external lock {
    LockedBalance memory _lock = lockedPositions[_msgSender()][_end];
    uint256 _amount = _lock.amount;
    uint256 _now = block.timestamp;
    require(_amount > 0, "Nothing to withdraw");
    if (_now < _end) {
      uint256 _fee = (_amount * earlyWithdrawPenaltyRate) / PRECISION;
      _penalize(_fee);
      _amount = _amount - _fee;
    }

    // burn amount
    _burn(_msgSender(), _lock.minted);

    // remove lock
    delete lockedPositions[_msgSender()][_end];

    // delete _end entry
    lockEnds[_msgSender()].remove(_end);

    IERC20(lockedToken).safeTransfer(_msgSender(), _amount);

    emit Withdraw(_msgSender(), _amount, _now);
  }

  // This will charge PENALTY if lock is not expired yet
  function emergencyWithdrawAll() external lock {
    uint256 _endsLength = lockEnds[_msgSender()].length();
    uint256 _now = block.timestamp;

    for (uint256 i = 0; i < _endsLength; i++) {
      uint256 _end = lockEnds[_msgSender()].at(i);
      LockedBalance memory _lock = lockedPositions[_msgSender()][_end];
      uint256 _locked = _lock.amount;
      if (_locked > 0) {
        if (_now < _end) {
          uint256 _fee = (_locked * earlyWithdrawPenaltyRate) / PRECISION;
          _penalize(_fee);
         _locked -= _fee;
        }

        _burn(_msgSender(), _lock.minted);

        // delete lock
        delete lockedPositions[_msgSender()][_end];

        // delete _end entry
        lockEnds[_msgSender()].remove(_end);

        IERC20(lockedToken).safeTransfer(_msgSender(), _locked);

        emit Withdraw(_msgSender(), _locked, _now);
      }
    }
  }

  function transferLockShare(
    uint256 _amount,
    uint256 _end,
    address _to
  ) public {

    uint256 _toSend = get_amount_minted(_amount, _end);

    // send the respective amount of this token
    IERC20(address(this)).safeTransferFrom(
      _msgSender(),
      address(this),
      _toSend
    );

    // adjust locked balances
    _transferLockShare(_msgSender(), _amount, _toSend, _end, _to);
  }

  function transferFullLock(uint256 _end, address _to) public {
    // for a full transfer, the full minted amount has to be paid
    uint256 _minted = lockedPositions[_msgSender()][_end].minted;

    // send the underying amount of this token
    IERC20(address(this)).safeTransferFrom(_msgSender(), _to, _minted);

    _transferFullLock(_msgSender(), _to, _end);
  }

  /* ========== INTERNAL FUNCTIONS ========== */

  /**
  creates lock
   */
  function _create_lock(
    address _addr,
    uint256 _value,
    uint256 _end
  ) internal lock {
    require(!lockEnds[_addr].contains(_end), "position exists");
    uint256 _vp = get_amount_minted(_value, _end);
    require(_vp > 0, "No benefit to lock");

    IERC20(lockedToken).safeTransferFrom(_msgSender(), address(this), _value);
    _mint(_addr, _vp);

    lockEnds[_addr].add(_end);
    lockedPositions[_addr][_end] = LockedBalance({
      amount:_value,
      end:_end,
      multiplier: _calculate_multiplier(block.timestamp, _end),
      minted: _vp

    });
  }

  /**
   * Extends the maturity
   * Moves also the minted amounts
   * @param _addr user
   * @param _amount Amount to move from old end to end
   * @param _end end of locked amount to move
   * @param _newEnd target end
   */
  function _extend_maturity(
    address _addr,
    uint256 _amount,
    uint256 _end,
    uint256 _newEnd
  ) internal lock {
    uint256 _vp = get_amount_minted(_amount, _end);
    uint256 _vpNew = get_amount_minted(_amount, _newEnd);

    LockedBalance memory _lock = lockedPositions[_addr][_end];
    uint256 _oldLocked = _lock.amount;
    uint256 _now = block.timestamp;
    // adjust multipliers
    if (lockEnds[_addr].contains(_newEnd)) {

      LockedBalance memory _lockNew = lockedPositions[_addr][_newEnd];

      // position exists
     _lockNew.multiplier = _calculate_adjusted_multiplier_position(
        _amount,
        _now,
        _newEnd,
        _lockNew.amount,
        _lockNew.multiplier
      );
      // increase on new
      _lockNew.amount += _amount;
      _lockNew.minted += _vpNew;

      lockedPositions[_addr][_newEnd] = _lockNew;
    } else {
      // position does not exist

      // add maturity entry
      lockEnds[_addr].add(_newEnd);

      // add lock
      lockedPositions[_addr][_newEnd] = LockedBalance({
        amount:_amount,
        minted: _vpNew,
        multiplier: _calculate_adjusted_multiplier_maturity(
        _now,
        _end,
        _newEnd,
        _lock.multiplier
      ),
      end:_newEnd
      });
    }

    if (_amount == _oldLocked) {
      // delete from old
      delete lockedPositions[_addr][_end];
      lockEnds[_addr].remove(_end);
    } else {
      // decrease from old
      _lock.amount -= _amount;
      _lock.minted -= _vp;

      lockedPositions[_addr][_end] = _lock;
    }

    uint256 _vpDiff = _vpNew - _vp;
    require(_vpDiff > 0, "No benefit to lock");
    _mint(_addr, _vpDiff);

    emit Deposit(_addr, _amount, _newEnd, _now);
  }

  /**
   * Function to increase position for given _end
   * @param _addr user
   * @param _value increase position for position in _end by value
   * @param _end maturity of the position to increase
   */
  function _increase_position(
    address _addr,
    uint256 _value,
    uint256 _end
  ) internal lock {
    // calculate amount to mint
    uint256 _vp = get_amount_minted(_value, _end); // voting_power_unlock_time(_value, _end);

    LockedBalance memory _lock = lockedPositions[_msgSender()][_end];
    // adjust multiplier
    uint256 _now = block.timestamp;
   _lock.multiplier = _calculate_adjusted_multiplier_position(
      _value,
      _now,
      _end,
      _lock.amount,
      _lock.multiplier
    );

    // increase locked amount
    _lock.amount += _value;

    require(_vp > 0, "No benefit to lock");

    IERC20(lockedToken).safeTransferFrom(_msgSender(), address(this), _value);

    _mint(_addr, _vp);
    _lock.minted += _vp;

    lockedPositions[_msgSender()][_end] = _lock;

    emit Deposit(_addr, _value, _end, _now);
  }

  function _penalize(uint256 _amount) internal {
    if (penaltyCollector != address(0)) {
      // send to collector if `penaltyCollector` set
      IERC20(lockedToken).safeTransfer(penaltyCollector, _amount);
    } else {
      ERC20Burnable(lockedToken).burn(_amount);
    }
  }

  /**
  * @dev Function that transfers the share of the underlying lock amount to the recipient.
  @param _amount amount of locked token to transfer
  @param _end id of lock to transfer
  @param _to recipient address
  */
  function _transferLockShare(
    address _from,
    uint256 _amount,
    uint256 _vp,
    uint256 _end,
    address _to
  ) internal {

    LockedBalance memory _lock = lockedPositions[_from][_end];

    require(_amount <= _lock.amount, "Insufficient funds in Lock");

    // adjust lock before transfer
    _lock.amount = _amount;
    _lock.minted = _vp;

    // log the amount for the recipient
    _receiveLock(_lock, _to);

    // reduce this users lock amount
    lockedPositions[_from][_end].amount -= _amount;

    // reduce related voting power
    lockedPositions[_from][_end].minted -= _vp;

  }

  /**
  * @dev Function that transfers the full lock of the user to the recipient.
  @param _end id of lock to transfer
  @param _to recipient address
  */
  function _transferFullLock(
    address _from,
    address _to,
    uint256 _end
  ) internal {

    LockedBalance memory _lock = lockedPositions[_from][_end];

    // log the amount for the recipient
    _receiveLock(
      _lock,
      _to
    );

    // reduce this users lock data
    delete lockedPositions[_from][_end];
    // delete maturity entry
    lockEnds[_from].remove(_end);
  }

  /**
  Function that logs the recipients lock
  All locks will searched and once a match is found the lock amount is added
  @param _lock locked amount that is received
  @param _recipient recipient address
  - does NOT reduce the senders lock, that has to be done before
   */
  function _receiveLock(
    LockedBalance memory _lock,
    address _recipient
  ) internal {
    bool _lockExists = lockEnds[_recipient].contains(_lock.end);
    uint256 _now = block.timestamp;
    if (_lockExists) {
      LockedBalance memory _existingLock = lockedPositions[_recipient][_lock.end];
      _existingLock.minted += _lock.minted;
      _lock.multiplier = _calculate_adjusted_multiplier_position(
        _lock.amount,
        _now,
        _lock.end,
        _existingLock.amount,
        _existingLock.amount
      );
      _existingLock.amount += _lock.amount;

      lockedPositions[_recipient][_lock.end] = _existingLock;

    } else {
      // assign lock
      lockedPositions[_recipient][_lock.end] = _lock;
      lockedPositions[_recipient][_lock.end].multiplier = _calculate_multiplier(_now, _lock.end);
      // add maturity entry
      lockEnds[_recipient].add(_lock.end);
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

  function _calculate_multiplier(uint256 _ref, uint256 _end)
    internal
    pure
    returns (uint256)
  {
    return 1e18 + ((_end - _ref) * 1e18) / YEAR;
  }

  function _calculate_adjusted_multiplier_position(
    uint256 _amount,
    uint256 _ref,
    uint256 _end,
    uint256 _position,
    uint256 _oldMultiplier
  ) internal pure returns (uint256) {
    return
      (_position *
        _oldMultiplier +
        _amount *
        _calculate_multiplier(_ref, _end)) /
      (_amount + _position);
  }

  function _calculate_adjusted_multiplier_maturity(
    uint256 _ref,
    uint256 _endOld,
    uint256 _end,
    uint256 _oldMultiplier
  ) internal pure returns (uint256) {
    return
      (_endOld *
        _oldMultiplier +
        (_end - _endOld) *
        _calculate_multiplier(_ref, _end)) /
      _end;
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
