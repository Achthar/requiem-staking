/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RequiemChef, RequiemChefInterface } from "../RequiemChef";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_reward",
        type: "address",
      },
      {
        internalType: "contract IFundDistributor",
        name: "_fund",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Harvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IRewarder",
        name: "rewarder",
        type: "address",
      },
    ],
    name: "LogPoolAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardPerSecond",
        type: "uint256",
      },
    ],
    name: "LogRewardPerSecond",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "contract IRewarder",
        name: "rewarder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "overwrite",
        type: "bool",
      },
    ],
    name: "LogSetPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastRewardTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accRewardPerShare",
        type: "uint256",
      },
    ],
    name: "LogUpdatePool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "fund",
        type: "address",
      },
    ],
    name: "PoolFundChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "contract IRewarder",
        name: "_rewarder",
        type: "address",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fund",
    outputs: [
      {
        internalType: "contract IFundDistributor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "harvestAllRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lpToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "pids",
        type: "uint256[]",
      },
    ],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
    outputs: [
      {
        internalType: "uint256",
        name: "pending",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "accRewardPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "pools",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reward",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerSecond",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewarder",
    outputs: [
      {
        internalType: "contract IRewarder",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IRewarder",
        name: "_rewarder",
        type: "address",
      },
      {
        internalType: "bool",
        name: "overwrite",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IFundDistributor",
        name: "_fund",
        type: "address",
      },
    ],
    name: "setFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardPerSecond",
        type: "uint256",
      },
    ],
    name: "setRewardPerSecond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner_",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "accRewardPerShare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastRewardTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "allocPoint",
            type: "uint256",
          },
        ],
        internalType: "struct RequiemChef.PoolInfo",
        name: "pool",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "rewardDebt",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdrawAndHarvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006007553480156200001657600080fd5b5060405162001d6f38038062001d6f8339810160408190526200003991620000c3565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905562000102565b6001600160a01b0381168114620000c057600080fd5b50565b60008060408385031215620000d757600080fd5b8251620000e481620000aa565b6020840151909250620000f781620000aa565b809150509250929050565b611c5d80620001126000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806378ed5d1f116100de57806398969e8211610097578063c346253d11610071578063c346253d14610375578063d1abb90714610388578063f2fde38b1461039b578063fbe6cf6a146103ae57600080fd5b806398969e821461033c578063ab7de0981461034f578063b60d42881461036257600080fd5b806378ed5d1f146102a257806388bba42f146102b55780638da5cb5b146102c85780638dbdbe6d146102d95780638f10369a146102ec57806393f1a40b146102f557600080fd5b8063228cb73311610130578063228cb733146102015780632f940c701461022c57806351eb05a61461023f57806357a5b58c1461027457806366da581514610287578063715018a61461029a57600080fd5b8063081e3eda146101785780630ad58d2f1461018f5780630e21750f146101a45780631526fe27146101b757806317caf6f1146101e557806318fccc76146101ee575b600080fd5b6003545b6040519081526020015b60405180910390f35b6101a261019d366004611871565b6103c1565b005b6101a26101b23660046118aa565b61055e565b6101ca6101c53660046118ce565b6105db565b60408051938452602084019290925290820152606001610186565b61017c60075481565b6101a26101fc3660046118e7565b61060e565b600154610214906001600160a01b031681565b6040516001600160a01b039091168152602001610186565b6101a261023a3660046118e7565b6107b2565b61025261024d3660046118ce565b6108e1565b6040805182518152602080840151908201529181015190820152606001610186565b6101a2610282366004611917565b610aec565b6101a26102953660046118ce565b610b30565b6101a2610b95565b6102146102b03660046118ce565b610c09565b6101a26102c336600461199a565b610c33565b6000546001600160a01b0316610214565b6101a26102e7366004611871565b610d9a565b61017c60085481565b6103276103033660046118e7565b60066020908152600092835260408084209091529082529020805460019091015482565b60408051928352602083019190915201610186565b61017c61034a3660046118e7565b610f2f565b6101a261035d3660046119e4565b6110e2565b600254610214906001600160a01b031681565b6102146103833660046118ce565b61129b565b6101a2610396366004611871565b6112ab565b6101a26103a93660046118aa565b6114f5565b6101a26103bc3660046118aa565b6115df565b60006103cc846108e1565b6000858152600660209081526040808320338452909152902081519192509064e8d4a51000906103fc9086611a31565b6104069190611a50565b8160010160008282546104199190611a72565b9091555050805484908290600090610432908490611ab1565b9250508190555060006005868154811061044e5761044e611ac8565b6000918252602090912001546001600160a01b0316905080156104d45781546040516344af0fa760e01b81526001600160a01b038316916344af0fa7916104a1918a9133918a9160009190600401611ade565b600060405180830381600087803b1580156104bb57600080fd5b505af11580156104cf573d6000803e3d6000fd5b505050505b6105088486600489815481106104ec576104ec611ac8565b6000918252602090912001546001600160a01b0316919061162b565b836001600160a01b031686336001600160a01b03167f8166bf25f8a2b7ed3c85049207da4358d16edbed977d23fa2ee6f0dde3ec21328860405161054e91815260200190565b60405180910390a4505050505050565b6000546001600160a01b031633146105915760405162461bcd60e51b815260040161058890611b0d565b60405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040517f1bbced6cc5125dba763681b1a276a950f551621431f63fdb5b2b180da1aa2ae390600090a250565b600381815481106105eb57600080fd5b600091825260209091206003909102018054600182015460029092015490925083565b6000610619836108e1565b6000848152600660209081526040808320338452909152812082518154939450909264e8d4a510009161064b91611a31565b6106559190611a50565b905060008260010154826106699190611a72565b6001840183905560025460405163d66e57cd60e01b81526001600160a01b0388811660048301526024820184905292935091169063d66e57cd90604401600060405180830381600087803b1580156106c057600080fd5b505af11580156106d4573d6000803e3d6000fd5b505050506000600587815481106106ed576106ed611ac8565b6000918252602090912001546001600160a01b0316905080156107725783546040516344af0fa760e01b81526001600160a01b038316916344af0fa79161073f918b9133918c91899190600401611ade565b600060405180830381600087803b15801561075957600080fd5b505af115801561076d573d6000803e3d6000fd5b505050505b604051828152879033907f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549060200160405180910390a350505050505050565b600082815260066020908152604080832033845290915281208054828255600182018390556005805492939192869081106107ef576107ef611ac8565b6000918252602090912001546001600160a01b031690508015610874576040516344af0fa760e01b81526001600160a01b038216906344af0fa790610841908890339089906000908190600401611ade565b600060405180830381600087803b15801561085b57600080fd5b505af115801561086f573d6000803e3d6000fd5b505050505b61088c8483600488815481106104ec576104ec611ac8565b836001600160a01b031685336001600160a01b03167f2cac5e20e1541d836381527a43f651851e302817b71dc8e810284e69210c1c6b856040516108d291815260200190565b60405180910390a45050505050565b61090560405180606001604052806000815260200160008152602001600081525090565b6003828154811061091857610918611ac8565b600091825260209182902060408051606081018252600390930290910180548352600181015493830184905260020154908201529150421115610ae75760006004838154811061096a5761096a611ac8565b6000918252602090912001546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156109bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109df9190611b42565b90508015610a585760008260200151426109f99190611ab1565b90506000600754846040015160085484610a139190611a31565b610a1d9190611a31565b610a279190611a50565b905082610a3964e8d4a5100083611a31565b610a439190611a50565b84518590610a52908390611b5b565b90525050505b4260208301526003805483919085908110610a7557610a75611ac8565b600091825260209182902083516003929092020190815582820151600182015560409283015160029091015583810151845183519182529181018490529182015283907fcb7325664a4a3b7c7223eefc492a97ca4fdf94d46884621e5a8fae5a04b2b9d29060600160405180910390a2505b919050565b8060005b81811015610b2a57610b19848483818110610b0d57610b0d611ac8565b905060200201356108e1565b50610b2381611b73565b9050610af0565b50505050565b6000546001600160a01b03163314610b5a5760405162461bcd60e51b815260040161058890611b0d565b60088190556040518181527fde89cb17ac7f58f94792b3e91e086ed85403819c24ceea882491f960ccb1a2789060200160405180910390a150565b6000546001600160a01b03163314610bbf5760405162461bcd60e51b815260040161058890611b0d565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60048181548110610c1957600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b03163314610c5d5760405162461bcd60e51b815260040161058890611b0d565b8260038581548110610c7157610c71611ac8565b906000526020600020906003020160020154600754610c909190611ab1565b610c9a9190611b5b565b6007819055508260038581548110610cb457610cb4611ac8565b9060005260206000209060030201600201819055508015610d12578160058581548110610ce357610ce3611ac8565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b80610d445760058481548110610d2a57610d2a611ac8565b6000918252602090912001546001600160a01b0316610d46565b815b6001600160a01b0316847f95895a6ab1df54420d241b55243258a33e61b2194db66c1179ec521aae8e18658584604051610d8c9291909182521515602082015260400190565b60405180910390a350505050565b6000610da5846108e1565b60008581526006602090815260408083206001600160a01b0387168452909152812080549293509185918391610ddc908490611b5b565b9091555050815164e8d4a5100090610df49086611a31565b610dfe9190611a50565b816001016000828254610e119190611b8e565b92505081905550600060058681548110610e2d57610e2d611ac8565b6000918252602090912001546001600160a01b031690508015610eb35781546040516344af0fa760e01b81526001600160a01b038316916344af0fa791610e80918a918991829160009190600401611ade565b600060405180830381600087803b158015610e9a57600080fd5b505af1158015610eae573d6000803e3d6000fd5b505050505b610ee933308760048a81548110610ecc57610ecc611ac8565b6000918252602090912001546001600160a01b031692919061168e565b836001600160a01b031686336001600160a01b03167f02d7e648dd130fc184d383e55bb126ac4c9c60e8f94bf05acdf557ba2d540b478860405161054e91815260200190565b60008060038481548110610f4557610f45611ac8565b60009182526020808320604080516060810182526003909402909101805484526001810154848401526002015483820152878452600682528084206001600160a01b038816855290915282208151600480549395509193909290919088908110610fb157610fb1611ac8565b6000918252602090912001546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015611002573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110269190611b42565b905083602001514211801561103a57508015155b156110aa5760008460200151426110519190611ab1565b9050600060075486604001516008548461106b9190611a31565b6110759190611a31565b61107f9190611a50565b90508261109164e8d4a5100083611a31565b61109b9190611a50565b6110a59085611b5b565b935050505b6001830154835464e8d4a51000906110c3908590611a31565b6110cd9190611a50565b6110d79190611a72565b979650505050505050565b6000546001600160a01b0316331461110c5760405162461bcd60e51b815260040161058890611b0d565b611115826116c6565b82600760008282546111279190611b5b565b909155505060048054600181810183557f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b90910180546001600160a01b038087166001600160a01b03199283168117909355600580548086019091557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db001805491871691909216811790915560408051606081018252600080825242602083019081529282018a8152600380548089018255928190529251919092027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b81019190915591517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c830155517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d909101559254909161126391611ab1565b6040518681527f81ee0f8c5c46e2cb41984886f77a84181724abb86c32a5f6de539b07509d45e59060200160405180910390a4505050565b60058181548110610c1957600080fd5b60006112b6846108e1565b6000858152600660209081526040808320338452909152812082518154939450909264e8d4a51000916112e891611a31565b6112f29190611a50565b905060008260010154826113069190611a72565b845190915064e8d4a510009061131c9088611a31565b6113269190611a50565b6113309083611a72565b6001840155825486908490600090611349908490611ab1565b909155505060025460405163d66e57cd60e01b81526001600160a01b038781166004830152602482018490529091169063d66e57cd90604401600060405180830381600087803b15801561139c57600080fd5b505af11580156113b0573d6000803e3d6000fd5b505050506000600588815481106113c9576113c9611ac8565b6000918252602090912001546001600160a01b03169050801561144e5783546040516344af0fa760e01b81526001600160a01b038316916344af0fa79161141b918c9133918c91899190600401611ade565b600060405180830381600087803b15801561143557600080fd5b505af1158015611449573d6000803e3d6000fd5b505050505b611466868860048b815481106104ec576104ec611ac8565b856001600160a01b031688336001600160a01b03167f8166bf25f8a2b7ed3c85049207da4358d16edbed977d23fa2ee6f0dde3ec21328a6040516114ac91815260200190565b60405180910390a4604051828152889033907f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549060200160405180910390a35050505050505050565b6000546001600160a01b0316331461151f5760405162461bcd60e51b815260040161058890611b0d565b6001600160a01b0381166115845760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610588565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60035460005b818110156116265760008181526006602090815260408083203384529091529020541561161657611616818461060e565b61161f81611b73565b90506115e5565b505050565b6040516001600160a01b03831660248201526044810182905261162690849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261175a565b6040516001600160a01b0380851660248301528316604482015260648101829052610b2a9085906323b872dd60e01b90608401611657565b60035460005b8181101561162657826001600160a01b0316600482815481106116f1576116f1611ac8565b6000918252602090912001546001600160a01b0316141561174a5760405162461bcd60e51b81526020600482015260136024820152726164643a206578697374696e6720706f6f6c3f60681b6044820152606401610588565b61175381611b73565b90506116cc565b600080836001600160a01b0316836040516117759190611bcf565b6000604051808303816000865af19150503d80600081146117b2576040519150601f19603f3d011682016040523d82523d6000602084013e6117b7565b606091505b509150915060008214156117cf573d6000803e3d6000fd5b610b2a8151600014806117f15750818060200190518101906117f19190611c0a565b6101a2816118025761180281611806565b5050565b62461bcd60e51b6000908152602060045260076024526652455123000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fd5b6001600160a01b038116811461186e57600080fd5b50565b60008060006060848603121561188657600080fd5b8335925060208401359150604084013561189f81611859565b809150509250925092565b6000602082840312156118bc57600080fd5b81356118c781611859565b9392505050565b6000602082840312156118e057600080fd5b5035919050565b600080604083850312156118fa57600080fd5b82359150602083013561190c81611859565b809150509250929050565b6000806020838503121561192a57600080fd5b823567ffffffffffffffff8082111561194257600080fd5b818501915085601f83011261195657600080fd5b81358181111561196557600080fd5b8660208260051b850101111561197a57600080fd5b60209290920196919550909350505050565b801515811461186e57600080fd5b600080600080608085870312156119b057600080fd5b843593506020850135925060408501356119c981611859565b915060608501356119d98161198c565b939692955090935050565b6000806000606084860312156119f957600080fd5b833592506020840135611a0b81611859565b9150604084013561189f81611859565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611a4b57611a4b611a1b565b500290565b600082611a6d57634e487b7160e01b600052601260045260246000fd5b500490565b60008083128015600160ff1b850184121615611a9057611a90611a1b565b6001600160ff1b0384018313811615611aab57611aab611a1b565b50500390565b600082821015611ac357611ac3611a1b565b500390565b634e487b7160e01b600052603260045260246000fd5b9485526001600160a01b0393841660208601529190921660408401526060830191909152608082015260a00190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208284031215611b5457600080fd5b5051919050565b60008219821115611b6e57611b6e611a1b565b500190565b6000600019821415611b8757611b87611a1b565b5060010190565b600080821280156001600160ff1b0384900385131615611bb057611bb0611a1b565b600160ff1b8390038412811615611bc957611bc9611a1b565b50500190565b6000825160005b81811015611bf05760208186018101518583015201611bd6565b81811115611bff576000828501525b509190910192915050565b600060208284031215611c1c57600080fd5b81516118c78161198c56fea26469706673582212206298b7853b2fff87226a0750d2410e8e35b6948d0babc898b486d10a7fe04f5d64736f6c634300080b0033";

export class RequiemChef__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _reward: string,
    _fund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequiemChef> {
    return super.deploy(
      _reward,
      _fund,
      overrides || {}
    ) as Promise<RequiemChef>;
  }
  getDeployTransaction(
    _reward: string,
    _fund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_reward, _fund, overrides || {});
  }
  attach(address: string): RequiemChef {
    return super.attach(address) as RequiemChef;
  }
  connect(signer: Signer): RequiemChef__factory {
    return super.connect(signer) as RequiemChef__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemChefInterface {
    return new utils.Interface(_abi) as RequiemChefInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemChef {
    return new Contract(address, _abi, signerOrProvider) as RequiemChef;
  }
}
