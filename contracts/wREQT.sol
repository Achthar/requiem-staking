// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "./libraries/SafeERC20.sol";
import "./libraries/ERC20.sol";
import "./interfaces/IStaking.sol";

contract wREQT is ERC20 {
  using SafeERC20 for ERC20;

  address public immutable staking;
  address public immutable REQT;
  address public immutable sREQT;

  constructor(
    address _staking,
    address _REQT,
    address _sREQT
  ) ERC20("Wrapped sREQT", "wsREQT", 18) {
    require(_staking != address(0));
    staking = _staking;
    require(_REQT != address(0));
    REQT = _REQT;
    require(_sREQT != address(0));
    sREQT = _sREQT;
  }

  /**
        @notice stakes REQT and wraps sREQT
        @param _amount uint
        @return uint
     */
  function wrapFromREQT(uint256 _amount) external returns (uint256) {
    IERC20(REQT).transferFrom(msg.sender, address(this), _amount);

    IERC20(REQT).approve(staking, _amount); // stake REQT for sREQT
    IStaking(staking).stake(_amount, address(this));

    uint256 value = wREQTValue(_amount);
    _mint(msg.sender, value);
    return value;
  }

  /**
        @notice unwrap sREQT and unstake REQT
        @param _amount uint
        @return uint
     */
  function unwrapToREQT(uint256 _amount) external returns (uint256) {
    _burn(msg.sender, _amount);

    uint256 value = sREQTValue(_amount);
    IERC20(sREQT).approve(staking, value); // unstake sREQT for REQT
    IStaking(staking).unstake(value, address(this));

    IERC20(REQT).transfer(msg.sender, value);
    return value;
  }

  /**
        @notice wrap sREQT
        @param _amount uint
        @return uint
     */
  function wrapFromsREQT(uint256 _amount) external returns (uint256) {
    IERC20(sREQT).transferFrom(msg.sender, address(this), _amount);

    uint256 value = wREQTValue(_amount);
    _mint(msg.sender, value);
    return value;
  }

  /**
        @notice unwrap sREQT
        @param _amount uint
        @return uint
     */
  function unwrapTosREQT(uint256 _amount) external returns (uint256) {
    _burn(msg.sender, _amount);

    uint256 value = sREQTValue(_amount);
    IERC20(sREQT).transfer(msg.sender, value);
    return value;
  }

  /**
        @notice converts wREQT amount to sREQT
        @param _amount uint
        @return uint
     */
  function sREQTValue(uint256 _amount) public view returns (uint256) {
    return (_amount * IStaking(staking).index()) / (10**decimals());
  }

  /**
        @notice converts sREQT amount to wREQT
        @param _amount uint
        @return uint
     */
  function wREQTValue(uint256 _amount) public view returns (uint256) {
    return (_amount * 10**decimals()) / IStaking(staking).index();
  }
}
