import React, { useState, useEffect } from "react";
import { Select, Tag, Space, List, Typography, Row, Col } from "antd";
import { useHistory } from "react-router";

import ClientService from "../service/ClientService";
import StatusTimeline from "../components/StatusTimeline";

export default function ClientPage({ id }) {
  const [client, setClient] = useState({});
  const history = useHistory();

  useEffect(() => {
    ClientService.getClientById(id).then((client) => {
      console.log(client);
      setClient(client);
    });
  }, []);

  const updateStatus = (value) => {
    ClientService.updateStatus(client.id, value).then(() => {
      setClient({ ...client, status: value });
      history.go(0);
    });
  };

  return (
    <>
      <Space direction="vertical" size="large">
        <Typography.Title level={4}>Client Info</Typography.Title>
        <Row gutter={16}>
          <Col>
            <List bordered split="true">
              <List.Item actions={[client.name]}>Name:</List.Item>
              <List.Item actions={[client.id]}>Identifier:</List.Item>
              <List.Item
                actions={[
                  (() => (
                    <Select value={client.status} onSelect={updateStatus}>
                      <Select.Option value="potential">
                        <Tag color="default">Potential</Tag>
                      </Select.Option>
                      <Select.Option value="active">
                        <Tag color="success">Active</Tag>
                      </Select.Option>
                      <Select.Option value="on_hold">
                        <Tag color="purple">On Hold</Tag>
                      </Select.Option>
                      <Select.Option value="inactive">
                        <Tag color="error">Inactive</Tag>
                      </Select.Option>
                    </Select>
                  ))(),
                ]}
              >
                Status:
              </List.Item>
              <List.Item actions={[client.email]}>Email:</List.Item>
              <List.Item actions={[client.address]}>Address:</List.Item>
              <List.Item actions={[client.telephone]}>Telephone:</List.Item>
            </List>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            {client.events ? <StatusTimeline events={client.events} /> : <></>}
          </Col>
          <Col span={8}></Col>
        </Row>
      </Space>
    </>
  );
}
