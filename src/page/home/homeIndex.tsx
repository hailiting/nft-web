import React, { useState, useEffect } from "react";
import { Layout, Select } from "antd";
import { getAccounts } from "../../services/web3";
import config from "../../config/index";
import { ETHWalletBalance } from "../../components/ETHWallet";
import {
  ERC721Wallet,
  ERC721WalletName,
  ERC721WalletSymbol,
  ERC721WalletBalance,
} from "src/components/ERC721Wallet";
// import "./homeIndex.less";
// import { Pie } from 'ant-design-pro/lib/Charts';
const { Footer, Header } = Layout;
const { Option } = Select;
const { nftAddress } = config;

function HomeIndex() {
  const [mintValue, setMintValue] = useState("0");
  const [accounts, setAccounts] = useState<string[] | null>(null);
  const [account, setAccount] = useState("");
  const [isNft, setIsNft] = useState(false);
  const [ERC721Balance, setERC721Balance] = useState<{
    ERC721Balance: string;
    ERC721Tokens: {
      [token: string]: {
        tokenURI: string;
        shares?: string | undefined;
        balance?: string | undefined;
        price?: string | undefined;
      };
    };
  }>();

  useEffect(() => {
    (async () => {
      setAccounts(await getAccounts());
      setIsNft(
        await ERC721Wallet({
          address: nftAddress,
        })
      );
    })();
  }, []);
  useEffect(() => {
    if (accounts === null) return;
    if (accounts.length === 0) return;
    setAccount(accounts[0]);
    (async () => {
      setERC721Balance(
        await ERC721WalletBalance({ address: nftAddress, account: accounts[0] })
      );
    })();
  }, [accounts]);
  return (
    <Layout>
      <div className="index">2222</div>
      <Header className="header" style={{ color: "white" }}></Header>
      <button>连接钱包</button>
      {accounts ? (
        <Select value={account} onChange={(value) => setAccount(value)}>
          {account === "" ? (
            <Option key={0} value={""}>
              当前没有选择地址
            </Option>
          ) : null}
          {(accounts || []).map((account, i) => {
            return (
              <Option key={i + 1} value={account}>
                {account}
              </Option>
            );
          })}
        </Select>
      ) : (
        "当前没有可用账户"
      )}
      <h2>ETH钱包余额: </h2>
      <ETHWalletBalance account={account} />
      {isNft ? (
        <div className="ERC721">
          <h3>
            <p>
              NFT 合约名称 <ERC721WalletName address={nftAddress} />
            </p>
            <p>
              NFT 合约符号 <ERC721WalletSymbol address={nftAddress} />
            </p>
          </h3>
          <h3>当前NFT总数 </h3>
          <h3>当前NFT是否开启 </h3>
          <h2>
            当前持有
            <p>balance {ERC721Balance?.ERC721Balance}</p>
            <p>
              tokenURI:
              {
                ERC721Balance?.ERC721Tokens[ERC721Balance?.ERC721Balance]
                  ?.tokenURI
              }
            </p>
          </h2>
          <h2>mint</h2>
          <input
            value={mintValue}
            onChange={(e) => setMintValue(e.target.value)}
          />
          <button onClick={() => submit(mintValue)}>提交</button>
        </div>
      ) : null}
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
}
function submit(mintValue: string) {
  console.log(mintValue);
}
export default HomeIndex;
