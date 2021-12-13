/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Manageable, ManageableInterface } from "../Manageable";

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
    inputs: [],
    name: "renounceManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040519091907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a36104f58061005f6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630505c8c914610051578063089208d81461007d57806346f68ee9146100875780635a96ac0a1461009a575b600080fd5b6000546040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100856100a2565b005b610085610095366004610482565b610197565b610085610348565b60005473ffffffffffffffffffffffffffffffffffffffff163314610128576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610218576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161011f565b73ffffffffffffffffffffffffffffffffffffffff81166102bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161011f565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a3600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff1633146103ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4f776e61626c653a206d757374206265206e6577206f776e657220746f20707560448201527f6c6c000000000000000000000000000000000000000000000000000000000000606482015260840161011f565b6001546000805460405173ffffffffffffffffffffffffffffffffffffffff93841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a3600154600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055565b60006020828403121561049457600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146104b857600080fd5b939250505056fea264697066735822122000c7307f3c4a6a81b9122b7ce8d4ca45168334a6320d68a015323751d05128a464736f6c634300080a0033";

export class Manageable__factory extends ContractFactory {
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
  ): Promise<Manageable> {
    return super.deploy(overrides || {}) as Promise<Manageable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Manageable {
    return super.attach(address) as Manageable;
  }
  connect(signer: Signer): Manageable__factory {
    return super.connect(signer) as Manageable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ManageableInterface {
    return new utils.Interface(_abi) as ManageableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Manageable {
    return new Contract(address, _abi, signerOrProvider) as Manageable;
  }
}
