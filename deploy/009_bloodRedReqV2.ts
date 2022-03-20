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
import { Console, timeStamp } from 'console';
// import { deploy, deployedAt } from "./contract";


const lockConverter = (lockArray: any[]) => {
    return lockArray.map((l) => { return { amount: l.amount.toString(), end: l.end.toString(), minted: l.minted.toString(), voting: l.votingPower.toString() } })
}


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

    const reqContract = await ethers.getContractAt('RequiemERC20Token', REQ.address);

    const now = Math.round((new Date()).getTime() / 1000);



    const redREQ = await deploy('BloodRedRequiem', {
        contract: 'BloodRedRequiem',
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
    await execute('BloodRedRequiem', { from: localhost, log: true }, 'approve', redREQ.address, ethers.constants.MaxInt256);
    const redReqContract = await ethers.getContractAt('BloodRedRequiem', redREQ.address);

    const locks0 = await redReqContract.locked_of(localhost, 0)

    console.log("Locks User", locks0)
    const _end1 = 60 * 60 * 24 + now
    await execute('BloodRedRequiem', { from: localhost, log: true }, 'create_lock',
        parseUnits('10000', 18), // uint256 _value,
        _end1 //  uint256 _end
    );

    const locks00 = await redReqContract.get_locks(localhost)

    console.log("Locks Local", locks00)

    // await execute('BloodRedRequiem', { from: localhost, log: true }, 'deposit_for',
    //     localhost, // address _addr,
    //     parseUnits('10', 18) //  uint256 _value
    // );
    const _end2 = 60 * 60 * 32 + now
    await execute('BloodRedRequiem', { from: localhost, log: true }, 'create_lock',
        parseUnits('20000', 18), // uint256 _value,
        _end2 //  uint256 _end
    );



    const balanceUser = await redReqContract.balanceOf(localhost)

    console.log("Balance RedREQ", balanceUser.toString())

    const locks1 = await redReqContract.get_locks(localhost)

    console.log("Locks Local", lockConverter(locks1))

    console.log("transfer full lock", _end1, "to", user)

    await redReqContract.transferFullLock(_end1, user)

    const locks2 = await redReqContract.get_locks(localhost)

    console.log("Locks Local", lockConverter(locks2))

    const locks2U = await redReqContract.get_locks(user)

    console.log("Locks user after transfer", lockConverter(locks2U))

    console.log("transfer share")
    await redReqContract.transferLockShare(locks2[0].amount.div(2), _end2, user)

    const locks3U = await redReqContract.get_locks(user)

    console.log("Locks user 3", lockConverter(locks3U))


    const _end3 = 60 * 60 * 24 * 2 + now
    await execute('BloodRedRequiem', { from: localhost, log: true }, 'create_lock',
        parseUnits('500', 18), // uint256 _value,
        _end3 //  uint256 _end
    );
    const locks3L = await redReqContract.get_locks(localhost)

    console.log("Locks local 3", lockConverter(locks3L))

    const _end4 = _end3 + 60 * 60 * 24
    console.log("Increase time")
    await redReqContract.increase_time_to_maturity(
        parseUnits('120', 18), // uint256 _amount,
        _end3, // uint256 _end,
        _end4 // uint256 _newEnd
    )

    const locks4L = await redReqContract.get_locks(localhost)

    console.log("Locks local 4", lockConverter(locks4L))

    console.log("Increase Position")
    await redReqContract.increase_position(
        parseUnits('88', 18), // uint256 _value,
        _end4 // uint256 _end
    )
    const locks5L = await redReqContract.get_locks(localhost)

    console.log("Locks local 5", lockConverter(locks5L))

    await network.provider.send("evm_increaseTime", [_end4 - now])

    console.log("Withdraw Position", locks5L[2].end.toString())

    const _amount = locks5L[2].amount.div(2)

    const _minted = await redReqContract.get_amount_minted(_amount, locks5L[2].end)
    console.log("amnt to withdraw", _amount.toString(), "minted for ", _minted.toString())

    await redReqContract.withdraw(locks5L[2].end, _amount)

    const locks6L = await redReqContract.get_locks(localhost)

    console.log("Locks local 6", lockConverter(locks6L))

    await redReqContract.withdraw(locks5L[2].end, _amount)

    const locks7L = await redReqContract.get_locks(localhost)

    console.log("Locks local 7", lockConverter(locks7L))

    let reqBefore = await reqContract.balanceOf(localhost)

    await redReqContract.emergencyWithdraw(locks5L[0].end)

    let reqAfter = await reqContract.balanceOf(localhost)

    const locks8L = await redReqContract.get_locks(localhost)

    console.log("Locks local 8", lockConverter(locks8L))
    console.log("REQ Diff", reqAfter.sub(reqBefore).toString())



    const _end5 = 60 * 60 * 24 * 2 * 100 + now
    console.log("create lock", _end5)
    await execute('BloodRedRequiem', { from: localhost, log: true }, 'create_lock',
        parseUnits('2131', 18), // uint256 _value,
        _end5 //  uint256 _end
    );
    const locks9L = await redReqContract.get_locks(localhost)

    console.log("Locks local 9", lockConverter(locks9L))
    reqBefore = await reqContract.balanceOf(localhost)

    await redReqContract.emergencyWithdraw(_end5)

    reqAfter = await reqContract.balanceOf(localhost)
    const locks10L = await redReqContract.get_locks(localhost)
    console.log("Locks local 9 after withdraw", lockConverter(locks10L))
    console.log("REQ Diff", reqAfter.sub(reqBefore).toString())

};
export default func;
func.tags = ['rr-localhost'];
