import React, { useState } from "react";
import { Layout } from "antd";

import Sidebar from "./Sidebar";
import ClientsPage from "../pages/ClientsPage";

const { Header, Content, Footer, Sider } = Layout;
export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setSidebarCollapsed(collapsed);
  };

  return (
    <Layout style={{ minWidth: "100vw", minHeight: "100vh" }}>
      <Sider collapsible collapsed={sidebarCollapsed} onCollapse={onCollapse}>
        <div
          style={{
            height: "32px",
            background: "rgba(255, 255, 255, 0.2)",
            margin: "16px",
          }}
        />
        <Sidebar />
      </Sider>
      <Layout>
        <Header style={{ background: "#fff" }}>Welcome</Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <ClientsPage />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Omega CRM ©2020 Created by Garrit Franke
        </Footer>
      </Layout>
    </Layout>
  );
}
