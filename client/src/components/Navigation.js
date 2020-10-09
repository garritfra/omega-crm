import { Menu } from "antd";
import React from "react";

export default function Navigation() {
  return (
    <Menu defaultSelectedKeys={["home"]} mode="inline" theme="dark">
      <Menu.Item key="home">Home</Menu.Item>
    </Menu>
  );
}
