import { StringLiteral } from "@babel/types";
import Portis from "@portis/web3";
import Web3 from "web3";
const WRAPPER_ABI = require("../abi/Wrapper.json");
const SHARES_ABI = require("../abi/Shares.json");
const ERC20_METADATA_ABI = require("../abi/ERC20Metadata.json");
const ERC20_ABI = require("../abi/ERC20.json");
const ERC721_ENUMERABLE_ABI = require("../abi/ERC721Enumerable.json");
const ERC165_ABI = require("../abi/ERC165.json");

const ERC721_ABI = require("../abi/ERC721.json");
const DBR = require("../abi/DBR.json");
declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

if (window.ethereum) {
  window.web3 = new Web3(window.ethereum);
  window.ethereum.enable(); // should wait?
}

if (!window.web3) {
  const DAPP_ID = "a0fa4f71-2d8e-4a67-baa6-33ab41c3ba26";
  const portis = new Portis(DAPP_ID, "mainnet");
  window.web3 = new Web3(portis.provider);
}

const web3 = new Web3(window.web3.currentProvider);

const NFTFY_CONTRACT_RINKEBY = "0xc0D1946C1754d2F94dE4Cf52deF7162f6611316D";

// const ERC721_METADATA_INTERFACE_ID = '0x5b5e139f';
const ERC721_INTERFACE_ID = "0x80ac58cd";
// const ERC721_ENUMERABLE_INTERFACE_ID = '0x780e9d63';

export async function getNftfyContract(): Promise<string> {
  const network = await web3.eth.net.getNetworkType();
  switch (network) {
    // TODO main
    case "main":
      return "0x97fb1e97A05aF8ff862C7f5fA9e28C716660d632";
    case "rinkeby":
      return NFTFY_CONTRACT_RINKEBY;
    default:
      throw new Error("Unsupported network");
  }
}

function toCents(amount: string, decimals: number): string {
  return (Number(amount) * 10 ** decimals).toFixed(0);
}

function fromCents(amount: string, decimals: number): string {
  return (Number(amount) / 10 ** decimals).toFixed(decimals);
}

export function isValidAddress(address: string): boolean {
  return web3.utils.isAddress(address);
}

export async function getAccounts(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    web3.eth.getAccounts((error, accounts) => {
      if (error) return reject(error);
      return resolve(accounts);
    });
  });
}

export async function getETHBalance(address: string): Promise<string> {
  return new Promise((resolve, reject) => {
    web3.eth.getBalance(address, "latest", (error, balance) => {
      if (error) return reject(error);
      return resolve(web3.utils.fromWei(balance, "ether"));
    });
  });
}

export async function transferETH(
  account: string,
  address: string,
  amount: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    web3.eth
      .sendTransaction({
        from: account,
        to: address,
        value: web3.utils.toWei(amount, "ether"),
      })
      .once("confirmation", (confNumber: any, receipt: any) => resolve())
      .once("error", reject);
  });
}

async function ERC20_name(contract: string): Promise<string> {
  const abi = new window.web3.eth.Contract(ERC20_METADATA_ABI, contract);
  return abi.methods.name().call();
}

async function ERC20_symbol(contract: string): Promise<string> {
  const abi = new window.web3.eth.Contract(ERC20_METADATA_ABI, contract);
  return abi.methods.symbol().call();
}

async function ERC20_decimals(contract: string): Promise<number> {
  const abi = new window.web3.eth.Contract(ERC20_METADATA_ABI, contract);
  return Number(await abi.methods.decimals().call());
}

async function ERC20_balanceOf(
  contract: string,
  address: string
): Promise<string> {
  const abi = new window.web3.eth.Contract(ERC20_ABI, contract);
  return abi.methods.balanceOf(address).call();
}

async function ERC20_transfer(
  account: string,
  contract: string,
  address: string,
  amount: string
): Promise<void> {
  const abi = new window.web3.eth.Contract(ERC20_ABI, contract);
  return new Promise((resolve, reject) => {
    abi.methods
      .transfer(address, amount)
      .send({ from: account })
      .once("confirmation", (confNumber: any, receipt: any) => resolve())
      .once("error", reject);
  });
}

export async function getERC20Name(contract: string): Promise<string> {
  return ERC20_name(contract);
}

export async function getERC20Symbol(contract: string): Promise<string> {
  return ERC20_symbol(contract);
}

export async function getERC20Balance({
  contract,
  account,
}: {
  contract: string;
  account: string;
}): Promise<string> {
  const decimals = await ERC20_decimals(contract);
  const balance = await ERC20_balanceOf(contract, account);
  return fromCents(balance, decimals);
}

export async function transferERC20(
  account: string,
  contract: string,
  address: string,
  amount: string
): Promise<void> {
  const decimals = await ERC20_decimals(contract);
  return ERC20_transfer(account, contract, address, toCents(amount, decimals));
}

async function ERC721_name(contract: string): Promise<string> {
  const abi = new window.web3.eth.Contract(DBR, contract);
  return abi.methods.name().call();
}

async function ERC721_symbol(contract: string): Promise<string> {
  const abi = new window.web3.eth.Contract(DBR, contract);
  return abi.methods.symbol().call();
}

async function ERC721_tokenURI(
  contract: string,
  tokenId: string
): Promise<string> {
  const abi = new window.web3.eth.Contract(DBR, contract);
  return abi.methods.baseTokenURI(tokenId).call();
}
async function ERC721_price(contract: string): Promise<string> {
  const abi = new window.web3.eth.Contract(DBR, contract);
  return abi.methods.DBRPrice().call();
}
async function ERC721_maxDBRPurchase(contract: string): Promise<string> {
  const abi = new window.web3.eth.Contract(DBR, contract);
  return abi.methods.maxDBRPurchase().call();
}
async function ERC721_maxDBRs(contract: string): Promise<string> {
  const abi = new window.web3.eth.Contract(DBR, contract);
  return abi.methods.maxDBRs().call();
}
async function ERC721_DBRTotalSupply(contract: string): Promise<string> {
  const abi = new window.web3.eth.Contract(DBR, contract);
  return abi.methods.DBRTotalSupply().call();
}
async function ERC721_saleIsActive(contract: string): Promise<boolean> {
  const abi = new window.web3.eth.Contract(DBR, contract);
  return abi.methods.saleIsActive().call();
}

async function ERC721_balanceOf({
  contract,
  account,
}: {
  contract: string;
  account: string;
}): Promise<string> {
  const abi = new window.web3.eth.Contract(ERC721_ABI, contract);
  console.log("abi: ", abi);
  const balance = await abi.methods.balanceOf(account).call();
  console.log("balance: ", balance);
  return balance;
}

async function ERC721_tokenOfOwnerByIndex({
  contract,
  account,
  index,
}: {
  contract: string;
  account: string;
  index: string;
}): Promise<string> {
  console.log("11111", account, contract, index);
  const abi = new window.web3.eth.Contract(ERC721_ENUMERABLE_ABI, contract);
  return abi.methods.tokenOfOwnerByIndex(account, 0).call();
}

async function ERC721_safeTransferFrom(
  account: string,
  contract: string,
  address: string,
  tokenId: string,
  data: string
): Promise<void> {
  const abi = new window.web3.eth.Contract(ERC20_METADATA_ABI, contract);
  return new Promise((resolve, reject) => {
    abi.methods
      .safeTransferFrom(account, address, tokenId, data)
      .send({ from: account })
      .once("confirmation", (confNumber: any, receipt: any) => resolve())
      .once("error", reject);
  });
}

async function ERC721_mint({
  numberOfTokens,
  contract,
  price,
  account,
}: {
  numberOfTokens: string;
  contract: string;
  account: string;
  price: string;
}): Promise<void> {
  const abi = new window.web3.eth.Contract(DBR, contract);
  return new Promise((resolve, reject) => {
    abi.methods
      .mintDBRs(numberOfTokens)
      .send({ from: account, value: price })
      .once("confirmation", (confNumber: any, receipt: any) => resolve())
      .once("error", reject);
  });
}

async function ERC721_flipSaleState({
  contract,
  account,
}: {
  contract: string;
  account: string;
}): Promise<void> {
  const abi = new window.web3.eth.Contract(DBR, contract);
  return new Promise((resolve, reject) => {
    abi.methods
      .flipSaleState()
      .send({ from: account })
      .once("confirmation", (confNumber: any, receipt: any) => resolve())
      .once("error", reject);
  });
}

export async function getERC721Name(contract: string): Promise<string> {
  return ERC721_name(contract);
}

export async function getERC721Price(contract: string): Promise<string> {
  return ERC721_price(contract);
}

export async function getERC721Symbol(contract: string): Promise<string> {
  return ERC721_symbol(contract);
}

export async function getERC721TokenURI(
  contract: string,
  tokenId: string
): Promise<string> {
  return ERC721_tokenURI(contract, tokenId);
}
export async function getMaxDBRPurchase(contract: string): Promise<string> {
  return ERC721_maxDBRPurchase(contract);
}

export async function getMaxDBRs(contract: string): Promise<string> {
  return ERC721_maxDBRs(contract);
}
export async function getERC721DBRTotalSupply(
  contract: string
): Promise<string> {
  return ERC721_DBRTotalSupply(contract);
}
export async function getERC721SaleIsActive(
  contract: string
): Promise<boolean> {
  return ERC721_saleIsActive(contract);
}

export async function getERC721Balance({
  contract,
  account,
}: {
  contract: string;
  account: string;
}): Promise<string> {
  const balance = await ERC721_balanceOf({
    contract,
    account,
  });
  return balance;
}

export async function getERC721TokenIdByIndex({
  account,
  contract,
  index,
}: {
  account: string;
  contract: string;
  index: number;
}): Promise<string> {
  return ERC721_tokenOfOwnerByIndex({
    contract,
    account,
    index: String(index),
  });
}

export async function transferERC721(
  account: string,
  contract: string,
  address: string,
  tokenId: string,
  data = "0x"
): Promise<void> {
  return ERC721_safeTransferFrom(account, contract, address, tokenId, data);
}
export async function postERC721Mint({
  numberOfTokens,
  contract,
  price,
  account,
}: {
  numberOfTokens: string;
  contract: string;
  account: string;
  price: string;
}): Promise<void> {
  return ERC721_mint({ numberOfTokens, contract, account, price });
}

export async function postERC721FlipSaleState({
  contract,
  account,
}: {
  contract: string;
  account: string;
}): Promise<void> {
  return ERC721_flipSaleState({ contract, account });
}

export async function supportsERC721(contract: string): Promise<boolean> {
  return ERC165_supportsInterface(contract, ERC721_INTERFACE_ID);
}

async function ERC165_supportsInterface(
  contract: string,
  interfaceId: string
): Promise<boolean> {
  const abi = new window.web3.eth.Contract(ERC165_ABI, contract);
  return abi.methods.supportsInterface(interfaceId).call();
}

async function Nftfy_getWrapper(
  contract: string,
  address: string
): Promise<string> {
  const abi = new window.web3.eth.Contract(DBR, contract);
  return abi.methods.getWrapper(address).call();
}

async function Wrapper_getShares(
  contract: string,
  tokenId: string
): Promise<string> {
  const abi = new window.web3.eth.Contract(WRAPPER_ABI, contract);
  return abi.methods.getShares(tokenId).call();
}

async function Shares_isRedeemable(contract: string): Promise<boolean> {
  const abi = new window.web3.eth.Contract(SHARES_ABI, contract);
  return abi.methods.isRedeemable().call();
}

async function Shares_getSharePrice(contract: string): Promise<string> {
  const abi = new window.web3.eth.Contract(SHARES_ABI, contract);
  return abi.methods.getSharePrice().call();
}

async function Shares_release(
  account: string,
  contract: string,
  amount: string
): Promise<void> {
  const abi = new window.web3.eth.Contract(SHARES_ABI, contract);
  return new Promise((resolve, reject) => {
    abi.methods
      .release()
      .send({ from: account, value: amount })
      .once("confirmation", (confNumber: any, receipt: any) => resolve())
      .once("error", reject);
  });
}

async function Shares_redeem(account: string, contract: string): Promise<void> {
  const abi = new window.web3.eth.Contract(SHARES_ABI, contract);
  return new Promise((resolve, reject) => {
    abi.methods
      .redeem()
      .send({ from: account })
      .once("confirmation", (confNumber: any, receipt: any) => resolve())
      .once("error", reject);
  });
}

export async function getWrapper(address: string): Promise<string> {
  const contract = await getNftfyContract();
  return Nftfy_getWrapper(contract, address);
}

export async function wrap(
  account: string,
  contract: string,
  tokenId: string,
  amount: string
): Promise<void> {
  const address = await getNftfyContract();
  let data = web3.utils.toHex(web3.utils.toWei(amount, "ether"));
  data = data.substr(0, 2) + data.substr(2).padStart(64, "0");
  await transferERC721(account, contract, address, tokenId, data);
}

export async function getShares(
  contract: string,
  tokenId: string
): Promise<string> {
  return Wrapper_getShares(contract, tokenId);
}

export async function isRedeemable(contract: string): Promise<boolean> {
  return Shares_isRedeemable(contract);
}

export async function getSharePrice(contract: string): Promise<string> {
  const price = await Shares_getSharePrice(contract);
  return web3.utils.fromWei(price, "ether");
}

export async function release(
  account: string,
  contract: string,
  amount: string
): Promise<void> {
  return Shares_release(account, contract, web3.utils.toWei(amount, "ether"));
}

export async function redeem(account: string, contract: string): Promise<void> {
  return Shares_redeem(account, contract);
}
