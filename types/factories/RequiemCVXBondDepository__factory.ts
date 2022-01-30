/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RequiemCVXBondDepository,
  RequiemCVXBondDepositoryInterface,
} from "../RequiemCVXBondDepository";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_REQT",
        type: "address",
      },
      {
        internalType: "address",
        name: "_principal",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "address",
        name: "_DAO",
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
        indexed: false,
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "priceInUSD",
        type: "uint256",
      },
    ],
    name: "BondCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "internalPrice",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "debtRatio",
        type: "uint256",
      },
    ],
    name: "BondPriceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "remaining",
        type: "uint256",
      },
    ],
    name: "BondRedeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "initialBCV",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBCV",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "adjustment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "addition",
        type: "bool",
      },
    ],
    name: "ControlVariableAdjustment",
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
    name: "OwnershipPulled",
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
    name: "OwnershipPushed",
    type: "event",
  },
  {
    inputs: [],
    name: "DAO",
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
    inputs: [],
    name: "REQT",
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
    inputs: [],
    name: "adjustment",
    outputs: [
      {
        internalType: "bool",
        name: "add",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "target",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "buffer",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastBlock",
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
        name: "",
        type: "address",
      },
    ],
    name: "bondInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vesting",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePaid",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bondPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "price_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentDebt",
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
    inputs: [],
    name: "debtDecay",
    outputs: [
      {
        internalType: "uint256",
        name: "decay_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "debtRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "debtRatio_",
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
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_controlVariable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_vestingTerm",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minimumPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxPayout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initialDebt",
        type: "uint256",
      },
    ],
    name: "initializeBondTerms",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastDecay",
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
    inputs: [],
    name: "maxPayout",
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
        name: "_value",
        type: "uint256",
      },
    ],
    name: "payoutFor",
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
        name: "_depositor",
        type: "address",
      },
    ],
    name: "pendingPayoutFor",
    outputs: [
      {
        internalType: "uint256",
        name: "pendingPayout_",
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
        name: "_depositor",
        type: "address",
      },
    ],
    name: "percentVestedFor",
    outputs: [
      {
        internalType: "uint256",
        name: "percentVested_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "policy",
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
    inputs: [],
    name: "principal",
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
    inputs: [],
    name: "pullManagement",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "pushManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "recoverLostToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_stake",
        type: "bool",
      },
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_addition",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_increment",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_target",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_buffer",
        type: "uint256",
      },
    ],
    name: "setAdjustment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum RequiemCVXBondDepository.PARAMETER",
        name: "_parameter",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_input",
        type: "uint256",
      },
    ],
    name: "setBondTerms",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_helper",
        type: "bool",
      },
    ],
    name: "setStaking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "staking",
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
    inputs: [],
    name: "stakingHelper",
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
    inputs: [],
    name: "terms",
    outputs: [
      {
        internalType: "uint256",
        name: "controlVariable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vestingTerm",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minimumPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPayout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDebt",
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
    inputs: [],
    name: "treasury",
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
    inputs: [],
    name: "useHelper",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b506040516200231038038062002310833981016040819052620000359162000109565b600080546001600160a01b0319163390811782556040519091907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a36001600160a01b0384166200008857600080fd5b6001600160a01b038085166080528316620000a257600080fd5b6001600160a01b0380841660a0528216620000bc57600080fd5b6001600160a01b0380831660c0528116620000d657600080fd5b6001600160a01b031660e0525062000166915050565b80516001600160a01b03811681146200010457600080fd5b919050565b600080600080608085870312156200012057600080fd5b6200012b85620000ec565b93506200013b60208601620000ec565b92506200014b60408601620000ec565b91506200015b60608601620000ec565b905092959194509250565b60805160a05160c05160e051612115620001fb600039600081816103cf015261120c01526000818161035401528181610e6a01528181610fa20152610fe301526000818161040901528181610e3801528181610f7f01526111b6015260008181610215015281816111770152818161129f01528181611433015281816115cd01528181611634015261173801526121156000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c806377b818951161010f578063cea55f57116100a2578063e0176de811610071578063e0176de8146104e5578063e392a262146104ed578063f5c2ab5b146104f5578063fc7b9c18146104fe57600080fd5b8063cea55f5714610480578063d4d863ce14610488578063d50256251461049b578063d7ccfb0b146104dd57600080fd5b806398fabd3a116100de57806398fabd3a146103ca578063b4abccba146103f1578063ba5d307814610404578063cd1234b31461042b57600080fd5b806377b818951461037e5780637927ebf8146103915780637b261727146103a45780638dbdbe6d146103b757600080fd5b80632f3f470a11610187578063507930ec11610156578063507930ec146103345780635a96ac0a1461034757806361d027b31461034f578063759076e51461037657600080fd5b80632f3f470a146102a3578063451ee4a1146102c757806346f68ee91461030e5780634cf088d91461032157600080fd5b8063089208d8116101c3578063089208d8146102605780631a3d00681461026a5780631e321a0f1461027d5780631feed31f1461029057600080fd5b806301b88ee8146101ea57806302bb41e5146102105780630505c8c91461024f575b600080fd5b6101fd6101f8366004611e01565b610507565b6040519081526020015b60405180910390f35b6102377f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610207565b6000546001600160a01b0316610237565b610268610560565b005b610268610278366004611e2a565b6105dd565b61026861028b366004611e65565b6106ad565b6101fd61029e366004611e95565b6107eb565b6003546102b790600160a01b900460ff1681565b6040519015158152602001610207565b600954600a54600b54600c54600d546102e49460ff169392919085565b6040805195151586526020860194909452928401919091526060830152608082015260a001610207565b61026861031c366004611e01565b6109d5565b600254610237906001600160a01b031681565b6101fd610342366004611e01565b610abf565b610268610b45565b6102377f000000000000000000000000000000000000000000000000000000000000000081565b6101fd610c0b565b600354610237906001600160a01b031681565b6101fd61039f366004611ecc565b610c26565b6102686103b2366004611ee5565b610c4b565b6101fd6103c5366004611f28565b610d1c565b6102377f000000000000000000000000000000000000000000000000000000000000000081565b6102b76103ff366004611e01565b611173565b6102377f000000000000000000000000000000000000000000000000000000000000000081565b610460610439366004611e01565b600e6020526000908152604090208054600182015460028301546003909301549192909184565b604080519485526020850193909352918301526060820152608001610207565b6101fd61129a565b610268610496366004611e95565b611355565b6004546005546006546007546008546104b5949392919085565b604080519586526020860194909452928401919091526060830152608082015260a001610207565b6101fd6113ed565b6101fd61141f565b6101fd6114b3565b6101fd60105481565b6101fd600f5481565b60008061051383610abf565b6001600160a01b0384166000908152600e6020526040902054909150612710821061054057809250610559565b61055661271061055083856114f8565b90611577565b92505b5050919050565b6000546001600160a01b031633146105935760405162461bcd60e51b815260040161058a90611f5d565b60405180910390fd5b600080546040516001600160a01b03909116907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908390a3600080546001600160a01b0319169055565b6000546001600160a01b031633146106075760405162461bcd60e51b815260040161058a90611f5d565b60045461061d906103e8906105509060196114f8565b8311156106625760405162461bcd60e51b8152602060048201526013602482015272496e6372656d656e7420746f6f206c6172676560681b604482015260640161058a565b6040805160a08101825294151580865260208601859052908501839052606085018290524360809095018590526009805460ff19169091179055600a92909255600b55600c55600d55565b6000546001600160a01b031633146106d75760405162461bcd60e51b815260040161058a90611f5d565b60008260028111156106eb576106eb611f92565b14156107555761271081101561074f5760405162461bcd60e51b8152602060048201526024808201527f56657374696e67206d757374206265206c6f6e676572207468616e20333620686044820152636f75727360e01b606482015260840161058a565b60055550565b600182600281111561076957610769611f92565b14156107c7576103e88111156107c15760405162461bcd60e51b815260206004820181905260248201527f5061796f75742063616e6e6f742062652061626f766520312070657263656e74604482015260640161058a565b60075550565b60028260028111156107db576107db611f92565b14156107e75760088190555b5050565b6001600160a01b0382166000908152600e602090815260408083208151608081018352815481526001820154938101939093526002810154918301919091526003015460608201528161083d85610abf565b905061271081106108cf576001600160a01b0385166000818152600e60205260408082208281556001810183905560028101839055600301829055845190517f51c99f515c87b0d95ba97f616edd182e8f161c4932eac17c6fefe9dab58b77b1926108af928252602082015260400190565b60405180910390a26108c6858584600001516115b9565b925050506109cf565b81516000906108e6906127109061055090856114f8565b9050604051806080016040528061090a83866000015161182890919063ffffffff16565b815260200161093461092986604001514361182890919063ffffffff16565b602087015190611828565b8152436020808301919091526060868101516040938401526001600160a01b038a166000818152600e8452849020855180825586850151600183015586860151600283015595909201516003909201919091558251858152918201939093527f51c99f515c87b0d95ba97f616edd182e8f161c4932eac17c6fefe9dab58b77b1910160405180910390a26109c98686836115b9565b93505050505b92915050565b6000546001600160a01b031633146109ff5760405162461bcd60e51b815260040161058a90611f5d565b6001600160a01b038116610a645760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161058a565b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0381166000908152600e6020908152604080832081516080810183528154815260018201549381019390935260028101549183018290526003015460608301528290610b13904390611828565b60208301519091508015610b3857610b3181610550846127106114f8565b9350610b3d565b600093505b505050919050565b6001546001600160a01b03163314610baa5760405162461bcd60e51b815260206004820152602260248201527f4f776e61626c653a206d757374206265206e6577206f776e657220746f2070756044820152611b1b60f21b606482015260840161058a565b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a3600154600080546001600160a01b0319166001600160a01b03909216919091179055565b6000610c21610c186114b3565b600f5490611828565b905090565b60006109cf655af3107a4000610550610c4685610c416113ed565b61186a565b6119a5565b6000546001600160a01b03163314610c755760405162461bcd60e51b815260040161058a90611f5d565b610c7d610c0b565b15610cd45760405162461bcd60e51b815260206004820152602160248201527f44656274206d757374206265203020666f7220696e697469616c697a6174696f6044820152603760f91b606482015260840161058a565b6040805160a0810182528781526020810187905290810185905260608101849052608001829052600495909555600593909355600691909155600755600855600f5543601055565b60006001600160a01b038216610d665760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b604482015260640161058a565b610d6e6119c5565b600854600f541115610db95760405162461bcd60e51b815260206004820152601460248201527313585e0818d85c1858da5d1e481c995858da195960621b604482015260640161058a565b6000610dc36119d9565b905080841015610e215760405162461bcd60e51b815260206004820152602360248201527f536c697070616765206c696d69743a206d6f7265207468616e206d617820707260448201526269636560e81b606482015260840161058a565b604051630f762d4d60e11b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018790526000917f000000000000000000000000000000000000000000000000000000000000000090911690631eec5a9a90604401602060405180830381865afa158015610eb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed79190611fa8565b90506000610ee482610c26565b905062989680811015610f2a5760405162461bcd60e51b815260206004820152600e60248201526d109bdb99081d1bdbc81cdb585b1b60921b604482015260640161058a565b610f3261141f565b811115610f725760405162461bcd60e51b815260206004820152600e60248201526d426f6e6420746f6f206c6172676560901b604482015260640161058a565b610fc76001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016337f00000000000000000000000000000000000000000000000000000000000000008a611a11565b6040516335106f4960e11b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636a20de9290604401600060405180830381600087803b15801561102f57600080fd5b505af1158015611043573d6000803e3d6000fd5b5050600f546110559250905083611a82565b600f55604080516080810182526001600160a01b0387166000908152600e602052919091205481906110879084611a82565b81526005805460208084019190915243604080850182905260609485018990526001600160a01b038b166000908152600e845281902086518155928601516001840155850151600283015593909201516003909201919091555484916110ec91611a82565b827f1fec6dc81f140574bf43f6b1e420ae1dd47928b9d57db8cbd7b8611063b85ae58a60405161111e91815260200190565b60405180910390a461112e61129a565b6111366119d9565b6040517f2cb17bd1fd2a1fecfefae2de1e6a59194abaa62179652924ccdca01617f0bf1690600090a3611167611ae1565b925050505b9392505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614156111b457600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614156111f357600080fd5b6040516370a0823160e01b8152306004820152611292907f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b038516906370a0823190602401602060405180830381865afa15801561125d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112819190611fa8565b6001600160a01b0385169190611bc2565b506001919050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131f9190611fa8565b905061134f670de0b6b3a7640000610550610c46611349633b9aca00611343610c0b565b906114f8565b8561186a565b91505090565b6000546001600160a01b0316331461137f5760405162461bcd60e51b815260040161058a90611f5d565b6001600160a01b03821661139257600080fd5b80156113bf57600380546001600160a01b0384166001600160a81b031990911617600160a01b1790555050565b6003805460ff60a01b19169055600280546001600160a01b0384166001600160a01b03199091161790555050565b600061140a620186a061055061140161129a565b600454906114f8565b60065490915081101561141c57506006545b90565b6000610c21620186a06105506004600301547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561148f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113439190611fa8565b6000806114cb6010544361182890919063ffffffff16565b600554600f549192506114e29161055090846114f8565b9150600f548211156114f457600f5491505b5090565b600082611507575060006109cf565b60006115138385611fd7565b9050826115208583611ff6565b1461116c5760405162461bcd60e51b815260206004820152602160248201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6044820152607760f81b606482015260840161058a565b600061116c83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611bf7565b6000826115f9576115f46001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168584611bc2565b611821565b600354600160a01b900460ff161561170f5760035460405163095ea7b360e01b81526001600160a01b039182166004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af115801561167f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a39190612018565b50600354604051637acb775760e01b8152600481018490526001600160a01b03868116602483015290911690637acb775790604401600060405180830381600087803b1580156116f257600080fd5b505af1158015611706573d6000803e3d6000fd5b50505050611821565b60025460405163095ea7b360e01b81526001600160a01b039182166004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af1158015611783573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a79190612018565b50600254604051637acb775760e01b8152600481018490526001600160a01b03868116602483015290911690637acb7757906044016020604051808303816000875af11580156117fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061181f9190612018565b505b5092915050565b600061116c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611c2e565b604080516020810190915260008152600082116118d85760405162461bcd60e51b815260206004820152602660248201527f4669786564506f696e743a3a6672616374696f6e3a206469766973696f6e206260448201526579207a65726f60d01b606482015260840161058a565b826118f257506040805160208101909152600081526109cf565b71ffffffffffffffffffffffffffffffffffff831161199457600061191b83607086901b611ff6565b90506001600160e01b038111156119745760405162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015260640161058a565b6040518060200160405280826001600160e01b03168152509150506109cf565b600061191b84600160701b85611c5f565b80516000906109cf906612725dd1d243ab906001600160e01b0316611ff6565b6119d0610c186114b3565b600f5543601055565b60006119ed620186a061055061140161129a565b600654909150811015611a01575060065490565b6006541561141c57600060065590565b6040516001600160a01b0380851660248301528316604482015260648101829052611a7c9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611d0e565b50505050565b600080611a8f8385612035565b90508381101561116c5760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015260640161058a565b600c54600d54600091611af49190611a82565b600a5490915015801590611b085750804310155b15611bbf5760045460095460ff1615611b4257600a54600454611b2a91611a82565b6004819055600b5411611b3d576000600a555b611b64565b600a54600454611b5191611828565b6004819055600b5410611b64576000600a555b43600d55600454600a5460095460408051858152602081019490945283019190915260ff16151560608201527fb923e581a0f83128e9e1d8297aa52b18d6744310476e0b54509c054cd7a93b2a9060800160405180910390a1505b50565b6040516001600160a01b038316602482015260448101829052611bf290849063a9059cbb60e01b90606401611a45565b505050565b60008183611c185760405162461bcd60e51b815260040161058a9190612079565b506000611c258486611ff6565b95945050505050565b60008184841115611c525760405162461bcd60e51b815260040161058a9190612079565b506000611c2584866120ac565b600080806000198587098587029250828110838203039150508060001415611c995760008411611c8e57600080fd5b50829004905061116c565b808411611ca557600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b600080836001600160a01b031683604051611d2991906120c3565b6000604051808303816000865af19150503d8060008114611d66576040519150601f19603f3d011682016040523d82523d6000602084013e611d6b565b606091505b50915091506000821415611d83573d6000803e3d6000fd5b80511580611da0575080806020019051810190611da09190612018565b611a7c5760405162461bcd60e51b815260206004820152601660248201527514d0519157d15490cc8c17d0d0531317d1905253115160521b604482015260640161058a565b80356001600160a01b0381168114611dfc57600080fd5b919050565b600060208284031215611e1357600080fd5b61116c82611de5565b8015158114611bbf57600080fd5b60008060008060808587031215611e4057600080fd5b8435611e4b81611e1c565b966020860135965060408601359560600135945092505050565b60008060408385031215611e7857600080fd5b823560038110611e8757600080fd5b946020939093013593505050565b60008060408385031215611ea857600080fd5b611eb183611de5565b91506020830135611ec181611e1c565b809150509250929050565b600060208284031215611ede57600080fd5b5035919050565b60008060008060008060c08789031215611efe57600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600060608486031215611f3d57600080fd5b8335925060208401359150611f5460408501611de5565b90509250925092565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052602160045260246000fd5b600060208284031215611fba57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611ff157611ff1611fc1565b500290565b60008261201357634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561202a57600080fd5b815161116c81611e1c565b6000821982111561204857612048611fc1565b500190565b60005b83811015612068578181015183820152602001612050565b83811115611a7c5750506000910152565b602081526000825180602084015261209881604085016020870161204d565b601f01601f19169190910160400192915050565b6000828210156120be576120be611fc1565b500390565b600082516120d581846020870161204d565b919091019291505056fea264697066735822122069ede8a1804d351c852c11e8c9d6b444fe7ed836d6f2bca2192126419dbb583e64736f6c634300080b0033";

export class RequiemCVXBondDepository__factory extends ContractFactory {
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
    _REQT: string,
    _principal: string,
    _treasury: string,
    _DAO: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequiemCVXBondDepository> {
    return super.deploy(
      _REQT,
      _principal,
      _treasury,
      _DAO,
      overrides || {}
    ) as Promise<RequiemCVXBondDepository>;
  }
  getDeployTransaction(
    _REQT: string,
    _principal: string,
    _treasury: string,
    _DAO: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _REQT,
      _principal,
      _treasury,
      _DAO,
      overrides || {}
    );
  }
  attach(address: string): RequiemCVXBondDepository {
    return super.attach(address) as RequiemCVXBondDepository;
  }
  connect(signer: Signer): RequiemCVXBondDepository__factory {
    return super.connect(signer) as RequiemCVXBondDepository__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemCVXBondDepositoryInterface {
    return new utils.Interface(_abi) as RequiemCVXBondDepositoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemCVXBondDepository {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RequiemCVXBondDepository;
  }
}
