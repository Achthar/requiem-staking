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


    console.log("--- deploy stables --- ")

    const usdc = await deploy('USDC', {
        contract: 'MockERC20',
        from: localhost,
        log: true,
        args: ['USD Coin', 'USDC', 6],
    });


    await execute('USDC', { from: localhost, log: true }, 'mint', localhost, parseUnits('100000000000', 6));
    // await execute('USDC', { from: localhost }, 'approve', router.address, ethers.constants.MaxInt256);


    const REQ = await deploy('RequiemERC20Token', {
        contract: 'RequiemERC20Token',
        from: localhost,
        log: true,
        args: [],
    });

    await execute('RequiemERC20Token', { from: localhost, log: true }, 'setMinter', localhost, parseUnits('1000000000', 18));
    await execute('RequiemERC20Token', { from: localhost, log: true }, 'mint', localhost, parseUnits('1000000000', 18));

    const redREQ = await deploy('RedRequiem', {
        contract: 'RedRequiem',
        from: localhost,
        log: true,
        args: [
            'Red Requiem', // string memory _name,
            'RREQ', // string memory _symbol,
            REQ.address, // address _lockedToken,
            parseUnits('1', 18)// uint256 _minLockedAmount
        ],
    });

    const redREQStaking = await deploy('RedRequiemStaking', {
        contract: 'RedRequiemStaking',
        from: localhost,
        log: true,
        args: [
        ],
    });


    await execute('RedRequiemStaking', { from: localhost, log: true }, 'initialize',
        usdc.address,// IERC20 _usdc,
        redREQ.address// IERC20 _redRequiem

    );

    // await execute('USDC', { from: localhost, log: true }, 'mint', localhost, parseUnits('100000000000', 18));

    await execute('USDC', { from: localhost, log: true }, 'mint', redREQStaking.address, parseUnits('1000000000000', 6));


    await execute('RequiemERC20Token', { from: localhost, log: true }, 'approve', redREQ.address, ethers.constants.MaxInt256);


    await execute('RedRequiem', { from: localhost, log: true }, 'create_lock',
        parseUnits('10000', 18), // uint256 _value,
        7 //  uint256 _days
    );

    await execute('RedRequiem', { from: localhost, log: true }, 'deposit_for',
        localhost, // address _addr,
        parseUnits('10', 18) //  uint256 _value
    );

    const redReqContract = await ethers.getContractAt('RedRequiem', redREQ.address);

    const balanceUser = await redReqContract.balanceOf(localhost)

    console.log("Balance RedREQ", balanceUser.toString())


    const redReqStakingContract = await ethers.getContractAt('RedRequiemStaking', redREQStaking.address);


    await execute('USDC', { from: localhost, log: true }, 'approve', redReqStakingContract.address, ethers.constants.MaxInt256);

    await redReqStakingContract.allocateMoreRewards(
        parseUnits('1000000', 6),// uint256 _addedReward,
        1 //  uint256 _days
    )

    await execute('RedRequiem', { from: localhost, log: true }, 'approve',
        redREQStaking.address,
        ethers.constants.MaxInt256
    );

    await redReqStakingContract.deposit(
        balanceUser.div(2), //amount
        localhost //to
    )

    const usdcContract = await ethers.getContractAt('MockERC20', usdc.address);

    const usdcBalBefore = await usdcContract.balanceOf(localhost)

    console.log("usdc Balance before", usdcBalBefore.toString())

    await redReqStakingContract.harvest(
        localhost //to
    )

    const usdcBal = await usdcContract.balanceOf(localhost)

    console.log("usdc balance after harvest", (usdcBal.sub(usdcBalBefore)).toString())

    // await usdcContract.transfer('0x000000000000000000000000000000000000dead', usdcBal)

    const rewardperSec = await redReqStakingContract.getRewardPerSecond()

    console.log("Reward per S", Number(rewardperSec.toString()) / 10e6)

    // await redReqStakingContract.setRewardPerSecond(BigNumber.from(Math.round(1e9 / 24 / 60 / 60)))

    // const rewardperSec2 = await redReqStakingContract.getRewardPerSecond()
    const pr0 = await redReqStakingContract.pendingReward(localhost)

    // console.log("Reward per S 2", Number(rewardperSec2.toString()) / 10e6, "PR0", pr0.toString())
    await redReqStakingContract.deposit(
        balanceUser.div(2), //amount
        localhost //to
    )
    const bn0 = await ethers.provider.getBlockNumber()
    await network.provider.send("evm_setNextBlockTimestamp", [1925097600])
    console.log("Block number", bn0)

    await network.provider.send("evm_increaseTime", [3600])
    for (let i = 0; i < 100; i++) {
        await network.provider.send("evm_mine")
    }
    const bn1 = await ethers.provider.getBlockNumber()
    console.log("Block number", bn1)

    const pr01 = await redReqStakingContract.pendingReward(localhost)

    console.log("PR01", pr01.toString())
    const usdcBal01 = await usdcContract.balanceOf(localhost)
    await redReqStakingContract.harvest(
        localhost //to
    )
    const usdcBal1 = await usdcContract.balanceOf(localhost)

    const pr1 = await redReqStakingContract.pendingReward(localhost)

    console.log("PR1", pr1.toString())

    const accRewardPerShare = await redReqStakingContract.accRewardPerShare()

    console.log("TEDST", accRewardPerShare.toString())

    console.log("usdc balance after 2nd harvest", (usdcBal1.sub(usdcBal01)).toString())


    const uInfo = await redReqStakingContract.userInfo(localhost)

    console.log("Uinfo", uInfo)

    console.log("Uinfo Amnt", uInfo.amount.toString())
    console.log("Uinfo reward debt", uInfo.rewardDebt.toString())

};
export default func;
func.tags = ['staking-localhost'];
