import React, { useState, useEffect } from "react";
import { List, Avatar, Button } from "antd";
import { PlusOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import ClientService from "../service/ClientService";

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    ClientService.getClients().then(setClients);
  }, []);

  return (
    <div>
      <List
        dataSource={clients}
        itemLayout="horizontal"
        header={
          <>
            <h2>Clients</h2>
            <Button type="primary" icon={<UserAddOutlined />}>
              New
            </Button>
          </>
        }
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={<a href={"/clients/" + item.id}>{item.name}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      ></List>
    </div>
  );
}