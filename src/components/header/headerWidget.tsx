import React from "react";
import { Link } from "react-router-dom";
import styles from "./headerWidget.less";
function HeaderWidget() {
  return (
    <div className={styles.headerWidget}>
      <h1>DontBuyRocks</h1>
      <div className={styles.fr}>
        <h2>
          <a href="./" target="_blank">
            Twitter
          </a>
        </h2>
        <h2>
          <a href="./" target="_blank">
            Discord
          </a>
        </h2>
        <h2>
          <Link to="/about">About Us</Link>
        </h2>
      </div>
    </div>
  );
}
export default HeaderWidget;
