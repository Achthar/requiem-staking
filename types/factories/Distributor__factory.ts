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
import type { Distributor, DistributorInterface } from "../Distributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ohm",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_epochLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nextEpochBlock",
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
    inputs: [],
    name: "OHM",
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
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardRate",
        type: "uint256",
      },
    ],
    name: "addRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "adjustments",
    outputs: [
      {
        internalType: "bool",
        name: "add",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "target",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "distribute",
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
    inputs: [],
    name: "epochLength",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "info",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextEpochBlock",
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
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
    ],
    name: "nextRewardAt",
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
        name: "_recipient",
        type: "address",
      },
    ],
    name: "nextRewardFor",
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
    name: "policy",
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
    name: "pullPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPolicy_",
        type: "address",
      },
    ],
    name: "pushPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "removeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renouncePolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_add",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_target",
        type: "uint256",
      },
    ],
    name: "setAdjustment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
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
  "0x60e060405234801561001057600080fd5b5060405161109f38038061109f83398101604081905261002f916100d0565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160a01b03841661008157600080fd5b6001600160a01b0380851660a052831661009a57600080fd5b6001600160a01b0390921660805260c05260025550610113565b80516001600160a01b03811681146100cb57600080fd5b919050565b600080600080608085870312156100e657600080fd5b6100ef856100b4565b93506100fd602086016100b4565b6040860151606090960151949790965092505050565b60805160a05160c051610f486101576000396000818161018d01526106720152600081816101d101526106d501526000818161021301526105cc0152610f486000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c8063a15ad07711610097578063c9fa8b2a11610066578063c9fa8b2a14610285578063e4fc6b6d14610298578063f7982243146102b0578063fe3fbbad146102c357600080fd5b8063a15ad077146101f3578063a4b2398014610206578063a6c41fec1461020e578063bc3b2b121461023557600080fd5b806357d775f8116100d357806357d775f8146101885780635beede08146101af5780635db854b0146101b957806361d027b3146101cc57600080fd5b8062640c2e146101045780630505c8c9146101205780632e3405991461014557806336d33f4414610175575b600080fd5b61010d60025481565b6040519081526020015b60405180910390f35b6000546001600160a01b03165b6040516001600160a01b039091168152602001610117565b610158610153366004610cd0565b6102d6565b604080519283526001600160a01b03909116602083015201610117565b61010d610183366004610d05565b61030d565b61010d7f000000000000000000000000000000000000000000000000000000000000000081565b6101b76103a6565b005b6101b76101c7366004610d20565b61041e565b61012d7f000000000000000000000000000000000000000000000000000000000000000081565b6101b7610201366004610d05565b610498565b6101b7610549565b61012d7f000000000000000000000000000000000000000000000000000000000000000081565b610268610243366004610cd0565b60036020526000908152604090208054600182015460029092015460ff909116919083565b604080519315158452602084019290925290820152606001610117565b61010d610293366004610cd0565b6105bd565b6102a061065e565b6040519015158152602001610117565b6101b76102be366004610d62565b6107d7565b6101b76102d1366004610d8c565b6108a9565b600481815481106102e657600080fd5b6000918252602090912060029091020180546001909101549091506001600160a01b031682565b60008060005b60045481101561039f57836001600160a01b03166004828154811061033a5761033a610db8565b60009182526020909120600160029092020101546001600160a01b0316141561038d5761038a6004828154811061037357610373610db8565b9060005260206000209060020201600001546105bd565b91505b8061039781610de4565b915050610313565b5092915050565b6001546001600160a01b031633146103bd57600080fd5b600154600080546040516001600160a01b0393841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600154600080546001600160a01b0319166001600160a01b03909216919091179055565b6000546001600160a01b031633146104515760405162461bcd60e51b815260040161044890610dff565b60405180910390fd5b60408051606081018252931515845260208085019384528482019283526000958652600390529093209151825460ff19169015151782555160018201559051600290910155565b6000546001600160a01b031633146104c25760405162461bcd60e51b815260040161044890610dff565b6001600160a01b0381166105275760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610448565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146105735760405162461bcd60e51b815260040161044890610dff565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000610658620f4240610652847f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610628573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064c9190610e34565b90610985565b90610a0b565b92915050565b600043600254116107d157600254610696907f0000000000000000000000000000000000000000000000000000000000000000610a4d565b60025560005b6004548110156107c9576000600482815481106106bb576106bb610db8565b90600052602060002090600202016000015411156107b7577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636a20de926004838154811061071557610715610db8565b906000526020600020906002020160010160009054906101000a90046001600160a01b03166107506004858154811061037357610373610db8565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b15801561079657600080fd5b505af11580156107aa573d6000803e3d6000fd5b505050506107b781610aac565b806107c181610de4565b91505061069c565b506001905090565b50600090565b6000546001600160a01b031633146108015760405162461bcd60e51b815260040161044890610dff565b6001600160a01b03821661081457600080fd5b604080518082019091529081526001600160a01b03918216602082019081526004805460018101825560009190915291517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b600290930292830155517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c90910180546001600160a01b03191691909216179055565b6000546001600160a01b031633146108d35760405162461bcd60e51b815260040161044890610dff565b600482815481106108e6576108e6610db8565b60009182526020909120600160029092020101546001600160a01b0382811691161461091157600080fd5b60006004838154811061092657610926610db8565b906000526020600020906002020160010160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060006004838154811061097057610970610db8565b60009182526020909120600290910201555050565b60008261099457506000610658565b60006109a08385610e4d565b9050826109ad8583610e6c565b14610a045760405162461bcd60e51b815260206004820152602160248201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6044820152607760f81b6064820152608401610448565b9392505050565b6000610a0483836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610c2b565b600080610a5a8385610e8e565b905083811015610a045760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006044820152606401610448565b6000818152600360209081526040918290208251606081018452815460ff161515815260018201549281018390526002909101549281019290925215610b8c57805115610b9057610b25816020015160048481548110610b0e57610b0e610db8565b600091825260209091206002909102015490610a4d565b60048381548110610b3857610b38610db8565b600091825260209091206002909102015560408101516004805484908110610b6257610b62610db8565b90600052602060002090600202016000015410610b8c576000828152600360205260408120600101555b5050565b610bc2816020015160048481548110610bab57610bab610db8565b600091825260209091206002909102015490610c62565b60048381548110610bd557610bd5610db8565b600091825260209091206002909102015560408101516004805484908110610bff57610bff610db8565b90600052602060002090600202016000015411610b8c5750600090815260036020526040812060010155565b60008183610c4c5760405162461bcd60e51b81526004016104489190610ea6565b506000610c598486610e6c565b95945050505050565b6000610a0483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060008184841115610cc35760405162461bcd60e51b81526004016104489190610ea6565b506000610c598486610efb565b600060208284031215610ce257600080fd5b5035919050565b80356001600160a01b0381168114610d0057600080fd5b919050565b600060208284031215610d1757600080fd5b610a0482610ce9565b60008060008060808587031215610d3657600080fd5b8435935060208501358015158114610d4d57600080fd5b93969395505050506040820135916060013590565b60008060408385031215610d7557600080fd5b610d7e83610ce9565b946020939093013593505050565b60008060408385031215610d9f57600080fd5b82359150610daf60208401610ce9565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415610df857610df8610dce565b5060010190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208284031215610e4657600080fd5b5051919050565b6000816000190483118215151615610e6757610e67610dce565b500290565b600082610e8957634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115610ea157610ea1610dce565b500190565b600060208083528351808285015260005b81811015610ed357858101830151858201604001528201610eb7565b81811115610ee5576000604083870101525b50601f01601f1916929092016040019392505050565b600082821015610f0d57610f0d610dce565b50039056fea264697066735822122010e0afeeae7f9b4741fb7bab9c59dacfee58087a28ac875310249a66a111dbe664736f6c634300080a0033";

export class Distributor__factory extends ContractFactory {
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
    _treasury: string,
    _ohm: string,
    _epochLength: BigNumberish,
    _nextEpochBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Distributor> {
    return super.deploy(
      _treasury,
      _ohm,
      _epochLength,
      _nextEpochBlock,
      overrides || {}
    ) as Promise<Distributor>;
  }
  getDeployTransaction(
    _treasury: string,
    _ohm: string,
    _epochLength: BigNumberish,
    _nextEpochBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _treasury,
      _ohm,
      _epochLength,
      _nextEpochBlock,
      overrides || {}
    );
  }
  attach(address: string): Distributor {
    return super.attach(address) as Distributor;
  }
  connect(signer: Signer): Distributor__factory {
    return super.connect(signer) as Distributor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DistributorInterface {
    return new utils.Interface(_abi) as DistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Distributor {
    return new Contract(address, _abi, signerOrProvider) as Distributor;
  }
}
