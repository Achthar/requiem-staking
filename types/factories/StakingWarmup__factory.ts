/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StakingWarmup, StakingWarmupInterface } from "../StakingWarmup";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sREQT",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "retrieve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sREQT",
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
    name: "staking",
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
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161031538038061031583398101604081905261002f91610089565b6001600160a01b03821661004257600080fd5b6001600160a01b03808316608052811661005b57600080fd5b6001600160a01b031660a052506100bc565b80516001600160a01b038116811461008457600080fd5b919050565b6000806040838503121561009c57600080fd5b6100a58361006d565b91506100b36020840161006d565b90509250929050565b60805160a0516102296100ec6000396000818160a30152610120015260008181604b015260d001526102296000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634cf088d914610046578063c3a2a66514610089578063fafbbc671461009e575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61009c610097366004610192565b6100c5565b005b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146100fa57600080fd5b60405163a9059cbb60e01b81526001600160a01b038381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015610169573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018d91906101ca565b505050565b600080604083850312156101a557600080fd5b82356001600160a01b03811681146101bc57600080fd5b946020939093013593505050565b6000602082840312156101dc57600080fd5b815180151581146101ec57600080fd5b939250505056fea2646970667358221220c065c36d6a0ff58801b72a0b74e601d43101de00bea164ea186445c92343857964736f6c634300080c0033";

export class StakingWarmup__factory extends ContractFactory {
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
    _staking: string,
    _sREQT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StakingWarmup> {
    return super.deploy(
      _staking,
      _sREQT,
      overrides || {}
    ) as Promise<StakingWarmup>;
  }
  getDeployTransaction(
    _staking: string,
    _sREQT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_staking, _sREQT, overrides || {});
  }
  attach(address: string): StakingWarmup {
    return super.attach(address) as StakingWarmup;
  }
  connect(signer: Signer): StakingWarmup__factory {
    return super.connect(signer) as StakingWarmup__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingWarmupInterface {
    return new utils.Interface(_abi) as StakingWarmupInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingWarmup {
    return new Contract(address, _abi, signerOrProvider) as StakingWarmup;
  }
}
