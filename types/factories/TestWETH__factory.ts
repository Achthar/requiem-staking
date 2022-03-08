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
  "0x60c0604052600d60808190526c2bb930b83832b21022ba3432b960991b60a0908152620000309160019190620001c9565b50604080518082019091526004808252630ae8aa8960e31b60209092019182526200005e91600291620001c9565b506003805460ff191660121790553480156200007957600080fd5b50604051620012a8380380620012a88339810160408190526200009c916200026f565b620000a9600082620000dc565b620000d57f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a682620000dc565b50620002de565b620000e88282620000ec565b5050565b6000828152602081815260409091206200011191839062000a3762000153821b17901c565b15620000e85760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b6001600160a01b0381166000908152600183016020526040812054620001bf57508154600180820184556000848152602080822090930180546001600160a01b0319166001600160a01b03861690811790915585549082528286019093526040902091909155620001c3565b5060005b92915050565b828054620001d790620002a1565b90600052602060002090601f016020900481019282620001fb576000855562000246565b82601f106200021657805160ff191683800117855562000246565b8280016001018555821562000246579182015b828111156200024657825182559160200191906001019062000229565b506200025492915062000258565b5090565b5b8082111562000254576000815560010162000259565b6000602082840312156200028257600080fd5b81516001600160a01b03811681146200029a57600080fd5b9392505050565b600181811c90821680620002b657607f821691505b60208210811415620002d857634e487b7160e01b600052602260045260246000fd5b50919050565b610fba80620002ee6000396000f3fe60806040526004361061012e5760003560e01c806370a08231116100ab578063a9059cbb1161006f578063a9059cbb14610365578063ca15c87314610385578063d0e30db0146103a5578063d5391393146103ad578063d547741f146103e1578063dd62ed3e1461040157600080fd5b806370a08231146102b65780639010d07c146102e357806391d148541461031b57806395d89b411461033b578063a217fddf1461035057600080fd5b80632e1a7d4d116100f25780632e1a7d4d1461020a5780632f2ff15d1461022a578063313ce5671461024a57806336568abe1461027657806340c10f191461029657600080fd5b806306fdde0314610142578063095ea7b31461016d57806318160ddd1461019d57806323b872dd146101ba578063248a9ca3146101da57600080fd5b3661013d5761013b610439565b005b600080fd5b34801561014e57600080fd5b50610157610494565b6040516101649190610d55565b60405180910390f35b34801561017957600080fd5b5061018d610188366004610dc6565b610522565b6040519015158152602001610164565b3480156101a957600080fd5b50475b604051908152602001610164565b3480156101c657600080fd5b5061018d6101d5366004610df0565b61058f565b3480156101e657600080fd5b506101ac6101f5366004610e2c565b60009081526020819052604090206002015490565b34801561021657600080fd5b5061013b610225366004610e2c565b61078e565b34801561023657600080fd5b5061013b610245366004610e45565b61086e565b34801561025657600080fd5b506003546102649060ff1681565b60405160ff9091168152602001610164565b34801561028257600080fd5b5061013b610291366004610e45565b6108a4565b3480156102a257600080fd5b5061013b6102b1366004610dc6565b6108c5565b3480156102c257600080fd5b506101ac6102d1366004610e71565b60046020526000908152604090205481565b3480156102ef57600080fd5b506103036102fe366004610e8c565b610997565b6040516001600160a01b039091168152602001610164565b34801561032757600080fd5b5061018d610336366004610e45565b6109b6565b34801561034757600080fd5b506101576109e1565b34801561035c57600080fd5b506101ac600081565b34801561037157600080fd5b5061018d610380366004610dc6565b6109ee565b34801561039157600080fd5b506101ac6103a0366004610e2c565b6109fb565b61013b610439565b3480156103b957600080fd5b506101ac7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b3480156103ed57600080fd5b5061013b6103fc366004610e45565b610a0f565b34801561040d57600080fd5b506101ac61041c366004610eae565b600560209081526000928352604080842090915290825290205481565b3360009081526004602052604081208054349290610458908490610eee565b909155505060405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b600180546104a190610f06565b80601f01602080910402602001604051908101604052809291908181526020018280546104cd90610f06565b801561051a5780601f106104ef5761010080835404028352916020019161051a565b820191906000526020600020905b8154815290600101906020018083116104fd57829003601f168201915b505050505081565b3360008181526005602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061057d9086815260200190565b60405180910390a35060015b92915050565b6001600160a01b0383166000908152600460205260408120548211156105f35760405162461bcd60e51b8152602060048201526014602482015273494e53554646494349454e545f42414c414e434560601b60448201526064015b60405180910390fd5b6001600160a01b038416331480159061063157506001600160a01b038416600090815260056020908152604080832033845290915290205460001914155b156106db576001600160a01b03841660009081526005602090815260408083203384529091529020548211156106a25760405162461bcd60e51b8152602060048201526016602482015275494e53554646494349454e545f414c4c4f57414e434560501b60448201526064016105ea565b6001600160a01b0384166000908152600560209081526040808320338452909152812080548492906106d5908490610f41565b90915550505b6001600160a01b03841660009081526004602052604081208054849290610703908490610f41565b90915550506001600160a01b03831660009081526004602052604081208054849290610730908490610eee565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161077c91815260200190565b60405180910390a35060019392505050565b336000908152600460205260409020548111156107e45760405162461bcd60e51b8152602060048201526014602482015273494e53554646494349454e545f42414c414e434560601b60448201526064016105ea565b3360009081526004602052604081208054839290610803908490610f41565b9091555050604051339082156108fc029083906000818181858888f19350505050158015610835573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b6000828152602081905260409020600201546108969061088e90336109b6565b6101a6610aa9565b6108a08282610ab7565b5050565b6108bb6001600160a01b03821633146101a8610aa9565b6108a08282610b10565b6108ef7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336109b6565b6109285760405162461bcd60e51b815260206004820152600a6024820152692727aa2fa6a4a72a22a960b11b60448201526064016105ea565b6001600160a01b03821660009081526004602052604081208054839290610950908490610eee565b90915550506040518181526001600160a01b038316907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a25050565b60008281526020819052604081206109af9083610b69565b9392505050565b6000828152602081815260408083206001600160a01b038516845260010190915281205415156109af565b600280546104a190610f06565b60006109af33848461058f565b600081815260208190526040812054610589565b6000828152602081905260409020600201546108bb90610a2f90336109b6565b6101a7610aa9565b6001600160a01b0381166000908152600183016020526040812054610aa157508154600180820184556000848152602080822090930180546001600160a01b0319166001600160a01b03861690811790915585549082528286019093526040902091909155610589565b506000610589565b816108a0576108a081610b85565b6000828152602081905260409020610acf9082610a37565b156108a05760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b6000828152602081905260409020610b289082610bd8565b156108a05760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b8154600090610b7b9083106064610aa9565b6109af8383610d22565b62461bcd60e51b6000908152602060045260076024526652455123000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fd5b6001600160a01b03811660009081526001830160205260408120548015610d18576000610c06600183610f41565b8554909150600090610c1a90600190610f41565b9050808214610cba576000866000018281548110610c3a57610c3a610f58565b60009182526020909120015487546001600160a01b0390911691508190889085908110610c6957610c69610f58565b600091825260209091200180546001600160a01b0319166001600160a01b0392909216919091179055610c9d836001610eee565b6001600160a01b0390911660009081526001880160205260409020555b8554869080610ccb57610ccb610f6e565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b038716825260018881019091526040822091909155935061058992505050565b6000915050610589565b6000826000018281548110610d3957610d39610f58565b6000918252602090912001546001600160a01b03169392505050565b600060208083528351808285015260005b81811015610d8257858101830151858201604001528201610d66565b81811115610d94576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610dc157600080fd5b919050565b60008060408385031215610dd957600080fd5b610de283610daa565b946020939093013593505050565b600080600060608486031215610e0557600080fd5b610e0e84610daa565b9250610e1c60208501610daa565b9150604084013590509250925092565b600060208284031215610e3e57600080fd5b5035919050565b60008060408385031215610e5857600080fd5b82359150610e6860208401610daa565b90509250929050565b600060208284031215610e8357600080fd5b6109af82610daa565b60008060408385031215610e9f57600080fd5b50508035926020909101359150565b60008060408385031215610ec157600080fd5b610eca83610daa565b9150610e6860208401610daa565b634e487b7160e01b600052601160045260246000fd5b60008219821115610f0157610f01610ed8565b500190565b600181811c90821680610f1a57607f821691505b60208210811415610f3b57634e487b7160e01b600052602260045260246000fd5b50919050565b600082821015610f5357610f53610ed8565b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea26469706673582212206e86904809d5c60cdbcb1e92c6554fc508d369d29382cfc881f6a8b837f5214664736f6c634300080c0033";

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
