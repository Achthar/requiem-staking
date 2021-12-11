// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

interface IREQTERC20 {
    function burnFrom(address account_, uint256 amount_) external;
}
