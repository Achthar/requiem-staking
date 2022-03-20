/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestWETH, TestWETHInterface } from "../TestWETH";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
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
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
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
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "MINTER_ROLE",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
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
        name: "",
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
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        name: "destinatary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
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
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
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
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
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
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c0604052600d60808190526c2bb930b83832b21022ba3432b960991b60a0908152620000309160019190620001c9565b50604080518082019091526004808252630ae8aa8960e31b60209092019182526200005e91600291620001c9565b506003805460ff191660121790553480156200007957600080fd5b5060405162001339380380620013398339810160408190526200009c916200026f565b620000a9600082620000dc565b620000d57f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a682620000dc565b50620002dd565b620000e88282620000ec565b5050565b6000828152602081815260409091206200011191839062000aa362000153821b17901c565b15620000e85760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b6001600160a01b0381166000908152600183016020526040812054620001bf57508154600180820184556000848152602080822090930180546001600160a01b0319166001600160a01b03861690811790915585549082528286019093526040902091909155620001c3565b5060005b92915050565b828054620001d790620002a1565b90600052602060002090601f016020900481019282620001fb576000855562000246565b82601f106200021657805160ff191683800117855562000246565b8280016001018555821562000246579182015b828111156200024657825182559160200191906001019062000229565b506200025492915062000258565b5090565b5b8082111562000254576000815560010162000259565b6000602082840312156200028257600080fd5b81516001600160a01b03811681146200029a57600080fd5b9392505050565b600181811c90821680620002b657607f821691505b602082108103620002d757634e487b7160e01b600052602260045260246000fd5b50919050565b61104c80620002ed6000396000f3fe60806040526004361061016e5760003560e01c806370a08231116100cb578063a9059cbb1161007f578063d539139311610059578063d5391393146103ed578063d547741f14610421578063dd62ed3e1461044157600080fd5b8063a9059cbb146103a5578063ca15c873146103c5578063d0e30db0146103e557600080fd5b806391d14854116100b057806391d148541461035b57806395d89b411461037b578063a217fddf1461039057600080fd5b806370a08231146102f65780639010d07c1461032357600080fd5b80632e1a7d4d11610122578063313ce56711610107578063313ce5671461028a57806336568abe146102b657806340c10f19146102d657600080fd5b80632e1a7d4d1461024a5780632f2ff15d1461026a57600080fd5b806318160ddd1161015357806318160ddd146101dd57806323b872dd146101fa578063248a9ca31461021a57600080fd5b806306fdde0314610182578063095ea7b3146101ad57600080fd5b3661017d5761017b610479565b005b600080fd5b34801561018e57600080fd5b506101976104d4565b6040516101a49190610de8565b60405180910390f35b3480156101b957600080fd5b506101cd6101c8366004610e59565b610562565b60405190151581526020016101a4565b3480156101e957600080fd5b50475b6040519081526020016101a4565b34801561020657600080fd5b506101cd610215366004610e83565b6105cf565b34801561022657600080fd5b506101ec610235366004610ebf565b60009081526020819052604090206002015490565b34801561025657600080fd5b5061017b610265366004610ebf565b6107de565b34801561027657600080fd5b5061017b610285366004610ed8565b6108c7565b34801561029657600080fd5b506003546102a49060ff1681565b60405160ff90911681526020016101a4565b3480156102c257600080fd5b5061017b6102d1366004610ed8565b6108fd565b3480156102e257600080fd5b5061017b6102f1366004610e59565b61091e565b34801561030257600080fd5b506101ec610311366004610f04565b60046020526000908152604090205481565b34801561032f57600080fd5b5061034361033e366004610f1f565b610a03565b6040516001600160a01b0390911681526020016101a4565b34801561036757600080fd5b506101cd610376366004610ed8565b610a22565b34801561038757600080fd5b50610197610a4d565b34801561039c57600080fd5b506101ec600081565b3480156103b157600080fd5b506101cd6103c0366004610e59565b610a5a565b3480156103d157600080fd5b506101ec6103e0366004610ebf565b610a67565b61017b610479565b3480156103f957600080fd5b506101ec7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b34801561042d57600080fd5b5061017b61043c366004610ed8565b610a7b565b34801561044d57600080fd5b506101ec61045c366004610f41565b600560209081526000928352604080842090915290825290205481565b3360009081526004602052604081208054349290610498908490610f81565b909155505060405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b600180546104e190610f99565b80601f016020809104026020016040519081016040528092919081815260200182805461050d90610f99565b801561055a5780601f1061052f5761010080835404028352916020019161055a565b820191906000526020600020905b81548152906001019060200180831161053d57829003601f168201915b505050505081565b3360008181526005602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906105bd9086815260200190565b60405180910390a35060015b92915050565b6001600160a01b03831660009081526004602052604081205482111561063c5760405162461bcd60e51b815260206004820152601460248201527f494e53554646494349454e545f42414c414e434500000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038416331480159061067a57506001600160a01b038416600090815260056020908152604080832033845290915290205460001914155b1561072b576001600160a01b03841660009081526005602090815260408083203384529091529020548211156106f25760405162461bcd60e51b815260206004820152601660248201527f494e53554646494349454e545f414c4c4f57414e4345000000000000000000006044820152606401610633565b6001600160a01b038416600090815260056020908152604080832033845290915281208054849290610725908490610fd3565b90915550505b6001600160a01b03841660009081526004602052604081208054849290610753908490610fd3565b90915550506001600160a01b03831660009081526004602052604081208054849290610780908490610f81565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107cc91815260200190565b60405180910390a35060019392505050565b3360009081526004602052604090205481111561083d5760405162461bcd60e51b815260206004820152601460248201527f494e53554646494349454e545f42414c414e43450000000000000000000000006044820152606401610633565b336000908152600460205260408120805483929061085c908490610fd3565b9091555050604051339082156108fc029083906000818181858888f1935050505015801561088e573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b6000828152602081905260409020600201546108ef906108e79033610a22565b6101a6610b22565b6108f98282610b30565b5050565b6109146001600160a01b03821633146101a8610b22565b6108f98282610b89565b6109487f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610a22565b6109945760405162461bcd60e51b815260206004820152600a60248201527f4e4f545f4d494e544552000000000000000000000000000000000000000000006044820152606401610633565b6001600160a01b038216600090815260046020526040812080548392906109bc908490610f81565b90915550506040518181526001600160a01b038316907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a25050565b6000828152602081905260408120610a1b9083610be2565b9392505050565b6000828152602081815260408083206001600160a01b03851684526001019091528120541515610a1b565b600280546104e190610f99565b6000610a1b3384846105cf565b6000818152602081905260408120546105c9565b60008281526020819052604090206002015461091490610a9b9033610a22565b6101a7610b22565b6001600160a01b0381166000908152600183016020526040812054610b1a575081546001808201845560008481526020808220909301805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038616908117909155855490825282860190935260409020919091556105c9565b5060006105c9565b816108f9576108f981610bfe565b6000828152602081905260409020610b489082610aa3565b156108f95760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b6000828152602081905260409020610ba19082610c51565b156108f95760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b8154600090610bf49083106064610b22565b610a1b8383610db5565b62461bcd60e51b6000908152602060045260076024526652455123000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fd5b6001600160a01b03811660009081526001830160205260408120548015610dab576000610c7f600183610fd3565b8554909150600090610c9390600190610fd3565b9050808214610d40576000866000018281548110610cb357610cb3610fea565b60009182526020909120015487546001600160a01b0390911691508190889085908110610ce257610ce2610fea565b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055610d23836001610f81565b6001600160a01b0390911660009081526001880160205260409020555b8554869080610d5157610d51611000565b600082815260208082208301600019908101805473ffffffffffffffffffffffffffffffffffffffff191690559092019092556001600160a01b03871682526001888101909152604082209190915593506105c992505050565b60009150506105c9565b6000826000018281548110610dcc57610dcc610fea565b6000918252602090912001546001600160a01b03169392505050565b600060208083528351808285015260005b81811015610e1557858101830151858201604001528201610df9565b81811115610e27576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610e5457600080fd5b919050565b60008060408385031215610e6c57600080fd5b610e7583610e3d565b946020939093013593505050565b600080600060608486031215610e9857600080fd5b610ea184610e3d565b9250610eaf60208501610e3d565b9150604084013590509250925092565b600060208284031215610ed157600080fd5b5035919050565b60008060408385031215610eeb57600080fd5b82359150610efb60208401610e3d565b90509250929050565b600060208284031215610f1657600080fd5b610a1b82610e3d565b60008060408385031215610f3257600080fd5b50508035926020909101359150565b60008060408385031215610f5457600080fd5b610f5d83610e3d565b9150610efb60208401610e3d565b634e487b7160e01b600052601160045260246000fd5b60008219821115610f9457610f94610f6b565b500190565b600181811c90821680610fad57607f821691505b602082108103610fcd57634e487b7160e01b600052602260045260246000fd5b50919050565b600082821015610fe557610fe5610f6b565b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220c822ec7eb10819cf33fcc4c2a97e0bd11dd1a1103dfbc3470c7db4a803b6023764736f6c634300080d0033";

export class TestWETH__factory extends ContractFactory {
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
    minter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestWETH> {
    return super.deploy(minter, overrides || {}) as Promise<TestWETH>;
  }
  getDeployTransaction(
    minter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(minter, overrides || {});
  }
  attach(address: string): TestWETH {
    return super.attach(address) as TestWETH;
  }
  connect(signer: Signer): TestWETH__factory {
    return super.connect(signer) as TestWETH__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestWETHInterface {
    return new utils.Interface(_abi) as TestWETHInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestWETH {
    return new Contract(address, _abi, signerOrProvider) as TestWETH;
  }
}
