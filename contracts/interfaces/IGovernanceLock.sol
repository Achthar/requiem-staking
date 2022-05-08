// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface IGovernanceLock {
  struct LockedBalance {
    uint256 amount;
    uint256 end;
    uint256 minted;
    uint256 multiplier;
  }

  function get_locks(address _addr)
    external
    view
    returns (LockedBalance[] memory _balances);

  function voting_power_unlock_time(uint256 _value, uint256 _unlock_time)
    external
    view
    returns (uint256);

  function voting_power_locked_days(uint256 _value, uint256 _days)
    external
    view
    returns (uint256);

  function create_lock(
    uint256 _value,
    uint256 _days,
    address _recipient
  ) external;

  function lock_exists(address _addr, uint256 _end)
    external
    view
    returns (bool);

  function increase_position(
    uint256 _value,
    uint256 _end,
    address _recipient
  ) external;

  function increase_time_to_maturity(
    uint256 _amount,
    uint256 _end,
    uint256 _newEnd
  ) external;

  function withdraw(uint256 _end, uint256 _amount) external;

  function withdrawAll() external;
}
