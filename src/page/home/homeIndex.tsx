import React from "react";
import HeaderWidget from "@/components/header/headerWidget";
import FooterWidget from "@/components/footer/footerWidget";
import HomeContainer from "./homeContainer/homeContainer";
import styles from "./homeIndex.less";

function HomeIndex() {
  return (
    <div className={styles.homeIndex}>
      <HeaderWidget />
      <HomeContainer />
      <FooterWidget />
    </div>
  );
}
export default HomeIndex;
