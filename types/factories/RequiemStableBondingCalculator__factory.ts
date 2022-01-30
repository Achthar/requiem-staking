/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RequiemStableBondingCalculator,
  RequiemStableBondingCalculatorInterface,
} from "../RequiemStableBondingCalculator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_REQT",
        type: "address",
      },
      {
        internalType: "address",
        name: "_QUOTE",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "QUOTE",
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
    name: "REQT",
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
        name: "_stablePool",
        type: "address",
      },
    ],
    name: "getTotalValue",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
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
        name: "_stablePool",
        type: "address",
      },
    ],
    name: "markdown",
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
        name: "_stablePool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "valuation",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610ac7380380610ac783398101604081905261002f91610088565b6001600160a01b03821661004257600080fd5b6001600160a01b03811661005557600080fd5b6001600160a01b039182166080521660a0526100bb565b80516001600160a01b038116811461008357600080fd5b919050565b6000806040838503121561009b57600080fd5b6100a48361006c565b91506100b26020840161006c565b90509250929050565b60805160a0516109e26100e56000396000818160ec01526102ab01526000606101526109e26000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806302bb41e51461005c57806332da80a3146100a05780634249719f146100c157806368637549146100d45780639c579839146100e7575b600080fd5b6100837f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100b36100ae36600461073c565b61010e565b604051908152602001610097565b6100b36100cf366004610759565b61011f565b6100b36100e236600461073c565b61022b565b6100837f000000000000000000000000000000000000000000000000000000000000000081565b60006101198261022b565b92915050565b60008061012b8461022b565b90506000846001600160a01b0316638214f5a46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561016d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101919190610785565b6001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f291906107a2565b9050610222670de0b6b3a764000061021c6102156102108886610420565b610560565b8590610580565b90610606565b95945050505050565b600080826001600160a01b031663a1dc90316040518163ffffffff1660e01b8152600401600060405180830381865afa15801561026c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261029491908101906107d1565b6040516319b02f4960e21b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301529192506000918516906366c0bd2490602401602060405180830381865afa158015610300573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610324919061088f565b905060005b82518160ff161015610418578160ff168160ff161461040657846001600160a01b031663a95b089f8284612710878660ff168151811061036b5761036b6108b2565b602002602001015161037d91906108de565b6040516001600160e01b031960e086901b16815260ff93841660048201529290911660248301526044820152606401602060405180830381865afa1580156103c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ed91906107a2565b6103f990612710610900565b610403908561091f565b93505b8061041081610937565b915050610329565b505050919050565b604080516020810190915260008152600082116104935760405162461bcd60e51b815260206004820152602660248201527f4669786564506f696e743a3a6672616374696f6e3a206469766973696f6e206260448201526579207a65726f60d01b60648201526084015b60405180910390fd5b826104ad5750604080516020810190915260008152610119565b71ffffffffffffffffffffffffffffffffffff831161054f5760006104d683607086901b6108de565b90506001600160e01b0381111561052f5760405162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015260640161048a565b6040518060200160405280826001600160e01b0316815250915050610119565b60006104d684600160701b85610648565b8051600090610119906612725dd1d243ab906001600160e01b03166108de565b60008261058f57506000610119565b600061059b8385610900565b9050826105a885836108de565b146105ff5760405162461bcd60e51b815260206004820152602160248201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6044820152607760f81b606482015260840161048a565b9392505050565b60006105ff83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506106f6565b600080806000198587098587029250828110838203039150508060001415610682576000841161067757600080fd5b5082900490506105ff565b80841161068e57600080fd5b600084868809600260036001881981018916988990049182028318808302840302808302840302808302840302808302840302808302840302918202909203026000889003889004909101858311909403939093029303949094049190911702949350505050565b600081836107175760405162461bcd60e51b815260040161048a9190610957565b50600061022284866108de565b6001600160a01b038116811461073957600080fd5b50565b60006020828403121561074e57600080fd5b81356105ff81610724565b6000806040838503121561076c57600080fd5b823561077781610724565b946020939093013593505050565b60006020828403121561079757600080fd5b81516105ff81610724565b6000602082840312156107b457600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156107e457600080fd5b825167ffffffffffffffff808211156107fc57600080fd5b818501915085601f83011261081057600080fd5b815181811115610822576108226107bb565b8060051b604051601f19603f83011681018181108582111715610847576108476107bb565b60405291825284820192508381018501918883111561086557600080fd5b938501935b828510156108835784518452938501939285019261086a565b98975050505050505050565b6000602082840312156108a157600080fd5b815160ff811681146105ff57600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000826108fb57634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561091a5761091a6108c8565b500290565b60008219821115610932576109326108c8565b500190565b600060ff821660ff81141561094e5761094e6108c8565b60010192915050565b600060208083528351808285015260005b8181101561098457858101830151858201604001528201610968565b81811115610996576000604083870101525b50601f01601f191692909201604001939250505056fea2646970667358221220b51ae26d234228c6efbb452a90944d9100f567c8e1589088da3c3874e4717a7564736f6c634300080b0033";

export class RequiemStableBondingCalculator__factory extends ContractFactory {
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
    _REQT: string,
    _QUOTE: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequiemStableBondingCalculator> {
    return super.deploy(
      _REQT,
      _QUOTE,
      overrides || {}
    ) as Promise<RequiemStableBondingCalculator>;
  }
  getDeployTransaction(
    _REQT: string,
    _QUOTE: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_REQT, _QUOTE, overrides || {});
  }
  attach(address: string): RequiemStableBondingCalculator {
    return super.attach(address) as RequiemStableBondingCalculator;
  }
  connect(signer: Signer): RequiemStableBondingCalculator__factory {
    return super.connect(signer) as RequiemStableBondingCalculator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemStableBondingCalculatorInterface {
    return new utils.Interface(_abi) as RequiemStableBondingCalculatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemStableBondingCalculator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RequiemStableBondingCalculator;
  }
}
