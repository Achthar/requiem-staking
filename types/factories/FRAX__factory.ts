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
import type { FRAX, FRAXInterface } from "../FRAX";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainId_",
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
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "LogNote",
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
        name: "usr",
        type: "address",
      },
    ],
    name: "addAuth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256",
      },
    ],
    name: "adjustDailyFraxLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender_",
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
        name: "usr_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad_",
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
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dailyFraxLimit",
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
        name: "guy",
        type: "address",
      },
    ],
    name: "deny",
    outputs: [],
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
    name: "fraxMintedToday",
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
        name: "",
        type: "address",
      },
    ],
    name: "lastMintRestart",
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
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
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
    name: "move",
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
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
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
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "pull",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "push",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "rely",
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
    inputs: [],
    name: "version",
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
    name: "wards",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516113f33803806113f383398101604081905261002f91610127565b336000908152602081815260409182902060019081905582518084018452600a815269232920ac102a27a5a2a760b11b9083015282518084018452908152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f0b5e63856806857c7af67a3841d8148fce118228c7167c9e8705ab68578b5d9f818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101939093523060a0808501919091528251808503909101815260c0909301909152815191012060085569021e19e0c9bab2400000600255610140565b60006020828403121561013957600080fd5b5051919050565b6112a48061014f6000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80637ecebe00116100f9578063b753a98c11610097578063d3fd35ec11610071578063d3fd35ec14610459578063d7f1bf121461046c578063dd62ed3e14610475578063f2d5d56b1461048857600080fd5b8063b753a98c14610413578063bb35783b14610426578063bf353dbb1461043957600080fd5b80639c52a7f1116100d35780639c52a7f1146103ba5780639dc29fac146103cd5780639e16de34146103e0578063a9059cbb1461040057600080fd5b80637ecebe001461034b5780638fcbaf0c1461036b57806395d89b411461037e57600080fd5b80633644e5151161016657806354fd4d501161014057806354fd4d50146102cf57806365fae35e146102bc57806370a082311461030b578063798247ae1461032b57600080fd5b80633644e5151461029e57806340c10f19146102a75780635422224e146102bc57600080fd5b806323b872dd1161019757806323b872dd1461024a57806330adf81f1461025d578063313ce5671461028457600080fd5b806306fdde03146101be578063095ea7b31461021057806318160ddd14610233575b600080fd5b6101fa6040518060400160405280600a81526020017f4652415820544f4b454e0000000000000000000000000000000000000000000081525081565b604051610207919061102f565b60405180910390f35b61022361021e3660046110a0565b61049b565b6040519015158152602001610207565b61023c60015481565b604051908152602001610207565b6102236102583660046110ca565b6104b0565b61023c7fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb81565b61028c601281565b60405160ff9091168152602001610207565b61023c60085481565b6102ba6102b53660046110a0565b6106de565b005b6102ba6102ca366004611106565b61089a565b6101fa6040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525081565b61023c610319366004611106565b60036020526000908152604090205481565b61023c610339366004611106565b60066020526000908152604090205481565b61023c610359366004611106565b60056020526000908152604090205481565b6102ba610379366004611121565b610916565b6101fa6040518060400160405280600481526020017f465241580000000000000000000000000000000000000000000000000000000081525081565b6102ba6103c8366004611106565b610c4f565b6102ba6103db3660046110a0565b610cc8565b61023c6103ee366004611106565b60076020526000908152604090205481565b61022361040e3660046110a0565b610ec3565b6102ba6104213660046110a0565b610ed0565b6102ba6104343660046110ca565b610ee0565b61023c610447366004611106565b60006020819052908152604090205481565b6102ba6104673660046111ab565b610ef1565b61023c60025481565b61023c6104833660046111c4565b610f55565b6102ba6104963660046110a0565b610f82565b60006104a78383610f8d565b90505b92915050565b6001600160a01b03831660009081526003602052604081205482111561051d5760405162461bcd60e51b815260206004820152601960248201527f467261782f696e73756666696369656e742d62616c616e63650000000000000060448201526064015b60405180910390fd5b6001600160a01b038416331480159061055b57506001600160a01b038416600090815260046020908152604080832033845290915290205460001914155b15610626576001600160a01b03841660009081526004602090815260408083203384529091529020548211156105d35760405162461bcd60e51b815260206004820152601b60248201527f467261782f696e73756666696369656e742d616c6c6f77616e636500000000006044820152606401610514565b6001600160a01b03841660009081526004602090815260408083203384529091529020546106019083610ff9565b6001600160a01b03851660009081526004602090815260408083203384529091529020555b6001600160a01b0384166000908152600360205260409020546106499083610ff9565b6001600160a01b0380861660009081526003602052604080822093909355908516815220546106789083611014565b6001600160a01b0380851660008181526003602052604090819020939093559151908616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906106cc9086815260200190565b60405180910390a35060019392505050565b3360009081526020819052604081205490036108085760025433600090815260076020526040902054610712908390611014565b11158061074957503360009081526006602052604090205461196490610739904390610ff9565b1015801561074957506002548111155b6107955760405162461bcd60e51b815260206004820152601560248201527f4f766572206461696c792046726178204c696d697400000000000000000000006044820152606401610514565b33600090815260066020526040902054611964906107b4904390610ff9565b106107dd5733600090815260076020908152604080832084905560069091529020439055610808565b336000908152600760205260409020546107f79082611014565b336000908152600760205260409020555b6001600160a01b03821660009081526003602052604090205461082b9082611014565b6001600160a01b0383166000908152600360205260409020556001546108519082611014565b6001556040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a35050565b336000908152602081905260409020546001146108f95760405162461bcd60e51b815260206004820152601360248201527f467261782f6e6f742d617574686f72697a6564000000000000000000000000006044820152606401610514565b6001600160a01b0316600090815260208190526040902060019055565b600854604080517fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb60208201526001600160a01b03808c169282019290925290891660608201526080810188905260a0810187905285151560c08201526000919060e001604051602081830303815290604052805190602001206040516020016109d29291907f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b60408051601f19818403018152919052805160209091012090506001600160a01b038916610a425760405162461bcd60e51b815260206004820152601660248201527f467261782f696e76616c69642d616464726573732d30000000000000000000006044820152606401610514565b60408051600081526020810180835283905260ff861691810191909152606081018490526080810183905260019060a0016020604051602081039080840390855afa158015610a95573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b031614610aff5760405162461bcd60e51b815260206004820152601360248201527f467261782f696e76616c69642d7065726d6974000000000000000000000000006044820152606401610514565b851580610b0c5750854211155b610b585760405162461bcd60e51b815260206004820152601360248201527f467261782f7065726d69742d65787069726564000000000000000000000000006044820152606401610514565b6001600160a01b0389166000908152600560205260408120805491610b7c83611226565b919050558714610bce5760405162461bcd60e51b815260206004820152601260248201527f467261782f696e76616c69642d6e6f6e636500000000000000000000000000006044820152606401610514565b600085610bdc576000610be0565b6000195b6001600160a01b038b81166000818152600460209081526040808320948f16808452948252918290208590559051848152939450919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050505050565b33600090815260208190526040902054600114610cae5760405162461bcd60e51b815260206004820152601360248201527f467261782f6e6f742d617574686f72697a6564000000000000000000000000006044820152606401610514565b6001600160a01b0316600090815260208190526040812055565b6001600160a01b038216600090815260036020526040902054811115610d305760405162461bcd60e51b815260206004820152601960248201527f467261782f696e73756666696369656e742d62616c616e6365000000000000006044820152606401610514565b6001600160a01b0382163314801590610d6e57506001600160a01b038216600090815260046020908152604080832033845290915290205460001914155b15610e39576001600160a01b0382166000908152600460209081526040808320338452909152902054811115610de65760405162461bcd60e51b815260206004820152601b60248201527f467261782f696e73756666696369656e742d616c6c6f77616e636500000000006044820152606401610514565b6001600160a01b0382166000908152600460209081526040808320338452909152902054610e149082610ff9565b6001600160a01b03831660009081526004602090815260408083203384529091529020555b6001600160a01b038216600090815260036020526040902054610e5c9082610ff9565b6001600160a01b038316600090815260036020526040902055600154610e829082610ff9565b6001556040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161088e565b60006104a73384846104b0565b610edb3383836104b0565b505050565b610eeb8383836104b0565b50505050565b33600090815260208190526040902054600114610f505760405162461bcd60e51b815260206004820152601360248201527f467261782f6e6f742d617574686f72697a6564000000000000000000000000006044820152606401610514565b600255565b6001600160a01b0380831660009081526004602090815260408083209385168352929052908120546104a7565b610edb8233836104b0565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610fe89086815260200190565b60405180910390a350600192915050565b600082611006838261123f565b91508111156104aa57600080fd5b6000826110218382611256565b91508110156104aa57600080fd5b600060208083528351808285015260005b8181101561105c57858101830151858201604001528201611040565b8181111561106e576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461109b57600080fd5b919050565b600080604083850312156110b357600080fd5b6110bc83611084565b946020939093013593505050565b6000806000606084860312156110df57600080fd5b6110e884611084565b92506110f660208501611084565b9150604084013590509250925092565b60006020828403121561111857600080fd5b6104a782611084565b600080600080600080600080610100898b03121561113e57600080fd5b61114789611084565b975061115560208a01611084565b965060408901359550606089013594506080890135801515811461117857600080fd5b935060a089013560ff8116811461118e57600080fd5b979a969950949793969295929450505060c08201359160e0013590565b6000602082840312156111bd57600080fd5b5035919050565b600080604083850312156111d757600080fd5b6111e083611084565b91506111ee60208401611084565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060018201611238576112386111f7565b5060010190565b600082821015611251576112516111f7565b500390565b60008219821115611269576112696111f7565b50019056fea2646970667358221220190b81c175c75d4ccc8ef9b626e6797355dd76d9e0265e9e8c3ab3ce8eabdf3b64736f6c634300080d0033";

export class FRAX__factory extends ContractFactory {
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
    chainId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FRAX> {
    return super.deploy(chainId_, overrides || {}) as Promise<FRAX>;
  }
  getDeployTransaction(
    chainId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(chainId_, overrides || {});
  }
  attach(address: string): FRAX {
    return super.attach(address) as FRAX;
  }
  connect(signer: Signer): FRAX__factory {
    return super.connect(signer) as FRAX__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FRAXInterface {
    return new utils.Interface(_abi) as FRAXInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FRAX {
    return new Contract(address, _abi, signerOrProvider) as FRAX;
  }
}
