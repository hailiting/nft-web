import React from "react";
import styles from "./footerWidget.less";
function FooterWidget() {
  return (
    <div className={styles.footerWidget}>
      <h4>©{new Date().getFullYear()} DontBuyRocks on the Fantom</h4>
    </div>
  );
}
export default FooterWidget;
