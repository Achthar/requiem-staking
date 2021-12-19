// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

import "./interfaces/IBondingCalculator.sol";
import "./interfaces/ERC20/IERC20.sol";
import "./interfaces/IRequiemWeightedPair.sol";
import "./interfaces/IRequiemSwap.sol";
import "./libraries/math/FixedPoint.sol";
import "./libraries/math/SqrtMath.sol";
import "./libraries/math/FullMath.sol";

/**
 * Bonding calculator for weighted pairs
 */
contract RequiemQBondingCalculator is IBondingCalculator {
  using FixedPoint for *;

  address public immutable REQT;

  constructor(address _REQT) {
    require(_REQT != address(0));
    REQT = _REQT;
  }

  /**
  * note for general pairs the price does not necessarily satisfy the conditon
  * that the lp value consists 50% of the one and the other token since the mid
  * price is the quotient of the reserves. That is not necessarily the case for
  * general pairs, therefore, we have to calculate the price separately and apply it
  * to the reserve amount for conversion
  * - calculates the total liquidity value denominated in the provided token
  * - uses the 1bps ouytput reserves for that calculation to avoid slippage to
  *   have a too large impact
  * - the sencond token input argument is ignored when using pools with only 2 tokens
  * @param _pair general pair that has the RequiemSwap interface implemented
  *  - the value is calculated as the geometric average of input and output
  *  - is consistent with the uniswapV2-type case 
 */
  function getTotalValue(address _pair) public view returns (uint256 _value) {
    (uint256 reserve0, uint256 reserve1, ) = IRequiemWeightedPair(_pair).getReserves();
    (address otherToken, uint256 reservesOther) = REQT ==
      IRequiemWeightedPair(_pair).token0()
      ? (IRequiemWeightedPair(_pair).token1(), reserve1)
      : (IRequiemWeightedPair(_pair).token0(), reserve0);

    uint256 decimals = IERC20(otherToken).decimals() +
      IERC20(REQT).decimals() -
      IERC20(_pair).decimals() -
      4;

    uint256 syntReserveREQT = IRequiemSwap(_pair).calculateSwapGivenIn(
      otherToken,
      address(0),
      reservesOther / 10000
    );

    _value =
      SqrtMath.sqrrt((syntReserveREQT * reservesOther) / (10**decimals)) *
      2;
  }

    /**
  * - calculates the value in reqt of the input LP amount provided
  * @param _pair general pair that has the RequiemSwap interface implemented
  * @param amount_ the amount of LP to price in REQT
  *  - is consistent with the uniswapV2-type case 
 */
  function valuation(address _pair, uint256 amount_)
    external
    view
    override
    returns (uint256 _value)
  {
    uint256 totalValue = getTotalValue(_pair);
    uint256 totalSupply = IRequiemWeightedPair(_pair).totalSupply();

    _value = FullMath.mulDivRoundingUp(totalValue, amount_, totalSupply);
  }

  function markdown(address _pair) external view returns (uint256) {
    (uint256 reserve0, uint256 reserve1, ) = IRequiemWeightedPair(_pair).getReserves();

    uint256 reserve;
    if (IRequiemWeightedPair(_pair).token0() == REQT) {
      reserve = reserve1;
    } else {
      reserve = reserve0;
    }
    return
      (reserve * (2 * (10**IERC20(REQT).decimals()))) / (getTotalValue(_pair));
  }
}
