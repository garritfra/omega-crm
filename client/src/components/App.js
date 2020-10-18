import React, { useState } from "react";
import { Layout } from "antd";

import Sidebar from "./Sidebar";
import Navigation from "./Navigation";
import Header from "./Header";

const { Footer, Sider } = Layout;
export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const location = window.location.pathname.split("/")[1];

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
        <Sidebar activeItem={location} />
      </Sider>
      <Layout>
        <Header />
        <Navigation />
        <Footer style={{ textAlign: "center" }}>
          Omega CRM ©2020 Created by Garrit Franke
        </Footer>
      </Layout>
    </Layout>
  );
}
