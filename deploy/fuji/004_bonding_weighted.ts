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

	const factoryAddress = ''
	const pairreqtT_DAI = '0x2B48BB44bCC53ae484b711287aA538D434f14e8A'
	const pairManagerAddress = ''

	const usdc = await ethers.getContractAt('ERC20', '0xca9ec7085ed564154a9233e1e7d8fef460438eea');
	const usdt = await ethers.getContractAt('ERC20', '0xffb3ed4960cac85372e6838fbc9ce47bcf2d073e');
	const dai = await ethers.getContractAt('ERC20', '0xaea51e4fee50a980928b4353e852797b54deacd8');
	const tusd = await ethers.getContractAt('ERC20', '0xccf7ed44c5a0f3cb5c9a9b9f765f8d836fb93ba1');
	const wethAddress = '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'

	const factoryContract = await ethers.getContractAt('RequiemFactory', factoryAddress);

	const reqt = await deploy('RequiemERC20Token', {
		contract: 'RequiemERC20Token',
		from: deployer,
		log: true,
		args: [],
	});

	const wethContract = await ethers.getContractAt('TestWETH', wethAddress);
	const reqtContract = await ethers.getContractAt('RequiemERC20Token', reqt.address);

	await wethContract.approve(pairManagerAddress, ethers.constants.MaxInt256)
	await reqtContract.approve(pairManagerAddress, ethers.constants.MaxInt256)


	await reqtContract.setMinter(deployer)
	await reqtContract.mint(deployer, '1000000000000000000000000') // 1m tokens

	// const req = await reqt.deploy();

	// const MockBonding = await ethers.getContractFactory('RequiemQBondingCalculator');
	// const mockBonding = await MockBonding.deploy(reqt.address);

	const bondingCalculator = await deploy('RequiemQBondingCalculator', {
		contract: 'RequiemQBondingCalculator',
		from: deployer,
		log: true,
		args: [reqt.address],
	});


	const sreqt = await deploy('sRequiem', {
		contract: 'sRequiem',
		from: deployer,
		log: true,
		args: [],
	});

	const staking = await deploy('RequiemStaking', {
		contract: 'RequiemStaking',
		from: deployer,
		log: true,
		args: [
			reqt.address, //address _reqtT,
			sreqt.address, // address _sreqtT,
			10000,// uint256 _epochLength,
			0,// uint256 _firstEpochNumber,
			0// uint256 _firstEpochBlock
		],
	});

	const bondingCalculatorContract = await ethers.getContractAt('RequiemQBondingCalculator', bondingCalculator.address);
	const tV4 = await bondingCalculatorContract.getTotalValue(pairreqtT_DAI)

	console.log("indexValue DAI", tV4.toString())


	const treasuryFactory = await ethers.getContractFactory('RequiemTreasury');

	const treasury = await treasuryFactory.deploy(
		reqt,	// address _reqtT,
		dai, // address _DAI,
		tusd,// address _Frax,
		pairreqtT_DAI,// address _reqtTDAI,
		0,// uint256 _blocksNeededForQueue
	);

	const bondingDepository = await deploy('RequiemQBondDepository', {
		contract: 'RequiemQBondDepository',
		from: deployer,
		log: true,
		args: [
			reqt.address, // address _reqtT,
			pairreqtT_DAI, // address _principle,
			treasury.address, // address _treasury,
			deployer, // address _DAO,
			bondingCalculator.address// address _bondCalculator
		],
	});

	console.log('set treasury as vault')
	await reqtContract.setVault(treasury.address)

	const depositoryContract = await ethers.getContractAt('RequiemQBondDepository', bondingDepository.address);
	const treasuryContract = await ethers.getContractAt('RequiemTreasury', treasury.address);

	const lpTokens = await treasuryContract.liquidityTokens(0)
	console.log("LIQ", lpTokens)

	console.log("get pair data")
	const pairContract = await ethers.getContractAt('RequiemERC20', pairreqtT_DAI);
	const lpBalante = await pairContract.balanceOf(deployer)
	const ts = await pairContract.totalSupply()

	console.log("balante", lpBalante.toString(), "total supply ", ts.toString())

	console.log("approve spending of treasury")

	console.log("set manager")
	await treasuryContract.pushManagement(deployer)

	await pairContract.approve(treasuryContract.address, ethers.constants.MaxInt256)
	console.log("approve spending of Depository")
	await pairContract.approve(bondingDepository.address, ethers.constants.MaxInt256)

	const isLiquidityToken = await treasuryContract.isLiquidityToken(pairContract.address)
	console.log("isLP", isLiquidityToken)


	enum PARAMETER {
		VESTING,
		PAYOUT,
		FEE,
		DEBT
	}

	const param = "VESTING"
	await depositoryContract.setBondTerms(
		PARAMETER.VESTING,//   PARAMETER _parameter, 
		10000,//   uint256 _input
	)

	// enum according to the contract
	enum MANAGING {
		RESERVEDEPOSITOR,
		RESERVESPENDER,
		RESERVETOKEN,
		RESERVEMANAGER,
		LIQUIDITYDEPOSITOR,
		LIQUIDITYTOKEN,
		LIQUIDITYMANAGER,
		DEBTOR,
		REWARDMANAGER,
		SreqtT
	}

	console.log("depositor queue")

	await treasuryContract.queue(MANAGING.LIQUIDITYDEPOSITOR, deployer)

	console.log("toggle depositor")

	const dep = await treasuryContract.toggle(
		MANAGING.LIQUIDITYDEPOSITOR, // MANAGING _managing,
		deployer, // address _address,
		bondingCalculator.address// address _calculator
	)
	// // console.log("toggle depositor", dep)

	// console.log("queue token pairreqtT_DAI")
	// await treasuryContract.queue(MANAGING.LIQUIDITYTOKEN, pairreqtT_DAI)

	// const queue = await treasuryContract.LiquidityTokenQueue(pairreqtT_DAI)
	// console.log("token queue", queue.toString())



	console.log("toggle token")
	const togToken = await treasuryContract.toggle(
		MANAGING.LIQUIDITYTOKEN, // MANAGING _managing,
		pairreqtT_DAI, // address _address,
		bondingCalculator.address// address _calculator
	)

	const queue = await treasuryContract.LiquidityTokenQueue(pairreqtT_DAI)
	console.log("token queue", queue.toString())

	console.log("queue token pairreqtT_DAI")
	await treasuryContract.queue(MANAGING.LIQUIDITYTOKEN, pairreqtT_DAI)

	console.log("toggle token2")
	const togToken1 = await treasuryContract.toggle(
		MANAGING.LIQUIDITYTOKEN, // MANAGING _managing,
		pairreqtT_DAI, // address _address,
		bondingCalculator.address// address _calculator
	)

	// const ibonding = await ethers.getContractFactory("IBondingCalculator")
	// const bonding = await ibonding.attach(bondingCalculator.address)

	// const gg = await bonding.valuation(pairreqtT_DAI, 12412)
	// console.log("GG", gg.toString())

	const bc2 = await treasuryContract.bondCalculator(pairreqtT_DAI)
	console.log("is bc after toggle", bc2)
	// console.log("toggle token", togToken)

	const inp1 = ts.div(10000) // is reqt in lp / 10000
	// 10000000000000000 reqt
	// 200000000000000000 dai
	const daiShare = daiAmountinLP.div(10000) //((daiAmountinLP.mul(inp1).mul(daiAmountinLP).div(reqAmountinLP.add(daiAmountinLP))).div(ts)) // ibps o
	const reqShare = reqAmountinLP.div(10000)
	console.log("dai 10bps of lp", daiShare.toString())
	console.log("req 10bps of lp", reqShare.toString())
	// const valparams = await treasuryContract['valueOfParams(address,uint256)'](
	// 	pairreqtT_DAI,// address _token, 
	// 	inp1// uint256 _amount
	// )

	// const req = await reqt.deploy();

	// const MockBonding = await ethers.getContractFactory('RequiemUV2BondingCalculator');
	// const mockBonding = await MockBonding.deploy(reqt.address);



	// console.log("params", valparams)

	let val = await treasuryContract['valueOf(address,uint256)'](
		pairreqtT_DAI,// address _token, 
		inp1// uint256 _amount
	)
	const bn2 = await ethers.provider.getBlockNumber()
	console.log("block number", bn2)
	const wpairContract = await ethers.getContractAt('RequiemPair', pairreqtT_DAI);
	const testVal = await wpairContract.calculateSwapGivenIn(dai.address, reqt.address, daiShare);

	// const formulaLite = await deploy('RequiemFormulaLite', {
	// 	contract: 'RequiemFormulaLite',
	// 	from: deployer,
	// 	log: true,
	// 	args: [],
	// });

	const bondingQCalculator = await deploy('RequiemUV2BondingCalculator', {
		contract: 'RequiemUV2BondingCalculator',
		from: deployer,
		log: true,
		args: [reqt.address],
	});

	const bondingUV2CalculatorContract = await ethers.getContractAt('RequiemUV2BondingCalculator', bondingQCalculator.address);


	const testVal1 = await wpairContract.calculateSwapGivenIn(dai.address, reqt.address, daiShare);
	const testVal0 = await bondingUV2CalculatorContract.valuation(pairreqtT_DAI, inp1)
	console.log("act", testVal0.toString(), "real", testVal1.add(reqShare).toString())

	// const priceData = await bondingUV2CalculatorContract.calculatePrice(
	// 	pairreqtT_DAI
	// )
	// console.log("--- price data ---\n",
	// 	priceData[0].toString(),// uint256 reservesreqtT,
	// 	priceData[1].toString(),// uint256 numeratorInreqtT,
	// 	priceData[2].toString(),// uint256 reservesOther,
	// 	priceData[3].toString(),// uint256 denominatorInOther
	// )

	const testVal2 = await bondingUV2CalculatorContract.valuation(pairreqtT_DAI, inp1)

	const totalQ = await bondingUV2CalculatorContract.getTotalValue(pairreqtT_DAI)
	const totalU2 = await bondingCalculatorContract.getTotalValue(pairreqtT_DAI)

	console.log("U2", totalU2.toString())
	console.log("QR", totalQ.toString())


	// const kQ = await bondingUV2CalculatorContract.getKValue(pairreqtT_DAI)
	// const kU2 = await bondingCalculatorContract.getKValue(pairreqtT_DAI)


	// console.log("K2", kU2.toString())
	// console.log("KR", kQ.toString())

	console.log("test of Treasury", inp1.toString(), val.toString())
	console.log("test value of CS", inp1.toString(), testVal.toString())
	// console.log("test value of CS", inp1.toString(), testVal1.toString())
	console.log("test value of QR", inp1.toString(), testVal2.toString())
	let val2 = await treasuryContract['valueOf(address,uint256)'](
		dai.address,// address _token, 
		inp1// uint256 _amount
	)

	console.log("value of dai", inp1, val2.toString())
	// console.log("val of call")
	//  let val = await execute('RequiemTreasury', { from: deployer }, 'valueOf',
	// 	pairreqtT_DAI,
	// 	'123321'
	// );

	// const valparams1 = await treasuryContract['deposit(uint256,address,uint256)'](
	// 	inp1,// uint256 _amount,
	// 	pairreqtT_DAI,// address _token,
	// 	321// uint256 _profit
	// )


	await depositoryContract.initializeBondTerms(
		11233210,// uint256 _controlVariable,
		1032432,// uint256 _vestingTerm,
		4321,// uint256 _minimumPrice,
		'1242144321443279897832',// uint256 _maxPayout,
		21,// uint256 _fee,
		21432432,// uint256 _maxDebt,
		121,// uint256 _initialDebt
	)

	const payoutInp = lpBalante.div(10)


	let valForPayout = await treasuryContract['valueOf(address,uint256)'](
		pairreqtT_DAI,// address _token, 
		payoutInp// uint256 _amount
	)

	console.log("inp", payoutInp, "valued at", valForPayout.toString())


	const x = await depositoryContract.payoutFor(
		valForPayout// uint256 _value
	)
	console.log("payoutFor", x.toString())


	const bp = await depositoryContract.bondPrice(

	)
	console.log("bond price", bp.toString())


	console.log("-- depositor queue add depository")

	await treasuryContract.queue(MANAGING.LIQUIDITYDEPOSITOR, bondingDepository.address)

	console.log("toggle depository")

	const depDepository = await treasuryContract.toggle(
		MANAGING.LIQUIDITYDEPOSITOR, // MANAGING _managing,
		bondingDepository.address, // address _address,
		bondingCalculator.address// address _calculator
	)


	// 149614588815
	// console.log("value of ", 12132, val.toString())
	await depositoryContract.deposit(
		payoutInp,// uint256 _amount,
		'10000',// uint256 _maxPrice,
		deployer// address _depositor
	)

	console.log("deposit done")


};
export default func;
func.tags = ['bonding-fuji'];
