// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import "./interfaces/IStaking.sol";
import "./interfaces/ERC20/IERC20.sol";

contract StakingHelper {

    address public immutable staking;
    address public immutable REQT;

    constructor ( address _staking, address _REQT ) {
        require( _staking != address(0) );
        staking = _staking;
        require( _REQT != address(0) );
        REQT = _REQT;
    }

    function stake( uint _amount ) external {
        IERC20( REQT ).transferFrom( msg.sender, address(this), _amount );
        IERC20( REQT ).approve( staking, _amount );
        IStaking( staking ).stake( _amount, msg.sender );
        IStaking( staking ).claim( msg.sender );
    }
}