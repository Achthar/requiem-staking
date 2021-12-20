/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RequiemBondDepository,
  RequiemBondDepositoryInterface,
} from "../RequiemBondDepository";

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
        name: "_principle",
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
    name: "principle",
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
        internalType: "enum RequiemBondDepository.PARAMETER",
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
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b5060405162002a2d38038062002a2d833981016040819052620000359162000118565b600080546001600160a01b0319163390811782556040519091907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a36001600160a01b0385166200008857600080fd5b6001600160a01b038086166080528416620000a257600080fd5b6001600160a01b0380851660a0528316620000bc57600080fd5b6001600160a01b0380841660c0528216620000d657600080fd5b6001600160a01b0391821660e052166101208190521515610100525062000188915050565b80516001600160a01b03811681146200011357600080fd5b919050565b600080600080600060a086880312156200013157600080fd5b6200013c86620000fb565b94506200014c60208701620000fb565b93506200015c60408701620000fb565b92506200016c60608701620000fb565b91506200017c60808701620000fb565b90509295509295909350565b60805160a05160c05160e05161010051610120516127ad620002806000396000818161046c01528181610e8f01526115e701526000818161054e01528181610e2101526115760152600081816104320152818161141601526116fd0152600081816103a7015281816110fc01528181611289015261137301526000818161021b01528181610e5c01528181610f14015281816110ca0152818161124a015281816112b801528181611344015281816115b101526116a7015260008181610280015281816113f401528181611668015281816117900152818161192b01528181611ade01528181611b8c0152611c9001526127ad6000f3fe608060405234801561001057600080fd5b50600436106102115760003560e01c806377b8189511610125578063cea55f57116100ad578063d7ccfb0b1161007c578063d7ccfb0b14610570578063e0176de814610578578063e392a26214610580578063f5c2ab5b14610588578063fc7b9c181461059157600080fd5b8063cea55f57146104e3578063d4d863ce146104eb578063d5025625146104fe578063d79690601461054957600080fd5b8063904b3ece116100f4578063904b3ece1461042557806398fabd3a1461042d578063b4abccba14610454578063c5332b7c14610467578063cd1234b31461048e57600080fd5b806377b81895146103e45780637927ebf8146103f7578063844b5c7c1461040a5780638dbdbe6d1461041257600080fd5b80632f3f470a116101a8578063507930ec11610177578063507930ec146103875780635a96ac0a1461039a57806361d027b3146103a257806371535008146103c9578063759076e5146103dc57600080fd5b80632f3f470a146102f6578063451ee4a11461031a57806346f68ee9146103615780634cf088d91461037457600080fd5b8063089208d8116101e4578063089208d8146102b35780631a3d0068146102bd5780631e321a0f146102d05780631feed31f146102e357600080fd5b8063016a42841461021657806301b88ee81461025a57806302bb41e51461027b5780630505c8c9146102a2575b600080fd5b61023d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61026d61026836600461237a565b61059a565b604051908152602001610251565b61023d7f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b031661023d565b6102bb6105f3565b005b6102bb6102cb3660046123a3565b610670565b6102bb6102de3660046123de565b610740565b61026d6102f136600461240e565b6108f0565b60035461030a90600160a01b900460ff1681565b6040519015158152602001610251565b600a54600b54600c54600d54600e546103379460ff169392919085565b6040805195151586526020860194909452928401919091526060830152608082015260a001610251565b6102bb61036f36600461237a565b610ada565b60025461023d906001600160a01b031681565b61026d61039536600461237a565b610bc4565b6102bb610c4a565b61023d7f000000000000000000000000000000000000000000000000000000000000000081565b6102bb6103d7366004612445565b610d10565b61026d610ddc565b60035461023d906001600160a01b031681565b61026d610405366004612491565b610df7565b61026d610e1d565b61026d6104203660046124aa565b610fa2565b61026d611572565b61023d7f000000000000000000000000000000000000000000000000000000000000000081565b61030a61046236600461237a565b611664565b61023d7f000000000000000000000000000000000000000000000000000000000000000081565b6104c361049c36600461237a565b600f6020526000908152604090208054600182015460028301546003909301549192909184565b604080519485526020850193909352918301526060820152608001610251565b61026d61178b565b6102bb6104f936600461240e565b611840565b60045460055460065460075460085460095461051c95949392919086565b604080519687526020870195909552938501929092526060840152608083015260a082015260c001610251565b61030a7f000000000000000000000000000000000000000000000000000000000000000081565b61026d6118d8565b61026d611917565b61026d6119ab565b61026d60115481565b61026d60105481565b6000806105a683610bc4565b6001600160a01b0384166000908152600f602052604090205490915061271082106105d3578092506105ec565b6105e96127106105e383856119f0565b90611a6f565b92505b5050919050565b6000546001600160a01b031633146106265760405162461bcd60e51b815260040161061d906124df565b60405180910390fd5b600080546040516001600160a01b03909116907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908390a3600080546001600160a01b0319169055565b6000546001600160a01b0316331461069a5760405162461bcd60e51b815260040161061d906124df565b6004546106b0906103e8906105e39060196119f0565b8311156106f55760405162461bcd60e51b8152602060048201526013602482015272496e6372656d656e7420746f6f206c6172676560681b604482015260640161061d565b6040805160a0810182529415158086526020860185905290850183905260608501829052436080909501859052600a805460ff19169091179055600b92909255600c55600d55600e55565b6000546001600160a01b0316331461076a5760405162461bcd60e51b815260040161061d906124df565b600082600381111561077e5761077e612514565b14156107e8576127108110156107e25760405162461bcd60e51b8152602060048201526024808201527f56657374696e67206d757374206265206c6f6e676572207468616e20333620686044820152636f75727360e01b606482015260840161061d565b60055550565b60018260038111156107fc576107fc612514565b141561085a576103e88111156108545760405162461bcd60e51b815260206004820181905260248201527f5061796f75742063616e6e6f742062652061626f766520312070657263656e74604482015260640161061d565b60075550565b600282600381111561086e5761086e612514565b14156108cc576127108111156108c65760405162461bcd60e51b815260206004820152601c60248201527f44414f206665652063616e6e6f7420657863656564207061796f757400000000604482015260640161061d565b60085550565b60038260038111156108e0576108e0612514565b14156108ec5760098190555b5050565b6001600160a01b0382166000908152600f602090815260408083208151608081018352815481526001820154938101939093526002810154918301919091526003015460608201528161094285610bc4565b905061271081106109d4576001600160a01b0385166000818152600f60205260408082208281556001810183905560028101839055600301829055845190517f51c99f515c87b0d95ba97f616edd182e8f161c4932eac17c6fefe9dab58b77b1926109b4928252602082015260400190565b60405180910390a26109cb85858460000151611ab1565b92505050610ad4565b81516000906109eb90612710906105e390856119f0565b90506040518060800160405280610a0f838660000151611d8090919063ffffffff16565b8152602001610a39610a2e866040015143611d8090919063ffffffff16565b602087015190611d80565b8152436020808301919091526060868101516040938401526001600160a01b038a166000818152600f8452849020855180825586850151600183015586860151600283015595909201516003909201919091558251858152918201939093527f51c99f515c87b0d95ba97f616edd182e8f161c4932eac17c6fefe9dab58b77b1910160405180910390a2610ace868683611ab1565b93505050505b92915050565b6000546001600160a01b03163314610b045760405162461bcd60e51b815260040161061d906124df565b6001600160a01b038116610b695760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161061d565b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0381166000908152600f6020908152604080832081516080810183528154815260018201549381019390935260028101549183018290526003015460608301528290610c18904390611d80565b60208301519091508015610c3d57610c36816105e3846127106119f0565b9350610c42565b600093505b505050919050565b6001546001600160a01b03163314610caf5760405162461bcd60e51b815260206004820152602260248201527f4f776e61626c653a206d757374206265206e6577206f776e657220746f2070756044820152611b1b60f21b606482015260840161061d565b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a3600154600080546001600160a01b0319166001600160a01b03909216919091179055565b6000546001600160a01b03163314610d3a5760405162461bcd60e51b815260040161061d906124df565b60045415610d8a5760405162461bcd60e51b815260206004820181905260248201527f426f6e6473206d75737420626520696e697469616c697a65642066726f6d2030604482015260640161061d565b6040805160c08101825288815260208101889052908101869052606081018590526080810184905260a00182905260049690965560059490945560069290925560075560085560095560105543601155565b6000610df2610de96119ab565b60105490611d80565b905090565b6000610ad4662386f26fc100006105e3610e1885610e136118d8565b611dc2565b611efd565b60007f000000000000000000000000000000000000000000000000000000000000000015610f0a576040516332da80a360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152610df2916064916105e3917f0000000000000000000000000000000000000000000000000000000000000000909116906332da80a390602401602060405180830381865afa158015610ed8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efc919061252a565b610f046118d8565b906119f0565b610df260646105e37f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f949190612543565b610efc90600a612660565b90565b60006001600160a01b038216610fec5760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b604482015260640161061d565b610ff4611f1d565b600954601054111561103f5760405162461bcd60e51b815260206004820152601460248201527313585e0818d85c1858da5d1e481c995858da195960621b604482015260640161061d565b6000611049610e1d565b90506000611055611f31565b9050808510156110b35760405162461bcd60e51b815260206004820152602360248201527f536c697070616765206c696d69743a206d6f7265207468616e206d617820707260448201526269636560e81b606482015260840161061d565b604051630f762d4d60e11b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018890526000917f000000000000000000000000000000000000000000000000000000000000000090911690631eec5a9a90604401602060405180830381865afa158015611145573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611169919061252a565b9050600061117682610df7565b9050629896808110156111bc5760405162461bcd60e51b815260206004820152600e60248201526d109bdb99081d1bdbc81cdb585b1b60921b604482015260640161061d565b6111c4611917565b8111156112045760405162461bcd60e51b815260206004820152600e60248201526d426f6e6420746f6f206c6172676560901b604482015260640161061d565b60006112236127106105e36004800154856119f090919063ffffffff16565b9050600061123b826112358686611d80565b90611d80565b90506112726001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308d611f71565b60405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018c90527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af1158015611301573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611325919061266f565b5060405163bc157ac160e01b8152600481018b90526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166024830152604482018390527f0000000000000000000000000000000000000000000000000000000000000000169063bc157ac1906064016020604051808303816000875af11580156113bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e0919061252a565b50811561143b5761143b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000084611fe2565b6010546114489085612017565b601055604080516080810182526001600160a01b038a166000908152600f6020529190912054819061147a9086612017565b81526005805460208084019190915243604080850182905260609485018c90526001600160a01b038e166000908152600f845281902086518155928601516001840155850151600283015593909201516003909201919091555487916114df91612017565b847f1fec6dc81f140574bf43f6b1e420ae1dd47928b9d57db8cbd7b8611063b85ae58d60405161151191815260200190565b60405180910390a461152161178b565b611529611f31565b611531610e1d565b6040517f375b221f40939bfd8f49723a17cf7bc6d576ebf72efe2cc3e991826f5b3f390a90600090a4611562612076565b50909450505050505b9392505050565b60007f00000000000000000000000000000000000000000000000000000000000000001561165c576040516332da80a360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152610df291633b9aca00916105e3917f0000000000000000000000000000000000000000000000000000000000000000909116906332da80a390602401602060405180830381865afa158015611630573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611654919061252a565b610f0461178b565b610df261178b565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614156116a557600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614156116e457600080fd5b6040516370a0823160e01b8152306004820152611783907f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b038516906370a0823190602401602060405180830381865afa15801561174e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611772919061252a565b6001600160a01b0385169190611fe2565b506001919050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156117ec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611810919061252a565b905061183a670de0b6b3a76400006105e3610e18611834633b9aca00610f04610ddc565b85611dc2565b91505090565b6000546001600160a01b0316331461186a5760405162461bcd60e51b815260040161061d906124df565b6001600160a01b03821661187d57600080fd5b80156118aa57600380546001600160a01b0384166001600160a81b031990911617600160a01b1790555050565b6003805460ff60a01b19169055600280546001600160a01b0384166001600160a01b03199091161790555050565b6000611903629896806105e3633b9aca006118fd6118f461178b565b600454906119f0565b90612017565b600654909150811015610f9f575060065490565b6000610df2620186a06105e36004600301547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611987573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f04919061252a565b6000806119c360115443611d8090919063ffffffff16565b6005546010549192506119da916105e390846119f0565b91506010548211156119ec5760105491505b5090565b6000826119ff57506000610ad4565b6000611a0b838561268c565b905082611a1885836126ab565b1461156b5760405162461bcd60e51b815260206004820152602160248201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6044820152607760f81b606482015260840161061d565b600061156b83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250612157565b600082611b515760405163a9059cbb60e01b81526001600160a01b038581166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015611b27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b4b919061266f565b50611d79565b600354600160a01b900460ff1615611c675760035460405163095ea7b360e01b81526001600160a01b039182166004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af1158015611bd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bfb919061266f565b50600354604051637acb775760e01b8152600481018490526001600160a01b03868116602483015290911690637acb775790604401600060405180830381600087803b158015611c4a57600080fd5b505af1158015611c5e573d6000803e3d6000fd5b50505050611d79565b60025460405163095ea7b360e01b81526001600160a01b039182166004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af1158015611cdb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cff919061266f565b50600254604051637acb775760e01b8152600481018490526001600160a01b03868116602483015290911690637acb7757906044016020604051808303816000875af1158015611d53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d77919061266f565b505b5092915050565b600061156b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061218e565b60408051602081019091526000815260008211611e305760405162461bcd60e51b815260206004820152602660248201527f4669786564506f696e743a3a6672616374696f6e3a206469766973696f6e206260448201526579207a65726f60d01b606482015260840161061d565b82611e4a5750604080516020810190915260008152610ad4565b71ffffffffffffffffffffffffffffffffffff8311611eec576000611e7383607086901b6126ab565b90506001600160e01b03811115611ecc5760405162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015260640161061d565b6040518060200160405280826001600160e01b0316815250915050610ad4565b6000611e7384600160701b856121bf565b8051600090610ad4906612725dd1d243ab906001600160e01b03166126ab565b611f28610de96119ab565b60105543601155565b6000611f4d629896806105e3633b9aca006118fd6118f461178b565b600654909150811015611f61575060065490565b60065415610f9f57600060065590565b6040516001600160a01b0380851660248301528316604482015260648101829052611fdc9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261226e565b50505050565b6040516001600160a01b03831660248201526044810182905261201290849063a9059cbb60e01b90606401611fa5565b505050565b60008061202483856126cd565b90508381101561156b5760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015260640161061d565b600d54600e546000916120899190612017565b600b549091501580159061209d5750804310155b1561215457600454600a5460ff16156120d757600b546004546120bf91612017565b6004819055600c54116120d2576000600b555b6120f9565b600b546004546120e691611d80565b6004819055600c54106120f9576000600b555b43600e55600454600b54600a5460408051858152602081019490945283019190915260ff16151560608201527fb923e581a0f83128e9e1d8297aa52b18d6744310476e0b54509c054cd7a93b2a9060800160405180910390a1505b50565b600081836121785760405162461bcd60e51b815260040161061d9190612711565b50600061218584866126ab565b95945050505050565b600081848411156121b25760405162461bcd60e51b815260040161061d9190612711565b5060006121858486612744565b6000808060001985870985870292508281108382030391505080600014156121f957600084116121ee57600080fd5b50829004905061156b565b80841161220557600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b600080836001600160a01b031683604051612289919061275b565b6000604051808303816000865af19150503d80600081146122c6576040519150601f19603f3d011682016040523d82523d6000602084013e6122cb565b606091505b509150915060008214156122e3573d6000803e3d6000fd5b611fdc815160001480612305575081806020019051810190612305919061266f565b6101a2816108ec5762461bcd60e51b600090815260206004526007602452600a808304818104828106603090810160101b848706949093060160081b929092010166524551230000300160c81b6044526108ec91606490fd5b80356001600160a01b038116811461237557600080fd5b919050565b60006020828403121561238c57600080fd5b61156b8261235e565b801515811461215457600080fd5b600080600080608085870312156123b957600080fd5b84356123c481612395565b966020860135965060408601359560600135945092505050565b600080604083850312156123f157600080fd5b82356004811061240057600080fd5b946020939093013593505050565b6000806040838503121561242157600080fd5b61242a8361235e565b9150602083013561243a81612395565b809150509250929050565b600080600080600080600060e0888a03121561246057600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b6000602082840312156124a357600080fd5b5035919050565b6000806000606084860312156124bf57600080fd5b83359250602084013591506124d66040850161235e565b90509250925092565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052602160045260246000fd5b60006020828403121561253c57600080fd5b5051919050565b60006020828403121561255557600080fd5b815160ff8116811461156b57600080fd5b634e487b7160e01b600052601160045260246000fd5b600181815b808511156125b757816000190482111561259d5761259d612566565b808516156125aa57918102915b93841c9390800290612581565b509250929050565b6000826125ce57506001610ad4565b816125db57506000610ad4565b81600181146125f157600281146125fb57612617565b6001915050610ad4565b60ff84111561260c5761260c612566565b50506001821b610ad4565b5060208310610133831016604e8410600b841016171561263a575081810a610ad4565b612644838361257c565b806000190482111561265857612658612566565b029392505050565b600061156b60ff8416836125bf565b60006020828403121561268157600080fd5b815161156b81612395565b60008160001904831182151516156126a6576126a6612566565b500290565b6000826126c857634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156126e0576126e0612566565b500190565b60005b838110156127005781810151838201526020016126e8565b83811115611fdc5750506000910152565b60208152600082518060208401526127308160408501602087016126e5565b601f01601f19169190910160400192915050565b60008282101561275657612756612566565b500390565b6000825161276d8184602087016126e5565b919091019291505056fea26469706673582212202ea45250d22220ff39cf58aa71f338fe95d80e3b5d9243f8af3d1fdfbfb3295664736f6c634300080a0033";

export class RequiemBondDepository__factory extends ContractFactory {
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
    _principle: string,
    _treasury: string,
    _DAO: string,
    _bondCalculator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequiemBondDepository> {
    return super.deploy(
      _REQT,
      _principle,
      _treasury,
      _DAO,
      _bondCalculator,
      overrides || {}
    ) as Promise<RequiemBondDepository>;
  }
  getDeployTransaction(
    _REQT: string,
    _principle: string,
    _treasury: string,
    _DAO: string,
    _bondCalculator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _REQT,
      _principle,
      _treasury,
      _DAO,
      _bondCalculator,
      overrides || {}
    );
  }
  attach(address: string): RequiemBondDepository {
    return super.attach(address) as RequiemBondDepository;
  }
  connect(signer: Signer): RequiemBondDepository__factory {
    return super.connect(signer) as RequiemBondDepository__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemBondDepositoryInterface {
    return new utils.Interface(_abi) as RequiemBondDepositoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemBondDepository {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RequiemBondDepository;
  }
}
