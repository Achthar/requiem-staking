/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IRewardDistributor,
  IRewardDistributorInterface,
} from "../IRewardDistributor";

const _abi = [
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
      {
        internalType: "uint256",
        name: "_maturity",
        type: "uint256",
      },
    ],
    name: "distributeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IRewardDistributor__factory {
  static readonly abi = _abi;
  static createInterface(): IRewardDistributorInterface {
    return new utils.Interface(_abi) as IRewardDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRewardDistributor {
    return new Contract(address, _abi, signerOrProvider) as IRewardDistributor;
  }
}
