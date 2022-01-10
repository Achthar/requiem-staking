/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FundDistributor,
  FundDistributorInterface,
} from "../FundDistributor";

const _abi = [
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
    name: "FundRequested",
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
        name: "requester",
        type: "address",
      },
    ],
    name: "RequesterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "requester",
        type: "address",
      },
    ],
    name: "RequesterRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_requester",
        type: "address",
      },
    ],
    name: "addRequester",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "distributeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reward",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "missingDecimals",
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
        internalType: "address",
        name: "_requester",
        type: "address",
      },
    ],
    name: "removeRequester",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "requesters",
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
    name: "reward",
    outputs: [
      {
        internalType: "contract IRewardToken",
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
        name: "newOwner_",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36109788061005f6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063c4d66de811610066578063c4d66de814610118578063d66e57cd1461012b578063d6f8307f1461013e578063e4d609cc14610171578063f2fde38b1461018457600080fd5b80631107e77c146100a3578063228cb733146100b8578063412831c4146100e8578063715018a6146100ff5780638da5cb5b14610107575b600080fd5b6100b66100b1366004610751565b610197565b005b6001546100cb906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100f160025481565b6040519081526020016100df565b6100b6610271565b6000546001600160a01b03166100cb565b6100b6610126366004610751565b6102e5565b6100b6610139366004610773565b61043a565b61016161014c366004610751565b60036020526000908152604090205460ff1681565b60405190151581526020016100df565b6100b661017f366004610751565b610578565b6100b6610192366004610751565b61064b565b6000546001600160a01b031633146101ca5760405162461bcd60e51b81526004016101c19061079d565b60405180910390fd5b6001600160a01b03811660009081526003602052604090205460ff166102285760405162461bcd60e51b81526020600482015260136024820152721c995c5d595cdd195c881b9bdd08199bdd5b99606a1b60448201526064016101c1565b6001600160a01b038116600081815260036020526040808220805460ff19169055517ffac6f04e18535b820487cce1312e5a45366b7326f7e956a9c48d70fecdde87619190a250565b6000546001600160a01b0316331461029b5760405162461bcd60e51b81526004016101c19061079d565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b600054600160a81b900460ff16806103075750600054600160a01b900460ff16155b61036a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016101c1565b600054600160a81b900460ff16158015610394576000805461ffff60a01b191661010160a01b1790555b600180546001600160a01b0319166001600160a01b0384169081179091556040805163313ce56760e01b8152905163313ce567916004808201926020929091908290030181865afa1580156103ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041191906107d2565b61041c90601261080b565b60ff166002558015610436576000805460ff60a81b191690555b5050565b3360009081526003602052604090205460ff166104995760405162461bcd60e51b815260206004820152601e60248201527f4f6e6c7920706f6f6c2063616e2072657175657374207472616e73666572000060448201526064016101c1565b6001600160a01b0382166104e15760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016101c1565b8015610436576001546002546001600160a01b03909116906340c10f1990849061050c90600a610914565b6105169085610920565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b15801561055c57600080fd5b505af1158015610570573d6000803e3d6000fd5b505050505050565b6000546001600160a01b031633146105a25760405162461bcd60e51b81526004016101c19061079d565b6001600160a01b03811660009081526003602052604090205460ff16156105ff5760405162461bcd60e51b81526020600482015260116024820152701c995c5d595cdd195c88195e1a5cdd1959607a1b60448201526064016101c1565b6001600160a01b038116600081815260036020526040808220805460ff19166001179055517f1616bf4c0898e95cbe6407827ef9ba6f5887a571df69e07eeda76b2b2a4f7daf9190a250565b6000546001600160a01b031633146106755760405162461bcd60e51b81526004016101c19061079d565b6001600160a01b0381166106da5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101c1565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b038116811461074c57600080fd5b919050565b60006020828403121561076357600080fd5b61076c82610735565b9392505050565b6000806040838503121561078657600080fd5b61078f83610735565b946020939093013593505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000602082840312156107e457600080fd5b815160ff8116811461076c57600080fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff841680821015610825576108256107f5565b90039392505050565b600181815b8085111561086957816000190482111561084f5761084f6107f5565b8085161561085c57918102915b93841c9390800290610833565b509250929050565b6000826108805750600161090e565b8161088d5750600061090e565b81600181146108a357600281146108ad576108c9565b600191505061090e565b60ff8411156108be576108be6107f5565b50506001821b61090e565b5060208310610133831016604e8410600b84101617156108ec575081810a61090e565b6108f6838361082e565b806000190482111561090a5761090a6107f5565b0290505b92915050565b600061076c8383610871565b60008261093d57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220960ed9ec9ed05330382f22650a77c44775adce6c0565fdc2588e9ae8b2188a8c64736f6c634300080b0033";

export class FundDistributor__factory extends ContractFactory {
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
  ): Promise<FundDistributor> {
    return super.deploy(overrides || {}) as Promise<FundDistributor>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FundDistributor {
    return super.attach(address) as FundDistributor;
  }
  connect(signer: Signer): FundDistributor__factory {
    return super.connect(signer) as FundDistributor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundDistributorInterface {
    return new utils.Interface(_abi) as FundDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FundDistributor {
    return new Contract(address, _abi, signerOrProvider) as FundDistributor;
  }
}
