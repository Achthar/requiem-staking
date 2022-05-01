// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

interface IRewardDistributor {
  function distributeTo(address _receiver, uint256 _amount, uint256 _maturity) external;
}
