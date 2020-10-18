import { Menu } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 *
 * @param {{activeItem: string}} activeItem
 */
export default function Sidebar() {
  const location = useLocation();
  return (
    <Menu
      defaultSelectedKeys={[location.pathname[0] || "home"]}
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
