/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RequiemQBondStableDepository,
  RequiemQBondStableDepositoryInterface,
} from "../RequiemQBondStableDepository";

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
      {
        internalType: "address",
        name: "_bondCalculator",
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
        name: "priceInUSD",
        type: "uint256",
      },
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
    inputs: [],
    name: "bondCalculator",
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
    name: "bondPriceInUSD",
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
        name: "_fee",
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
    name: "isLiquidityBond",
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
        internalType: "enum RequiemQBondStableDepository.PARAMETER",
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
    name: "standardizedDebtRatio",
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
        name: "fee",
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
  {
    inputs: [],
    name: "viewBondData",
    outputs: [
      {
        internalType: "uint256",
        name: "_bondPrice_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bondPriceInUsd_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_currentDebt_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b5060405162002b6138038062002b61833981016040819052620000359162000118565b600080546001600160a01b0319163390811782556040519091907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a36001600160a01b0385166200008857600080fd5b6001600160a01b038086166080528416620000a257600080fd5b6001600160a01b0380851660a0528316620000bc57600080fd5b6001600160a01b0380841660c0528216620000d657600080fd5b6001600160a01b0391821660e052166101208190521515610100525062000188915050565b80516001600160a01b03811681146200011357600080fd5b919050565b600080600080600060a086880312156200013157600080fd5b6200013c86620000fb565b94506200014c60208701620000fb565b93506200015c60408701620000fb565b92506200016c60608701620000fb565b91506200017c60808701620000fb565b90509295509295909350565b60805160a05160c05160e05161010051610120516128be620002a36000396000818161049a01528181610bd2015281816110ac01526118d401526000818161057c01528181610b6c0152818161104601526117e40152600081816104390152818161168101526119e80152600081816103ae01528181611321015281816114f401526115de01526000818161047301528181610ba701528181610c660152818161108101528181611139015281816112ef015281816114b501528181611523015281816115af0152818161180a015281816118ac015261199201526000818161024c0152818161165f0152818161195301528181611a7b01528181611c2d01528181611d2101528181611dcf0152611ed301526128be6000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c80637927ebf811610125578063cea55f57116100ad578063d7ccfb0b1161007c578063d7ccfb0b1461059e578063e0176de8146105a6578063e392a262146105ae578063f5c2ab5b146105b6578063fc7b9c18146105bf57600080fd5b8063cea55f5714610511578063d4d863ce14610519578063d50256251461052c578063d79690601461057757600080fd5b806398fabd3a116100f457806398fabd3a14610434578063b4abccba1461045b578063ba5d30781461046e578063c5332b7c14610495578063cd1234b3146104bc57600080fd5b80637927ebf8146103fe578063844b5c7c146104115780638dbdbe6d14610419578063904b3ece1461042c57600080fd5b8063451ee4a1116101a85780635a96ac0a116101775780635a96ac0a146103a157806361d027b3146103a957806371535008146103d0578063759076e5146103e357806377b81895146103eb57600080fd5b8063451ee4a11461032157806346f68ee9146103685780634cf088d91461037b578063507930ec1461038e57600080fd5b80631a3d0068116101ef5780631a3d0068146102a15780631e321a0f146102b45780631feed31f146102c75780632f3f470a146102da578063338e4d65146102fe57600080fd5b806301b88ee81461022157806302bb41e5146102475780630505c8c914610286578063089208d814610297575b600080fd5b61023461022f3660046124cb565b6105c8565b6040519081526020015b60405180910390f35b61026e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161023e565b6000546001600160a01b031661026e565b61029f610622565b005b61029f6102af3660046124f4565b61069f565b61029f6102c236600461252f565b610775565b6102346102d536600461255f565b610925565b6003546102ee90600160a01b900460ff1681565b604051901515815260200161023e565b610306610b0a565b6040805193845260208401929092529082015260600161023e565b600a54600b54600c54600d54600e5461033e9460ff169392919085565b6040805195151586526020860194909452928401919091526060830152608082015260a00161023e565b61029f6103763660046124cb565b610cf1565b60025461026e906001600160a01b031681565b61023461039c3660046124cb565b610ddb565b61029f610e67565b61026e7f000000000000000000000000000000000000000000000000000000000000000081565b61029f6103de366004612596565b610f2d565b610234610ff9565b60035461026e906001600160a01b031681565b61023461040c3660046125e2565b611015565b610234611042565b6102346104273660046125fb565b6111c7565b6102346117e0565b61026e7f000000000000000000000000000000000000000000000000000000000000000081565b6102ee6104693660046124cb565b61194f565b61026e7f000000000000000000000000000000000000000000000000000000000000000081565b61026e7f000000000000000000000000000000000000000000000000000000000000000081565b6104f16104ca3660046124cb565b600f6020526000908152604090208054600182015460028301546003909301549192909184565b60408051948552602085019390935291830152606082015260800161023e565b610234611a76565b61029f61052736600461255f565b611b38565b60045460055460065460075460085460095461054a95949392919086565b604080519687526020870195909552938501929092526060840152608083015260a082015260c00161023e565b6102ee7f000000000000000000000000000000000000000000000000000000000000000081565b610234611bd0565b610234611c1f565b610234611cad565b61023460115481565b61023460105481565b6000806105d483610ddb565b6001600160a01b0384166000908152600f602052604090205490915061271082106106015780925061061b565b61271061060e8383612646565b6106189190612665565b92505b5050919050565b6000546001600160a01b031633146106555760405162461bcd60e51b815260040161064c90612687565b60405180910390fd5b600080546040516001600160a01b03909116907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908390a3600080546001600160a01b0319169055565b6000546001600160a01b031633146106c95760405162461bcd60e51b815260040161064c90612687565b6004546103e8906106db906019612646565b6106e59190612665565b83111561072a5760405162461bcd60e51b8152602060048201526013602482015272496e6372656d656e7420746f6f206c6172676560681b604482015260640161064c565b6040805160a0810182529415158086526020860185905290850183905260608501829052436080909501859052600a805460ff19169091179055600b92909255600c55600d55600e55565b6000546001600160a01b0316331461079f5760405162461bcd60e51b815260040161064c90612687565b60008260038111156107b3576107b36126bc565b141561081d576127108110156108175760405162461bcd60e51b8152602060048201526024808201527f56657374696e67206d757374206265206c6f6e676572207468616e20333620686044820152636f75727360e01b606482015260840161064c565b60055550565b6001826003811115610831576108316126bc565b141561088f576103e88111156108895760405162461bcd60e51b815260206004820181905260248201527f5061796f75742063616e6e6f742062652061626f766520312070657263656e74604482015260640161064c565b60075550565b60028260038111156108a3576108a36126bc565b1415610901576127108111156108fb5760405162461bcd60e51b815260206004820152601c60248201527f44414f206665652063616e6e6f7420657863656564207061796f757400000000604482015260640161064c565b60085550565b6003826003811115610915576109156126bc565b14156109215760098190555b5050565b6001600160a01b0382166000908152600f602090815260408083208151608081018352815481526001820154938101939093526002810154918301919091526003015460608201528161097785610ddb565b90506127108110610a09576001600160a01b0385166000818152600f60205260408082208281556001810183905560028101839055600301829055845190517f51c99f515c87b0d95ba97f616edd182e8f161c4932eac17c6fefe9dab58b77b1926109e9928252602082015260400190565b60405180910390a2610a0085858460000151611cf4565b92505050610b04565b6000612710828460000151610a1e9190612646565b610a289190612665565b90506040518060800160405280828560000151610a4591906126d2565b8152602001846040015143610a5a91906126d2565b8560200151610a6991906126d2565b8152436020808301919091526060868101516040938401526001600160a01b038a166000818152600f8452849020855180825586850151600183015586860151600283015595909201516003909201919091558251858152918201939093527f51c99f515c87b0d95ba97f616edd182e8f161c4932eac17c6fefe9dab58b77b1910160405180910390a2610afe868683611cf4565b93505050505b92915050565b6000806000610b17611cad565b601054610b2491906126d2565b905062989680610b32611a76565b600454610b3f9190612646565b610b4d90633b9aca006126e9565b610b579190612665565b600654909350831015610b6a5760065492505b7f000000000000000000000000000000000000000000000000000000000000000015610c62576040516332da80a360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526064917f0000000000000000000000000000000000000000000000000000000000000000909116906332da80a390602401602060405180830381865afa158015610c1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3f9190612701565b610c47611bd0565b610c519190612646565b610c5b9190612665565b9150909192565b60647f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce6919061271a565b610c3f90600a612821565b6000546001600160a01b03163314610d1b5760405162461bcd60e51b815260040161064c90612687565b6001600160a01b038116610d805760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161064c565b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0381166000908152600f6020908152604080832081516080810183528154815260018201549381019390935260028101549183018290526003015460608301528290610e2e90436126d2565b60208301519091508015610e5a5780610e4983612710612646565b610e539190612665565b9350610e5f565b600093505b505050919050565b6001546001600160a01b03163314610ecc5760405162461bcd60e51b815260206004820152602260248201527f4f776e61626c653a206d757374206265206e6577206f776e657220746f2070756044820152611b1b60f21b606482015260840161064c565b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a3600154600080546001600160a01b0319166001600160a01b03909216919091179055565b6000546001600160a01b03163314610f575760405162461bcd60e51b815260040161064c90612687565b60045415610fa75760405162461bcd60e51b815260206004820181905260248201527f426f6e6473206d75737420626520696e697469616c697a65642066726f6d2030604482015260640161064c565b6040805160c08101825288815260208101889052908101869052606081018590526080810184905260a00182905260049690965560059490945560069290925560075560085560095560105543601155565b6000611003611cad565b60105461101091906126d2565b905090565b6000662386f26fc100006110386110338461102e611bd0565b611fc3565b6120fe565b610b049190612665565b60007f000000000000000000000000000000000000000000000000000000000000000015611135576040516332da80a360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526064917f0000000000000000000000000000000000000000000000000000000000000000909116906332da80a390602401602060405180830381865afa1580156110f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111199190612701565b611121611bd0565b61112b9190612646565b6110109190612665565b60647f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611195573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b9919061271a565b61111990600a612821565b90565b60006001600160a01b0382166112115760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b604482015260640161064c565b61121961211e565b60095460105411156112645760405162461bcd60e51b815260206004820152601460248201527313585e0818d85c1858da5d1e481c995858da195960621b604482015260640161064c565b600061126e611042565b9050600061127a612142565b9050808510156112d85760405162461bcd60e51b815260206004820152602360248201527f536c697070616765206c696d69743a206d6f7265207468616e206d617820707260448201526269636560e81b606482015260840161064c565b604051630f762d4d60e11b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018890526000917f000000000000000000000000000000000000000000000000000000000000000090911690631eec5a9a90604401602060405180830381865afa15801561136a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138e9190612701565b9050600061139b82611015565b9050662386f26fc100008110156113e55760405162461bcd60e51b815260206004820152600e60248201526d109bdb99081d1bdbc81cdb585b1b60921b604482015260640161064c565b6113ed611c1f565b81111561142d5760405162461bcd60e51b815260206004820152600e60248201526d426f6e6420746f6f206c6172676560901b604482015260640161064c565b600854600090612710906114419084612646565b61144b9190612665565b90508183101561148f5760405162461bcd60e51b815260206004820152600f60248201526e7061796f757420746f206c6172676560881b604482015260640161064c565b60008161149c84866126d2565b6114a691906126d2565b90506114dd6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308d6121a1565b60405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018c90527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af115801561156c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115909190612830565b5060405163bc157ac160e01b8152600481018b90526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166024830152604482018390527f0000000000000000000000000000000000000000000000000000000000000000169063bc157ac1906064016020604051808303816000875af1158015611627573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061164b9190612701565b5081156116a6576116a66001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000084612212565b836010546116b491906126e9565b601055604080516080810182526001600160a01b038a166000908152600f602052919091205481906116e79086906126e9565b81526005805460208084019190915243604080850182905260609485018c90526001600160a01b038e166000908152600f8452819020865181559286015160018401558501516002830155939092015160039092019190915554879161174d91906126e9565b847f1fec6dc81f140574bf43f6b1e420ae1dd47928b9d57db8cbd7b8611063b85ae58d60405161177f91815260200190565b60405180910390a461178f611a76565b611797612142565b61179f611042565b6040517f375b221f40939bfd8f49723a17cf7bc6d576ebf72efe2cc3e991826f5b3f390a90600090a46117d0612247565b50909450505050505b9392505050565b60007f000000000000000000000000000000000000000000000000000000000000000015611947577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611866573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061188a919061271a565b61189590600a612821565b6040516332da80a360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301527f000000000000000000000000000000000000000000000000000000000000000016906332da80a390602401602060405180830381865afa15801561191b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061193f9190612701565b611121611a76565b611010611a76565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316141561199057600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614156119cf57600080fd5b6040516370a0823160e01b8152306004820152611a6e907f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611a39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a5d9190612701565b6001600160a01b0385169190612212565b506001919050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611ad7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611afb9190612701565b9050670de0b6b3a7640000611b28611033611b14610ff9565b611b2290633b9aca00612646565b84611fc3565b611b329190612665565b91505090565b6000546001600160a01b03163314611b625760405162461bcd60e51b815260040161064c90612687565b6001600160a01b038216611b7557600080fd5b8015611ba257600380546001600160a01b0384166001600160a81b031990911617600160a01b1790555050565b6003805460ff60a01b19169055600280546001600160a01b0384166001600160a01b03199091161790555050565b6000662386f26fc10000611be2611a76565b600454611bef9190612646565b611c0190670de0b6b3a76400006126e9565b611c0b9190612665565b6006549091508110156111c4575060065490565b6000620186a06004600301547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611c89573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111219190612701565b60008060115443611cbe91906126d2565b905060046001015481601054611cd49190612646565b611cde9190612665565b9150601054821115611cf05760105491505b5090565b600082611d945760405163a9059cbb60e01b81526001600160a01b038581166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015611d6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d8e9190612830565b50611fbc565b600354600160a01b900460ff1615611eaa5760035460405163095ea7b360e01b81526001600160a01b039182166004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af1158015611e1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e3e9190612830565b50600354604051637acb775760e01b8152600481018490526001600160a01b03868116602483015290911690637acb775790604401600060405180830381600087803b158015611e8d57600080fd5b505af1158015611ea1573d6000803e3d6000fd5b50505050611fbc565b60025460405163095ea7b360e01b81526001600160a01b039182166004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af1158015611f1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f429190612830565b50600254604051637acb775760e01b8152600481018490526001600160a01b03868116602483015290911690637acb7757906044016020604051808303816000875af1158015611f96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fba9190612830565b505b5092915050565b604080516020810190915260008152600082116120315760405162461bcd60e51b815260206004820152602660248201527f4669786564506f696e743a3a6672616374696f6e3a206469766973696f6e206260448201526579207a65726f60d01b606482015260840161064c565b8261204b5750604080516020810190915260008152610b04565b71ffffffffffffffffffffffffffffffffffff83116120ed57600061207483607086901b612665565b90506001600160e01b038111156120cd5760405162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015260640161064c565b6040518060200160405280826001600160e01b0316815250915050610b04565b600061207484600160701b85612329565b8051600090610b04906612725dd1d243ab906001600160e01b0316612665565b612126611cad565b6010600082825461213791906126d2565b909155505043601155565b6000662386f26fc10000612154611a76565b6004546121619190612646565b61217390670de0b6b3a76400006126e9565b61217d9190612665565b600654909150811015612191575060065490565b600654156111c457600060065590565b6040516001600160a01b038085166024830152831660448201526064810182905261220c9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526123d8565b50505050565b6040516001600160a01b03831660248201526044810182905261224290849063a9059cbb60e01b906064016121d5565b505050565b600d54600e54600091612259916126e9565b600b549091501580159061226d5750804310155b1561232657600454600a5460ff16156122a857600b5460045461229091906126e9565b6004819055600c54116122a3576000600b555b6122cb565b600b546004546122b891906126d2565b6004819055600c54106122cb576000600b555b43600e55600454600b54600a5460408051858152602081019490945283019190915260ff16151560608201527fb923e581a0f83128e9e1d8297aa52b18d6744310476e0b54509c054cd7a93b2a9060800160405180910390a1505b50565b600080806000198587098587029250828110838203039150508060001415612363576000841161235857600080fd5b5082900490506117d9565b80841161236f57600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b600080836001600160a01b0316836040516123f3919061284d565b6000604051808303816000865af19150503d8060008114612430576040519150601f19603f3d011682016040523d82523d6000602084013e612435565b606091505b5091509150600082141561244d573d6000803e3d6000fd5b8051158061246a57508080602001905181019061246a9190612830565b61220c5760405162461bcd60e51b815260206004820152601660248201527514d0519157d15490cc8c17d0d0531317d1905253115160521b604482015260640161064c565b80356001600160a01b03811681146124c657600080fd5b919050565b6000602082840312156124dd57600080fd5b6117d9826124af565b801515811461232657600080fd5b6000806000806080858703121561250a57600080fd5b8435612515816124e6565b966020860135965060408601359560600135945092505050565b6000806040838503121561254257600080fd5b82356004811061255157600080fd5b946020939093013593505050565b6000806040838503121561257257600080fd5b61257b836124af565b9150602083013561258b816124e6565b809150509250929050565b600080600080600080600060e0888a0312156125b157600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b6000602082840312156125f457600080fd5b5035919050565b60008060006060848603121561261057600080fd5b8335925060208401359150612627604085016124af565b90509250925092565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561266057612660612630565b500290565b60008261268257634e487b7160e01b600052601260045260246000fd5b500490565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052602160045260246000fd5b6000828210156126e4576126e4612630565b500390565b600082198211156126fc576126fc612630565b500190565b60006020828403121561271357600080fd5b5051919050565b60006020828403121561272c57600080fd5b815160ff811681146117d957600080fd5b600181815b8085111561277857816000190482111561275e5761275e612630565b8085161561276b57918102915b93841c9390800290612742565b509250929050565b60008261278f57506001610b04565b8161279c57506000610b04565b81600181146127b257600281146127bc576127d8565b6001915050610b04565b60ff8411156127cd576127cd612630565b50506001821b610b04565b5060208310610133831016604e8410600b84101617156127fb575081810a610b04565b612805838361273d565b806000190482111561281957612819612630565b029392505050565b60006117d960ff841683612780565b60006020828403121561284257600080fd5b81516117d9816124e6565b6000825160005b8181101561286e5760208186018101518583015201612854565b8181111561287d576000828501525b50919091019291505056fea2646970667358221220be96235f3f89e8feafaf1ffee4eeb359ba08bc06661b8296604474f6905ad28564736f6c634300080b0033";

export class RequiemQBondStableDepository__factory extends ContractFactory {
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
    _bondCalculator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequiemQBondStableDepository> {
    return super.deploy(
      _REQT,
      _principal,
      _treasury,
      _DAO,
      _bondCalculator,
      overrides || {}
    ) as Promise<RequiemQBondStableDepository>;
  }
  getDeployTransaction(
    _REQT: string,
    _principal: string,
    _treasury: string,
    _DAO: string,
    _bondCalculator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _REQT,
      _principal,
      _treasury,
      _DAO,
      _bondCalculator,
      overrides || {}
    );
  }
  attach(address: string): RequiemQBondStableDepository {
    return super.attach(address) as RequiemQBondStableDepository;
  }
  connect(signer: Signer): RequiemQBondStableDepository__factory {
    return super.connect(signer) as RequiemQBondStableDepository__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemQBondStableDepositoryInterface {
    return new utils.Interface(_abi) as RequiemQBondStableDepositoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemQBondStableDepository {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RequiemQBondStableDepository;
  }
}
