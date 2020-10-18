import { Menu } from "antd";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 *
 * @param {{activeItem: string}} activeItem
 */
export default function Sidebar() {
  const location = useLocation();
  return (
    <Menu
      defaultSelectedKeys={[location.pathname.split("/")[1] || "home"]}
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
