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
  "0x6101406040523480156200001257600080fd5b5060405162002d0938038062002d09833981016040819052620000359162000118565b600080546001600160a01b0319163390811782556040519091907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a36001600160a01b0385166200008857600080fd5b6001600160a01b038086166080528416620000a257600080fd5b6001600160a01b0380851660a0528316620000bc57600080fd5b6001600160a01b0380841660c0528216620000d657600080fd5b6001600160a01b0391821660e052166101208190521515610100525062000188915050565b80516001600160a01b03811681146200011357600080fd5b919050565b600080600080600060a086880312156200013157600080fd5b6200013c86620000fb565b94506200014c60208701620000fb565b93506200015c60408701620000fb565b92506200016c60608701620000fb565b91506200017c60808701620000fb565b90509295509295909350565b60805160a05160c05160e0516101005161012051612a89620002806000396000818161049c01528181611027015261180001526000818161057e01528181610fb9015261178f0152600081816104620152818161162f015261192f0152600081816103d7015281816112de01528181611489015261158c01526000818161024b01528181610ff4015281816110ac015281816112ac0152818161144a015281816114b80152818161155d015281816117ca01526118c00152600081816102b00152818161160d01528181611881015281816119c201528181611bcd01528181611d9c01528181611e4a0152611f4e0152612a896000f3fe608060405234801561001057600080fd5b50600436106102415760003560e01c806377b8189511610145578063cea55f57116100bd578063d7ccfb0b1161008c578063e392a26211610071578063e392a262146105b0578063f5c2ab5b146105b8578063fc7b9c18146105c157600080fd5b8063d7ccfb0b146105a0578063e0176de8146105a857600080fd5b8063cea55f5714610513578063d4d863ce1461051b578063d50256251461052e578063d79690601461057957600080fd5b8063904b3ece11610114578063b4abccba116100f9578063b4abccba14610484578063c5332b7c14610497578063cd1234b3146104be57600080fd5b8063904b3ece1461045557806398fabd3a1461045d57600080fd5b806377b81895146104145780637927ebf814610427578063844b5c7c1461043a5780638dbdbe6d1461044257600080fd5b80632f3f470a116101d8578063507930ec116101a757806361d027b31161018c57806361d027b3146103d257806371535008146103f9578063759076e51461040c57600080fd5b8063507930ec146103b75780635a96ac0a146103ca57600080fd5b80632f3f470a14610326578063451ee4a11461034a57806346f68ee9146103915780634cf088d9146103a457600080fd5b8063089208d811610214578063089208d8146102e35780631a3d0068146102ed5780631e321a0f146103005780631feed31f1461031357600080fd5b8063016a42841461024657806301b88ee81461028a57806302bb41e5146102ab5780630505c8c9146102d2575b600080fd5b61026d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61029d61029836600461268b565b6105ca565b604051908152602001610281565b61026d7f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b031661026d565b6102eb610623565b005b6102eb6102fb3660046126b4565b6106d9565b6102eb61030e3660046126ef565b6107e3565b61029d61032136600461271f565b6109dc565b60035461033a90600160a01b900460ff1681565b6040519015158152602001610281565b600a54600b54600c54600d54600e546103679460ff169392919085565b6040805195151586526020860194909452928401919091526060830152608082015260a001610281565b6102eb61039f36600461268b565b610bc6565b60025461026d906001600160a01b031681565b61029d6103c536600461268b565b610d04565b6102eb610d8a565b61026d7f000000000000000000000000000000000000000000000000000000000000000081565b6102eb610407366004612756565b610e78565b61029d610f74565b60035461026d906001600160a01b031681565b61029d6104353660046127a2565b610f8f565b61029d610fb5565b61029d6104503660046127bb565b61113a565b61029d61178b565b61026d7f000000000000000000000000000000000000000000000000000000000000000081565b61033a61049236600461268b565b61187d565b61026d7f000000000000000000000000000000000000000000000000000000000000000081565b6104f36104cc36600461268b565b600f6020526000908152604090208054600182015460028301546003909301549192909184565b604080519485526020850193909352918301526060820152608001610281565b61029d6119bd565b6102eb61052936600461271f565b611a72565b60045460055460065460075460085460095461054c95949392919086565b604080519687526020870195909552938501929092526060840152608083015260a082015260c001610281565b61033a7f000000000000000000000000000000000000000000000000000000000000000081565b61029d611b7a565b61029d611bb9565b61029d611c4d565b61029d60115481565b61029d60105481565b6000806105d683610d04565b6001600160a01b0384166000908152600f602052604090205490915061271082106106035780925061061c565b6106196127106106138385611c92565b90611d2d565b92505b5050919050565b6000546001600160a01b031633146106825760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600080546040516001600160a01b03909116907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b031633146107335760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610679565b600454610749906103e890610613906019611c92565b8311156107985760405162461bcd60e51b815260206004820152601360248201527f496e6372656d656e7420746f6f206c61726765000000000000000000000000006044820152606401610679565b6040805160a0810182529415158086526020860185905290850183905260608501829052436080909501859052600a805460ff19169091179055600b92909255600c55600d55600e55565b6000546001600160a01b0316331461083d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610679565b6000826003811115610851576108516127f0565b14156108d4576127108110156108ce5760405162461bcd60e51b8152602060048201526024808201527f56657374696e67206d757374206265206c6f6e676572207468616e203336206860448201527f6f757273000000000000000000000000000000000000000000000000000000006064820152608401610679565b60055550565b60018260038111156108e8576108e86127f0565b1415610946576103e88111156109405760405162461bcd60e51b815260206004820181905260248201527f5061796f75742063616e6e6f742062652061626f766520312070657263656e746044820152606401610679565b60075550565b600282600381111561095a5761095a6127f0565b14156109b8576127108111156109b25760405162461bcd60e51b815260206004820152601c60248201527f44414f206665652063616e6e6f7420657863656564207061796f7574000000006044820152606401610679565b60085550565b60038260038111156109cc576109cc6127f0565b14156109d85760098190555b5050565b6001600160a01b0382166000908152600f6020908152604080832081516080810183528154815260018201549381019390935260028101549183019190915260030154606082015281610a2e85610d04565b90506127108110610ac0576001600160a01b0385166000818152600f60205260408082208281556001810183905560028101839055600301829055845190517f51c99f515c87b0d95ba97f616edd182e8f161c4932eac17c6fefe9dab58b77b192610aa0928252602082015260400190565b60405180910390a2610ab785858460000151611d6f565b92505050610bc0565b8151600090610ad790612710906106139085611c92565b90506040518060800160405280610afb83866000015161203e90919063ffffffff16565b8152602001610b25610b1a86604001514361203e90919063ffffffff16565b60208701519061203e565b8152436020808301919091526060868101516040938401526001600160a01b038a166000818152600f8452849020855180825586850151600183015586860151600283015595909201516003909201919091558251858152918201939093527f51c99f515c87b0d95ba97f616edd182e8f161c4932eac17c6fefe9dab58b77b1910160405180910390a2610bba868683611d6f565b93505050505b92915050565b6000546001600160a01b03163314610c205760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610679565b6001600160a01b038116610c9c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610679565b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a36001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001600160a01b0381166000908152600f6020908152604080832081516080810183528154815260018201549381019390935260028101549183018290526003015460608301528290610d5890439061203e565b60208301519091508015610d7d57610d768161061384612710611c92565b9350610d82565b600093505b505050919050565b6001546001600160a01b03163314610e0a5760405162461bcd60e51b815260206004820152602260248201527f4f776e61626c653a206d757374206265206e6577206f776e657220746f20707560448201527f6c6c0000000000000000000000000000000000000000000000000000000000006064820152608401610679565b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a36001546000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909216919091179055565b6000546001600160a01b03163314610ed25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610679565b60045415610f225760405162461bcd60e51b815260206004820181905260248201527f426f6e6473206d75737420626520696e697469616c697a65642066726f6d20306044820152606401610679565b6040805160c08101825288815260208101889052908101869052606081018590526080810184905260a00182905260049690965560059490945560069290925560075560085560095560105543601155565b6000610f8a610f81611c4d565b6010549061203e565b905090565b6000610bc0662386f26fc10000610613610fb085610fab611b7a565b612080565b6121dd565b60007f0000000000000000000000000000000000000000000000000000000000000000156110a2576040516332da80a360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152610f8a91606491610613917f0000000000000000000000000000000000000000000000000000000000000000909116906332da80a390602401602060405180830381865afa158015611070573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110949190612806565b61109c611b7a565b90611c92565b610f8a60646106137f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611108573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112c919061281f565b61109490600a61293c565b90565b60006001600160a01b0382166111925760405162461bcd60e51b815260206004820152600f60248201527f496e76616c6964206164647265737300000000000000000000000000000000006044820152606401610679565b61119a6121fd565b60095460105411156111ee5760405162461bcd60e51b815260206004820152601460248201527f4d617820636170616369747920726561636865640000000000000000000000006044820152606401610679565b60006111f8610fb5565b90506000611204612211565b90508085101561127c5760405162461bcd60e51b815260206004820152602360248201527f536c697070616765206c696d69743a206d6f7265207468616e206d617820707260448201527f69636500000000000000000000000000000000000000000000000000000000006064820152608401610679565b6040517f1eec5a9a0000000000000000000000000000000000000000000000000000000081526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018890526000917f000000000000000000000000000000000000000000000000000000000000000090911690631eec5a9a90604401602060405180830381865afa158015611327573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134b9190612806565b9050600061135882610f8f565b9050629896808110156113ad5760405162461bcd60e51b815260206004820152600e60248201527f426f6e6420746f6f20736d616c6c0000000000000000000000000000000000006044820152606401610679565b6113b5611bb9565b8111156114045760405162461bcd60e51b815260206004820152600e60248201527f426f6e6420746f6f206c617267650000000000000000000000000000000000006044820152606401610679565b6000611423612710610613600480015485611c9290919063ffffffff16565b9050600061143b82611435868661203e565b9061203e565b90506114726001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308d612251565b60405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018c90527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af1158015611501573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611525919061294b565b506040517fbc157ac1000000000000000000000000000000000000000000000000000000008152600481018b90526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166024830152604482018390527f0000000000000000000000000000000000000000000000000000000000000000169063bc157ac1906064016020604051808303816000875af11580156115d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115f99190612806565b508115611654576116546001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000846122f3565b6010546116619085612328565b601055604080516080810182526001600160a01b038a166000908152600f602052919091205481906116939086612328565b81526005805460208084019190915243604080850182905260609485018c90526001600160a01b038e166000908152600f845281902086518155928601516001840155850151600283015593909201516003909201919091555487916116f891612328565b847f1fec6dc81f140574bf43f6b1e420ae1dd47928b9d57db8cbd7b8611063b85ae58d60405161172a91815260200190565b60405180910390a461173a6119bd565b611742612211565b61174a610fb5565b6040517f375b221f40939bfd8f49723a17cf7bc6d576ebf72efe2cc3e991826f5b3f390a90600090a461177b612387565b50909450505050505b9392505050565b60007f000000000000000000000000000000000000000000000000000000000000000015611875576040516332da80a360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152610f8a91633b9aca0091610613917f0000000000000000000000000000000000000000000000000000000000000000909116906332da80a390602401602060405180830381865afa158015611849573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061186d9190612806565b61109c6119bd565b610f8a6119bd565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614156118be57600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614156118fd57600080fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526119b5907f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611980573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119a49190612806565b6001600160a01b03851691906122f3565b506001919050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a429190612806565b9050611a6c670de0b6b3a7640000610613610fb0611a66633b9aca0061109c610f74565b85612080565b91505090565b6000546001600160a01b03163314611acc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610679565b6001600160a01b038216611adf57600080fd5b8015611b2457600380546001600160a01b0384167fffffffffffffffffffffff00000000000000000000000000000000000000000090911617600160a01b1790555050565b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff169055600280546001600160a01b03841673ffffffffffffffffffffffffffffffffffffffff199091161790555050565b6000611ba562989680610613633b9aca00611b9f611b966119bd565b60045490611c92565b90612328565b600654909150811015611137575060065490565b6000610f8a620186a06106136004600301547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611c29573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109c9190612806565b600080611c656011544361203e90919063ffffffff16565b600554601054919250611c7c916106139084611c92565b9150601054821115611c8e5760105491505b5090565b600082611ca157506000610bc0565b6000611cad8385612968565b905082611cba8583612987565b146117845760405162461bcd60e51b815260206004820152602160248201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60448201527f77000000000000000000000000000000000000000000000000000000000000006064820152608401610679565b600061178483836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250612468565b600082611e0f5760405163a9059cbb60e01b81526001600160a01b038581166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015611de5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e09919061294b565b50612037565b600354600160a01b900460ff1615611f255760035460405163095ea7b360e01b81526001600160a01b039182166004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af1158015611e95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eb9919061294b565b50600354604051637acb775760e01b8152600481018490526001600160a01b03868116602483015290911690637acb775790604401600060405180830381600087803b158015611f0857600080fd5b505af1158015611f1c573d6000803e3d6000fd5b50505050612037565b60025460405163095ea7b360e01b81526001600160a01b039182166004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af1158015611f99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fbd919061294b565b50600254604051637acb775760e01b8152600481018490526001600160a01b03868116602483015290911690637acb7757906044016020604051808303816000875af1158015612011573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612035919061294b565b505b5092915050565b600061178483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061249f565b604080516020810190915260008152600082116121055760405162461bcd60e51b815260206004820152602660248201527f4669786564506f696e743a3a6672616374696f6e3a206469766973696f6e206260448201527f79207a65726f00000000000000000000000000000000000000000000000000006064820152608401610679565b8261211f5750604080516020810190915260008152610bc0565b71ffffffffffffffffffffffffffffffffffff83116121c157600061214883607086901b612987565b90506001600160e01b038111156121a15760405162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f7700006044820152606401610679565b6040518060200160405280826001600160e01b0316815250915050610bc0565b6000612148846e010000000000000000000000000000856124d0565b8051600090610bc0906612725dd1d243ab906001600160e01b0316612987565b612208610f81611c4d565b60105543601155565b600061222d62989680610613633b9aca00611b9f611b966119bd565b600654909150811015612241575060065490565b6006541561113757600060065590565b6040516001600160a01b03808516602483015283166044820152606481018290526122ed9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180516001600160e01b03167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261257f565b50505050565b6040516001600160a01b03831660248201526044810182905261232390849063a9059cbb60e01b9060640161229e565b505050565b60008061233583856129a9565b9050838110156117845760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006044820152606401610679565b600d54600e5460009161239a9190612328565b600b54909150158015906123ae5750804310155b1561246557600454600a5460ff16156123e857600b546004546123d091612328565b6004819055600c54116123e3576000600b555b61240a565b600b546004546123f79161203e565b6004819055600c541061240a576000600b555b43600e55600454600b54600a5460408051858152602081019490945283019190915260ff16151560608201527fb923e581a0f83128e9e1d8297aa52b18d6744310476e0b54509c054cd7a93b2a9060800160405180910390a1505b50565b600081836124895760405162461bcd60e51b815260040161067991906129ed565b5060006124968486612987565b95945050505050565b600081848411156124c35760405162461bcd60e51b815260040161067991906129ed565b5060006124968486612a20565b60008080600019858709858702925082811083820303915050806000141561250a57600084116124ff57600080fd5b508290049050611784565b80841161251657600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b600080836001600160a01b03168360405161259a9190612a37565b6000604051808303816000865af19150503d80600081146125d7576040519150601f19603f3d011682016040523d82523d6000602084013e6125dc565b606091505b509150915060008214156125f4573d6000803e3d6000fd5b6122ed815160001480612616575081806020019051810190612616919061294b565b6101a2816109d85762461bcd60e51b600090815260206004526007602452600a808304818104828106603090810160101b848706949093060160081b929092010166524551230000300160c81b6044526109d891606490fd5b80356001600160a01b038116811461268657600080fd5b919050565b60006020828403121561269d57600080fd5b6117848261266f565b801515811461246557600080fd5b600080600080608085870312156126ca57600080fd5b84356126d5816126a6565b966020860135965060408601359560600135945092505050565b6000806040838503121561270257600080fd5b82356004811061271157600080fd5b946020939093013593505050565b6000806040838503121561273257600080fd5b61273b8361266f565b9150602083013561274b816126a6565b809150509250929050565b600080600080600080600060e0888a03121561277157600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b6000602082840312156127b457600080fd5b5035919050565b6000806000606084860312156127d057600080fd5b83359250602084013591506127e76040850161266f565b90509250925092565b634e487b7160e01b600052602160045260246000fd5b60006020828403121561281857600080fd5b5051919050565b60006020828403121561283157600080fd5b815160ff8116811461178457600080fd5b634e487b7160e01b600052601160045260246000fd5b600181815b8085111561289357816000190482111561287957612879612842565b8085161561288657918102915b93841c939080029061285d565b509250929050565b6000826128aa57506001610bc0565b816128b757506000610bc0565b81600181146128cd57600281146128d7576128f3565b6001915050610bc0565b60ff8411156128e8576128e8612842565b50506001821b610bc0565b5060208310610133831016604e8410600b8410161715612916575081810a610bc0565b6129208383612858565b806000190482111561293457612934612842565b029392505050565b600061178460ff84168361289b565b60006020828403121561295d57600080fd5b8151611784816126a6565b600081600019048311821515161561298257612982612842565b500290565b6000826129a457634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156129bc576129bc612842565b500190565b60005b838110156129dc5781810151838201526020016129c4565b838111156122ed5750506000910152565b6020815260008251806020840152612a0c8160408501602087016129c1565b601f01601f19169190910160400192915050565b600082821015612a3257612a32612842565b500390565b60008251612a498184602087016129c1565b919091019291505056fea2646970667358221220f2ba19c598f24f3b0951618669bfc798c64b6ebb82bad26bc6c960634744e7c764736f6c634300080b0033";

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
