import React, { useState, useEffect } from "react";
import {
  Select,
  Tag,
  Space,
  List,
  Typography,
  Statistic,
  Row,
  Col,
} from "antd";

import ClientService from "../service/ClientService";
import StatusTimeline from "../components/StatusTimeline";

export default function ClientPage({ id }) {
  const [client, setClient] = useState({});

  useEffect(() => {
    ClientService.getClientById(id).then((client) => {
      console.log(client);
      setClient(client);
    });
  }, []);

  const updateStatus = (value) => {
    ClientService.updateStatus(client.id, value).then(() => {
      setClient({ ...client, status: value });
      window.location.reload();
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
          <Col>
            <Statistic title="Total Billed" value={3125} suffix="€" />
            <Statistic title="Total payed" value={2400} suffix="€" />
            <Statistic title="Total Balance" value={3125 - 2400} suffix="€" />
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            {client.events ? <StatusTimeline events={client.events} /> : <></>}
          </Col>
          <Col span={8}></Col>
        </Row>
      </Space>
    </>
  );
}
