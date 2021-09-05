import React from "react";
import BtnWidget from "@/components/form/btnWidget";
import "./homeContainer.less";
function HomeContainer() {
  return (
    <div className="homeContainer">
      <h2>DontBuyRocks on the Fantom</h2>
      <div className="partone">
        <div className="fl">
          <p>
            Launched in 2021, Don’t Buy Rock is one of the last crypto
            collectible NFT-type projects on the Fantom blockchain, having
            launched shortly after EtherRocks. Only 10000 rocks can ever be
            available, and each new virgin rock gets more and more crazy. This
            game is built entirely on the Fantom blockchain, with a
            decentralized smart contract (
            <a href="./" target="_blank">
              deployed here
            </a>
            ) used to manage everything including the buying and selling of
            rocks, their prices and owners.
          </p>
          <p>
            These virtual rocks serve NO PURPOSE beyond being able to be brought
            and sold, and giving you a strong feeling of being teased in being
            an owner of 1 of the only 10000 rocks in the game :)
          </p>
          <p>
            How to play: you must be connected to the Fantom mainnet to view
            info on rocks, and some FTM (the currency of FTM) to buy a rock. The
            easiest way to connect to the Fantom mainnet is to use the MetaMask
            plugin for Chrome -- go ahead and install it (takes 1 minute), then
            refresh this page. To get FTM you will need to buy some from an
            exchange like Coinbase.
          </p>
        </div>
        <div className="fr">
          <ul>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
              <li key={v}>
                <img
                  src={require(`../assets/${v}.${v === 4 ? "gif" : "png"}`)}
                  alt="NFT-DBR"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="parttwo">
        <div className="fl">
          <p>
            <strong>FAIR DISTRIBUTION</strong>
          </p>
          <p>
            Buying a DBR costs 100 FTM. There are no price tiers; Dontbuyrocks
            membership costs the same for everyone.
          </p>
        </div>
        <div className="fr">
          <div className="mintNum">
            <div className="sub"></div>
            <h3>mintNum</h3>
            <div className="add"></div>
          </div>
          <BtnWidget label="mint" onClick={() => {}} />
          <div className="remaining">
            <p>
              remaining<i>10000/10000</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeContainer;
