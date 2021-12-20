/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SRequiem, SRequiemInterface } from "../SRequiem";

const _abi = [
  {
    inputs: [],
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
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rebase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "LogRebase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "stakingContract",
        type: "address",
      },
    ],
    name: "LogStakingContractUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    name: "LogSupply",
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
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INDEX",
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
        name: "owner_",
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
        name: "value",
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
        internalType: "uint256",
        name: "gons",
        type: "uint256",
      },
    ],
    name: "balanceForGons",
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
        name: "who",
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
    inputs: [],
    name: "circulatingSupply",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "gonsForBalance",
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
    inputs: [],
    name: "index",
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
        name: "stakingContract_",
        type: "address",
      },
    ],
    name: "initialize",
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
    inputs: [],
    name: "initializer",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "profit_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "epoch_",
        type: "uint256",
      },
    ],
    name: "rebase",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "rebases",
    outputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rebase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStakedBefore",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStakedAfter",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountRebased",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumberOccured",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint256",
        name: "_INDEX",
        type: "uint256",
      },
    ],
    name: "setIndex",
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
    inputs: [],
    name: "stakingContract",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
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
];

const _bytecode =
  "0x6101006040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960e0523480156200003657600080fd5b50604051806040016040528060058152602001641cd491545560da1b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600e81526020016d5374616b6564205265717569656d60901b815250604051806040016040528060058152602001641cd491545560da1b81525060098260039080519060200190620000cf929190620001c5565b508151620000e5906004906020850190620001c5565b506005805460ff90921660ff1990921691909117905550508151602092830120608052805191012060a052507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60c052600780546001600160a01b031916339081179091556040516000907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a3600a80546001600160a01b031916331790556611c37937e080006002819055620001a28160001962000281565b620001b09060001962000298565b620001bc9190620002be565b600d5562000312565b828054620001d390620002d5565b90600052602060002090601f016020900481019282620001f7576000855562000242565b82601f106200021257805160ff191683800117855562000242565b8280016001018555821562000242579182015b828111156200024257825182559160200191906001019062000225565b506200025092915062000254565b5090565b5b8082111562000250576000815560010162000255565b634e487b7160e01b600052601260045260246000fd5b6000826200029357620002936200026b565b500690565b600082821015620002b957634e487b7160e01b600052601160045260246000fd5b500390565b600082620002d057620002d06200026b565b500490565b600181811c90821680620002ea57607f821691505b602082108114156200030c57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e0516115fe6200034c6000396000610ec101526000611189015260006111cb015260006111aa01526115fe6000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806346f68ee91161010457806395d89b41116100a2578063c4d66de811610071578063c4d66de8146103d8578063d505accf146103eb578063dd62ed3e146103fe578063ee99205c1461043757600080fd5b806395d89b41146103975780639ce110d71461039f578063a457c2d7146103b2578063a9059cbb146103c557600080fd5b806373c69eb7116100de57806373c69eb71461030b5780637965d56d146103535780637ecebe00146103665780639358928b1461038f57600080fd5b806346f68ee9146102dd5780635a96ac0a146102f057806370a08231146102f857600080fd5b806323b872dd11610171578063313ce5671161014b578063313ce567146102a05780633644e515146102af57806339509351146102b757806340a5737f146102ca57600080fd5b806323b872dd1461027c5780632986c0e51461028f5780632df75cb11461029757600080fd5b8063089208d8116101ad578063089208d814610234578063095ea7b31461023e57806318160ddd146102615780631bd396741461026957600080fd5b80630505c8c9146101d4578063058ecdb4146101fe57806306fdde031461021f575b600080fd5b6007546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b61021161020c3660046112c1565b61044a565b6040519081526020016101f5565b6102276105ab565b6040516101f591906112e3565b61023c61063d565b005b61025161024c36600461134f565b6106ba565b60405190151581526020016101f5565b600254610211565b610211610277366004611379565b610714565b61025161028a366004611392565b610724565b61021161086f565b610211600c5481565b604051601281526020016101f5565b610211610881565b6102516102c536600461134f565b61088b565b6102516102d8366004611379565b61090a565b61023c6102eb3660046113ce565b610959565b61023c610a44565b6102116103063660046113ce565b610b0c565b61031e610319366004611379565b610b33565b604080519788526020880196909652948601939093526060850191909152608084015260a083015260c082015260e0016101f5565b610211610361366004611379565b610b85565b6102116103743660046113ce565b6001600160a01b031660009081526006602052604090205490565b610211610b95565b610227610bba565b600a546101e1906001600160a01b031681565b6102516103c036600461134f565b610bc9565b6102516103d336600461134f565b610c9f565b6102516103e63660046113ce565b610d43565b61023c6103f93660046113f0565b610e5f565b61021161040c366004611463565b6001600160a01b039182166000908152600f6020908152604080832093909416825291909152205490565b6009546101e1906001600160a01b031681565b6009546000906001600160a01b0316331461046457600080fd5b60008061046f610b95565b90508461050b57837f917acfbe39be6509ccf7fecb66a7e42ce2be1083c2d7dd3b9b7491dabddb8da4426002546040516104b3929190918252602082015260400190565b60405180910390a2837f6012dbce857565c4a40974aa5de8373a761fc429077ef0c8c8611d1e20d63fb260006104e761086f565b6040805192835260208301919091520160405180910390a2600254925050506105a5565b801561053157806002548661052091906114ac565b61052a91906114e1565b9150610535565b8491505b8160025461054391906114f5565b60028190556001600160801b031015610562576001600160801b036002555b6002546105786611c37937e0800060001961150d565b61058490600019611521565b61058e91906114e1565b600d5561059c818686611036565b50600254925050505b92915050565b6060600380546105ba90611538565b80601f01602080910402602001604051908101604052809291908181526020018280546105e690611538565b80156106335780601f1061060857610100808354040283529160200191610633565b820191906000526020600020905b81548152906001019060200180831161061657829003601f168201915b5050505050905090565b6007546001600160a01b031633146106705760405162461bcd60e51b815260040161066790611573565b60405180910390fd5b6007546040516000916001600160a01b0316907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908390a3600780546001600160a01b0319169055565b336000818152600f602090815260408083206001600160a01b038716808552925280832085905551919290916000805160206115a9833981519152906107039086815260200190565b60405180910390a350600192915050565b6000600d54826105a591906114ac565b6001600160a01b0383166000908152600f60209081526040808320338452909152812080548391908390610759908490611521565b90915550506001600160a01b0384166000818152600f6020908152604080832033808552908352928190205490519081529192916000805160206115a9833981519152910160405180910390a360006107b183610714565b6001600160a01b0386166000908152600e60205260409020549091506107d8908290611521565b6001600160a01b038087166000908152600e602052604080822093909355908616815220546108089082906114f5565b6001600160a01b038086166000818152600e602052604090819020939093559151908716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061085c9087815260200190565b60405180910390a3506001949350505050565b600061087c600c54610b85565b905090565b600061087c611185565b336000908152600f602090815260408083206001600160a01b03861684529091528120805483919083906108c09084906114f5565b9091555050336000818152600f602090815260408083206001600160a01b038816808552908352928190205490519081529192916000805160206115a98339815191529101610703565b6007546000906001600160a01b031633146109375760405162461bcd60e51b815260040161066790611573565b600c541561094457600080fd5b61094d82610714565b600c555060015b919050565b6007546001600160a01b031633146109835760405162461bcd60e51b815260040161066790611573565b6001600160a01b0381166109e85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610667565b6007546040516001600160a01b038084169216907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba90600090a3600880546001600160a01b0319166001600160a01b0392909216919091179055565b6008546001600160a01b03163314610aa95760405162461bcd60e51b815260206004820152602260248201527f4f776e61626c653a206d757374206265206e6577206f776e657220746f2070756044820152611b1b60f21b6064820152608401610667565b6008546007546040516001600160a01b0392831692909116907faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d90600090a3600854600780546001600160a01b0319166001600160a01b03909216919091179055565b600d546001600160a01b0382166000908152600e602052604081205490916105a5916114e1565b600b8181548110610b4357600080fd5b90600052602060002090600702016000915090508060000154908060010154908060020154908060030154908060040154908060050154908060060154905087565b6000600d54826105a591906114e1565b600954600090610bad906001600160a01b0316610b0c565b60025461087c9190611521565b6060600480546105ba90611538565b336000908152600f602090815260408083206001600160a01b0386168452909152812054808310610c1d57336000908152600f602090815260408083206001600160a01b0388168452909152812055610c4c565b610c278382611521565b336000908152600f602090815260408083206001600160a01b03891684529091529020555b336000818152600f602090815260408083206001600160a01b038916808552908352928190205490519081529192916000805160206115a983398151915291015b60405180910390a35060019392505050565b600080600d5483610cb091906114ac565b336000908152600e6020526040812080549293508392909190610cd4908490611521565b90915550506001600160a01b0384166000908152600e602052604081208054839290610d019084906114f5565b90915550506040518381526001600160a01b0385169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610c8d565b600a546000906001600160a01b03163314610d5d57600080fd5b6001600160a01b038216610d7057600080fd5b600980546001600160a01b0319166001600160a01b038416179055610d9e6611c37937e0800060001961150d565b610daa90600019611521565b600980546001600160a01b039081166000908152600e602052604080822094909455915460025493519116927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91610e0491815260200190565b60405180910390a36040516001600160a01b03831681527f817c653428858ed536dc085c5d8273734c517b55de44b55f5c5877a75e3373a19060200160405180910390a15050600a80546001600160a01b0319169055600190565b83421115610ea05760405162461bcd60e51b815260206004820152600e60248201526d1156141254915117d4115493525560921b6044820152606401610667565b6001600160a01b0387811660008181526006602090815260408083205481517f00000000000000000000000000000000000000000000000000000000000000008185015280830195909552948b166060850152608084018a905260a0840185905260c08085018a90528151808603909101815260e09094019052825192019190912090610f2c8261122b565b6040805160008082526020820180845284905260ff8a169282019290925260608101889052608081018790529192509060019060a0016020604051602081039080840390855afa158015610f84573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610fba57508a6001600160a01b0316816001600160a01b0316145b610ffa5760405162461bcd60e51b8152602060048201526011602482015270494e56414c49445f5349474e415455524560781b6044820152606401610667565b6110058460016114f5565b6001600160a01b038c166000908152600660205260409020556110298b8b8b611272565b5050505050505050505050565b6000808461104c85670de0b6b3a76400006114ac565b61105691906114e1565b9050600b6040518060e0016040528085815260200183815260200187815260200161107f610b95565b815260200186815260200161109261086f565b81524360209182015282546001808201855560009485529382902083516007909202019081558282015193810193909355604080830151600280860191909155606084015160038601556080840151600486015560a0840151600586015560c090930151600690940193909355905482514281529182015284917f917acfbe39be6509ccf7fecb66a7e42ce2be1083c2d7dd3b9b7491dabddb8da4910160405180910390a2827f6012dbce857565c4a40974aa5de8373a761fc429077ef0c8c8611d1e20d63fb28261116261086f565b6040805192835260208301919091520160405180910390a2506001949350505050565b60007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000046604080516020810195909552840192909252606083015260808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000611235611185565b60405161190160f01b6020820152602281019190915260428101839052606201604051602081830303815290604052805190602001209050919050565b6001600160a01b038381166000818152600f602090815260408083209487168084529482529182902085905590518481526000805160206115a9833981519152910160405180910390a3505050565b600080604083850312156112d457600080fd5b50508035926020909101359150565b600060208083528351808285015260005b81811015611310578581018301518582016040015282016112f4565b81811115611322576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461095457600080fd5b6000806040838503121561136257600080fd5b61136b83611338565b946020939093013593505050565b60006020828403121561138b57600080fd5b5035919050565b6000806000606084860312156113a757600080fd5b6113b084611338565b92506113be60208501611338565b9150604084013590509250925092565b6000602082840312156113e057600080fd5b6113e982611338565b9392505050565b600080600080600080600060e0888a03121561140b57600080fd5b61141488611338565b965061142260208901611338565b95506040880135945060608801359350608088013560ff8116811461144657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561147657600080fd5b61147f83611338565b915061148d60208401611338565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156114c6576114c6611496565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826114f0576114f06114cb565b500490565b6000821982111561150857611508611496565b500190565b60008261151c5761151c6114cb565b500690565b60008282101561153357611533611496565b500390565b600181811c9082168061154c57607f821691505b6020821081141561156d57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fe8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a2646970667358221220fefec25fe76fbc70ba20a59e15c56a88ba8ff13a60739fc799c6392880ee731664736f6c634300080a0033";

export class SRequiem__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SRequiem> {
    return super.deploy(overrides || {}) as Promise<SRequiem>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SRequiem {
    return super.attach(address) as SRequiem;
  }
  connect(signer: Signer): SRequiem__factory {
    return super.connect(signer) as SRequiem__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SRequiemInterface {
    return new utils.Interface(_abi) as SRequiemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SRequiem {
    return new Contract(address, _abi, signerOrProvider) as SRequiem;
  }
}
