// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.12;

interface IGovernanceLock {
  struct LockedBalance {
    uint256 amount;
    uint256 end;
  }

  function get_locks(address _addr)
    external
    view
    returns (LockedBalance[] memory _balances);

  function get_minted_for_locks(address _addr)
    external
    view
    returns (uint256[] memory _minted);

  function get_minted_for_lock(address _addr, uint256 _id)
    external
    view
    returns (uint256 _minted);

  function locked_of(address _addr, uint256 _id)
    external
    view
    returns (uint256);

  function locked_end(address _addr, uint256 _id)
    external
    view
    returns (uint256);

  function voting_power_unlock_time(uint256 _value, uint256 _unlock_time)
    external
    view
    returns (uint256);

  function voting_power_locked_days(uint256 _value, uint256 _days)
    external
    view
    returns (uint256);

  function deposit_for_id(
    address _addr,
    uint256 _value,
    uint256 _id
  ) external;

  function create_lock(uint256 _value, uint256 _days) external;

  function increase_amount(uint256 _value, uint256 _id) external;

  function increase_unlock_time(uint256 _days, uint256 _id) external;

  function withdraw(uint256 _id) external;

  function withdrawAll() external;
}
