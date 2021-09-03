import React from "react";
import { Layout } from "antd";
// import { Pie } from 'ant-design-pro/lib/Charts';
const { Footer, Header } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header" style={{ color: "white" }}></Header>
      <button>连接钱包</button>
      <p>钱包余额: </p>
      <h2></h2>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
}

export default App;
