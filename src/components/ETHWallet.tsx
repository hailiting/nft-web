import React, { useState, useEffect, Fragment } from "react";
import { getETHBalance } from "../services/web3";

function ETHWalletBalance({ account }: { account: string }) {
  const [balance, setBalance] = useState("");
  useEffect(() => {
    if (account === null) return;
    if (account.length === 0) return;
    (async () => {
      setBalance(await getETHBalance(account));
    })();
  }, [account]);
  return <Fragment>{balance}</Fragment>;
}
export { ETHWalletBalance };
