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
	RedRequiem__factory,
	RequiemChef__factory,
	MockERC20__factory,
} from "../../types";


const lockConverter = (lockArray: any[]) => {
	return lockArray.map((l) => { return { amount: l.amount.toString(), end: l.end.toString(), minted: l.minted.toString(), multiplier: ethers.utils.formatEther(l.multiplier) } })
}


describe('RedRequiem', () => {

	let signers: SignerWithAddress[];

	let wallet: SignerWithAddress;
	let other: SignerWithAddress;
	let deployWallet: any;

	let redReq: Contract
	let req: Contract
	let tokenB: Contract

	beforeEach(async () => {
		deployWallet = await ethers.Wallet.fromMnemonic(((network.config.accounts) as any).mnemonic);
		signers = await ethers.getSigners();
		wallet = signers[0];
		other = signers[1];
		req = await new RequiemERC20Token__factory(wallet).deploy()
		redReq = await new RedRequiem__factory(wallet).deploy("token A", "A", req.address, 1)
		tokenB = await new MockERC20__factory(wallet).deploy("token B", "B", 18)

		await req.setMinter(wallet.address, ethers.constants.MaxUint256)

		await req.mint(wallet.address, parseUnits('100000', 18))

		await req.approve(redReq.address, ethers.constants.MaxUint256)

		await redReq.approve(redReq.address, ethers.constants.MaxUint256)
	})

	it('locks', async () => {

		// await network.provider.send("evm_increaseTime", [3600])

		console.log("--- deploy stables --- ")



		const now = Math.round((new Date()).getTime() / 1000);



		// const locks0 = await redReq.locked_of(wallet.address, 0)

		// console.log("Locks User", locks0)
		const _end1 = 60 * 60 * 24 + now

		await redReq.create_lock(
			parseUnits('10000', 18), // uint256 _value,
			_end1, //  uint256 _end
			wallet.address
		)
		const locks00 = await redReq.get_locks(wallet.address)

		console.log("Locks Local", locks00)

		// await execute('BloodRedRequiem', { from: wallet.address, log: true }, 'deposit_for',
		//     wallet.address, // address _addr,
		//     parseUnits('10', 18) //  uint256 _value
		// );
		const _end2 = 60 * 60 * 32 + now
		await redReq.create_lock(
			parseUnits('20000', 18), // uint256 _value,
			_end2, //  uint256 _end
			wallet.address
		);



		const balanceUser = await redReq.balanceOf(wallet.address)

		console.log("Balance RedREQ", balanceUser.toString())

		const locks1 = await redReq.get_locks(wallet.address)

		console.log("Locks Local", lockConverter(locks1))

		console.log("transfer full lock", _end1, "to", other.address)

		await redReq.transferFullLock(_end1, other.address)

		const locks2 = await redReq.get_locks(wallet.address)

		console.log("Locks Local", lockConverter(locks2))

		const locks2U = await redReq.get_locks(other.address)

		console.log("Locks other.address after transfer", lockConverter(locks2U))

		console.log("transfer share")
		await redReq.transferLockShare(locks2[0].amount.div(2), _end2, other.address)

		const locks3U = await redReq.get_locks(other.address)

		console.log("Locks other.address 3", lockConverter(locks3U))


		const _end3 = 60 * 60 * 24 * 2 + now
		await redReq.create_lock(
			parseUnits('500', 18), // uint256 _value,
			_end3, //  uint256 _end
			wallet.address
		);
		const locks3L = await redReq.get_locks(wallet.address)

		console.log("Locks local 3", lockConverter(locks3L))

		const _end4 = _end3 + 60 * 60 * 24
		console.log("Increase time")
		await redReq.increase_time_to_maturity(
			parseUnits('120', 18), // uint256 _amount,
			_end3, // uint256 _end,
			_end4 // uint256 _newEnd
		)

		const locks4L = await redReq.get_locks(wallet.address)

		console.log("Locks local 4", lockConverter(locks4L))

		console.log("Increase Position")
		await redReq.increase_position(
			parseUnits('88', 18), // uint256 _value,
			_end4, // uint256 _end
			wallet.address
		)
		const locks5L = await redReq.get_locks(wallet.address)

		console.log("Locks local 5", lockConverter(locks5L))

		await network.provider.send("evm_increaseTime", [_end4 - now + 100])

		console.log("Withdraw Position", locks5L[2].end.toString())

		const _amount = locks5L[2].amount.div(2)

		const _minted = await redReq.get_amount_minted(_amount, locks5L[2].end)
		console.log("amnt to withdraw", _amount.toString(), "minted for ", _minted.toString())

		await redReq.withdraw(locks5L[2].end, _amount)

		const locks6L = await redReq.get_locks(wallet.address)

		console.log("Locks local 6", lockConverter(locks6L))

		await redReq.withdraw(locks5L[2].end, _amount)

		const locks7L = await redReq.get_locks(wallet.address)

		console.log("Locks local 7", lockConverter(locks7L))

		let reqBefore = await req.balanceOf(wallet.address)

		await redReq.emergencyWithdraw(locks5L[0].end)

		let reqAfter = await req.balanceOf(wallet.address)

		const locks8L = await redReq.get_locks(wallet.address)

		console.log("Locks local 8", lockConverter(locks8L))
		console.log("REQ Diff", reqAfter.sub(reqBefore).toString())



		const _end5 = 60 * 60 * 24 * 2 * 100 + now
		console.log("create lock", _end5)
		await redReq.create_lock(
			parseUnits('2131', 18), // uint256 _value,
			_end5, //  uint256 _end
			wallet.address
		);
		const locks9L = await redReq.get_locks(wallet.address)

		console.log("Locks local 9", lockConverter(locks9L))
		reqBefore = await req.balanceOf(wallet.address)

		await redReq.emergencyWithdraw(_end5)

		reqAfter = await req.balanceOf(wallet.address)
		const locks10L = await redReq.get_locks(wallet.address)
		console.log("Locks local 9 after withdraw", lockConverter(locks10L))
		console.log("REQ Diff", reqAfter.sub(reqBefore).toString())
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
