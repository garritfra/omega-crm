import { Menu } from "antd";
import React from "react";

export default function Sidebar() {
  return (
    <Menu defaultSelectedKeys={["home"]} mode="inline" theme="dark">
      <Menu.Item key="home">Home</Menu.Item>
    </Menu>
  );
}
