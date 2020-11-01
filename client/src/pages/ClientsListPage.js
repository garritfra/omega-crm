import React, { useState, useEffect } from "react";
import { Table, Button, Space } from "antd";
import { Link, useHistory } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";
import ClientService from "../service/ClientService";

export default function ClientsPage() {
  const history = useHistory();
  const [clients, setClients] = useState([]);
  const [selectedClients, setSelectedClients] = useState([]);
  const [actionsVisible, setActionsVisible] = useState(false);

  useEffect(() => {
    ClientService.getClients().then(setClients);
  }, []);

  const onSelectChange = (selectedRowKeys) => {
    setSelectedClients(selectedRowKeys);
    if (selectedRowKeys.length >= 1) {
      setActionsVisible(true);
    } else {
      setActionsVisible(false);
    }
  };

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
      <Space direction="horizontal" style={{ marginBottom: 16 }}>
        <Button
          onClick={() => history.push("/clients/new")}
          type="primary"
          icon={<UserAddOutlined />}
        >
          Add
        </Button>
        <Button
          type="primary"
          danger
          disabled={!actionsVisible}
          onClick={() => {
            ClientService.deleteMany(selectedClients).then(() =>
              window.location.reload()
            );
          }}
        >
          Delete
        </Button>
      </Space>
      <Table
        rowSelection={{
          type: "checkbox",
          onChange: onSelectChange,
        }}
        columns={columns}
        dataSource={clients.map((client) => {
          return { ...client, key: client.id };
        })}
      />
    </div>
  );
}
