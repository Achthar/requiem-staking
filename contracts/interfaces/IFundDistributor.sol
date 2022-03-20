// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

interface IFundDistributor {
  function distributeTo(address _receiver, uint256 _amount) external;
}
