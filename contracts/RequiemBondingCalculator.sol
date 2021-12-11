// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

import "./interfaces/IBondingCalculator.sol";
import "./interfaces/ERC20/IERC20.sol";
import "./interfaces/IRequiemPair.sol";
import "./libraries/math/SafeMath.sol";
import "./libraries/math/FixedPoint.sol";

contract RequiemBondingCalculator is IBondingCalculator {

    using FixedPoint for *;
    using SafeMath for uint;
    using SafeMath for uint112;

    address public immutable REQT;

    constructor( address _REQT ) {
        require( _REQT != address(0) );
        REQT = _REQT;
    }

    function getKValue( address _pair ) public view returns( uint k_ ) {
        uint token0 = IERC20( IRequiemPair( _pair ).token0() ).decimals();
        uint token1 = IERC20( IRequiemPair( _pair ).token1() ).decimals();
        uint decimals = token0.add( token1 ).sub( IERC20( _pair ).decimals() );

        (uint reserve0, uint reserve1, ) = IRequiemPair( _pair ).getReserves();
        k_ = reserve0.mul(reserve1).div( 10 ** decimals );
    }

    function getTotalValue( address _pair ) public view returns ( uint _value ) {
        _value = getKValue( _pair ).sqrrt().mul(2);
    }

    function valuation( address _pair, uint amount_ ) external view override returns ( uint _value ) {
        uint totalValue = getTotalValue( _pair );
        uint totalSupply = IRequiemPair( _pair ).totalSupply();

        _value = totalValue.mul( FixedPoint.fraction( amount_, totalSupply ).decode112with18() ).div( 1e18 );
    }

    function markdown( address _pair ) external view returns ( uint ) {
        ( uint reserve0, uint reserve1, ) = IRequiemPair( _pair ).getReserves();

        uint reserve;
        if ( IRequiemPair( _pair ).token0() == REQT ) {
            reserve = reserve1;
        } else {
            reserve = reserve0;
        }
        return reserve.mul( 2 * ( 10 ** IERC20( REQT ).decimals() ) ).div( getTotalValue( _pair ) );
    }
}
