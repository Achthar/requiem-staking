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
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040519091907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a36103dd8061005f6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630505c8c914610051578063089208d81461007057806346f68ee91461007a5780635a96ac0a1461008d575b600080fd5b600054604080516001600160a01b039092168252519081900360200190f35b610078610095565b005b610078610088366004610377565b61014b565b610078610289565b6000546001600160a01b031633146100f45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600080546040516001600160a01b03909116907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b031633146101a55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016100eb565b6001600160a01b0381166102215760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016100eb565b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a36001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001546001600160a01b031633146103095760405162461bcd60e51b815260206004820152602260248201527f4f776e61626c653a206d757374206265206e6577206f776e657220746f20707560448201527f6c6c00000000000000000000000000000000000000000000000000000000000060648201526084016100eb565b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a36001546000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909216919091179055565b60006020828403121561038957600080fd5b81356001600160a01b03811681146103a057600080fd5b939250505056fea2646970667358221220d6954757418651e2e16c6a0ea57b454b42533f3476af663b949f985582525f2164736f6c634300080d0033";

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
