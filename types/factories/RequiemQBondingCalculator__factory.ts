/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RequiemQBondingCalculator,
  RequiemQBondingCalculatorInterface,
} from "../RequiemQBondingCalculator";

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
  "0x60a060405234801561001057600080fd5b50604051610d09380380610d0983398101604081905261002f91610053565b6001600160a01b03811661004257600080fd5b6001600160a01b0316608052610083565b60006020828403121561006557600080fd5b81516001600160a01b038116811461007c57600080fd5b9392505050565b608051610c506100b96000396000818160560152818161016c0152818161021a0152818161044801526105ad0152610c506000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806302bb41e51461005157806332da80a3146100955780634249719f146100b657806368637549146100c9575b600080fd5b6100787f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100a86100a3366004610921565b6100dc565b60405190815260200161008c565b6100a86100c436600461093e565b6102cd565b6100a86100d7366004610921565b61034c565b6000806000836001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa15801561011f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101439190610988565b506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff16915060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f691906109d8565b6001600160a01b0316141561020c57508061020f565b50815b6102188561034c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610276573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029a91906109f5565b6102a590600a610b14565b6102b0906002610b23565b6102ba9083610b23565b6102c49190610b58565b95945050505050565b6000806102d98461034c565b90506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561031b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033f9190610b7a565b90506102c482858361079f565b6000806000836001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa15801561038f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b39190610988565b506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff169150600080856001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa158015610419573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043d91906109d8565b6001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316146104dd57856001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d791906109d8565b84610541565b856001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa15801561051b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053f91906109d8565b835b9150915060006004876001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610587573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ab91906109f5565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610609573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062d91906109f5565b856001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561066b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068f91906109f5565b6106999190610b93565b6106a39190610bb8565b6106ad9190610bb8565b60ff16905060006001600160a01b03881663e9255bae85836106d161271088610b58565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b0393841660048201529290911660248301526044820152606401602060405180830381865afa15801561073b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075f9190610b7a565b905061078861076f83600a610bdb565b6107798584610b23565b6107839190610b58565b6107ea565b610793906002610b23565b98975050505050505050565b60006107ac84848461085a565b9050600082806107be576107be610b42565b84860911156107e35760001981106107d557600080fd5b806107df81610be7565b9150505b9392505050565b6000600382111561084b5750806000610804600283610b58565b61080f906001610c02565b90505b818110156108455790508060028161082a8186610b58565b6108349190610c02565b61083e9190610b58565b9050610812565b50919050565b8115610855575060015b919050565b600080806000198587098587029250828110838203039150508060001415610894576000841161088957600080fd5b5082900490506107e3565b8084116108a057600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6001600160a01b038116811461091e57600080fd5b50565b60006020828403121561093357600080fd5b81356107e381610909565b6000806040838503121561095157600080fd5b823561095c81610909565b946020939093013593505050565b80516dffffffffffffffffffffffffffff8116811461085557600080fd5b60008060006060848603121561099d57600080fd5b6109a68461096a565b92506109b46020850161096a565b9150604084015163ffffffff811681146109cd57600080fd5b809150509250925092565b6000602082840312156109ea57600080fd5b81516107e381610909565b600060208284031215610a0757600080fd5b815160ff811681146107e357600080fd5b634e487b7160e01b600052601160045260246000fd5b600181815b80851115610a69578160001904821115610a4f57610a4f610a18565b80851615610a5c57918102915b93841c9390800290610a33565b509250929050565b600082610a8057506001610b0e565b81610a8d57506000610b0e565b8160018114610aa35760028114610aad57610ac9565b6001915050610b0e565b60ff841115610abe57610abe610a18565b50506001821b610b0e565b5060208310610133831016604e8410600b8410161715610aec575081810a610b0e565b610af68383610a2e565b8060001904821115610b0a57610b0a610a18565b0290505b92915050565b60006107e360ff841683610a71565b6000816000190483118215151615610b3d57610b3d610a18565b500290565b634e487b7160e01b600052601260045260246000fd5b600082610b7557634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215610b8c57600080fd5b5051919050565b600060ff821660ff84168060ff03821115610bb057610bb0610a18565b019392505050565b600060ff821660ff841680821015610bd257610bd2610a18565b90039392505050565b60006107e38383610a71565b6000600019821415610bfb57610bfb610a18565b5060010190565b60008219821115610c1557610c15610a18565b50019056fea2646970667358221220e88f15e635b9f115891eed01d4f747d10f884e23cd915be257f1bb5987ae91e164736f6c634300080b0033";

export class RequiemQBondingCalculator__factory extends ContractFactory {
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
  ): Promise<RequiemQBondingCalculator> {
    return super.deploy(
      _REQT,
      overrides || {}
    ) as Promise<RequiemQBondingCalculator>;
  }
  getDeployTransaction(
    _REQT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_REQT, overrides || {});
  }
  attach(address: string): RequiemQBondingCalculator {
    return super.attach(address) as RequiemQBondingCalculator;
  }
  connect(signer: Signer): RequiemQBondingCalculator__factory {
    return super.connect(signer) as RequiemQBondingCalculator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemQBondingCalculatorInterface {
    return new utils.Interface(_abi) as RequiemQBondingCalculatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemQBondingCalculator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RequiemQBondingCalculator;
  }
}
