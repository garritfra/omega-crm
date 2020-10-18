import React, { useState, useEffect } from "react";
import { Table, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import { UserAddOutlined, UserOutlined } from "@ant-design/icons";
import ClientService from "../service/ClientService";

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    ClientService.getClients().then(setClients);
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "id",
      render: (id) => (
        <Link to={"/clients/" + id}>
          {
            /* TODO: is there a simpler way? */
            clients.filter((c) => c.id == id)[0].name
          }
        </Link>
      ),
    },
  ];

  return (
    <div>
      <Table
        rowSelection={{
          type: "checkbox",
        }}
        columns={columns}
        dataSource={clients.map((client) => {
          return { ...client, key: client.id };
        })}
      />
    </div>
  );
}
