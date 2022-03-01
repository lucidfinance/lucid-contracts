/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "OwnerManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnerManager__factory>;
    getContractFactory(
      name: "Module",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Module__factory>;
    getContractFactory(
      name: "FactoryFriendly",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FactoryFriendly__factory>;
    getContractFactory(
      name: "BaseGuard",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseGuard__factory>;
    getContractFactory(
      name: "Guardable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Guardable__factory>;
    getContractFactory(
      name: "IAvatar",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAvatar__factory>;
    getContractFactory(
      name: "IGuard",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGuard__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "BatchCreate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BatchCreate__factory>;
    getContractFactory(
      name: "ILucidManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILucidManager__factory>;
    getContractFactory(
      name: "ILucidTx",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILucidTx__factory>;
    getContractFactory(
      name: "LucidBudgeteer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LucidBudgeteer__factory>;
    getContractFactory(
      name: "LucidBudgeteerModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LucidBudgeteerModule__factory>;
    getContractFactory(
      name: "LucidManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LucidManager__factory>;
    getContractFactory(
      name: "LucidTxERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LucidTxERC721__factory>;
    getContractFactory(
      name: "LucidTxERC721URI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LucidTxERC721URI__factory>;
    getContractFactory(
      name: "TestSafe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestSafe__factory>;
    getContractFactory(
      name: "LucidToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LucidToken__factory>;
    getContractFactory(
      name: "Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token__factory>;
    getContractFactory(
      name: "WETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WETH__factory>;

    getContractAt(
      name: "OwnerManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnerManager>;
    getContractAt(
      name: "Module",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Module>;
    getContractAt(
      name: "FactoryFriendly",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FactoryFriendly>;
    getContractAt(
      name: "BaseGuard",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseGuard>;
    getContractAt(
      name: "Guardable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Guardable>;
    getContractAt(
      name: "IAvatar",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAvatar>;
    getContractAt(
      name: "IGuard",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGuard>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "BatchCreate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BatchCreate>;
    getContractAt(
      name: "ILucidManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILucidManager>;
    getContractAt(
      name: "ILucidTx",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILucidTx>;
    getContractAt(
      name: "LucidBudgeteer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LucidBudgeteer>;
    getContractAt(
      name: "LucidBudgeteerModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LucidBudgeteerModule>;
    getContractAt(
      name: "LucidManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LucidManager>;
    getContractAt(
      name: "LucidTxERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LucidTxERC721>;
    getContractAt(
      name: "LucidTxERC721URI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LucidTxERC721URI>;
    getContractAt(
      name: "TestSafe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestSafe>;
    getContractAt(
      name: "LucidToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LucidToken>;
    getContractAt(
      name: "Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token>;
    getContractAt(
      name: "WETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WETH>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
