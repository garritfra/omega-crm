import React, { useState } from "react";
import { Layout } from "antd";

import Navigation from "./Navigation";

const { Header, Content, Footer, Sider } = Layout;
export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setSidebarCollapsed(collapsed);
  };

  return (
    <Layout style={{ minWidth: "100vw", minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={sidebarCollapsed}
        onCollapse={onCollapse}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Navigation />
      </Sider>
      <Layout>
        <Header>Welcome</Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <div>This will be the content</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Omega CRM ©2020 Created by Garrit Franke
        </Footer>
      </Layout>
    </Layout>
  );
}
