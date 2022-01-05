// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

interface IWarmup {
    function retrieve( address staker_, uint amount_ ) external;
}