// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

interface IBondingCalculator {
  function valuation( address pair_, uint amount_ ) external view returns ( uint _value );
}
