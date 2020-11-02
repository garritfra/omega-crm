import React, { useState, useEffect } from "react";
import { Layout, Menu, notification } from "antd";

import UserService from "../service/UserService";

const { Header } = Layout;
export default function Head() {
  const [username, setUsername] = useState("");
  const token = UserService.getToken();

  useEffect(() => {
    if (token) {
      UserService.getUser().then((user) => setUsername(user.fullName));
    }
  }, []);

  const onLogout = () => {
    notification.error({
      message: "Not yet implemented",
      description: "To log out, please clear the cookies.",
    });
  };

  return (
    <Header style={{ background: "#fff" }}>
      <Menu mode="horizontal" style={{ float: "right" }}>
        {token ? (
          <>
            <Menu.Item>
              <a href="/profile">{username}</a>
            </Menu.Item>
            <Menu.Item onClick={onLogout}>Log Out</Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item>
              <a href="/login">Login</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/register">Register</a>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  );
}
