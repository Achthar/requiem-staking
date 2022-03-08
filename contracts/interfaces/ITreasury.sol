// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

interface ITreasury {
  function deposit(
    uint256 _amount,
    address _token,
    uint256 _profit
  ) external returns (uint256 send_);

  function valueOf(address _token, uint256 _amount)
    external
    view
    returns (uint256 value_);

  function mintRewards(address _recipient, uint256 _amount) external;
}
