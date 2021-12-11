/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RequiemBondingCalculator,
  RequiemBondingCalculatorInterface,
} from "../RequiemBondingCalculator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_REQT",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "_pair",
        type: "address",
      },
    ],
    name: "getKValue",
    outputs: [
      {
        internalType: "uint256",
        name: "k_",
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
        name: "_pair",
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
        name: "_pair",
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
        name: "_pair",
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
  "0x60a060405234801561001057600080fd5b50604051610e64380380610e6483398101604081905261002f91610053565b6001600160a01b03811661004257600080fd5b6001600160a01b0316608052610083565b60006020828403121561006557600080fd5b81516001600160a01b038116811461007c57600080fd5b9392505050565b608051610db96100ab6000396000818160610152818161017c01526102300152610db96000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806302bb41e51461005c57806332da80a3146100a05780634249719f146100c1578063490084ef146100d457806368637549146100e7575b600080fd5b6100837f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100b36100ae366004610aa0565b6100fa565b604051908152602001610097565b6100b36100cf366004610abd565b6102dc565b6100b36100e2366004610aa0565b610378565b6100b36100f5366004610aa0565b610622565b6000806000836001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa15801561013d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101619190610b00565b506001600160701b031691506001600160701b0316915060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102069190610b50565b6001600160a01b0316141561021c57508061021f565b50815b6102d361022b86610622565b6102cd7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561028c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b09190610b6d565b6102bb90600a610c8a565b6102c6906002610c99565b8490610646565b906106d1565b95945050505050565b6000806102e884610622565b90506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561032a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034e9190610cb8565b90506102d3670de0b6b3a76400006102cd61037161036c8886610713565b61084e565b8590610646565b600080826001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103dd9190610b50565b6001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561041a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043e9190610b6d565b60ff1690506000836001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa158015610483573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a79190610b50565b6001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105089190610b6d565b60ff1690506000610587856001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610550573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105749190610b6d565b60ff16610581858561086e565b906108cd565b9050600080866001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa1580156105ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ee9190610b00565b506001600160701b03918216935016905061061761060d84600a610cd1565b6102cd8484610646565b979650505050505050565b6000610640600261063a61063585610378565b61090f565b90610646565b92915050565b60008261065557506000610640565b60006106618385610c99565b90508261066e8583610cdd565b146106ca5760405162461bcd60e51b815260206004820152602160248201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6044820152607760f81b60648201526084015b60405180910390fd5b9392505050565b60006106ca83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061097a565b604080516020810190915260008152600082116107815760405162461bcd60e51b815260206004820152602660248201527f4669786564506f696e743a3a6672616374696f6e3a206469766973696f6e206260448201526579207a65726f60d01b60648201526084016106c1565b8261079b5750604080516020810190915260008152610640565b71ffffffffffffffffffffffffffffffffffff831161083d5760006107c483607086901b610cdd565b90506001600160e01b0381111561081d5760405162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f77000060448201526064016106c1565b6040518060200160405280826001600160e01b0316815250915050610640565b60006107c484600160701b856109a8565b8051600090610640906612725dd1d243ab906001600160e01b0316610cdd565b60008061087b8385610cff565b9050838110156106ca5760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f77000000000060448201526064016106c1565b60006106ca83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610a57565b6000600382111561096b575080600061093361092c8360026106d1565b600161086e565b90505b818110156109655780915061095e61095761095185846106d1565b8361086e565b60026106d1565b9050610936565b50919050565b8115610975575060015b919050565b6000818361099b5760405162461bcd60e51b81526004016106c19190610d17565b5060006102d38486610cdd565b6000808060001985870985870292508281108382030391505080600014156109e257600084116109d757600080fd5b5082900490506106ca565b8084116109ee57600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b60008184841115610a7b5760405162461bcd60e51b81526004016106c19190610d17565b5060006102d38486610d6c565b6001600160a01b0381168114610a9d57600080fd5b50565b600060208284031215610ab257600080fd5b81356106ca81610a88565b60008060408385031215610ad057600080fd5b8235610adb81610a88565b946020939093013593505050565b80516001600160701b038116811461097557600080fd5b600080600060608486031215610b1557600080fd5b610b1e84610ae9565b9250610b2c60208501610ae9565b9150604084015163ffffffff81168114610b4557600080fd5b809150509250925092565b600060208284031215610b6257600080fd5b81516106ca81610a88565b600060208284031215610b7f57600080fd5b815160ff811681146106ca57600080fd5b634e487b7160e01b600052601160045260246000fd5b600181815b80851115610be1578160001904821115610bc757610bc7610b90565b80851615610bd457918102915b93841c9390800290610bab565b509250929050565b600082610bf857506001610640565b81610c0557506000610640565b8160018114610c1b5760028114610c2557610c41565b6001915050610640565b60ff841115610c3657610c36610b90565b50506001821b610640565b5060208310610133831016604e8410600b8410161715610c64575081810a610640565b610c6e8383610ba6565b8060001904821115610c8257610c82610b90565b029392505050565b60006106ca60ff841683610be9565b6000816000190483118215151615610cb357610cb3610b90565b500290565b600060208284031215610cca57600080fd5b5051919050565b60006106ca8383610be9565b600082610cfa57634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115610d1257610d12610b90565b500190565b600060208083528351808285015260005b81811015610d4457858101830151858201604001528201610d28565b81811115610d56576000604083870101525b50601f01601f1916929092016040019392505050565b600082821015610d7e57610d7e610b90565b50039056fea2646970667358221220f0af77c216bfc8695f868948f10c38d98482232b630db7d347258ca9a878501b64736f6c634300080a0033";

export class RequiemBondingCalculator__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequiemBondingCalculator> {
    return super.deploy(
      _REQT,
      overrides || {}
    ) as Promise<RequiemBondingCalculator>;
  }
  getDeployTransaction(
    _REQT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_REQT, overrides || {});
  }
  attach(address: string): RequiemBondingCalculator {
    return super.attach(address) as RequiemBondingCalculator;
  }
  connect(signer: Signer): RequiemBondingCalculator__factory {
    return super.connect(signer) as RequiemBondingCalculator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemBondingCalculatorInterface {
    return new utils.Interface(_abi) as RequiemBondingCalculatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemBondingCalculator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RequiemBondingCalculator;
  }
}
