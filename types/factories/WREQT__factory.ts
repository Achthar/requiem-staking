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
  "0x60e06040523480156200001157600080fd5b506040516200184d3803806200184d8339810160408190526200003491620001d8565b604080518082018252600d81526c15dc985c1c1959081cd4915455609a1b6020808301918252835180850190945260068452651ddcd491545560d21b9084015281519192916012916200008b916003919062000115565b508151620000a190600490602085019062000115565b506005805460ff191660ff9290921691909117905550506001600160a01b038316620000cc57600080fd5b6001600160a01b038084166080528216620000e657600080fd5b6001600160a01b0380831660a05281166200010057600080fd5b6001600160a01b031660c052506200025f9050565b828054620001239062000222565b90600052602060002090601f01602090048101928262000147576000855562000192565b82601f106200016257805160ff191683800117855562000192565b8280016001018555821562000192579182015b828111156200019257825182559160200191906001019062000175565b50620001a0929150620001a4565b5090565b5b80821115620001a05760008155600101620001a5565b80516001600160a01b0381168114620001d357600080fd5b919050565b600080600060608486031215620001ee57600080fd5b620001f984620001bb565b92506200020960208501620001bb565b91506200021960408501620001bb565b90509250925092565b600181811c908216806200023757607f821691505b602082108114156200025957634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05161156a620002e360003960008181610368015281816106420152818161081b0152610bfc0152600081816101760152818161077901528181610a300152610aec01526000818161023f0152818161054e01528181610610015281816106e7015281816108ad01528181610abd0152610b8f015261156a6000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c806370a08231116100cd578063a9059cbb11610081578063dd62ed3e11610066578063dd62ed3e14610317578063eebf78fc14610350578063fafbbc671461036357600080fd5b8063a9059cbb146102f1578063b0370e341461030457600080fd5b806385fb54a2116100b257806385fb54a2146102c357806395d89b41146102d6578063a457c2d7146102de57600080fd5b806370a0823114610287578063783389b0146102b057600080fd5b8063313ce567116101245780634cf088d9116101095780634cf088d91461023a5780635960257e146102615780635ad421b11461027457600080fd5b8063313ce56714610212578063395093511461022757600080fd5b8063095ea7b311610155578063095ea7b3146101ca57806318160ddd146101ed57806323b872dd146101ff57600080fd5b806302bb41e51461017157806306fdde03146101b5575b600080fd5b6101987f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6101bd61038a565b6040516101ac9190611200565b6101dd6101d8366004611271565b61041c565b60405190151581526020016101ac565b6002545b6040519081526020016101ac565b6101dd61020d36600461129b565b610433565b60055460405160ff90911681526020016101ac565b6101dd610235366004611271565b6104f7565b6101987f000000000000000000000000000000000000000000000000000000000000000081565b6101f161026f3660046112d7565b610533565b6101f16102823660046112d7565b6105e2565b6101f16102953660046112f0565b6001600160a01b031660009081526020819052604090205490565b6101f16102be3660046112d7565b6107f6565b6101f16102d13660046112d7565b6108a9565b6101bd61093e565b6101dd6102ec366004611271565b61094d565b6101dd6102ff366004611271565b6109fe565b6101f16103123660046112d7565b610a0b565b6101f1610325366004611312565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101f161035e3660046112d7565b610bc6565b6101987f000000000000000000000000000000000000000000000000000000000000000081565b60606003805461039990611345565b80601f01602080910402602001604051908101604052809291908181526020018280546103c590611345565b80156104125780601f106103e757610100808354040283529160200191610412565b820191906000526020600020905b8154815290600101906020018083116103f557829003601f168201915b5050505050905090565b6000610429338484610c33565b5060015b92915050565b6000610440848484610d8c565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104df5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6104ec8533858403610c33565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161042991859061052e908690611396565b610c33565b600061054160055460ff1690565b61054c90600a611492565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632986c0e56040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ce91906114a1565b6105d890846114ba565b61042d91906114d9565b60006105ee3383610fa4565b60006105f983610533565b60405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018390529192507f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af115801561068d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b191906114fb565b506040517f8381e182000000000000000000000000000000000000000000000000000000008152600481018290523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638381e182906044016020604051808303816000875af1158015610738573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075c91906114fb565b5060405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044015b6020604051808303816000875af11580156107cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ef91906114fb565b5092915050565b6040516323b872dd60e01b8152336004820152306024820152604481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064015b6020604051808303816000875af115801561086d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089191906114fb565b50600061089d836108a9565b905061042d3382611121565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632986c0e56040518163ffffffff1660e01b8152600401602060405180830381865afa158015610909573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092d91906114a1565b60055460ff166105ce90600a611492565b60606004805461039990611345565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156109e75760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016104d6565b6109f43385858403610c33565b5060019392505050565b6000610429338484610d8c565b6040516323b872dd60e01b8152336004820152306024820152604481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610a81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa591906114fb565b5060405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af1158015610b35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5991906114fb565b506040517f7acb7757000000000000000000000000000000000000000000000000000000008152600481018390523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637acb77579060440161084e565b6000610bd23383610fa4565b6000610bdd83610533565b60405163a9059cbb60e01b8152336004820152602481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016107ac565b6001600160a01b038316610cae5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016104d6565b6001600160a01b038216610d2a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016104d6565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316610e085760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016104d6565b6001600160a01b038216610e845760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016104d6565b6001600160a01b03831660009081526020819052604090205481811015610f135760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016104d6565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610f4a908490611396565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f9691815260200190565b60405180910390a350505050565b6001600160a01b0382166110205760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016104d6565b6001600160a01b038216600090815260208190526040902054818110156110af5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016104d6565b6001600160a01b03831660009081526020819052604081208383039055600280548492906110de90849061151d565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610d7f565b6001600160a01b0382166111775760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104d6565b80600260008282546111899190611396565b90915550506001600160a01b038216600090815260208190526040812080548392906111b6908490611396565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208083528351808285015260005b8181101561122d57858101830151858201604001528201611211565b8181111561123f576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461126c57600080fd5b919050565b6000806040838503121561128457600080fd5b61128d83611255565b946020939093013593505050565b6000806000606084860312156112b057600080fd5b6112b984611255565b92506112c760208501611255565b9150604084013590509250925092565b6000602082840312156112e957600080fd5b5035919050565b60006020828403121561130257600080fd5b61130b82611255565b9392505050565b6000806040838503121561132557600080fd5b61132e83611255565b915061133c60208401611255565b90509250929050565b600181811c9082168061135957607f821691505b6020821081141561137a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156113a9576113a9611380565b500190565b600181815b808511156113e95781600019048211156113cf576113cf611380565b808516156113dc57918102915b93841c93908002906113b3565b509250929050565b6000826114005750600161042d565b8161140d5750600061042d565b8160018114611423576002811461142d57611449565b600191505061042d565b60ff84111561143e5761143e611380565b50506001821b61042d565b5060208310610133831016604e8410600b841016171561146c575081810a61042d565b61147683836113ae565b806000190482111561148a5761148a611380565b029392505050565b600061130b60ff8416836113f1565b6000602082840312156114b357600080fd5b5051919050565b60008160001904831182151516156114d4576114d4611380565b500290565b6000826114f657634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561150d57600080fd5b8151801515811461130b57600080fd5b60008282101561152f5761152f611380565b50039056fea26469706673582212201f9970f5eb0f3ab5536a59eff83933cb9b6d4c05b00d7d5845da23776752744d64736f6c634300080b0033";

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
