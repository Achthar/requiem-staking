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

	const t1 = await deploy('T1', {
		contract: 'MockERC20',
		from: localhost,
		log: true,
		args: ['T1 Coin', 'T1', 6],
	});

	const t2 = await deploy('T2', {
		contract: 'MockERC20',
		from: localhost,
		log: true,
		args: ['T2 Coin', 'T2', 6],
	});

	const t3 = await deploy('T3', {
		contract: 'MockERC20',
		from: localhost,
		log: true,
		args: ['T3 Coin', 'T3', 18],
	});


	const t4 = await deploy('T4', {
		contract: 'MockERC20',
		from: localhost,
		log: true,
		args: ['T4 Coin', 'T4', 18],
	});

	const weth = await deploy('TestWETH', {
		contract: 'TestWETH',
		from: localhost,
		log: true,
		args: [localhost],
	});

	await execute('T1', { from: localhost, log: true }, 'mint', localhost, parseUnits('10000000', 6));
	await execute('T2', { from: localhost, log: true }, 'mint', localhost, parseUnits('10000000', 6));
	await execute('T3', { from: localhost, log: true }, 'mint', localhost, parseUnits('10000000', 18));
	await execute('T4', { from: localhost, log: true }, 'mint', localhost, parseUnits('10000000', 18));
	// await execute('T1', { from: localhost, log: true }, 'mint', user, parseUnits('10000000', 6) );
	// await execute('T2', { from: localhost, log: true }, 'mint', user, parseUnits('10000000', 6) );
	// await execute('T3', { from: localhost, log: true }, 'mint', user, parseUnits('10000000', 18) );
	// await execute('T4', { from: localhost, log: true }, 'mint', user, parseUnits('10000000', 18) );

	// const wethAddress = '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'//await getWeth(hre);

	// const weth = await ethers.getContractAt("IWETH", wethAddress);

	// const wethContract = await weth.attach(
	// 	wethAddress
	//   );
	// const vaultAuthorization = await deploy("VaultAuthorization", {
	// 	contract: "VaultAuthorization",
	// 	skipIfAlreadyDeployed: true,
	// 	from: localhost,
	// 	args: [
	// 		authorizer.address,	// IAuthorizer authorizer,
	// 	],
	// 	log: true,
	// });

	// await execute('T1', { from: user }, 'approve', router.address, ethers.constants.MaxInt256);
	// await execute('T2', { from: user }, 'approve', router.address, ethers.constants.MaxInt256);
	// await execute('T3', { from: user }, 'approve', router.address, ethers.constants.MaxInt256);
	// await execute('T4', { from: user }, 'approve', router.address, ethers.constants.MaxInt256);

	console.log("--- deploy formulas ---")
	const formula = await deploy("RequiemFormula", {
		contract: "RequiemFormula",
		skipIfAlreadyDeployed: true,
		from: localhost,
		args: [],
		log: true,
	});

	const factory = await deploy("RequiemFactory", {
		contract: "RequiemFactory",
		skipIfAlreadyDeployed: true,
		from: localhost,
		args: [localhost, formula.address],
		log: true,
	});

	const pairManager = await deploy("RequiemQPairManager", {
		contract: "RequiemQPairManager",
		skipIfAlreadyDeployed: true,
		from: localhost,
		args: [factory.address, weth.address],
		log: true,
	});

	const router = await deploy("RequiemQRouter", {
		contract: "RequiemQRouter",
		skipIfAlreadyDeployed: true,
		from: localhost,
		args: [factory.address, weth.address],
		log: true,
	});

	await execute('T1', { from: localhost }, 'approve', router.address, ethers.constants.MaxInt256);
	await execute('T2', { from: localhost }, 'approve', router.address, ethers.constants.MaxInt256);
	await execute('T3', { from: localhost }, 'approve', router.address, ethers.constants.MaxInt256);
	await execute('T4', { from: localhost }, 'approve', router.address, ethers.constants.MaxInt256);
	await execute('T1', { from: localhost }, 'approve', pairManager.address, ethers.constants.MaxInt256);
	await execute('T2', { from: localhost }, 'approve', pairManager.address, ethers.constants.MaxInt256);
	await execute('T3', { from: localhost }, 'approve', pairManager.address, ethers.constants.MaxInt256);
	await execute('T4', { from: localhost }, 'approve', pairManager.address, ethers.constants.MaxInt256);

	await execute('TestWETH', { from: localhost }, 'approve', router.address, ethers.constants.MaxInt256);



	console.log("--- deploy stables --- ")

	const usdc = await deploy('USDC', {
		contract: 'MockERC20',
		from: localhost,
		log: true,
		args: ['USD Coin', 'USDC', 6],
	});

	const usdt = await deploy('USDT', {
		contract: 'MockERC20',
		from: localhost,
		log: true,
		args: ['Tether USD', 'USDT', 6],
	});

	const dai = await deploy('DAI', {
		contract: 'MockERC20',
		from: localhost,
		log: true,
		args: ['DAI Stablecoin', 'DAI', 18],
	});


	const tusd = await deploy('TUSD', {
		contract: 'MockERC20',
		from: localhost,
		log: true,
		args: ['True USD', 'TUSD', 18],
	});

	await execute('USDC', { from: localhost, log: true }, 'mint', localhost, parseUnits('100000000000', 6));
	await execute('USDT', { from: localhost, log: true }, 'mint', localhost, parseUnits('100000000000', 6));
	await execute('DAI', { from: localhost, log: true }, 'mint', localhost, parseUnits('100000000000', 18));
	await execute('TUSD', { from: localhost, log: true }, 'mint', localhost, parseUnits('100000000000', 18));

	await execute('USDC', { from: localhost }, 'approve', router.address, ethers.constants.MaxInt256);
	await execute('USDT', { from: localhost }, 'approve', router.address, ethers.constants.MaxInt256);
	await execute('DAI', { from: localhost }, 'approve', router.address, ethers.constants.MaxInt256);
	await execute('TUSD', { from: localhost }, 'approve', router.address, ethers.constants.MaxInt256);


	const deadline = Math.floor(Date.now() / 1000 + 7200);



	await execute('USDC', { from: localhost }, 'approve', pairManager.address, ethers.constants.MaxInt256);
	await execute('USDT', { from: localhost }, 'approve', pairManager.address, ethers.constants.MaxInt256);
	await execute('DAI', { from: localhost }, 'approve', pairManager.address, ethers.constants.MaxInt256);
	await execute('TUSD', { from: localhost }, 'approve', pairManager.address, ethers.constants.MaxInt256);


	await execute('TestWETH', { from: localhost }, 'approve', pairManager.address, ethers.constants.MaxInt256);



	const factoryContract = await ethers.getContractAt('RequiemFactory', factory.address);
	console.log("--- create t1 t2 pair ----")
	await factoryContract.createPair(t1.address, t2.address, ethers.BigNumber.from(50), ethers.BigNumber.from(10))
	const pair = await factoryContract.getPair(t1.address, t2.address, ethers.BigNumber.from(50), ethers.BigNumber.from(10))
	console.log("--- create t2 usdt pair ----")
	await factoryContract.createPair(usdt.address, t2.address, ethers.BigNumber.from(50), ethers.BigNumber.from(50))
	const pair2 = await factoryContract.getPair(usdt.address, t2.address, ethers.BigNumber.from(50), ethers.BigNumber.from(50))

	console.log("pair:", pair, pair2)
	// const routerContract = await ethers.getContract('RequiemRouter');


	const liq = await execute('RequiemQPairManager', { from: localhost }, 'addLiquidity', pair, t1.address, t2.address,
		parseUnits('10003245', 18),
		parseUnits('13002330', 18),
		parseUnits('10003245', 18),
		parseUnits('13002330', 18),
		localhost,
		deadline);

	const liq2 = await execute('RequiemQPairManager', { from: localhost }, 'addLiquidity', pair2, t2.address, usdt.address,
		BigNumber.from('1200000000'),
		BigNumber.from('1000000000'),
		BigNumber.from('1200000000'),
		BigNumber.from('1000000000'),
		localhost,
		deadline);



	console.log("--- create WETH t2 pair ----")
	await factoryContract.createPair(weth.address, t2.address, ethers.BigNumber.from(48), ethers.BigNumber.from(10))
	const pairWeth = await factoryContract.getPair(weth.address, t2.address, ethers.BigNumber.from(48), ethers.BigNumber.from(10))
	console.log("deposit eth")
	await execute('TestWETH', { from: localhost, value: BigNumber.from('10000000000') }, 'deposit')
	console.log("addWETH Liquidity")


	const liqWeth = await execute('RequiemQPairManager', { from: localhost }, 'addLiquidity', pairWeth, weth.address, t2.address,
		BigNumber.from('100000000'),
		BigNumber.from('1000000000'),
		BigNumber.from('100000000'),
		BigNumber.from('1000000000'),
		localhost,
		deadline);
	console.log("LP received weth t2", 'liqWeth')

	const pairWethContract = await ethers.getContractAt('RequiemPair', pairWeth);

	console.log("calc swap test")
	const inT2 = await pairWethContract.calculateSwapGivenOut(weth.address, weth.address, 4321234)

	const y = await pairWethContract.calculateSwapGivenIn(weth.address, weth.address, inT2)
	console.log("amountIn", inT2.toString(), "outs", 4321234, y.toString())


	// const liqWeth32 = await execute('RequiemQPairManager', { from: localhost }, 'removeLiquidity', pairWeth, weth.address, t2.address,
	// 	BigNumber.from(1000),
	// 	BigNumber.from('1000000'),
	// 	BigNumber.from('10000000'),
	// 	localhost,
	// 	deadline);
	// console.log("LP received weth t2", liqWeth32)
	const REQ = await deploy('RequiemERC20Token', {
		contract: 'RequiemERC20Token',
		from: localhost,
		log: true,
		args: [],
	});

	await factoryContract.createPair(weth.address, REQ.address, ethers.BigNumber.from(20), ethers.BigNumber.from(25))

	const pairWETH_REQ = await factoryContract.getPair(weth.address, REQ.address, ethers.BigNumber.from(20), ethers.BigNumber.from(25))
	console.log("deposit eth", pairWETH_REQ)
	await execute('TestWETH', { from: localhost, value: BigNumber.from('10000000000000') }, 'deposit')
	console.log("addWETH Liquidity")

	await execute('RequiemERC20Token', { from: localhost }, 'approve', pairManager.address, ethers.constants.MaxInt256);


	await execute('TestWETH', { from: localhost }, 'approve', pairManager.address, ethers.constants.MaxInt256);

	const wethContract = await ethers.getContractAt('TestWETH', weth.address);
	const reqtContract = await ethers.getContractAt('RequiemERC20Token', REQ.address);

	await wethContract.approve(pairManager.address, ethers.constants.MaxInt256)
	await reqtContract.approve(pairManager.address, ethers.constants.MaxInt256)

	await reqtContract.approve(router.address, ethers.constants.MaxInt256)

	await reqtContract.setVault(localhost)
	await reqtContract.mint(localhost, '1000000000098298432432')

	const allow = await reqtContract.allowance(localhost, pairManager.address)
	const allow1 = await wethContract.allowance(localhost, pairManager.address)
	console.log("approved", allow.toString(),allow1.toString())

	const liqWethREQT = await execute('RequiemQPairManager', { from: localhost }, 'addLiquidity', pairWETH_REQ, weth.address, REQ.address,
		BigNumber.from('8000000000000'),
		BigNumber.from('2000000000000'),
		BigNumber.from('8000000000000'),
		BigNumber.from('2000000000000'),
		localhost,
		'99999999999999999999');
	console.log("LP received weth req", 'liqWeth')

	await ethers.getContractFactory('RequiemERC20Token');
	// const req = await REQ.deploy();

	const MockBonding = await ethers.getContractFactory('RequiemWeightedBondingCalculator');
	const mockBonding = await MockBonding.deploy(REQ.address);

	const bondingCalculator = await deploy('RequiemWeightedBondingCalculator', {
		contract: 'RequiemWeightedBondingCalculator',
		from: localhost,
		log: true,
		args: [REQ.address],
	});

	const bondingCalculatorContract = await ethers.getContractAt('RequiemWeightedBondingCalculator', bondingCalculator.address);

	const tV = await bondingCalculatorContract.getTotalValue(pairWeth)

	console.log("indexValue", tV.toString())

	const tV2 = await bondingCalculatorContract.getTotalValue(pairWETH_REQ)

	console.log("indexValue2", tV2.toString())

	const pools8 = [pairWETH_REQ]
	const tokens8 = [REQ.address, weth.address]
	await execute('RequiemQRouter', { from: localhost }, 'onSwapTokensForExactTokens',
		pools8,
		tokens8,
		BigNumber.from('3232112'), // out
		BigNumber.from('99999999999999999999999'), //in max
		localhost,// address to,
		deadline,// uint256 deadline
	);
	console.log("trade done")

	const tV3 = await bondingCalculatorContract.getTotalValue(pairWETH_REQ)

	console.log("indexValue3", tV3.toString())

	// const MockPair = await ethers.getContractFactory('TestToken1');
	// const mockPair = await MockPair.deploy();

	// const BondingCalcContract = await ethers.getContractFactory('RequiemBondingCalculator');
	// const bondingCalcContract = await BondingCalcContract.deploy();

	// const Treasury = await ethers.getContractFactory('MockTreasury');
	// const treasury = await Treasury.deploy();

	// const BondingFacilitator = await ethers.getContractFactory('BondingFacilitator');
	// const bondingFacilitator = await BondingFacilitator.deploy();

	// await mockBonding.initialize(bondingFacilitator.address);
	// await bondingFacilitator.initialize(bondingCalcContract.address, req.address, mockBonding.address, treasury.address);

	// await mockPair.approve(mockBonding.address, '10000000000000000');
	// await mockPair.connect(user).approve(mockBonding.address, '10000000000000000');

	// await req.transferOwnership(bondingFacilitator.address);



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
