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

    await execute('BloodRedRequiem', { from: localhost, log: true }, 'create_lock',
        parseUnits('10000', 18), // uint256 _value,
        7 //  uint256 _days
    );

    // await execute('BloodRedRequiem', { from: localhost, log: true }, 'deposit_for',
    //     localhost, // address _addr,
    //     parseUnits('10', 18) //  uint256 _value
    // );

    await execute('BloodRedRequiem', { from: localhost, log: true }, 'create_lock',
        parseUnits('20000', 18), // uint256 _value,
        7 //  uint256 _days
    );



    const balanceUser = await redReqContract.balanceOf(localhost)

    console.log("Balance RedREQ", balanceUser.toString())

    const locks1 = await redReqContract.get_locks(localhost)

    console.log("Locks Local", locks1)

    console.log("transfer full lock 0 to", user)

    await redReqContract.transferFullLock(0, user)

    const locks2 = await redReqContract.get_locks(localhost)

    console.log("Locks Local", locks2)

    const locks2U = await redReqContract.get_locks(user)

    console.log("Locks user", locks2U)

};
export default func;
func.tags = ['brr-localhost'];
