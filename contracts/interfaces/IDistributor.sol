// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

interface IDistributor {
    function distribute() external returns ( bool );
}