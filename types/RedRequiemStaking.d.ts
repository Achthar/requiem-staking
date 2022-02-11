/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface RedRequiemStakingInterface extends ethers.utils.Interface {
  functions: {
    "accRewardPerShare()": FunctionFragment;
    "allocateMoreRewards(uint256,uint256)": FunctionFragment;
    "blueICE()": FunctionFragment;
    "deposit(uint256,address)": FunctionFragment;
    "emergencyWithdraw(address)": FunctionFragment;
    "endRewardTime()": FunctionFragment;
    "getRewardForDuration(uint256,uint256)": FunctionFragment;
    "getRewardPerSecond()": FunctionFragment;
    "harvest(address)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "lastRewardTime()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingReward(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rescueFund(uint256)": FunctionFragment;
    "reserveFund()": FunctionFragment;
    "rewardPerSecond()": FunctionFragment;
    "setReserveFund(address)": FunctionFragment;
    "setRewardPerSecond(uint256)": FunctionFragment;
    "startRewardTime()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updatePool()": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "usdc()": FunctionFragment;
    "userInfo(address)": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
    "withdrawAndHarvest(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accRewardPerShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allocateMoreRewards",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "blueICE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "endRewardTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardForDuration",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardPerSecond",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "harvest", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastRewardTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingReward",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rescueFund",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reserveFund",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerSecond",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setReserveFund",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardPerSecond",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startRewardTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "usdc", values?: undefined): string;
  encodeFunctionData(functionFragment: "userInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAndHarvest",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "accRewardPerShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allocateMoreRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "blueICE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endRewardTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardForDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastRewardTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rescueFund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reserveFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReserveFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startRewardTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdc", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAndHarvest",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "Deposit(address,uint256,address)": EventFragment;
    "EmergencyWithdraw(address,uint256,address)": EventFragment;
    "FundRescued(address,uint256)": EventFragment;
    "Harvest(address,uint256)": EventFragment;
    "LogRewardPerSecond(uint256)": EventFragment;
    "LogUpdatePool(uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
    "Withdraw(address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundRescued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogRewardPerSecond"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUpdatePool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type AdminChangedEvent = TypedEvent<
  [string, string] & { previousAdmin: string; newAdmin: string }
>;

export type BeaconUpgradedEvent = TypedEvent<[string] & { beacon: string }>;

export type DepositEvent = TypedEvent<
  [string, BigNumber, string] & { user: string; amount: BigNumber; to: string }
>;

export type EmergencyWithdrawEvent = TypedEvent<
  [string, BigNumber, string] & { user: string; amount: BigNumber; to: string }
>;

export type FundRescuedEvent = TypedEvent<
  [string, BigNumber] & { receiver: string; amount: BigNumber }
>;

export type HarvestEvent = TypedEvent<
  [string, BigNumber] & { user: string; amount: BigNumber }
>;

export type LogRewardPerSecondEvent = TypedEvent<
  [BigNumber] & { rewardPerSecond: BigNumber }
>;

export type LogUpdatePoolEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    lastRewardTime: BigNumber;
    lpSupply: BigNumber;
    accRewardPerShare: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type UpgradedEvent = TypedEvent<[string] & { implementation: string }>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber, string] & { user: string; amount: BigNumber; to: string }
>;

export class RedRequiemStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: RedRequiemStakingInterface;

  functions: {
    accRewardPerShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    allocateMoreRewards(
      _addedReward: BigNumberish,
      _days: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    blueICE(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endRewardTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRewardForDuration(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRewardPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    harvest(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _usdc: string,
      _blueICE: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastRewardTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { pending: BigNumber }>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rescueFund(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reserveFund(overrides?: CallOverrides): Promise<[string]>;

    rewardPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    setReserveFund(
      _reserveFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startRewardTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    usdc(overrides?: CallOverrides): Promise<[string]>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    withdraw(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawAndHarvest(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

  allocateMoreRewards(
    _addedReward: BigNumberish,
    _days: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  blueICE(overrides?: CallOverrides): Promise<string>;

  deposit(
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endRewardTime(overrides?: CallOverrides): Promise<BigNumber>;

  getRewardForDuration(
    _from: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  harvest(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _usdc: string,
    _blueICE: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastRewardTime(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingReward(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rescueFund(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reserveFund(overrides?: CallOverrides): Promise<string>;

  rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  setReserveFund(
    _reserveFund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardPerSecond(
    _rewardPerSecond: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startRewardTime(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePool(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  usdc(overrides?: CallOverrides): Promise<string>;

  userInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
  >;

  withdraw(
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawAndHarvest(
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    allocateMoreRewards(
      _addedReward: BigNumberish,
      _days: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    blueICE(overrides?: CallOverrides): Promise<string>;

    deposit(
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyWithdraw(to: string, overrides?: CallOverrides): Promise<void>;

    endRewardTime(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardForDuration(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    harvest(to: string, overrides?: CallOverrides): Promise<void>;

    initialize(
      _usdc: string,
      _blueICE: string,
      overrides?: CallOverrides
    ): Promise<void>;

    lastRewardTime(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingReward(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rescueFund(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    reserveFund(overrides?: CallOverrides): Promise<string>;

    rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    setReserveFund(
      _reserveFund: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    startRewardTime(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePool(overrides?: CallOverrides): Promise<void>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    usdc(overrides?: CallOverrides): Promise<string>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    withdraw(
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAndHarvest(
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): TypedEventFilter<
      [string, string],
      { previousAdmin: string; newAdmin: string }
    >;

    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): TypedEventFilter<
      [string, string],
      { previousAdmin: string; newAdmin: string }
    >;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): TypedEventFilter<[string], { beacon: string }>;

    BeaconUpgraded(
      beacon?: string | null
    ): TypedEventFilter<[string], { beacon: string }>;

    "Deposit(address,uint256,address)"(
      user?: string | null,
      amount?: null,
      to?: string | null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { user: string; amount: BigNumber; to: string }
    >;

    Deposit(
      user?: string | null,
      amount?: null,
      to?: string | null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { user: string; amount: BigNumber; to: string }
    >;

    "EmergencyWithdraw(address,uint256,address)"(
      user?: string | null,
      amount?: null,
      to?: string | null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { user: string; amount: BigNumber; to: string }
    >;

    EmergencyWithdraw(
      user?: string | null,
      amount?: null,
      to?: string | null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { user: string; amount: BigNumber; to: string }
    >;

    "FundRescued(address,uint256)"(
      receiver?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { receiver: string; amount: BigNumber }
    >;

    FundRescued(
      receiver?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { receiver: string; amount: BigNumber }
    >;

    "Harvest(address,uint256)"(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    Harvest(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    "LogRewardPerSecond(uint256)"(
      rewardPerSecond?: null
    ): TypedEventFilter<[BigNumber], { rewardPerSecond: BigNumber }>;

    LogRewardPerSecond(
      rewardPerSecond?: null
    ): TypedEventFilter<[BigNumber], { rewardPerSecond: BigNumber }>;

    "LogUpdatePool(uint256,uint256,uint256)"(
      lastRewardTime?: null,
      lpSupply?: null,
      accRewardPerShare?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      {
        lastRewardTime: BigNumber;
        lpSupply: BigNumber;
        accRewardPerShare: BigNumber;
      }
    >;

    LogUpdatePool(
      lastRewardTime?: null,
      lpSupply?: null,
      accRewardPerShare?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      {
        lastRewardTime: BigNumber;
        lpSupply: BigNumber;
        accRewardPerShare: BigNumber;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Upgraded(address)"(
      implementation?: string | null
    ): TypedEventFilter<[string], { implementation: string }>;

    Upgraded(
      implementation?: string | null
    ): TypedEventFilter<[string], { implementation: string }>;

    "Withdraw(address,uint256,address)"(
      user?: string | null,
      amount?: null,
      to?: string | null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { user: string; amount: BigNumber; to: string }
    >;

    Withdraw(
      user?: string | null,
      amount?: null,
      to?: string | null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { user: string; amount: BigNumber; to: string }
    >;
  };

  estimateGas: {
    accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    allocateMoreRewards(
      _addedReward: BigNumberish,
      _days: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    blueICE(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyWithdraw(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endRewardTime(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardForDuration(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    harvest(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _usdc: string,
      _blueICE: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastRewardTime(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingReward(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rescueFund(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reserveFund(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    setReserveFund(
      _reserveFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startRewardTime(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    usdc(overrides?: CallOverrides): Promise<BigNumber>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawAndHarvest(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accRewardPerShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allocateMoreRewards(
      _addedReward: BigNumberish,
      _days: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    blueICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endRewardTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRewardForDuration(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardPerSecond(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    harvest(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _usdc: string,
      _blueICE: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastRewardTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rescueFund(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reserveFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setReserveFund(
      _reserveFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startRewardTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    usdc(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawAndHarvest(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
