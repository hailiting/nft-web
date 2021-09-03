import React, { useState, useEffect, Fragment } from "react";
import {
  getERC721Name,
  supportsERC721,
  getERC721Symbol,
  getERC721Balance,
  getERC721TokenIdByIndex,
  getERC721TokenURI,
} from "../services/web3";

async function ERC721Wallet({ address }: { address: string }) {
  let isNFT = false;
  try {
    isNFT = await supportsERC721(address);
  } catch (e) {}
  return isNFT;
}

function ERC721WalletName({ address }: { address: string }) {
  const [ERC721Name, setERC721Name] = useState("");
  useEffect(() => {
    (async () => {
      setERC721Name(await getERC721Name(address));
    })();
  }, [address]);
  return <Fragment>{ERC721Name}</Fragment>;
}
function ERC721WalletSymbol({ address }: { address: string }) {
  const [ERC721Symbol, setERC721Symbol] = useState("");
  useEffect(() => {
    (async () => {
      setERC721Symbol(await getERC721Symbol(address));
    })();
  }, [address]);
  return <Fragment>{ERC721Symbol}</Fragment>;
}

async function ERC721WalletBalance({
  address,
  account,
}: {
  address: string;
  account: string;
}) {
  const ERC721Balance = await getERC721Balance(account, address);
  const ERC721Tokens: {
    [token: string]: {
      tokenURI: string;
      shares?: string;
      balance?: string;
      price?: string;
    };
  } = {};
  for (let i = 0; i < Number(ERC721Balance); i++) {
    const tokenId = await getERC721TokenIdByIndex(account, address, i);
    const tokenURI = await getERC721TokenURI(account, tokenId);
    ERC721Tokens[tokenId] = {
      tokenURI,
    };
  }
  return {
    ERC721Balance: ERC721Balance,
    ERC721Tokens: ERC721Tokens,
  };
}

export {
  ERC721Wallet,
  ERC721WalletName,
  ERC721WalletSymbol,
  ERC721WalletBalance,
};
