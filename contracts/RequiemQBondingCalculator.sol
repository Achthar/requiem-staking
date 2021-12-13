// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

import "./interfaces/IBondingCalculator.sol";
import "./interfaces/ERC20/IERC20.sol";
import "./interfaces/IRequiemPair.sol";
import "./interfaces/IRequiemSwap.sol";
import "./libraries/math/SafeMath.sol";
import "./libraries/math/FixedPoint.sol";

/**
 * Bonding calculator for weighted pairs
 */
contract RequiemQBondingCalculator is IBondingCalculator {
  using FixedPoint for *;
  using SafeMath for uint256;
  using SafeMath for uint112;

  address public immutable REQT;

  constructor(address _REQT) {
    require(_REQT != address(0));
    REQT = _REQT;
  }

  // calculates the liquidity value denominated in the provided token
  // uses the 0.1% inputAmount for that calculation
  function getTotalValue(address _pair) public view returns (uint256 _value) {
    (uint256 reserve0, uint256 reserve1, ) = IRequiemPair(_pair).getReserves();

    _value = address(IRequiemPair(_pair).token0()) != REQT
      ? reserve0 +
        IRequiemSwap(_pair).calculateSwapGivenIn(
          REQT,
          IRequiemPair(_pair).token0(),
          reserve1 / 1000
        ) *
        reserve1
      : reserve1 +
        IRequiemSwap(_pair).calculateSwapGivenIn(
          REQT,
          IRequiemPair(_pair).token1(),
          reserve0 / 1000
        ) *
        reserve0;
  }

  function valuation(address _pair, uint256 amount_)
    external
    view
    override
    returns (uint256 _value)
  {
    uint256 totalValue = getTotalValue(_pair);
    uint256 totalSupply = IRequiemPair(_pair).totalSupply();

    _value = totalValue
      .mul(FixedPoint.fraction(amount_, totalSupply).decode112with18())
      .div(1e18);
  }

  function markdown(address _pair) external view returns (uint256) {
    (uint256 reserve0, uint256 reserve1, ) = IRequiemPair(_pair).getReserves();

    uint256 reserve;
    if (IRequiemPair(_pair).token0() == REQT) {
      reserve = reserve1;
    } else {
      reserve = reserve0;
    }
    return
      reserve.mul(2 * (10**IERC20(REQT).decimals())).div(getTotalValue(_pair));
  }
}
