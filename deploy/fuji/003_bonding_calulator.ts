import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { ethers, waffle } from 'hardhat';

// const { solidity } = 'ethereum-waffle'
// const { expect } = 'chai'
import { DeployFunction } from "hardhat-deploy/types";
import { parseUnits } from 'ethers/lib/utils';
import { expandDecimals } from "../../test/ts/shared/utilities";
import { BigNumber } from "ethers";
import { toNormalizedWeights } from "../resources/normalizedWeights"
import { MONTH } from '../resources/time';
import { fp } from "../resources/numbers"
import { constants } from 'ethers';
import { Console } from 'console';
// import { deploy, deployedAt } from "./contract";


const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts, network } = hre;
	const { deploy, execute, get } = deployments;
	const { deployer, user } = await getNamedAccounts();

	// console.log('network', network);
	console.log('deployer', deployer);
	console.log('2ndParty', user);
	const provider = waffle.provider;
	const balance0ETH = await provider.getBalance(deployer);
	console.log('deployer balante', balance0ETH);


	const deadline = Math.floor(Date.now() / 1000 + 7200);

	const pairreqtT_DAI = '0xcde9f3be9786e91b3b309bcf5f6de69c9ea8739c'

	const reqtAddress = '0x2d90e6d9368b2838a9558B0a609750243C5C4679'

	const sReqtAddress = '0x586462c336822F245AAee1da53fdeB49FBfa825c'

	const stakingAddress = '0xa897b72505C39E2e43523966659E959827ac5C11'

	const bondingCalculator = await deploy('RequiemQBondingCalculator', {
		contract: 'RequiemQBondingCalculator',
		from: deployer,
		log: true,
		args: [reqtAddress],
	});

	const bondingCalculatorContract = await ethers.getContractAt('RequiemQBondingCalculator', bondingCalculator.address);

	const tV4 = await bondingCalculatorContract.getTotalValue(pairreqtT_DAI)

	console.log("indexValue DAI", tV4.toString())

	console.log("deployment of bonding calculator done")


};
export default func;
func.tags = ['bonding-calculator-fuji'];
