/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WREQT, WREQTInterface } from "../WREQT";

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
        name: "_REQT",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "amount",
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
        name: "account",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sREQTValue",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "unwrapToREQT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "unwrapTosREQT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "wREQTValue",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "wrapFromREQT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "wrapFromsREQT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620016e4380380620016e48339810160408190526200003491620001d8565b604080518082018252600d81526c15dc985c1c1959081cd4915455609a1b6020808301918252835180850190945260068452651ddcd491545560d21b9084015281519192916012916200008b916003919062000115565b508151620000a190600490602085019062000115565b506005805460ff191660ff9290921691909117905550506001600160a01b038316620000cc57600080fd5b6001600160a01b038084166080528216620000e657600080fd5b6001600160a01b0380831660a05281166200010057600080fd5b6001600160a01b031660c052506200025f9050565b828054620001239062000222565b90600052602060002090601f01602090048101928262000147576000855562000192565b82601f106200016257805160ff191683800117855562000192565b8280016001018555821562000192579182015b828111156200019257825182559160200191906001019062000175565b50620001a0929150620001a4565b5090565b5b80821115620001a05760008155600101620001a5565b80516001600160a01b0381168114620001d357600080fd5b919050565b600080600060608486031215620001ee57600080fd5b620001f984620001bb565b92506200020960208501620001bb565b91506200021960408501620001bb565b90509250925092565b600181811c908216806200023757607f821691505b602082108114156200025957634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c051611401620002e360003960008181610322015281816105dc0152818161079c0152610b47015260008181610136015281816106fa015281816109940152610a500152600081816101f9015281816104e8015281816105aa015281816106680152818161082e01528181610a210152610ada01526114016000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063a9059cbb11610071578063a9059cbb146102ab578063b0370e34146102be578063dd62ed3e146102d1578063eebf78fc1461030a578063fafbbc671461031d57600080fd5b806370a0823114610241578063783389b01461026a57806385fb54a21461027d57806395d89b4114610290578063a457c2d71461029857600080fd5b8063313ce567116100f4578063313ce567146101d257806339509351146101e15780634cf088d9146101f45780635960257e1461021b5780635ad421b11461022e57600080fd5b806302bb41e51461013157806306fdde0314610175578063095ea7b31461018a57806318160ddd146101ad57806323b872dd146101bf575b600080fd5b6101587f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61017d610344565b60405161016c9190611097565b61019d610198366004611108565b6103d6565b604051901515815260200161016c565b6002545b60405190815260200161016c565b61019d6101cd366004611132565b6103ed565b6040516012815260200161016c565b61019d6101ef366004611108565b61049c565b6101587f000000000000000000000000000000000000000000000000000000000000000081565b6101b161022936600461116e565b6104d8565b6101b161023c36600461116e565b61057c565b6101b161024f366004611187565b6001600160a01b031660009081526020819052604090205490565b6101b161027836600461116e565b610777565b6101b161028b36600461116e565b61082a565b61017d6108ba565b61019d6102a6366004611108565b6108c9565b61019d6102b9366004611108565b610962565b6101b16102cc36600461116e565b61096f565b6101b16102df3660046111a9565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101b161031836600461116e565b610b11565b6101587f000000000000000000000000000000000000000000000000000000000000000081565b606060038054610353906111dc565b80601f016020809104026020016040519081016040528092919081815260200182805461037f906111dc565b80156103cc5780601f106103a1576101008083540402835291602001916103cc565b820191906000526020600020905b8154815290600101906020018083116103af57829003601f168201915b5050505050905090565b60006103e3338484610b7e565b5060015b92915050565b60006103fa848484610ca3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104845760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6104918533858403610b7e565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916103e39185906104d390869061122d565b610b7e565b60006104e66012600a611329565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632986c0e56040518163ffffffff1660e01b8152600401602060405180830381865afa158015610544573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105689190611338565b6105729084611351565b6103e79190611370565b60006105883383610e72565b6000610593836104d8565b60405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018390529192507f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af1158015610627573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064b9190611392565b506040516341c0f0c160e11b8152600481018290523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638381e182906044016020604051808303816000875af11580156106b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106dd9190611392565b5060405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044015b6020604051808303816000875af115801561074c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107709190611392565b5092915050565b6040516323b872dd60e01b8152336004820152306024820152604481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064015b6020604051808303816000875af11580156107ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108129190611392565b50600061081e8361082a565b90506103e73382610fb8565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632986c0e56040518163ffffffff1660e01b8152600401602060405180830381865afa15801561088a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ae9190611338565b6105686012600a611329565b606060048054610353906111dc565b3360009081526001602090815260408083206001600160a01b03861684529091528120548281101561094b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161047b565b6109583385858403610b7e565b5060019392505050565b60006103e3338484610ca3565b6040516323b872dd60e01b8152336004820152306024820152604481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156109e5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a099190611392565b5060405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af1158015610a99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abd9190611392565b50604051637acb775760e01b8152600481018390523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637acb7757906044016107cf565b6000610b1d3383610e72565b6000610b28836104d8565b60405163a9059cbb60e01b8152336004820152602481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb9060440161072d565b6001600160a01b038316610be05760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161047b565b6001600160a01b038216610c415760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161047b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316610d075760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161047b565b6001600160a01b038216610d695760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161047b565b6001600160a01b03831660009081526020819052604090205481811015610de15760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161047b565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610e1890849061122d565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e6491815260200190565b60405180910390a350505050565b6001600160a01b038216610ed25760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161047b565b6001600160a01b03821660009081526020819052604090205481811015610f465760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161047b565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610f759084906113b4565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610c96565b6001600160a01b03821661100e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161047b565b8060026000828254611020919061122d565b90915550506001600160a01b0382166000908152602081905260408120805483929061104d90849061122d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208083528351808285015260005b818110156110c4578581018301518582016040015282016110a8565b818111156110d6576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461110357600080fd5b919050565b6000806040838503121561111b57600080fd5b611124836110ec565b946020939093013593505050565b60008060006060848603121561114757600080fd5b611150846110ec565b925061115e602085016110ec565b9150604084013590509250925092565b60006020828403121561118057600080fd5b5035919050565b60006020828403121561119957600080fd5b6111a2826110ec565b9392505050565b600080604083850312156111bc57600080fd5b6111c5836110ec565b91506111d3602084016110ec565b90509250929050565b600181811c908216806111f057607f821691505b6020821081141561121157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561124057611240611217565b500190565b600181815b8085111561128057816000190482111561126657611266611217565b8085161561127357918102915b93841c939080029061124a565b509250929050565b600082611297575060016103e7565b816112a4575060006103e7565b81600181146112ba57600281146112c4576112e0565b60019150506103e7565b60ff8411156112d5576112d5611217565b50506001821b6103e7565b5060208310610133831016604e8410600b8410161715611303575081810a6103e7565b61130d8383611245565b806000190482111561132157611321611217565b029392505050565b60006111a260ff841683611288565b60006020828403121561134a57600080fd5b5051919050565b600081600019048311821515161561136b5761136b611217565b500290565b60008261138d57634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156113a457600080fd5b815180151581146111a257600080fd5b6000828210156113c6576113c6611217565b50039056fea2646970667358221220d5a5be8c2bd682fbeda595a56e9c0dff3df147d009bc0211d4e35a30a7240ee264736f6c634300080a0033";

export class WREQT__factory extends ContractFactory {
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
    _REQT: string,
    _sREQT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WREQT> {
    return super.deploy(
      _staking,
      _REQT,
      _sREQT,
      overrides || {}
    ) as Promise<WREQT>;
  }
  getDeployTransaction(
    _staking: string,
    _REQT: string,
    _sREQT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_staking, _REQT, _sREQT, overrides || {});
  }
  attach(address: string): WREQT {
    return super.attach(address) as WREQT;
  }
  connect(signer: Signer): WREQT__factory {
    return super.connect(signer) as WREQT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WREQTInterface {
    return new utils.Interface(_abi) as WREQTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WREQT {
    return new Contract(address, _abi, signerOrProvider) as WREQT;
  }
}
