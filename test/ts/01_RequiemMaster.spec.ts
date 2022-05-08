import { expect } from "./chai-setup";
import { BigNumber, Contract } from 'ethers'
import { ecsign } from 'ethereumjs-util'

import {
	keccak256,
	defaultAbiCoder,
	toUtf8Bytes,
	hexlify,
	parseUnits
} from 'ethers/lib/utils'
import { ethers, network, deployments } from "hardhat";



import { getApprovalDigest } from './shared/common'
import { maxUint256, toWei } from './shared/utilities'
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
	RequiemERC20Token__factory,
	RequiemMaster__factory,
	RedRequiem__factory,
	RequiemChef__factory,
	RequiemFundDistributor__factory,
	MockERC20__factory,
} from "../../types";


const TOTAL_SUPPLY = toWei(10000)
const TEST_AMOUNT = toWei(10)

const lockConverter = (lockArray: any[]) => {
	return lockArray.map((l) => { return { amount: ethers.utils.formatEther(l.amount), end: l.end.toString(), minted: ethers.utils.formatEther(l.minted), multiplier: ethers.utils.formatEther(l.multiplier) } })
}

const infoConverter = (info: any) => {
	return { amount: info.amount.toString(), rewardDebt: info.rewardDebt.toString() }
}


describe('Master', () => {


	let signers: SignerWithAddress[];

	let wallet: SignerWithAddress;
	let other: SignerWithAddress;
	let deployWallet: any;

	let redReq: Contract
	let master: Contract
	let req: Contract
	let reqDist: Contract
	let lpToken: Contract
	let preBal: BigNumber
	let postBal: BigNumber


	beforeEach(async () => {
		deployWallet = await ethers.Wallet.fromMnemonic(((network.config.accounts) as any).mnemonic);
		signers = await ethers.getSigners();
		wallet = signers[0];
		other = signers[1];
		req = await new RequiemERC20Token__factory(wallet).deploy()
		redReq = await new RedRequiem__factory(wallet).deploy("token A", "A", req.address, 1)
		lpToken = await new MockERC20__factory(wallet).deploy("token B", "B", 18)
		reqDist = await new RequiemFundDistributor__factory(wallet).deploy()

		await reqDist.initialize(req.address, redReq.address)

		master = await new RequiemMaster__factory(wallet).deploy(req.address, reqDist.address)

		await req.setMinter(wallet.address, ethers.constants.MaxUint256)

		await req.setMinter(reqDist.address, ethers.constants.MaxUint256)

		await req.mint(wallet.address, parseUnits('100000', 18))
		await lpToken.mint(wallet.address, parseUnits('100000', 18))

		await req.approve(redReq.address, ethers.constants.MaxUint256)

		await redReq.approve(redReq.address, ethers.constants.MaxUint256)

		await reqDist.addRequester(master.address)
	})

	it('add token to manager', async () => {

		// await network.provider.send("evm_increaseTime", [3600])


		await lpToken.approve(master.address, ethers.constants.MaxUint256)
		await master.setRewardPerSecond(parseUnits('1', 18))

		let maturity0 = 60 * 60 * 24

		await master.add(
			parseUnits('200', 18), // uint256 allocPoint,
			maturity0, // uint256 maturity,
			lpToken.address, // IERC20 _lpToken,
			ethers.constants.AddressZero// IRewarder _rewarder
		)

		preBal = await lpToken.balanceOf(wallet.address)
		await master.deposit(
			0,// uint256 pid,
			parseUnits('12', 18),// uint256 amount,
			wallet.address// address to
		)

		postBal = await lpToken.balanceOf(wallet.address)

		console.log("BALDIFF", preBal.sub(postBal).toString())

		await master.updatePool(0)

		await network.provider.send("evm_increaseTime", [3600 * 24 * 10])
		// await network.provider.send("evm_mine")

		const info = await master.userInfo(0, wallet.address)
		console.log("INFO", infoConverter(info))
		const reward = await master.pendingReward(0, wallet.address)
		const re = await master.rewardPerSecond()
		console.log("PR", reward.toString(), re.toString())

		await master.harvest(0, wallet.address)


		const locks011 = await redReq.get_locks(wallet.address)

		console.log("Locks Local", lockConverter(locks011))

	})

	// it('approve', async () => {
	// 	await expect(token.approve(other.address, TEST_AMOUNT))
	// 		.to.emit(token, 'Approval')
	// 		.withArgs(wallet.address, other.address, TEST_AMOUNT)
	// 	expect(await token.allowance(wallet.address, other.address)).to.eq(TEST_AMOUNT)
	// })

	// it('transfer', async () => {
	// 	await expect(token.transfer(other.address, TEST_AMOUNT))
	// 		.to.emit(token, 'Transfer')
	// 		.withArgs(wallet.address, other.address, TEST_AMOUNT)
	// 	expect(await token.balanceOf(wallet.address)).to.eq(TOTAL_SUPPLY.sub(TEST_AMOUNT))
	// 	expect(await token.balanceOf(other.address)).to.eq(TEST_AMOUNT)
	// })

	// it('transfer:fail', async () => {
	// 	await expect(token.transfer(other.address, TOTAL_SUPPLY.add(1))).to.be.reverted // ds-math-sub-underflow
	// 	await expect(token.connect(other).transfer(wallet.address, 1)).to.be.reverted // ds-math-sub-underflow
	// })

	// it('transferFrom', async () => {
	// 	await token.approve(other.address, TEST_AMOUNT)
	// 	await expect(token.connect(other).transferFrom(wallet.address, other.address, TEST_AMOUNT))
	// 		.to.emit(token, 'Transfer')
	// 		.withArgs(wallet.address, other.address, TEST_AMOUNT)
	// 	expect(await token.allowance(wallet.address, other.address)).to.eq(0)
	// 	expect(await token.balanceOf(wallet.address)).to.eq(TOTAL_SUPPLY.sub(TEST_AMOUNT))
	// 	expect(await token.balanceOf(other.address)).to.eq(TEST_AMOUNT)
	// })

	// it('transferFrom:max', async () => {
	// 	await token.approve(other.address, maxUint256)
	// 	await expect(token.connect(other).transferFrom(wallet.address, other.address, TEST_AMOUNT))
	// 		.to.emit(token, 'Transfer')
	// 		.withArgs(wallet.address, other.address, TEST_AMOUNT)
	// 	expect(await token.allowance(wallet.address, other.address)).to.eq(maxUint256)
	// 	expect(await token.balanceOf(wallet.address)).to.eq(TOTAL_SUPPLY.sub(TEST_AMOUNT))
	// 	expect(await token.balanceOf(other.address)).to.eq(TEST_AMOUNT)
	// })

	// it('permit', async () => {
	// 	const nonce = await token.nonces(wallet.address)
	// 	const deadline = maxUint256
	// 	const digest = await getApprovalDigest(
	// 		token,
	// 		{ owner: wallet.address, spender: other.address, value: TEST_AMOUNT },
	// 		nonce,
	// 		deadline
	// 	)
	// 	const { v, r, s } = ecsign(Buffer.from(digest.slice(2), 'hex'), Buffer.from(deployWallet.privateKey.slice(2), 'hex'))

	// 	await expect(token.permit(wallet.address, other.address, TEST_AMOUNT, deadline, v, hexlify(r), hexlify(s)))
	// 		.to.emit(token, 'Approval')
	// 		.withArgs(wallet.address, other.address, TEST_AMOUNT)
	// 	expect(await token.allowance(wallet.address, other.address)).to.eq(TEST_AMOUNT)
	// 	expect(await token.nonces(wallet.address)).to.eq(BigNumber.from(1))
	// })
})
