// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

interface IWarmup {
    function retrieve( address staker_, uint amount_ ) external;
}