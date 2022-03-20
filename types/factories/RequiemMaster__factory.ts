/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RequiemMaster, RequiemMasterInterface } from "../RequiemMaster";

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
        internalType: "struct RequiemMaster.PoolInfo",
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
  "0x608060405260006007553480156200001657600080fd5b5060405162001f6e38038062001f6e8339810160408190526200003991620000c3565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905562000102565b6001600160a01b0381168114620000c057600080fd5b50565b60008060408385031215620000d757600080fd5b8251620000e481620000aa565b6020840151909250620000f781620000aa565b809150509250929050565b611e5c80620001126000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c806378ed5d1f116100ee57806398969e8211610097578063c346253d11610071578063c346253d146103a5578063d1abb907146103b8578063f2fde38b146103cb578063fbe6cf6a146103de57600080fd5b806398969e821461036c578063ab7de0981461037f578063b60d42881461039257600080fd5b80638dbdbe6d116100c85780638dbdbe6d146103095780638f10369a1461031c57806393f1a40b1461032557600080fd5b806378ed5d1f146102d257806388bba42f146102e55780638da5cb5b146102f857600080fd5b8063228cb7331161015057806357a5b58c1161012a57806357a5b58c146102a457806366da5815146102b7578063715018a6146102ca57600080fd5b8063228cb733146102315780632f940c701461025c57806351eb05a61461026f57600080fd5b80631526fe27116101815780631526fe27146101e757806317caf6f11461021557806318fccc761461021e57600080fd5b8063081e3eda146101a85780630ad58d2f146101bf5780630e21750f146101d4575b600080fd5b6003545b6040519081526020015b60405180910390f35b6101d26101cd366004611aa6565b6103f1565b005b6101d26101e2366004611adf565b6105a0565b6101fa6101f5366004611b03565b610656565b604080519384526020840192909252908201526060016101b6565b6101ac60075481565b6101d261022c366004611b1c565b610689565b600154610244906001600160a01b031681565b6040516001600160a01b0390911681526020016101b6565b6101d261026a366004611b1c565b610840565b61028261027d366004611b03565b61097e565b60408051825181526020808401519082015291810151908201526060016101b6565b6101d26102b2366004611b4c565b610b89565b6101d26102c5366004611b03565b610bcd565b6101d2610c62565b6102446102e0366004611b03565b610d13565b6101d26102f3366004611bcf565b610d3d565b6000546001600160a01b0316610244565b6101d2610317366004611aa6565b610ed4565b6101ac60085481565b610357610333366004611b1c565b60066020908152600092835260408084209091529082529020805460019091015482565b604080519283526020830191909152016101b6565b6101ac61037a366004611b1c565b61107c565b6101d261038d366004611c19565b61122f565b600254610244906001600160a01b031681565b6102446103b3366004611b03565b611425565b6101d26103c6366004611aa6565b611435565b6101d26103d9366004611adf565b611692565b6101d26103ec366004611adf565b6117d0565b60006103fc8461097e565b6000858152600660209081526040808320338452909152902081519192509064e8d4a510009061042c9086611c66565b6104369190611c85565b8160010160008282546104499190611ca7565b9091555050805484908290600090610462908490611cff565b9250508190555060006005868154811061047e5761047e611d16565b6000918252602090912001546001600160a01b0316905080156105165781546040516344af0fa760e01b8152600481018890523360248201526001600160a01b038681166044830152600060648301526084820192909252908216906344af0fa79060a401600060405180830381600087803b1580156104fd57600080fd5b505af1158015610511573d6000803e3d6000fd5b505050505b61054a84866004898154811061052e5761052e611d16565b6000918252602090912001546001600160a01b0316919061181c565b836001600160a01b031686336001600160a01b03167f8166bf25f8a2b7ed3c85049207da4358d16edbed977d23fa2ee6f0dde3ec21328860405161059091815260200190565b60405180910390a4505050505050565b6000546001600160a01b031633146105ff5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040517f1bbced6cc5125dba763681b1a276a950f551621431f63fdb5b2b180da1aa2ae390600090a250565b6003818154811061066657600080fd5b600091825260209091206003909102018054600182015460029092015490925083565b60006106948361097e565b6000848152600660209081526040808320338452909152812082518154939450909264e8d4a51000916106c691611c66565b6106d09190611c85565b905060008260010154826106e49190611ca7565b6001840183905560025460405163d66e57cd60e01b81526001600160a01b0388811660048301526024820184905292935091169063d66e57cd90604401600060405180830381600087803b15801561073b57600080fd5b505af115801561074f573d6000803e3d6000fd5b5050505060006005878154811061076857610768611d16565b6000918252602090912001546001600160a01b0316905080156108005783546040516344af0fa760e01b8152600481018990523360248201526001600160a01b038881166044830152606482018590526084820192909252908216906344af0fa79060a401600060405180830381600087803b1580156107e757600080fd5b505af11580156107fb573d6000803e3d6000fd5b505050505b604051828152879033907f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549060200160405180910390a350505050505050565b6000828152600660209081526040808320338452909152812080548282556001820183905560058054929391928690811061087d5761087d611d16565b6000918252602090912001546001600160a01b031690508015610911576040516344af0fa760e01b8152600481018690523360248201526001600160a01b03858116604483015260006064830181905260848301528216906344af0fa79060a401600060405180830381600087803b1580156108f857600080fd5b505af115801561090c573d6000803e3d6000fd5b505050505b61092984836004888154811061052e5761052e611d16565b836001600160a01b031685336001600160a01b03167f2cac5e20e1541d836381527a43f651851e302817b71dc8e810284e69210c1c6b8560405161096f91815260200190565b60405180910390a45050505050565b6109a260405180606001604052806000815260200160008152602001600081525090565b600382815481106109b5576109b5611d16565b600091825260209182902060408051606081018252600390930290910180548352600181015493830184905260020154908201529150421115610b8457600060048381548110610a0757610a07611d16565b6000918252602090912001546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015610a58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7c9190611d2c565b90508015610af5576000826020015142610a969190611cff565b90506000600754846040015160085484610ab09190611c66565b610aba9190611c66565b610ac49190611c85565b905082610ad664e8d4a5100083611c66565b610ae09190611c85565b84518590610aef908390611d45565b90525050505b4260208301526003805483919085908110610b1257610b12611d16565b600091825260209182902083516003929092020190815582820151600182015560409283015160029091015583810151845183519182529181018490529182015283907fcb7325664a4a3b7c7223eefc492a97ca4fdf94d46884621e5a8fae5a04b2b9d29060600160405180910390a2505b919050565b8060005b81811015610bc757610bb6848483818110610baa57610baa611d16565b9050602002013561097e565b50610bc081611d5d565b9050610b8d565b50505050565b6000546001600160a01b03163314610c275760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105f6565b60088190556040518181527fde89cb17ac7f58f94792b3e91e086ed85403819c24ceea882491f960ccb1a2789060200160405180910390a150565b6000546001600160a01b03163314610cbc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105f6565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60048181548110610d2357600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b03163314610d975760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105f6565b8260038581548110610dab57610dab611d16565b906000526020600020906003020160020154600754610dca9190611cff565b610dd49190611d45565b6007819055508260038581548110610dee57610dee611d16565b9060005260206000209060030201600201819055508015610e4c578160058581548110610e1d57610e1d611d16565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b80610e7e5760058481548110610e6457610e64611d16565b6000918252602090912001546001600160a01b0316610e80565b815b6001600160a01b0316847f95895a6ab1df54420d241b55243258a33e61b2194db66c1179ec521aae8e18658584604051610ec69291909182521515602082015260400190565b60405180910390a350505050565b6000610edf8461097e565b60008581526006602090815260408083206001600160a01b0387168452909152812080549293509185918391610f16908490611d45565b9091555050815164e8d4a5100090610f2e9086611c66565b610f389190611c85565b816001016000828254610f4b9190611d76565b92505081905550600060058681548110610f6757610f67611d16565b6000918252602090912001546001600160a01b0316905080156110005781546040516344af0fa760e01b8152600481018890526001600160a01b03868116602483018190526044830152600060648301526084820192909252908216906344af0fa79060a401600060405180830381600087803b158015610fe757600080fd5b505af1158015610ffb573d6000803e3d6000fd5b505050505b61103633308760048a8154811061101957611019611d16565b6000918252602090912001546001600160a01b03169291906118c5565b836001600160a01b031686336001600160a01b03167f02d7e648dd130fc184d383e55bb126ac4c9c60e8f94bf05acdf557ba2d540b478860405161059091815260200190565b6000806003848154811061109257611092611d16565b60009182526020808320604080516060810182526003909402909101805484526001810154848401526002015483820152878452600682528084206001600160a01b0388168552909152822081516004805493955091939092909190889081106110fe576110fe611d16565b6000918252602090912001546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa15801561114f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111739190611d2c565b905083602001514211801561118757508015155b156111f757600084602001514261119e9190611cff565b905060006007548660400151600854846111b89190611c66565b6111c29190611c66565b6111cc9190611c85565b9050826111de64e8d4a5100083611c66565b6111e89190611c85565b6111f29085611d45565b935050505b6001830154835464e8d4a5100090611210908590611c66565b61121a9190611c85565b6112249190611ca7565b979650505050505050565b6000546001600160a01b031633146112895760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105f6565b61129282611916565b82600760008282546112a49190611d45565b909155505060048054600181810183557f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b90910180546001600160a01b0380871673ffffffffffffffffffffffffffffffffffffffff199283168117909355600580548086019091557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db001805491871691909216811790915560408051606081018252600080825242602083019081529282018a8152600380548089018255928190529251919092027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b81019190915591517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c830155517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d90910155925490916113ed91611cff565b6040518681527f81ee0f8c5c46e2cb41984886f77a84181724abb86c32a5f6de539b07509d45e59060200160405180910390a4505050565b60058181548110610d2357600080fd5b60006114408461097e565b6000858152600660209081526040808320338452909152812082518154939450909264e8d4a510009161147291611c66565b61147c9190611c85565b905060008260010154826114909190611ca7565b845190915064e8d4a51000906114a69088611c66565b6114b09190611c85565b6114ba9083611ca7565b60018401558254869084906000906114d3908490611cff565b909155505060025460405163d66e57cd60e01b81526001600160a01b038781166004830152602482018490529091169063d66e57cd90604401600060405180830381600087803b15801561152657600080fd5b505af115801561153a573d6000803e3d6000fd5b5050505060006005888154811061155357611553611d16565b6000918252602090912001546001600160a01b0316905080156115eb5783546040516344af0fa760e01b8152600481018a90523360248201526001600160a01b038881166044830152606482018590526084820192909252908216906344af0fa79060a401600060405180830381600087803b1580156115d257600080fd5b505af11580156115e6573d6000803e3d6000fd5b505050505b611603868860048b8154811061052e5761052e611d16565b856001600160a01b031688336001600160a01b03167f8166bf25f8a2b7ed3c85049207da4358d16edbed977d23fa2ee6f0dde3ec21328a60405161164991815260200190565b60405180910390a4604051828152889033907f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549060200160405180910390a35050505050505050565b6000546001600160a01b031633146116ec5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105f6565b6001600160a01b0381166117685760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016105f6565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60035460005b8181101561181757600081815260066020908152604080832033845290915290205415611807576118078184610689565b61181081611d5d565b90506117d6565b505050565b6040516001600160a01b0383166024820152604481018290526118179084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119b3565b6040516001600160a01b0380851660248301528316604482015260648101829052610bc79085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611861565b60035460005b8181101561181757826001600160a01b03166004828154811061194157611941611d16565b6000918252602090912001546001600160a01b0316036119a35760405162461bcd60e51b815260206004820152601360248201527f6164643a206578697374696e6720706f6f6c3f0000000000000000000000000060448201526064016105f6565b6119ac81611d5d565b905061191c565b600080836001600160a01b0316836040516119ce9190611dce565b6000604051808303816000865af19150503d8060008114611a0b576040519150601f19603f3d011682016040523d82523d6000602084013e611a10565b606091505b50909250905081611a25573d6000803e3d6000fd5b80511580611a42575080806020019051810190611a429190611e09565b610bc75760405162461bcd60e51b815260206004820152601660248201527f534146455f45524332305f43414c4c5f4641494c45440000000000000000000060448201526064016105f6565b6001600160a01b0381168114611aa357600080fd5b50565b600080600060608486031215611abb57600080fd5b83359250602084013591506040840135611ad481611a8e565b809150509250925092565b600060208284031215611af157600080fd5b8135611afc81611a8e565b9392505050565b600060208284031215611b1557600080fd5b5035919050565b60008060408385031215611b2f57600080fd5b823591506020830135611b4181611a8e565b809150509250929050565b60008060208385031215611b5f57600080fd5b823567ffffffffffffffff80821115611b7757600080fd5b818501915085601f830112611b8b57600080fd5b813581811115611b9a57600080fd5b8660208260051b8501011115611baf57600080fd5b60209290920196919550909350505050565b8015158114611aa357600080fd5b60008060008060808587031215611be557600080fd5b84359350602085013592506040850135611bfe81611a8e565b91506060850135611c0e81611bc1565b939692955090935050565b600080600060608486031215611c2e57600080fd5b833592506020840135611c4081611a8e565b91506040840135611ad481611a8e565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611c8057611c80611c50565b500290565b600082611ca257634e487b7160e01b600052601260045260246000fd5b500490565b600080831283600160ff1b01831281151615611cc557611cc5611c50565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018313811615611cf957611cf9611c50565b50500390565b600082821015611d1157611d11611c50565b500390565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611d3e57600080fd5b5051919050565b60008219821115611d5857611d58611c50565b500190565b600060018201611d6f57611d6f611c50565b5060010190565b6000808212827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03841381151615611db057611db0611c50565b82600160ff1b038412811615611dc857611dc8611c50565b50500190565b6000825160005b81811015611def5760208186018101518583015201611dd5565b81811115611dfe576000828501525b509190910192915050565b600060208284031215611e1b57600080fd5b8151611afc81611bc156fea26469706673582212209c8ca0ec47f75ba4b93c8c5e51bc33e4a8c3478fc8befe6e6a8d796f53c0f61264736f6c634300080d0033";

export class RequiemMaster__factory extends ContractFactory {
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
  ): Promise<RequiemMaster> {
    return super.deploy(
      _reward,
      _fund,
      overrides || {}
    ) as Promise<RequiemMaster>;
  }
  getDeployTransaction(
    _reward: string,
    _fund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_reward, _fund, overrides || {});
  }
  attach(address: string): RequiemMaster {
    return super.attach(address) as RequiemMaster;
  }
  connect(signer: Signer): RequiemMaster__factory {
    return super.connect(signer) as RequiemMaster__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemMasterInterface {
    return new utils.Interface(_abi) as RequiemMasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemMaster {
    return new Contract(address, _abi, signerOrProvider) as RequiemMaster;
  }
}
