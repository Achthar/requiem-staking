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
import type { Timelock, TimelockInterface } from "../Timelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay_",
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
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
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
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
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
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
    ],
    name: "NewProposerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
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
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
    name: "MAXIMUM_DELAY",
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
    name: "MINIMUM_DELAY",
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
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_propopser",
        type: "address",
      },
    ],
    name: "addProposer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
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
    name: "proposers",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
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
    inputs: [
      {
        internalType: "address",
        name: "_propopser",
        type: "address",
      },
    ],
    name: "removeProposer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161140438038061140483398101604081905261002f91610166565b610e108110156100ac5760405162461bcd60e51b815260206004820152603760248201527f54696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d757360448201527f7420657863656564206d696e696d756d2064656c61792e00000000000000000060648201526084015b60405180910390fd5b62278d008111156101255760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60448201527f6f7420657863656564206d6178696d756d2064656c61792e000000000000000060648201526084016100a3565b600080546001600160a01b039093166001600160a01b031990931683178155600291909155908152600460205260409020805460ff191660011790556101a0565b6000806040838503121561017957600080fd5b82516001600160a01b038116811461019057600080fd5b6020939093015192949293505050565b611255806101af6000396000f3fe6080604052600436106100f35760003560e01c80636a42b8f81161008a578063c1a287e211610059578063c1a287e2146102a1578063e177246e146102b8578063f2b06537146102d8578063f851a4401461030857600080fd5b80636a42b8f81461023e5780637d645fab14610254578063b03cd4181461026b578063b1b43ae51461028b57600080fd5b806326782247116100c657806326782247146101985780633a66f901146101d05780634dd18bf5146101fe578063591fcdfe1461021e57600080fd5b80630825f38f146100f857806309d632d3146101215780630e18b681146101435780631817749714610158575b600080fd5b61010b610106366004610fa8565b610328565b60405161011891906110b5565b60405180910390f35b34801561012d57600080fd5b5061014161013c3660046110cf565b610699565b005b34801561014f57600080fd5b5061014161078e565b34801561016457600080fd5b506101886101733660046110cf565b60046020526000908152604090205460ff1681565b6040519015158152602001610118565b3480156101a457600080fd5b506001546101b8906001600160a01b031681565b6040516001600160a01b039091168152602001610118565b3480156101dc57600080fd5b506101f06101eb366004610fa8565b61087a565b604051908152602001610118565b34801561020a57600080fd5b506101416102193660046110cf565b610a32565b34801561022a57600080fd5b50610141610239366004610fa8565b610af1565b34801561024a57600080fd5b506101f060025481565b34801561026057600080fd5b506101f062278d0081565b34801561027757600080fd5b506101416102863660046110cf565b610c0b565b34801561029757600080fd5b506101f0610e1081565b3480156102ad57600080fd5b506101f06212750081565b3480156102c457600080fd5b506101416102d33660046110ea565b610d7c565b3480156102e457600080fd5b506101886102f33660046110ea565b60036020526000908152604090205460ff1681565b34801561031457600080fd5b506000546101b8906001600160a01b031681565b6000546060906001600160a01b031633146103b05760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20436160448201527f6c6c206d75737420636f6d652066726f6d2061646d696e2e000000000000000060648201526084015b60405180910390fd5b600086868686866040516020016103cb959493929190611103565b60408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166104565760405162461bcd60e51b815260206004820152603d602482015260008051602061120083398151915260448201527f616e73616374696f6e206861736e2774206265656e207175657565642e00000060648201526084016103a7565b824210156104c85760405162461bcd60e51b8152602060048201526045602482015260008051602061120083398151915260448201527f616e73616374696f6e206861736e2774207375727061737365642074696d65206064820152643637b1b59760d91b608482015260a4016103a7565b6104d5621275008461114f565b42111561052e5760405162461bcd60e51b8152602060048201526033602482015260008051602061120083398151915260448201527230b739b0b1ba34b7b71034b99039ba30b6329760691b60648201526084016103a7565b6000818152600360205260409020805460ff191690558451606090610554575083610580565b85805190602001208560405160200161056e929190611175565b60405160208183030381529060405290505b600080896001600160a01b0316898460405161059c91906111a6565b60006040518083038185875af1925050503d80600081146105d9576040519150601f19603f3d011682016040523d82523d6000602084013e6105de565b606091505b5091509150816106445760405162461bcd60e51b815260206004820152603d602482015260008051602061120083398151915260448201527f616e73616374696f6e20657865637574696f6e2072657665727465642e00000060648201526084016103a7565b896001600160a01b0316847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b60405161068494939291906111c2565b60405180910390a39998505050505050505050565b6000546001600160a01b031633146107105760405162461bcd60e51b815260206004820152603460248201527f54696d656c6f636b3a3a72656d6f766550726f706f7365723a2043616c6c206d6044820152733ab9ba1031b7b6b290333937b69030b236b4b71760611b60648201526084016103a7565b6001600160a01b03811660009081526004602052604090205460ff1661076d5760405162461bcd60e51b8152602060048201526012602482015271141c9bdc1bdcd95c881b9bdd08199bdd5b9960721b60448201526064016103a7565b6001600160a01b03166000908152600460205260409020805460ff19169055565b6001546001600160a01b0316331461080e5760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a61636365707441646d696e3a2043616c6c206d75737460448201527f20636f6d652066726f6d2070656e64696e6741646d696e2e000000000000000060648201526084016103a7565b60008054336001600160a01b031991821681178355825260046020526040808320805460ff191660019081179091558054909216909155815490516001600160a01b03909116917f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c91a2565b3360009081526004602052604081205460ff166108ff5760405162461bcd60e51b815260206004820152603a60248201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c60448201527f206d75737420636f6d652066726f6d2070726f706f736572732e00000000000060648201526084016103a7565b60025461090c904261114f565b8210156109935760405162461bcd60e51b815260206004820152604960248201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a204573746960448201527f6d6174656420657865637574696f6e20626c6f636b206d757374207361746973606482015268333c903232b630bc9760b91b608482015260a4016103a7565b600086868686866040516020016109ae959493929190611103565b60408051601f19818403018152828252805160209182012060008181526003909252919020805460ff1916600117905591506001600160a01b0388169082907f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f90610a20908a908a908a908a906111c2565b60405180910390a39695505050505050565b333014610aa75760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2043616c6c2060448201527f6d75737420636f6d652066726f6d2054696d656c6f636b2e000000000000000060648201526084016103a7565b600180546001600160a01b0319166001600160a01b0383169081179091556040517f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75690600090a250565b6000546001600160a01b03163314610b715760405162461bcd60e51b815260206004820152603760248201527f54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c60448201527f6c206d75737420636f6d652066726f6d2061646d696e2e00000000000000000060648201526084016103a7565b60008585858585604051602001610b8c959493929190611103565b60408051601f19818403018152828252805160209182012060008181526003909252919020805460ff1916905591506001600160a01b0387169082907f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8790610bfb9089908990899089906111c2565b60405180910390a3505050505050565b6000546001600160a01b03163314610c7f5760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b3a3a61646450726f706f7365723a2043616c6c206d7573746044820152701031b7b6b290333937b69030b236b4b71760791b60648201526084016103a7565b6001600160a01b038116610cc75760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016103a7565b6001600160a01b03811660009081526004602052604090205460ff1615610d305760405162461bcd60e51b815260206004820152601d60248201527f50726f706f736572207761732070726576696f75736c7920616464656400000060448201526064016103a7565b6001600160a01b038116600081815260046020526040808220805460ff19166001179055517fa2f70839f9551e638fde3f52959ae8362dd7eefcfec1c11eb402f75711700c7d9190a250565b333014610de55760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b3a3a73657444656c61793a2043616c6c206d75737420636f60448201527036b290333937b6902a34b6b2b637b1b59760791b60648201526084016103a7565b610e10811015610e545760405162461bcd60e51b815260206004820152603460248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d75737420656044820152733c31b2b2b21036b4b734b6bab6903232b630bc9760611b60648201526084016103a7565b62278d00811115610ecd5760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60448201527f6f7420657863656564206d6178696d756d2064656c61792e000000000000000060648201526084016103a7565b600281905560405181907f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90600090a250565b80356001600160a01b0381168114610f1757600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115610f4d57610f4d610f1c565b604051601f8501601f19908116603f01168101908282118183101715610f7557610f75610f1c565b81604052809350858152868686011115610f8e57600080fd5b858560208301376000602087830101525050509392505050565b600080600080600060a08688031215610fc057600080fd5b610fc986610f00565b945060208601359350604086013567ffffffffffffffff80821115610fed57600080fd5b818801915088601f83011261100157600080fd5b61101089833560208501610f32565b9450606088013591508082111561102657600080fd5b508601601f8101881361103857600080fd5b61104788823560208401610f32565b95989497509295608001359392505050565b60005b8381101561107457818101518382015260200161105c565b83811115611083576000848401525b50505050565b600081518084526110a1816020860160208601611059565b601f01601f19169290920160200192915050565b6020815260006110c86020830184611089565b9392505050565b6000602082840312156110e157600080fd5b6110c882610f00565b6000602082840312156110fc57600080fd5b5035919050565b60018060a01b038616815284602082015260a06040820152600061112a60a0830186611089565b828103606084015261113c8186611089565b9150508260808301529695505050505050565b6000821982111561117057634e487b7160e01b600052601160045260246000fd5b500190565b6001600160e01b0319831681528151600090611198816004850160208701611059565b919091016004019392505050565b600082516111b8818460208701611059565b9190910192915050565b8481526080602082015260006111db6080830186611089565b82810360408401526111ed8186611089565b9150508260608301529594505050505056fe54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472a2646970667358221220b53f6c7efe29984731e220b9444b28464e6777ca96d1c072b0242b58961b3b8464736f6c634300080a0033";

export class Timelock__factory extends ContractFactory {
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
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Timelock> {
    return super.deploy(admin_, delay_, overrides || {}) as Promise<Timelock>;
  }
  getDeployTransaction(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, delay_, overrides || {});
  }
  attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockInterface {
    return new utils.Interface(_abi) as TimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}