/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RedRequiem, RedRequiemInterface } from "../RedRequiem";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_lockedToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minLockedAmount",
        type: "uint256",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "locktime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
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
        internalType: "uint256",
        name: "penalty",
        type: "uint256",
      },
    ],
    name: "EarlyWithdrawPenaltySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "MinLockedAmountSet",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "PenaltyCollectorSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "MAXDAYS",
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
    name: "MAXTIME",
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
    name: "MAX_WITHDRAWAL_PENALTY",
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
    name: "MINDAYS",
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
    name: "PRECISION",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_days",
        type: "uint256",
      },
    ],
    name: "create_lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "deposit_for",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "earlyWithdrawPenaltyRate",
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
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "increase_amount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_days",
        type: "uint256",
      },
    ],
    name: "increase_unlock_time",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "locked",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockedToken",
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
        name: "_addr",
        type: "address",
      },
    ],
    name: "locked__end",
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
        name: "_addr",
        type: "address",
      },
    ],
    name: "locked__of",
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
    name: "minLockedAmount",
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
        name: "",
        type: "address",
      },
    ],
    name: "mintedForLock",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "penaltyCollector",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_earlyWithdrawPenaltyRate",
        type: "uint256",
      },
    ],
    name: "setEarlyWithdrawPenaltyRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minLockedAmount",
        type: "uint256",
      },
    ],
    name: "setMinLockedAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setPenaltyCollector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_days",
        type: "uint256",
      },
    ],
    name: "voting_power_locked_days",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_unlock_time",
        type: "uint256",
      },
    ],
    name: "voting_power_unlock_time",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200210a3803806200210a833981016040819052620000349162000270565b83836012826003908051906020019062000050929190620000fd565b50815162000066906004906020850190620000fd565b5060058054336101009081026001600160a81b031990921660ff9094169390931717908190556040519190046001600160a01b03169250600091507f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600780546001600160a01b0319166001600160a01b0393909316929092179091556009555050617530600a55600160065562000340565b8280546200010b9062000303565b90600052602060002090601f0160209004810192826200012f57600085556200017a565b82601f106200014a57805160ff19168380011785556200017a565b828001600101855582156200017a579182015b828111156200017a5782518255916020019190600101906200015d565b50620001889291506200018c565b5090565b5b808211156200018857600081556001016200018d565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001cb57600080fd5b81516001600160401b0380821115620001e857620001e8620001a3565b604051601f8301601f19908116603f01168101908282118183101715620002135762000213620001a3565b816040528381526020925086838588010111156200023057600080fd5b600091505b8382101562000254578582018301518183018401529082019062000235565b83821115620002665760008385830101525b9695505050505050565b600080600080608085870312156200028757600080fd5b84516001600160401b03808211156200029f57600080fd5b620002ad88838901620001b9565b95506020870151915080821115620002c457600080fd5b50620002d387828801620001b9565b604087015190945090506001600160a01b0381168114620002f357600080fd5b6060959095015193969295505050565b600181811c908216806200031857607f821691505b602082108114156200033a57634e487b7160e01b600052602260045260246000fd5b50919050565b611dba80620003506000396000f3fe608060405234801561001057600080fd5b50600436106102485760003560e01c806370a082311161013b578063aaf5eb68116100b8578063db2e21bc1161007c578063db2e21bc14610537578063dd62ed3e1461053f578063ee00ef3a14610578578063eff7a61214610580578063f2fde38b1461059357600080fd5b8063aaf5eb68146104a9578063adc63589146104b3578063ae6ef65f146104df578063cbf9fe5f146104e8578063d08a12ff1461052457600080fd5b806395d89b41116100ff57806395d89b411461045f578063a25b39b714610467578063a457c2d714610470578063a8a4a37614610483578063a9059cbb1461049657600080fd5b806370a08231146103f2578063715018a61461041b57806373426cff1461042357806379cc6790146104365780638da5cb5b1461044957600080fd5b8063308097b2116101c95780633ccfd60b1161018d5780633ccfd60b1461039e57806342966c68146103a65780634957677c146103b95780635b7d8f05146103cc57806365fc3873146103df57600080fd5b8063308097b214610341578063313ce5671461035457806338b4321b1461036357806339509351146103765780633a46273e1461038957600080fd5b8063113f665311610210578063113f6653146102f45780631767c4331461031457806318160ddd1461031d5780632060176b1461032557806323b872dd1461032e57600080fd5b80630193512b1461024d57806306fdde0314610289578063095ea7b31461029e5780630f45cc81146102c15780630f51c09c146102ec575b600080fd5b61027661025b366004611ab4565b6001600160a01b03166000908152600b602052604090205490565b6040519081526020015b60405180910390f35b6102916105a6565b6040516102809190611afb565b6102b16102ac366004611b2e565b610638565b6040519015158152602001610280565b6007546102d4906001600160a01b031681565b6040516001600160a01b039091168152602001610280565b610276600781565b610276610302366004611ab4565b600c6020526000908152604090205481565b61027661044781565b600254610276565b61027661c35081565b6102b161033c366004611b58565b61064f565b6008546102d4906001600160a01b031681565b60405160128152602001610280565b610276610371366004611b94565b6106fe565b6102b1610384366004611b2e565b61076b565b61039c610397366004611b2e565b6107a7565b005b61039c6107d9565b61039c6103b4366004611bb6565b610936565b61039c6103c7366004611bb6565b610943565b61039c6103da366004611ab4565b610971565b61039c6103ed366004611b94565b6109ea565b610276610400366004611ab4565b6001600160a01b031660009081526020819052604090205490565b61039c610b17565b610276610431366004611b94565b610b96565b61039c610444366004611b2e565b610bc6565b60055461010090046001600160a01b03166102d4565b610291610c4c565b61027660095481565b6102b161047e366004611b2e565b610c5b565b61039c610491366004611bb6565b610cf4565b6102b16104a4366004611b2e565b610da8565b610276620186a081565b6102766104c1366004611ab4565b6001600160a01b03166000908152600b602052604090206001015490565b610276600a5481565b61050f6104f6366004611ab4565b600b602052600090815260409020805460019091015482565b60408051928352602083019190915201610280565b61039c610532366004611bb6565b610db5565b61039c610e17565b61027661054d366004611bcf565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610276610eeb565b61039c61058e366004611bb6565b610efd565b61039c6105a1366004611ab4565b610fac565b6060600380546105b590611c02565b80601f01602080910402602001604051908101604052809291908181526020018280546105e190611c02565b801561062e5780601f106106035761010080835404028352916020019161062e565b820191906000526020600020905b81548152906001019060200180831161061157829003601f168201915b5050505050905090565b60006106453384846110a7565b5060015b92915050565b600061065c8484846111cb565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156106e65760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6106f385338584036110a7565b506001949350505050565b600042808311610712576000915050610649565b600061071e8285611c53565b905061072f61044762015180611c6a565b811061073f578492505050610649565b61074e61044762015180611c6a565b6107588287611c6a565b6107629190611c89565b95945050505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916106459185906107a2908690611cab565b6110a7565b6009548110156107c95760405162461bcd60e51b81526004016106dd90611cc3565b6107d58282600061139b565b5050565b6006546001146107fb5760405162461bcd60e51b81526004016106dd90611cf1565b60006006819055338152600b60205260409020805442906108545760405162461bcd60e51b81526020600482015260136024820152724e6f7468696e6720746f20776974686472617760681b60448201526064016106dd565b81600101548110156108a15760405162461bcd60e51b8152602060048201526016602482015275546865206c6f636b206469646e27742065787069726560501b60448201526064016106dd565b815460006001840181905583556108c8335b336000908152600c6020526040902054611651565b336000818152600c60205260408120556007546108f1916001600160a01b03909116908361179f565b604080518281526020810184905233917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568910160405180910390a25050600160065550565b6109403382611651565b50565b6009548110156109655760405162461bcd60e51b81526004016106dd90611cc3565b6109403382600061139b565b60055461010090046001600160a01b031633146109a05760405162461bcd60e51b81526004016106dd90611d11565b600880546001600160a01b0319166001600160a01b0383169081179091556040517f2541601c97bce42b47813f2be715ba4eb0a571f2aafaf35cda2054137d9a79af90600090a250565b600954821015610a0c5760405162461bcd60e51b81526004016106dd90611cc3565b336000908152600b602052604090205415610a695760405162461bcd60e51b815260206004820152601960248201527f5769746864726177206f6c6420746f6b656e732066697273740000000000000060448201526064016106dd565b6007811015610aba5760405162461bcd60e51b815260206004820152601d60248201527f566f74696e67206c6f636b2063616e20626520372064617973206d696e00000060448201526064016106dd565b610447811115610b0c5760405162461bcd60e51b815260206004820152601e60248201527f566f74696e67206c6f636b2063616e2062652034207965617273206d6178000060448201526064016106dd565b6107d533838361139b565b60055461010090046001600160a01b03163314610b465760405162461bcd60e51b81526004016106dd90611d11565b60055460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360058054610100600160a81b0319169055565b60006104478210610ba8575081610649565b610447610bb58385611c6a565b610bbf9190611c89565b9392505050565b6000610bd2833361054d565b905081811015610c305760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b60648201526084016106dd565b610c3d83338484036110a7565b610c478383611651565b505050565b6060600480546105b590611c02565b3360009081526001602090815260408083206001600160a01b038616845290915281205482811015610cdd5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016106dd565b610cea33858584036110a7565b5060019392505050565b60055461010090046001600160a01b03163314610d235760405162461bcd60e51b81526004016106dd90611d11565b61c350811115610d755760405162461bcd60e51b815260206004820152601e60248201527f7769746864726177616c2070656e616c747920697320746f6f2068696768000060448201526064016106dd565b600a81905560405181907fa7d10353d34f5fe96bad91fa358f55fbea8ad6ee0d30924022d2b58e77f476e390600090a250565b60006106453384846111cb565b60055461010090046001600160a01b03163314610de45760405162461bcd60e51b81526004016106dd90611d11565b600981905560405181907f9a8dc7fb9d13b0f5acaf673226d570d31ec15d8a813fceced1eb36ad11afebc590600090a250565b600654600114610e395760405162461bcd60e51b81526004016106dd90611cf1565b60006006819055338152600b6020526040902080544290610e925760405162461bcd60e51b81526020600482015260136024820152724e6f7468696e6720746f20776974686472617760681b60448201526064016106dd565b81546001830154821015610ed7576000620186a0600a5483610eb49190611c6a565b610ebe9190611c89565b9050610ec981611802565b610ed38183611c53565b9150505b60006001840181905583556108c8336108b3565b610efa61044762015180611c6a565b81565b6007811015610f4e5760405162461bcd60e51b815260206004820152601d60248201527f566f74696e67206c6f636b2063616e20626520372064617973206d696e00000060448201526064016106dd565b610447811115610fa05760405162461bcd60e51b815260206004820152601e60248201527f566f74696e67206c6f636b2063616e2062652034207965617273206d6178000060448201526064016106dd565b6109403360008361139b565b60055461010090046001600160a01b03163314610fdb5760405162461bcd60e51b81526004016106dd90611d11565b6001600160a01b0381166110405760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106dd565b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b6001600160a01b0383166111095760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016106dd565b6001600160a01b03821661116a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016106dd565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661122f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016106dd565b6001600160a01b0382166112915760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016106dd565b6001600160a01b038316600090815260208190526040902054818110156113095760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016106dd565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290611340908490611cab565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161138c91815260200190565b60405180910390a35b50505050565b6006546001146113bd5760405162461bcd60e51b81526004016106dd90611cf1565b600060068190556001600160a01b0384168152600b602052604081208054600182015491924292908261141a576113f48787610b96565b87865590506114068662015180611c6a565b6114109085611cab565b6001860155611555565b8561143c5761142987836106fe565b90506114358784611cab565b8555611555565b86156114b05760405162461bcd60e51b815260206004820152603760248201527f43616e6e6f7420696e63726561736520616d6f756e7420616e6420657874656e60448201527f64206c6f636b20696e207468652073616d652074696d6500000000000000000060648201526084016106dd565b6114ba8387610b96565b90506114c98662015180611c6a565b6114d39083611cab565b60018601556114e761044762015180611c6a565b8486600101546114f79190611c53565b11156115555760405162461bcd60e51b815260206004820152602760248201527f43616e6e6f7420657874656e64206c6f636b20746f206d6f7265207468616e206044820152663420796561727360c81b60648201526084016106dd565b6000811161159a5760405162461bcd60e51b81526020600482015260126024820152714e6f2062656e6566697420746f206c6f636b60701b60448201526064016106dd565b86156115b8576115b8336007546001600160a01b031690308a611891565b6115c288826118c9565b6001600160a01b0388166000908152600c6020526040812080548392906115ea908490611cab565b90915550508454600186015460408051928352602083019190915281018590526001600160a01b038916907f36af321ec8d3c75236829c5317affd40ddb308863a1236d2d277a4025cccee1e9060600160405180910390a250506001600655505050505050565b6001600160a01b0382166116b15760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016106dd565b6001600160a01b038216600090815260208190526040902054818110156117255760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016106dd565b6001600160a01b0383166000908152602081905260408120838303905560028054849290611754908490611c53565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6040516001600160a01b038316602482015260448101829052610c4790849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526119a8565b6008546001600160a01b03161561183057600854600754610940916001600160a01b0391821691168361179f565b600754604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c6890602401600060405180830381600087803b15801561187657600080fd5b505af115801561188a573d6000803e3d6000fd5b5050505050565b6040516001600160a01b03808516602483015283166044820152606481018290526113959085906323b872dd60e01b906084016117cb565b6001600160a01b03821661191f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106dd565b80600260008282546119319190611cab565b90915550506001600160a01b0382166000908152602081905260408120805483929061195e908490611cab565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600080836001600160a01b0316836040516119c39190611d46565b6000604051808303816000865af19150503d8060008114611a00576040519150601f19603f3d011682016040523d82523d6000602084013e611a05565b606091505b50915091506000821415611a1d573d6000803e3d6000fd5b611395815160001480611a3f575081806020019051810190611a3f9190611d62565b6101a2816107d55762461bcd60e51b600090815260206004526007602452600a808304818104828106603090810160101b848706949093060160081b929092010166524551230000300160c81b6044526107d591606490fd5b80356001600160a01b0381168114611aaf57600080fd5b919050565b600060208284031215611ac657600080fd5b610bbf82611a98565b60005b83811015611aea578181015183820152602001611ad2565b838111156113955750506000910152565b6020815260008251806020840152611b1a816040850160208701611acf565b601f01601f19169190910160400192915050565b60008060408385031215611b4157600080fd5b611b4a83611a98565b946020939093013593505050565b600080600060608486031215611b6d57600080fd5b611b7684611a98565b9250611b8460208501611a98565b9150604084013590509250925092565b60008060408385031215611ba757600080fd5b50508035926020909101359150565b600060208284031215611bc857600080fd5b5035919050565b60008060408385031215611be257600080fd5b611beb83611a98565b9150611bf960208401611a98565b90509250929050565b600181811c90821680611c1657607f821691505b60208210811415611c3757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015611c6557611c65611c3d565b500390565b6000816000190483118215151615611c8457611c84611c3d565b500290565b600082611ca657634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115611cbe57611cbe611c3d565b500190565b6020808252601490820152731b195cdcc81d1a185b881b5a5b88185b5bdd5b9d60621b604082015260600190565b6020808252600690820152651313d0d2d15160d21b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008251611d58818460208701611acf565b9190910192915050565b600060208284031215611d7457600080fd5b81518015158114610bbf57600080fdfea2646970667358221220c111c06e04cd1c237a993e683a7e45c52d926bd7b29b521c57ec83585372c86b64736f6c634300080a0033";

export class RedRequiem__factory extends ContractFactory {
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
    _name: string,
    _symbol: string,
    _lockedToken: string,
    _minLockedAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RedRequiem> {
    return super.deploy(
      _name,
      _symbol,
      _lockedToken,
      _minLockedAmount,
      overrides || {}
    ) as Promise<RedRequiem>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _lockedToken: string,
    _minLockedAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _lockedToken,
      _minLockedAmount,
      overrides || {}
    );
  }
  attach(address: string): RedRequiem {
    return super.attach(address) as RedRequiem;
  }
  connect(signer: Signer): RedRequiem__factory {
    return super.connect(signer) as RedRequiem__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedRequiemInterface {
    return new utils.Interface(_abi) as RedRequiemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RedRequiem {
    return new Contract(address, _abi, signerOrProvider) as RedRequiem;
  }
}
