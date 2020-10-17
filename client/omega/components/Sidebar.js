import { Menu } from "antd";
import React from "react";

export default function Sidebar({ activeItem }) {
  return (
    <Menu
      defaultSelectedKeys={[activeItem || "home"]}
      mode="inline"
      theme="dark"
    >
      <Menu.Item key="home">
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="clients">
        <a href="/clients">Clients</a>
      </Menu.Item>
    </Menu>
  );
}
