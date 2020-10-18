import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param {{activeItem: string}} activeItem
 */
export default function Sidebar({ activeItem }) {
  return (
    <Menu
      defaultSelectedKeys={[activeItem || "home"]}
      mode="inline"
      theme="dark"
    >
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="clients">
        <Link to="/clients">Clients</Link>
      </Menu.Item>
    </Menu>
  );
}
