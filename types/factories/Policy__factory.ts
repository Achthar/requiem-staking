/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Policy, PolicyInterface } from "../Policy";

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
    name: "pullPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPolicy_",
        type: "address",
      },
    ],
    name: "pushPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renouncePolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36102fd8061005f6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630505c8c9146100515780635beede0814610070578063a15ad0771461007a578063a4b239801461008d575b600080fd5b600054604080516001600160a01b039092168252519081900360200190f35b610078610095565b005b610078610088366004610297565b61010d565b6100786101f3565b6001546001600160a01b031633146100ac57600080fd5b600154600080546040516001600160a01b0393841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600154600080546001600160a01b0319166001600160a01b03909216919091179055565b6000546001600160a01b0316331461016c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b0381166101d15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610163565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461024d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610163565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000602082840312156102a957600080fd5b81356001600160a01b03811681146102c057600080fd5b939250505056fea26469706673582212209f23a1c3087541386bdf5a527fb5de6bc433ac6b7db5528e424be102bbd7592764736f6c634300080a0033";

export class Policy__factory extends ContractFactory {
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
  ): Promise<Policy> {
    return super.deploy(overrides || {}) as Promise<Policy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Policy {
    return super.attach(address) as Policy;
  }
  connect(signer: Signer): Policy__factory {
    return super.connect(signer) as Policy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PolicyInterface {
    return new utils.Interface(_abi) as PolicyInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Policy {
    return new Contract(address, _abi, signerOrProvider) as Policy;
  }
}
