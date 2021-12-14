/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RequiemERC20, RequiemERC20Interface } from "../RequiemERC20";

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
    name: "PERMIT_TYPEHASH",
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
        name: "",
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
  "0x608060405234801561001057600080fd5b50604080518082018252601a81527f5265717569656d204c69717569646974792050726f76696465720000000000006020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f2e1adfbb118fada029d9623aa0ed8dd2318a25545f57095be55dcbd209508e12818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355610b25806101046000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b411461020d578063a9059cbb14610249578063d505accf1461025c578063dd62ed3e1461027157600080fd5b80633644e515146101c457806370a08231146101cd5780637ecebe00146101ed57600080fd5b806323b872dd116100bd57806323b872dd1461017057806330adf81f14610183578063313ce567146101aa57600080fd5b806306fdde03146100e4578063095ea7b31461013657806318160ddd14610159575b600080fd5b6101206040518060400160405280601a81526020017f5265717569656d204c69717569646974792050726f766964657200000000000081525081565b60405161012d9190610895565b60405180910390f35b610149610144366004610931565b61029c565b604051901515815260200161012d565b61016260005481565b60405190815260200161012d565b61014961017e36600461095b565b6102b2565b6101627f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6101b2601281565b60405160ff909116815260200161012d565b61016260035481565b6101626101db366004610997565b60016020526000908152604090205481565b6101626101fb366004610997565b60046020526000908152604090205481565b6101206040518060400160405280600381526020017f524c50000000000000000000000000000000000000000000000000000000000081525081565b610149610257366004610931565b61038b565b61026f61026a3660046109b2565b610398565b005b61016261027f366004610a25565b600260209081526000928352604080842090915290825290205481565b60006102a9338484610688565b50600192915050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff146103765773ffffffffffffffffffffffffffffffffffffffff8416600090815260026020908152604080832033845290915290205461034490836106f7565b73ffffffffffffffffffffffffffffffffffffffff851660009081526002602090815260408083203384529091529020555b61038184848461070c565b5060019392505050565b60006102a933848461070c565b42841015610407576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f524c503a2045585049524544000000000000000000000000000000000000000060448201526064015b60405180910390fd5b60035473ffffffffffffffffffffffffffffffffffffffff8816600090815260046020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b91908761046783610a87565b9091555060408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810187905260e001604051602081830303815290604052805190602001206040516020016105089291907f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015610591573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81161580159061060c57508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610672576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f524c503a20494e56414c49445f5349474e41545552450000000000000000000060448201526064016103fe565b61067d898989610688565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6000610705838360016107d9565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604090205461073c90826106f7565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260016020526040808220939093559084168152205461077890826107fd565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906106ea9085815260200190565b60006107e88484111583610816565b60006107f48486610ac0565b95945050505050565b60008061080a8385610ad7565b90506107058482101560005b816108245761082481610828565b5050565b7f08c379a0000000000000000000000000000000000000000000000000000000006000908152602060045260076024526652455123000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fd5b600060208083528351808285015260005b818110156108c2578581018301518582016040015282016108a6565b818111156108d4576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461092c57600080fd5b919050565b6000806040838503121561094457600080fd5b61094d83610908565b946020939093013593505050565b60008060006060848603121561097057600080fd5b61097984610908565b925061098760208501610908565b9150604084013590509250925092565b6000602082840312156109a957600080fd5b61070582610908565b600080600080600080600060e0888a0312156109cd57600080fd5b6109d688610908565b96506109e460208901610908565b95506040880135945060608801359350608088013560ff81168114610a0857600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610a3857600080fd5b610a4183610908565b9150610a4f60208401610908565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610ab957610ab9610a58565b5060010190565b600082821015610ad257610ad2610a58565b500390565b60008219821115610aea57610aea610a58565b50019056fea2646970667358221220b25e7eb3d82bfa2ba2b03a6a54633ecdf269d1b92ccd5b62648f535ab7651aa964736f6c634300080a0033";

export class RequiemERC20__factory extends ContractFactory {
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
  ): Promise<RequiemERC20> {
    return super.deploy(overrides || {}) as Promise<RequiemERC20>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RequiemERC20 {
    return super.attach(address) as RequiemERC20;
  }
  connect(signer: Signer): RequiemERC20__factory {
    return super.connect(signer) as RequiemERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemERC20Interface {
    return new utils.Interface(_abi) as RequiemERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemERC20 {
    return new Contract(address, _abi, signerOrProvider) as RequiemERC20;
  }
}