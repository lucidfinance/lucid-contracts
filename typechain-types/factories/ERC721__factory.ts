/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620027a6380380620027a683398181016040528101906200003791906200019f565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b505050620003a8565b8280546200007f90620002b9565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b60006200013862000132846200024d565b62000224565b90508281526020810184848401111562000157576200015662000388565b5b6200016484828562000283565b509392505050565b600082601f83011262000184576200018362000383565b5b81516200019684826020860162000121565b91505092915050565b60008060408385031215620001b957620001b862000392565b5b600083015167ffffffffffffffff811115620001da57620001d96200038d565b5b620001e8858286016200016c565b925050602083015167ffffffffffffffff8111156200020c576200020b6200038d565b5b6200021a858286016200016c565b9150509250929050565b60006200023062000243565b90506200023e8282620002ef565b919050565b6000604051905090565b600067ffffffffffffffff8211156200026b576200026a62000354565b5b620002768262000397565b9050602081019050919050565b60005b83811015620002a357808201518184015260208101905062000286565b83811115620002b3576000848401525b50505050565b60006002820490506001821680620002d257607f821691505b60208210811415620002e957620002e862000325565b5b50919050565b620002fa8262000397565b810181811067ffffffffffffffff821117156200031c576200031b62000354565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6123ee80620003b86000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e99190611679565b6102bc565b6040516100fb91906119ff565b60405180910390f35b61010c61039e565b6040516101199190611a1a565b60405180910390f35b61013c600480360381019061013791906116d3565b610430565b6040516101499190611998565b60405180910390f35b61016c60048036038101906101679190611639565b6104b5565b005b61018860048036038101906101839190611523565b6105cd565b005b6101a4600480360381019061019f9190611523565b61062d565b005b6101c060048036038101906101bb91906116d3565b61064d565b6040516101cd9190611998565b60405180910390f35b6101f060048036038101906101eb91906114b6565b6106ff565b6040516101fd9190611bbc565b60405180910390f35b61020e6107b7565b60405161021b9190611a1a565b60405180910390f35b61023e600480360381019061023991906115f9565b610849565b005b61025a60048036038101906102559190611576565b61085f565b005b610276600480360381019061027191906116d3565b6108c1565b6040516102839190611a1a565b60405180910390f35b6102a660048036038101906102a191906114e3565b610968565b6040516102b391906119ff565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103975750610396826109fc565b5b9050919050565b6060600080546103ad90611de1565b80601f01602080910402602001604051908101604052809291908181526020018280546103d990611de1565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b82610a66565b61047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047190611b3c565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104c08261064d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890611b7c565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610550610ad2565b73ffffffffffffffffffffffffffffffffffffffff16148061057f575061057e81610579610ad2565b610968565b5b6105be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b590611adc565b60405180910390fd5b6105c88383610ada565b505050565b6105de6105d8610ad2565b82610b93565b61061d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061490611b9c565b60405180910390fd5b610628838383610c71565b505050565b6106488383836040518060200160405280600081525061085f565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ed90611b1c565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610770576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076790611afc565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107c690611de1565b80601f01602080910402602001604051908101604052809291908181526020018280546107f290611de1565b801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b5050505050905090565b61085b610854610ad2565b8383610ed8565b5050565b61087061086a610ad2565b83610b93565b6108af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a690611b9c565b60405180910390fd5b6108bb84848484611045565b50505050565b60606108cc82610a66565b61090b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090290611b5c565b60405180910390fd5b60006109156110a1565b905060008151116109355760405180602001604052806000815250610960565b8061093f846110b8565b604051602001610950929190611974565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610b4d8361064d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610b9e82610a66565b610bdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd490611abc565b60405180910390fd5b6000610be88361064d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c5757508373ffffffffffffffffffffffffffffffffffffffff16610c3f84610430565b73ffffffffffffffffffffffffffffffffffffffff16145b80610c685750610c678185610968565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610c918261064d565b73ffffffffffffffffffffffffffffffffffffffff1614610ce7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cde90611a5c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4e90611a7c565b60405180910390fd5b610d62838383611219565b610d6d600082610ada565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dbd9190611cf7565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e149190611c70565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610ed383838361121e565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3e90611a9c565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161103891906119ff565b60405180910390a3505050565b611050848484610c71565b61105c84848484611223565b61109b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109290611a3c565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611100576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611214565b600082905060005b6000821461113257808061111b90611e44565b915050600a8261112b9190611cc6565b9150611108565b60008167ffffffffffffffff81111561114e5761114d611f7a565b5b6040519080825280601f01601f1916602001820160405280156111805781602001600182028036833780820191505090505b5090505b6000851461120d576001826111999190611cf7565b9150600a856111a89190611e8d565b60306111b49190611c70565b60f81b8183815181106111ca576111c9611f4b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856112069190611cc6565b9450611184565b8093505050505b919050565b505050565b505050565b60006112448473ffffffffffffffffffffffffffffffffffffffff166113ba565b156113ad578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261126d610ad2565b8786866040518563ffffffff1660e01b815260040161128f94939291906119b3565b602060405180830381600087803b1580156112a957600080fd5b505af19250505080156112da57506040513d601f19601f820116820180604052508101906112d791906116a6565b60015b61135d573d806000811461130a576040519150601f19603f3d011682016040523d82523d6000602084013e61130f565b606091505b50600081511415611355576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134c90611a3c565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506113b2565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60006113f06113eb84611bfc565b611bd7565b90508281526020810184848401111561140c5761140b611fae565b5b611417848285611d9f565b509392505050565b60008135905061142e8161235c565b92915050565b60008135905061144381612373565b92915050565b6000813590506114588161238a565b92915050565b60008151905061146d8161238a565b92915050565b600082601f83011261148857611487611fa9565b5b81356114988482602086016113dd565b91505092915050565b6000813590506114b0816123a1565b92915050565b6000602082840312156114cc576114cb611fb8565b5b60006114da8482850161141f565b91505092915050565b600080604083850312156114fa576114f9611fb8565b5b60006115088582860161141f565b92505060206115198582860161141f565b9150509250929050565b60008060006060848603121561153c5761153b611fb8565b5b600061154a8682870161141f565b935050602061155b8682870161141f565b925050604061156c868287016114a1565b9150509250925092565b600080600080608085870312156115905761158f611fb8565b5b600061159e8782880161141f565b94505060206115af8782880161141f565b93505060406115c0878288016114a1565b925050606085013567ffffffffffffffff8111156115e1576115e0611fb3565b5b6115ed87828801611473565b91505092959194509250565b600080604083850312156116105761160f611fb8565b5b600061161e8582860161141f565b925050602061162f85828601611434565b9150509250929050565b600080604083850312156116505761164f611fb8565b5b600061165e8582860161141f565b925050602061166f858286016114a1565b9150509250929050565b60006020828403121561168f5761168e611fb8565b5b600061169d84828501611449565b91505092915050565b6000602082840312156116bc576116bb611fb8565b5b60006116ca8482850161145e565b91505092915050565b6000602082840312156116e9576116e8611fb8565b5b60006116f7848285016114a1565b91505092915050565b61170981611d2b565b82525050565b61171881611d3d565b82525050565b600061172982611c2d565b6117338185611c43565b9350611743818560208601611dae565b61174c81611fbd565b840191505092915050565b600061176282611c38565b61176c8185611c54565b935061177c818560208601611dae565b61178581611fbd565b840191505092915050565b600061179b82611c38565b6117a58185611c65565b93506117b5818560208601611dae565b80840191505092915050565b60006117ce603283611c54565b91506117d982611fce565b604082019050919050565b60006117f1602583611c54565b91506117fc8261201d565b604082019050919050565b6000611814602483611c54565b915061181f8261206c565b604082019050919050565b6000611837601983611c54565b9150611842826120bb565b602082019050919050565b600061185a602c83611c54565b9150611865826120e4565b604082019050919050565b600061187d603883611c54565b915061188882612133565b604082019050919050565b60006118a0602a83611c54565b91506118ab82612182565b604082019050919050565b60006118c3602983611c54565b91506118ce826121d1565b604082019050919050565b60006118e6602c83611c54565b91506118f182612220565b604082019050919050565b6000611909602f83611c54565b91506119148261226f565b604082019050919050565b600061192c602183611c54565b9150611937826122be565b604082019050919050565b600061194f603183611c54565b915061195a8261230d565b604082019050919050565b61196e81611d95565b82525050565b60006119808285611790565b915061198c8284611790565b91508190509392505050565b60006020820190506119ad6000830184611700565b92915050565b60006080820190506119c86000830187611700565b6119d56020830186611700565b6119e26040830185611965565b81810360608301526119f4818461171e565b905095945050505050565b6000602082019050611a14600083018461170f565b92915050565b60006020820190508181036000830152611a348184611757565b905092915050565b60006020820190508181036000830152611a55816117c1565b9050919050565b60006020820190508181036000830152611a75816117e4565b9050919050565b60006020820190508181036000830152611a9581611807565b9050919050565b60006020820190508181036000830152611ab58161182a565b9050919050565b60006020820190508181036000830152611ad58161184d565b9050919050565b60006020820190508181036000830152611af581611870565b9050919050565b60006020820190508181036000830152611b1581611893565b9050919050565b60006020820190508181036000830152611b35816118b6565b9050919050565b60006020820190508181036000830152611b55816118d9565b9050919050565b60006020820190508181036000830152611b75816118fc565b9050919050565b60006020820190508181036000830152611b958161191f565b9050919050565b60006020820190508181036000830152611bb581611942565b9050919050565b6000602082019050611bd16000830184611965565b92915050565b6000611be1611bf2565b9050611bed8282611e13565b919050565b6000604051905090565b600067ffffffffffffffff821115611c1757611c16611f7a565b5b611c2082611fbd565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611c7b82611d95565b9150611c8683611d95565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611cbb57611cba611ebe565b5b828201905092915050565b6000611cd182611d95565b9150611cdc83611d95565b925082611cec57611ceb611eed565b5b828204905092915050565b6000611d0282611d95565b9150611d0d83611d95565b925082821015611d2057611d1f611ebe565b5b828203905092915050565b6000611d3682611d75565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611dcc578082015181840152602081019050611db1565b83811115611ddb576000848401525b50505050565b60006002820490506001821680611df957607f821691505b60208210811415611e0d57611e0c611f1c565b5b50919050565b611e1c82611fbd565b810181811067ffffffffffffffff82111715611e3b57611e3a611f7a565b5b80604052505050565b6000611e4f82611d95565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611e8257611e81611ebe565b5b600182019050919050565b6000611e9882611d95565b9150611ea383611d95565b925082611eb357611eb2611eed565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b61236581611d2b565b811461237057600080fd5b50565b61237c81611d3d565b811461238757600080fd5b50565b61239381611d49565b811461239e57600080fd5b50565b6123aa81611d95565b81146123b557600080fd5b5056fea2646970667358221220e23f63da28ba7ff9c21f3ebb5adc7058f12b00a0aeb8fa5f2516b8e84de184fb64736f6c63430008070033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly contractName: "ERC721";
  public readonly contractName: "ERC721";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
