// SPDX-License-Identifier: MIT

pragma solidity 0.8.11;

import "./interfaces/IBondingCalculator.sol";
import "./interfaces/ERC20/IERC20.sol";
import "./interfaces/IRequiemStableSwap.sol";
import "./interfaces/IRequiemSwap.sol";
import "./libraries/math/FixedPoint.sol";

/**
 * Bonding calculator for weighted pairs
 */
contract RequiemStableBondingCalculator is IBondingCalculator {
  using FixedPoint for *;
  address public immutable QUOTE;

  constructor(address _QUOTE) {
    require(_QUOTE != address(0));
    QUOTE = _QUOTE;
  }

  // calculates the liquidity value denominated in the provided token
  // uses the 0.1% inputAmount for that calculation
  function getTotalValue(address _stablePool) public view returns (uint256 _value) {
    uint256[] memory reserves = IRequiemStableSwap(_stablePool).getTokenBalances();
    uint8 quoteIndex = IRequiemStableSwap(_stablePool).getTokenIndex(QUOTE);
    for (uint8 i = 0; i < reserves.length; i++) {
      if (i != quoteIndex) {
        _value +=
          IRequiemStableSwap(_stablePool).calculateSwap(
            i,
            quoteIndex,
            reserves[i] / 10000
          ) *
          10000;
      }
    }
  }

  function valuation(address _stablePool, uint256 amount_)
    external
    view
    override
    returns (uint256 _value)
  {
    uint256 totalValue = getTotalValue(_stablePool);
    uint256 totalSupply = IRequiemStableSwap(_stablePool).getLpToken().totalSupply();

    _value = totalValue * FixedPoint.fraction(amount_, totalSupply).decode112with18() / 1e18;
  }

  function markdown(address _stablePool) external view returns (uint256) {
    return getTotalValue(_stablePool);
  }
}
