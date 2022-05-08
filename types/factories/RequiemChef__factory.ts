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
  "0x608060405260006007553480156200001657600080fd5b50604051620024f4380380620024f48339810160408190526200003991620000c3565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905562000102565b6001600160a01b0381168114620000c057600080fd5b50565b60008060408385031215620000d757600080fd5b8251620000e481620000aa565b6020840151909250620000f781620000aa565b809150509250929050565b6123e280620001126000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c806378ed5d1f116100ee57806398969e8211610097578063c346253d11610071578063c346253d146103d9578063d1abb907146103ec578063f2fde38b146103ff578063fbe6cf6a1461041257600080fd5b806398969e8214610393578063ab7de098146103a6578063b60d4288146103b957600080fd5b80638dbdbe6d116100c85780638dbdbe6d146103305780638f10369a1461034357806393f1a40b1461034c57600080fd5b806378ed5d1f146102ec57806388bba42f146102ff5780638da5cb5b1461031257600080fd5b8063228cb7331161015057806357a5b58c1161012a57806357a5b58c146102be57806366da5815146102d1578063715018a6146102e457600080fd5b8063228cb733146102315780632f940c701461027657806351eb05a61461028957600080fd5b80631526fe27116101815780631526fe27146101e757806317caf6f11461021557806318fccc761461021e57600080fd5b8063081e3eda146101a85780630ad58d2f146101bf5780630e21750f146101d4575b600080fd5b6003545b6040519081526020015b60405180910390f35b6101d26101cd366004611f6c565b610425565b005b6101d26101e2366004611fa5565b61062e565b6101fa6101f5366004611fc9565b610723565b604080519384526020840192909252908201526060016101b6565b6101ac60075481565b6101d261022c366004611fe2565b610756565b6001546102519073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101b6565b6101d2610284366004611fe2565b610966565b61029c610297366004611fc9565b610af1565b60408051825181526020808401519082015291810151908201526060016101b6565b6101d26102cc366004612012565b610d22565b6101d26102df366004611fc9565b610d66565b6101d2610e22565b6102516102fa366004611fc9565b610f12565b6101d261030d366004612095565b610f49565b60005473ffffffffffffffffffffffffffffffffffffffff16610251565b6101d261033e366004611f6c565b61113b565b6101ac60085481565b61037e61035a366004611fe2565b60066020908152600092835260408084209091529082529020805460019091015482565b604080519283526020830191909152016101b6565b6101ac6103a1366004611fe2565b61134a565b6101d26103b43660046120df565b611530565b6002546102519073ffffffffffffffffffffffffffffffffffffffff1681565b6102516103e7366004611fc9565b611765565b6101d26103fa366004611f6c565b611775565b6101d261040d366004611fa5565b611a45565b6101d2610420366004611fa5565b611bf6565b600061043084610af1565b6000858152600660209081526040808320338452909152902081519192509064e8d4a51000906104609086612145565b61046a9190612182565b81600101600082825461047d91906121bd565b9091555050805484908290600090610496908490612231565b925050819055506000600586815481106104b2576104b2612248565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169050801561057d5781546040517f44af0fa70000000000000000000000000000000000000000000000000000000081526004810188905233602482015273ffffffffffffffffffffffffffffffffffffffff8681166044830152600060648301526084820192909252908216906344af0fa79060a401600060405180830381600087803b15801561056457600080fd5b505af1158015610578573d6000803e3d6000fd5b505050505b6105be84866004898154811061059557610595612248565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169190611c42565b8373ffffffffffffffffffffffffffffffffffffffff16863373ffffffffffffffffffffffffffffffffffffffff167f8166bf25f8a2b7ed3c85049207da4358d16edbed977d23fa2ee6f0dde3ec21328860405161061e91815260200190565b60405180910390a4505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f1bbced6cc5125dba763681b1a276a950f551621431f63fdb5b2b180da1aa2ae390600090a250565b6003818154811061073357600080fd5b600091825260209091206003909102018054600182015460029092015490925083565b600061076183610af1565b6000848152600660209081526040808320338452909152812082518154939450909264e8d4a510009161079391612145565b61079d9190612182565b905060008260010154826107b191906121bd565b600184018390556002546040517fd66e57cd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88811660048301526024820184905292935091169063d66e57cd90604401600060405180830381600087803b15801561082e57600080fd5b505af1158015610842573d6000803e3d6000fd5b5050505060006005878154811061085b5761085b612248565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905080156109265783546040517f44af0fa70000000000000000000000000000000000000000000000000000000081526004810189905233602482015273ffffffffffffffffffffffffffffffffffffffff8881166044830152606482018590526084820192909252908216906344af0fa79060a401600060405180830381600087803b15801561090d57600080fd5b505af1158015610921573d6000803e3d6000fd5b505050505b604051828152879033907f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549060200160405180910390a350505050505050565b600082815260066020908152604080832033845290915281208054828255600182018390556005805492939192869081106109a3576109a3612248565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1690508015610a6a576040517f44af0fa70000000000000000000000000000000000000000000000000000000081526004810186905233602482015273ffffffffffffffffffffffffffffffffffffffff858116604483015260006064830181905260848301528216906344af0fa79060a401600060405180830381600087803b158015610a5157600080fd5b505af1158015610a65573d6000803e3d6000fd5b505050505b610a8284836004888154811061059557610595612248565b8373ffffffffffffffffffffffffffffffffffffffff16853373ffffffffffffffffffffffffffffffffffffffff167f2cac5e20e1541d836381527a43f651851e302817b71dc8e810284e69210c1c6b85604051610ae291815260200190565b60405180910390a45050505050565b610b1560405180606001604052806000815260200160008152602001600081525090565b60038281548110610b2857610b28612248565b600091825260209182902060408051606081018252600390930290910180548352600181015493830184905260020154908201529150421115610d1d57600060048381548110610b7a57610b7a612248565b6000918252602090912001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015610bf1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c159190612277565b90508015610c8e576000826020015142610c2f9190612231565b90506000600754846040015160085484610c499190612145565b610c539190612145565b610c5d9190612182565b905082610c6f64e8d4a5100083612145565b610c799190612182565b84518590610c88908390612290565b90525050505b4260208301526003805483919085908110610cab57610cab612248565b600091825260209182902083516003929092020190815582820151600182015560409283015160029091015583810151845183519182529181018490529182015283907fcb7325664a4a3b7c7223eefc492a97ca4fdf94d46884621e5a8fae5a04b2b9d29060600160405180910390a2505b919050565b8060005b81811015610d6057610d4f848483818110610d4357610d43612248565b90506020020135610af1565b50610d59816122a8565b9050610d26565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610de7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106ab565b60088190556040518181527fde89cb17ac7f58f94792b3e91e086ed85403819c24ceea882491f960ccb1a2789060200160405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ea3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106ab565b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60048181548110610f2257600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60005473ffffffffffffffffffffffffffffffffffffffff163314610fca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106ab565b8260038581548110610fde57610fde612248565b906000526020600020906003020160020154600754610ffd9190612231565b6110079190612290565b600781905550826003858154811061102157611021612248565b906000526020600020906003020160020181905550801561109957816005858154811061105057611050612248565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b806110d857600584815481106110b1576110b1612248565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff166110da565b815b73ffffffffffffffffffffffffffffffffffffffff16847f95895a6ab1df54420d241b55243258a33e61b2194db66c1179ec521aae8e1865858460405161112d9291909182521515602082015260400190565b60405180910390a350505050565b600061114684610af1565b600085815260066020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281208054929350918591839161118a908490612290565b9091555050815164e8d4a51000906111a29086612145565b6111ac9190612182565b8160010160008282546111bf91906122e0565b925050819055506000600586815481106111db576111db612248565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905080156112a75781546040517f44af0fa70000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff868116602483018190526044830152600060648301526084820192909252908216906344af0fa79060a401600060405180830381600087803b15801561128e57600080fd5b505af11580156112a2573d6000803e3d6000fd5b505050505b6112ea33308760048a815481106112c0576112c0612248565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16929190611d16565b8373ffffffffffffffffffffffffffffffffffffffff16863373ffffffffffffffffffffffffffffffffffffffff167f02d7e648dd130fc184d383e55bb126ac4c9c60e8f94bf05acdf557ba2d540b478860405161061e91815260200190565b6000806003848154811061136057611360612248565b600091825260208083206040805160608101825260039094029091018054845260018101548484015260020154838201528784526006825280842073ffffffffffffffffffffffffffffffffffffffff88168552909152822081516004805493955091939092909190889081106113d9576113d9612248565b6000918252602090912001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015611450573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114749190612277565b905083602001514211801561148857508015155b156114f857600084602001514261149f9190612231565b905060006007548660400151600854846114b99190612145565b6114c39190612145565b6114cd9190612182565b9050826114df64e8d4a5100083612145565b6114e99190612182565b6114f39085612290565b935050505b6001830154835464e8d4a5100090611511908590612145565b61151b9190612182565b61152591906121bd565b979650505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146115b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106ab565b6115ba82611d74565b82600760008282546115cc9190612290565b909155505060048054600181810183557f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b909101805473ffffffffffffffffffffffffffffffffffffffff8087167fffffffffffffffffffffffff00000000000000000000000000000000000000009283168117909355600580548086019091557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db001805491871691909216811790915560408051606081018252600080825242602083019081529282018a8152600380548089018255928190529251919092027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b81019190915591517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c830155517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d909101559254909161172d91612231565b6040518681527f81ee0f8c5c46e2cb41984886f77a84181724abb86c32a5f6de539b07509d45e59060200160405180910390a4505050565b60058181548110610f2257600080fd5b600061178084610af1565b6000858152600660209081526040808320338452909152812082518154939450909264e8d4a51000916117b291612145565b6117bc9190612182565b905060008260010154826117d091906121bd565b845190915064e8d4a51000906117e69088612145565b6117f09190612182565b6117fa90836121bd565b6001840155825486908490600090611813908490612231565b90915550506002546040517fd66e57cd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152602482018490529091169063d66e57cd90604401600060405180830381600087803b15801561188c57600080fd5b505af11580156118a0573d6000803e3d6000fd5b505050506000600588815481106118b9576118b9612248565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905080156119845783546040517f44af0fa7000000000000000000000000000000000000000000000000000000008152600481018a905233602482015273ffffffffffffffffffffffffffffffffffffffff8881166044830152606482018590526084820192909252908216906344af0fa79060a401600060405180830381600087803b15801561196b57600080fd5b505af115801561197f573d6000803e3d6000fd5b505050505b61199c868860048b8154811061059557610595612248565b8573ffffffffffffffffffffffffffffffffffffffff16883373ffffffffffffffffffffffffffffffffffffffff167f8166bf25f8a2b7ed3c85049207da4358d16edbed977d23fa2ee6f0dde3ec21328a6040516119fc91815260200190565b60405180910390a4604051828152889033907f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549060200160405180910390a35050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611ac6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106ab565b73ffffffffffffffffffffffffffffffffffffffff8116611b69576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016106ab565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60035460005b81811015611c3d57600081815260066020908152604080832033845290915290205415611c2d57611c2d8184610756565b611c36816122a8565b9050611bfc565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611c3d9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611e45565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610d609085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611c94565b60035460005b81811015611c3d578273ffffffffffffffffffffffffffffffffffffffff1660048281548110611dac57611dac612248565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1603611e35576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6164643a206578697374696e6720706f6f6c3f0000000000000000000000000060448201526064016106ab565b611e3e816122a8565b9050611d7a565b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051611e6d9190612354565b6000604051808303816000865af19150503d8060008114611eaa576040519150601f19603f3d011682016040523d82523d6000602084013e611eaf565b606091505b50909250905081611ec4573d6000803e3d6000fd5b80511580611ee1575080806020019051810190611ee1919061238f565b610d60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f534146455f45524332305f43414c4c5f4641494c45440000000000000000000060448201526064016106ab565b73ffffffffffffffffffffffffffffffffffffffff81168114611f6957600080fd5b50565b600080600060608486031215611f8157600080fd5b83359250602084013591506040840135611f9a81611f47565b809150509250925092565b600060208284031215611fb757600080fd5b8135611fc281611f47565b9392505050565b600060208284031215611fdb57600080fd5b5035919050565b60008060408385031215611ff557600080fd5b82359150602083013561200781611f47565b809150509250929050565b6000806020838503121561202557600080fd5b823567ffffffffffffffff8082111561203d57600080fd5b818501915085601f83011261205157600080fd5b81358181111561206057600080fd5b8660208260051b850101111561207557600080fd5b60209290920196919550909350505050565b8015158114611f6957600080fd5b600080600080608085870312156120ab57600080fd5b843593506020850135925060408501356120c481611f47565b915060608501356120d481612087565b939692955090935050565b6000806000606084860312156120f457600080fd5b83359250602084013561210681611f47565b91506040840135611f9a81611f47565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561217d5761217d612116565b500290565b6000826121b8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000808312837f8000000000000000000000000000000000000000000000000000000000000000018312811516156121f7576121f7612116565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01831381161561222b5761222b612116565b50500390565b60008282101561224357612243612116565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561228957600080fd5b5051919050565b600082198211156122a3576122a3612116565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036122d9576122d9612116565b5060010190565b6000808212827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0384138115161561231a5761231a612116565b827f800000000000000000000000000000000000000000000000000000000000000003841281161561234e5761234e612116565b50500190565b6000825160005b81811015612375576020818601810151858301520161235b565b81811115612384576000828501525b509190910192915050565b6000602082840312156123a157600080fd5b8151611fc28161208756fea2646970667358221220dce147cc0c314c76770b2d980ee81add579ca7625941536031f82a4671b9dd9c64736f6c634300080d0033";

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
