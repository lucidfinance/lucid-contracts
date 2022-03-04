/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface LucidManagerInterface extends utils.Interface {
  contractName: "LucidManager";
  functions: {
    "ERC712_VERSION()": FunctionFragment;
    "description()": FunctionFragment;
    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)": FunctionFragment;
    "feeInfo()": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getDomainSeperator()": FunctionFragment;
    "getFeeInfo(address)": FunctionFragment;
    "getLucidBalance(address)": FunctionFragment;
    "getNonce(address)": FunctionFragment;
    "getTransactionFee(address,uint256)": FunctionFragment;
    "lucidToken()": FunctionFragment;
    "owner()": FunctionFragment;
    "proposal()": FunctionFragment;
    "setCollectionAddress(address)": FunctionFragment;
    "setFee(uint32)": FunctionFragment;
    "setLucidTokenAddress(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setReducedFee(uint32)": FunctionFragment;
    "setlucidThreshold(uint32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ERC712_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeMetaTransaction",
    values: [string, BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "feeInfo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDomainSeperator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getFeeInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getLucidBalance",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getTransactionFee",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lucidToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "proposal", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setCollectionAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLucidTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setReducedFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setlucidThreshold",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "ERC712_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMetaTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDomainSeperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFeeInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLucidBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lucidToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proposal", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCollectionAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLucidTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReducedFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setlucidThreshold",
    data: BytesLike
  ): Result;

  events: {
    "CollectorChanged(address,address,address,uint256)": EventFragment;
    "FeeChanged(address,uint256,uint256,uint256)": EventFragment;
    "FeeThresholdChanged(address,uint256,uint256,uint256)": EventFragment;
    "LucidTokenChanged(address,address,address,uint256)": EventFragment;
    "MetaTransactionExecuted(address,address,bytes)": EventFragment;
    "OwnerChanged(address,address,address,uint256)": EventFragment;
    "ReducedFeeChanged(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CollectorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeThresholdChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LucidTokenChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReducedFeeChanged"): EventFragment;
}

export type CollectorChangedEvent = TypedEvent<
  [string, string, string, BigNumber],
  {
    lucidManager: string;
    prevCollector: string;
    newCollector: string;
    blocktime: BigNumber;
  }
>;

export type CollectorChangedEventFilter =
  TypedEventFilter<CollectorChangedEvent>;

export type FeeChangedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    lucidManager: string;
    prevFee: BigNumber;
    newFee: BigNumber;
    blocktime: BigNumber;
  }
>;

export type FeeChangedEventFilter = TypedEventFilter<FeeChangedEvent>;

export type FeeThresholdChangedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    lucidManager: string;
    prevFeeThreshold: BigNumber;
    newFeeThreshold: BigNumber;
    blocktime: BigNumber;
  }
>;

export type FeeThresholdChangedEventFilter =
  TypedEventFilter<FeeThresholdChangedEvent>;

export type LucidTokenChangedEvent = TypedEvent<
  [string, string, string, BigNumber],
  {
    lucidManager: string;
    prevLucidToken: string;
    newLucidToken: string;
    blocktime: BigNumber;
  }
>;

export type LucidTokenChangedEventFilter =
  TypedEventFilter<LucidTokenChangedEvent>;

export type MetaTransactionExecutedEvent = TypedEvent<
  [string, string, string],
  { userAddress: string; relayerAddress: string; functionSignature: string }
>;

export type MetaTransactionExecutedEventFilter =
  TypedEventFilter<MetaTransactionExecutedEvent>;

export type OwnerChangedEvent = TypedEvent<
  [string, string, string, BigNumber],
  {
    lucidManager: string;
    prevOwner: string;
    newOwner: string;
    blocktime: BigNumber;
  }
>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export type ReducedFeeChangedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    lucidManager: string;
    prevFee: BigNumber;
    newFee: BigNumber;
    blocktime: BigNumber;
  }
>;

export type ReducedFeeChangedEventFilter =
  TypedEventFilter<ReducedFeeChangedEvent>;

export interface LucidManager extends BaseContract {
  contractName: "LucidManager";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LucidManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ERC712_VERSION(overrides?: CallOverrides): Promise<[string]>;

    description(overrides?: CallOverrides): Promise<[string]>;

    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeInfo(
      overrides?: CallOverrides
    ): Promise<
      [string, number, number, number] & {
        collectionAddress: string;
        feeBasisPoints: number;
        lucidTokenThreshold: number;
        reducedFeeBasisPoints: number;
      }
    >;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getDomainSeperator(overrides?: CallOverrides): Promise<[string]>;

    getFeeInfo(
      _holder: string,
      overrides?: CallOverrides
    ): Promise<[number, string]>;

    getLucidBalance(
      _holder: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNonce(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    getTransactionFee(
      _holder: string,
      paymentAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { sendFeesTo: string; transactionFee: BigNumber }
    >;

    lucidToken(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proposal(overrides?: CallOverrides): Promise<[string]>;

    setCollectionAddress(
      _collectionAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFee(
      _feeBasisPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLucidTokenAddress(
      _lucidTokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReducedFee(
      reducedFeeBasisPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setlucidThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ERC712_VERSION(overrides?: CallOverrides): Promise<string>;

  description(overrides?: CallOverrides): Promise<string>;

  executeMetaTransaction(
    userAddress: string,
    functionSignature: BytesLike,
    sigR: BytesLike,
    sigS: BytesLike,
    sigV: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeInfo(
    overrides?: CallOverrides
  ): Promise<
    [string, number, number, number] & {
      collectionAddress: string;
      feeBasisPoints: number;
      lucidTokenThreshold: number;
      reducedFeeBasisPoints: number;
    }
  >;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  getDomainSeperator(overrides?: CallOverrides): Promise<string>;

  getFeeInfo(
    _holder: string,
    overrides?: CallOverrides
  ): Promise<[number, string]>;

  getLucidBalance(
    _holder: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  getTransactionFee(
    _holder: string,
    paymentAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber] & { sendFeesTo: string; transactionFee: BigNumber }
  >;

  lucidToken(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  proposal(overrides?: CallOverrides): Promise<string>;

  setCollectionAddress(
    _collectionAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFee(
    _feeBasisPoints: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLucidTokenAddress(
    _lucidTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReducedFee(
    reducedFeeBasisPoints: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setlucidThreshold(
    _threshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ERC712_VERSION(overrides?: CallOverrides): Promise<string>;

    description(overrides?: CallOverrides): Promise<string>;

    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    feeInfo(
      overrides?: CallOverrides
    ): Promise<
      [string, number, number, number] & {
        collectionAddress: string;
        feeBasisPoints: number;
        lucidTokenThreshold: number;
        reducedFeeBasisPoints: number;
      }
    >;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getDomainSeperator(overrides?: CallOverrides): Promise<string>;

    getFeeInfo(
      _holder: string,
      overrides?: CallOverrides
    ): Promise<[number, string]>;

    getLucidBalance(
      _holder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTransactionFee(
      _holder: string,
      paymentAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { sendFeesTo: string; transactionFee: BigNumber }
    >;

    lucidToken(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    proposal(overrides?: CallOverrides): Promise<string>;

    setCollectionAddress(
      _collectionAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFee(
      _feeBasisPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setLucidTokenAddress(
      _lucidTokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;

    setReducedFee(
      reducedFeeBasisPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setlucidThreshold(
      _threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CollectorChanged(address,address,address,uint256)"(
      lucidManager?: string | null,
      prevCollector?: null,
      newCollector?: null,
      blocktime?: null
    ): CollectorChangedEventFilter;
    CollectorChanged(
      lucidManager?: string | null,
      prevCollector?: null,
      newCollector?: null,
      blocktime?: null
    ): CollectorChangedEventFilter;

    "FeeChanged(address,uint256,uint256,uint256)"(
      lucidManager?: string | null,
      prevFee?: null,
      newFee?: null,
      blocktime?: null
    ): FeeChangedEventFilter;
    FeeChanged(
      lucidManager?: string | null,
      prevFee?: null,
      newFee?: null,
      blocktime?: null
    ): FeeChangedEventFilter;

    "FeeThresholdChanged(address,uint256,uint256,uint256)"(
      lucidManager?: string | null,
      prevFeeThreshold?: null,
      newFeeThreshold?: null,
      blocktime?: null
    ): FeeThresholdChangedEventFilter;
    FeeThresholdChanged(
      lucidManager?: string | null,
      prevFeeThreshold?: null,
      newFeeThreshold?: null,
      blocktime?: null
    ): FeeThresholdChangedEventFilter;

    "LucidTokenChanged(address,address,address,uint256)"(
      lucidManager?: string | null,
      prevLucidToken?: null,
      newLucidToken?: null,
      blocktime?: null
    ): LucidTokenChangedEventFilter;
    LucidTokenChanged(
      lucidManager?: string | null,
      prevLucidToken?: null,
      newLucidToken?: null,
      blocktime?: null
    ): LucidTokenChangedEventFilter;

    "MetaTransactionExecuted(address,address,bytes)"(
      userAddress?: null,
      relayerAddress?: null,
      functionSignature?: null
    ): MetaTransactionExecutedEventFilter;
    MetaTransactionExecuted(
      userAddress?: null,
      relayerAddress?: null,
      functionSignature?: null
    ): MetaTransactionExecutedEventFilter;

    "OwnerChanged(address,address,address,uint256)"(
      lucidManager?: string | null,
      prevOwner?: null,
      newOwner?: null,
      blocktime?: null
    ): OwnerChangedEventFilter;
    OwnerChanged(
      lucidManager?: string | null,
      prevOwner?: null,
      newOwner?: null,
      blocktime?: null
    ): OwnerChangedEventFilter;

    "ReducedFeeChanged(address,uint256,uint256,uint256)"(
      lucidManager?: string | null,
      prevFee?: null,
      newFee?: null,
      blocktime?: null
    ): ReducedFeeChangedEventFilter;
    ReducedFeeChanged(
      lucidManager?: string | null,
      prevFee?: null,
      newFee?: null,
      blocktime?: null
    ): ReducedFeeChangedEventFilter;
  };

  estimateGas: {
    ERC712_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getDomainSeperator(overrides?: CallOverrides): Promise<BigNumber>;

    getFeeInfo(_holder: string, overrides?: CallOverrides): Promise<BigNumber>;

    getLucidBalance(
      _holder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTransactionFee(
      _holder: string,
      paymentAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lucidToken(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proposal(overrides?: CallOverrides): Promise<BigNumber>;

    setCollectionAddress(
      _collectionAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFee(
      _feeBasisPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLucidTokenAddress(
      _lucidTokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReducedFee(
      reducedFeeBasisPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setlucidThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ERC712_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDomainSeperator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFeeInfo(
      _holder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLucidBalance(
      _holder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNonce(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactionFee(
      _holder: string,
      paymentAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lucidToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCollectionAddress(
      _collectionAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFee(
      _feeBasisPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLucidTokenAddress(
      _lucidTokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReducedFee(
      reducedFeeBasisPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setlucidThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
