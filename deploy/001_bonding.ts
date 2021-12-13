import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { ethers, waffle } from 'hardhat';

// const { solidity } = 'ethereum-waffle'
// const { expect } = 'chai'
import { DeployFunction } from "hardhat-deploy/types";
import { parseUnits } from 'ethers/lib/utils';
import { expandDecimals } from "../test/ts/shared/utilities";
import { BigNumber } from "ethers";
import { toNormalizedWeights } from "./resources/normalizedWeights"
import { MONTH } from './resources/time';
import { fp } from "./resources/numbers"
import { constants } from 'ethers';
import { Console } from 'console';
// import { deploy, deployedAt } from "./contract";


const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts, network } = hre;
	const { deploy, execute, get } = deployments;
	const { localhost, user } = await getNamedAccounts();

	// console.log('network', network);
	console.log('localhost', localhost);
	console.log('2ndParty', user);
	const provider = waffle.provider;
	const balance0ETH = await provider.getBalance(localhost);
	console.log('localhost balante', balance0ETH);

	const REQ = await ethers.getContractFactory('RequiemERC20Token');
	const req = await REQ.deploy();

	const MockBonding = await ethers.getContractFactory('MockBonding');
	const mockBonding = await MockBonding.deploy();

	const MockPair = await ethers.getContractFactory('TestToken1');
	const mockPair = await MockPair.deploy();

	const BondingCalcContract = await ethers.getContractFactory('RequiemBondingCalculator');
	const bondingCalcContract = await BondingCalcContract.deploy();

	const Treasury = await ethers.getContractFactory('MockTreasury');
	const treasury = await Treasury.deploy();

	const BondingFacilitator = await ethers.getContractFactory('BondingFacilitator');
	const bondingFacilitator = await BondingFacilitator.deploy();

	await mockBonding.initialize(bondingFacilitator.address);
	await bondingFacilitator.initialize(bondingCalcContract.address, req.address, mockBonding.address, treasury.address);

	await mockPair.approve(mockBonding.address, '10000000000000000');
	await mockPair.connect(user).approve(mockBonding.address, '10000000000000000');

	await req.transferOwnership(bondingFacilitator.address);



		// let
		// 	Treasury,
		// 	treasury,
		// 	Trader, 
		// 	trader,
		// 	OLY,
		// 	oly,
		// 	DAI,
		// 	dai,
		// 	Sale,
		// 	sale,
		// 	deployer,
		// 	addr1
	
	// 	async () => {
	// 		const [deployer, addr1] = await ethers.getSigners();
	
	// 		const OLY = await ethers.getContractFactory('OlympusERC20TOken');
	// 		const oly = await OLY.deploy();
	
	// 		const DAI = await ethers.getContractFactory('DAI');
	// 		const dai = await DAI.deploy(9);
	
	// 		const Treasury = await ethers.getContractFactory('MockTreasury');
	// 		const treasury = await Treasury.deploy();
	
	// 		const Sale = await ethers.getContractFactory('OlySaleNew');
	// 		const sale = await Sale.deploy();
	
	// 		const Trader = await ethers.getContractFactory('UniV2CompatTrader');
	// 		const trader = await Trader.deploy();
		
	
	
	
	// 		it('should let the owner set the treasury address', async () => {
	// 			await sale.setTreasury(treasury.address);
	// 		});
	
	// 		it('should not let the owner set the treasury if it has already been set', async () => {
	// 			await sale.setTreasury(treasury.address);
	// 			await expect(sale.setTreasury(deployer.address)).to.be.revertedWith('');
	// 		});
	
	// 		it('should NOT let a non owner set the treasury address', async () => {
	// 			await expect(sale.connect(addr1).setTreasury(treasury.address)).to.be.revertedWith('');
	// 		});
	
	// 		it('should NOT let a non owner set the treasury if it has already been set', async () => {
	// 			await sale.setTreasury(treasury.address);
	// 			await expect(sale.connect(addr1).setTreasury(deployer.address)).to.be.revertedWith('');
	// 		});
		
	
	// 	describe('listToken()', () => {
	
	// 		it('should allow to list OLY as token to sell', async () => {
	// 			await sale.listToken(oly.address, dai.address, trader.address, deployer.address, deployer.address);
	// 		});
	
	// 		it('should allow to list DAI as token to sell', async () => {
	// 			await sale.listToken(dai.address, oly.address, trader.address, deployer.address, deployer.address);
	// 		});
	
	// 		it('should NOT allow non owner address to call function', async () => {
	// 			await expect(sale.connect(addr1).listToken(dai.address, oly.address, trader.address, deployer.address, deployer.address))
	// 			.to.be.revertedWith('');
	// 		});
	// 	});
	
	// 	describe('executeEpochSale()', () => {
	// 		it('function call should work', async () => {
	// 			await sale.executeEpochSale( oly.address, 10000000, 1000000000, 1, 2, 3);
	// 		});
			
	// 	});
	// }
	

};
export default func;
func.tags = ['bonding-localhost-q'];
