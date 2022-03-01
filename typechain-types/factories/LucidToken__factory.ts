/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LucidToken, LucidTokenInterface } from "../LucidToken";

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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600581526020017f546f6b656e0000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f544b4e000000000000000000000000000000000000000000000000000000000081525081600390805190602001906200009692919062000286565b508060049080519060200190620000af92919062000286565b505050620000f433620000c7620000fa60201b60201c565b60ff16600a620000d8919062000476565b620f4240620000e89190620005b3565b6200010360201b60201c565b620006e8565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000176576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200016d906200036e565b60405180910390fd5b6200018a600083836200027c60201b60201c565b80600260008282546200019e9190620003be565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001f59190620003be565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200025c919062000390565b60405180910390a362000278600083836200028160201b60201c565b5050565b505050565b505050565b82805462000294906200061e565b90600052602060002090601f016020900481019282620002b8576000855562000304565b82601f10620002d357805160ff191683800117855562000304565b8280016001018555821562000304579182015b8281111562000303578251825591602001919060010190620002e6565b5b50905062000313919062000317565b5090565b5b808211156200033257600081600090555060010162000318565b5090565b600062000345601f83620003ad565b91506200035282620006bf565b602082019050919050565b620003688162000614565b82525050565b60006020820190508181036000830152620003898162000336565b9050919050565b6000602082019050620003a760008301846200035d565b92915050565b600082825260208201905092915050565b6000620003cb8262000614565b9150620003d88362000614565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000410576200040f62000654565b5b828201905092915050565b6000808291508390505b60018511156200046d5780860481111562000445576200044462000654565b5b6001851615620004555780820291505b80810290506200046585620006b2565b945062000425565b94509492505050565b6000620004838262000614565b9150620004908362000614565b9250620004bf7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620004c7565b905092915050565b600082620004d95760019050620005ac565b81620004e95760009050620005ac565b81600181146200050257600281146200050d5762000543565b6001915050620005ac565b60ff84111562000522576200052162000654565b5b8360020a9150848211156200053c576200053b62000654565b5b50620005ac565b5060208310610133831016604e8410600b84101617156200057d5782820a90508381111562000577576200057662000654565b5b620005ac565b6200058c84848460016200041b565b92509050818404811115620005a657620005a562000654565b5b81810290505b9392505050565b6000620005c08262000614565b9150620005cd8362000614565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000609576200060862000654565b5b828202905092915050565b6000819050919050565b600060028204905060018216806200063757607f821691505b602082108114156200064e576200064d62000683565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60008160011c9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61134e80620006f86000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610e0f565b60405180910390f35b6100e660048036038101906100e19190610c59565b610308565b6040516100f39190610df4565b60405180910390f35b61010461032b565b6040516101119190610f11565b60405180910390f35b610134600480360381019061012f9190610c06565b610335565b6040516101419190610df4565b60405180910390f35b610152610364565b60405161015f9190610f2c565b60405180910390f35b610182600480360381019061017d9190610c59565b61036d565b60405161018f9190610df4565b60405180910390f35b6101b260048036038101906101ad9190610b99565b610417565b6040516101bf9190610f11565b60405180910390f35b6101d061045f565b6040516101dd9190610e0f565b60405180910390f35b61020060048036038101906101fb9190610c59565b6104f1565b60405161020d9190610df4565b60405180910390f35b610230600480360381019061022b9190610c59565b6105db565b60405161023d9190610df4565b60405180910390f35b610260600480360381019061025b9190610bc6565b6105fe565b60405161026d9190610f11565b60405180910390f35b60606003805461028590611041565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190611041565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600080610313610685565b905061032081858561068d565b600191505092915050565b6000600254905090565b600080610340610685565b905061034d858285610858565b6103588585856108e4565b60019150509392505050565b60006012905090565b600080610378610685565b905061040c818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104079190610f63565b61068d565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461046e90611041565b80601f016020809104026020016040519081016040528092919081815260200182805461049a90611041565b80156104e75780601f106104bc576101008083540402835291602001916104e7565b820191906000526020600020905b8154815290600101906020018083116104ca57829003601f168201915b5050505050905090565b6000806104fc610685565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838110156105c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b990610ef1565b60405180910390fd5b6105cf828686840361068d565b60019250505092915050565b6000806105e6610685565b90506105f38185856108e4565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f490610ed1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561076d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076490610e51565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161084b9190610f11565b60405180910390a3505050565b600061086484846105fe565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108de57818110156108d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c790610e71565b60405180910390fd5b6108dd848484840361068d565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610954576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094b90610eb1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109bb90610e31565b60405180910390fd5b6109cf838383610b65565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4c90610e91565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ae89190610f63565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b4c9190610f11565b60405180910390a3610b5f848484610b6a565b50505050565b505050565b505050565b600081359050610b7e816112ea565b92915050565b600081359050610b9381611301565b92915050565b600060208284031215610baf57610bae6110d1565b5b6000610bbd84828501610b6f565b91505092915050565b60008060408385031215610bdd57610bdc6110d1565b5b6000610beb85828601610b6f565b9250506020610bfc85828601610b6f565b9150509250929050565b600080600060608486031215610c1f57610c1e6110d1565b5b6000610c2d86828701610b6f565b9350506020610c3e86828701610b6f565b9250506040610c4f86828701610b84565b9150509250925092565b60008060408385031215610c7057610c6f6110d1565b5b6000610c7e85828601610b6f565b9250506020610c8f85828601610b84565b9150509250929050565b610ca281610fcb565b82525050565b6000610cb382610f47565b610cbd8185610f52565b9350610ccd81856020860161100e565b610cd6816110d6565b840191505092915050565b6000610cee602383610f52565b9150610cf9826110e7565b604082019050919050565b6000610d11602283610f52565b9150610d1c82611136565b604082019050919050565b6000610d34601d83610f52565b9150610d3f82611185565b602082019050919050565b6000610d57602683610f52565b9150610d62826111ae565b604082019050919050565b6000610d7a602583610f52565b9150610d85826111fd565b604082019050919050565b6000610d9d602483610f52565b9150610da88261124c565b604082019050919050565b6000610dc0602583610f52565b9150610dcb8261129b565b604082019050919050565b610ddf81610ff7565b82525050565b610dee81611001565b82525050565b6000602082019050610e096000830184610c99565b92915050565b60006020820190508181036000830152610e298184610ca8565b905092915050565b60006020820190508181036000830152610e4a81610ce1565b9050919050565b60006020820190508181036000830152610e6a81610d04565b9050919050565b60006020820190508181036000830152610e8a81610d27565b9050919050565b60006020820190508181036000830152610eaa81610d4a565b9050919050565b60006020820190508181036000830152610eca81610d6d565b9050919050565b60006020820190508181036000830152610eea81610d90565b9050919050565b60006020820190508181036000830152610f0a81610db3565b9050919050565b6000602082019050610f266000830184610dd6565b92915050565b6000602082019050610f416000830184610de5565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610f6e82610ff7565b9150610f7983610ff7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fae57610fad611073565b5b828201905092915050565b6000610fc482610fd7565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561102c578082015181840152602081019050611011565b8381111561103b576000848401525b50505050565b6000600282049050600182168061105957607f821691505b6020821081141561106d5761106c6110a2565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6112f381610fb9565b81146112fe57600080fd5b50565b61130a81610ff7565b811461131557600080fd5b5056fea2646970667358221220b7a5a2eef985688c038cb1fc2ff44cb7042b8beb2ed9f4dee50f738bb818593664736f6c63430008070033";

type LucidTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LucidTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LucidToken__factory extends ContractFactory {
  constructor(...args: LucidTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LucidToken";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LucidToken> {
    return super.deploy(overrides || {}) as Promise<LucidToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LucidToken {
    return super.attach(address) as LucidToken;
  }
  connect(signer: Signer): LucidToken__factory {
    return super.connect(signer) as LucidToken__factory;
  }
  static readonly contractName: "LucidToken";
  public readonly contractName: "LucidToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LucidTokenInterface {
    return new utils.Interface(_abi) as LucidTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LucidToken {
    return new Contract(address, _abi, signerOrProvider) as LucidToken;
  }
}
