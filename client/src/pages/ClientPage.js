import React, { useState, useEffect } from "react";
import {
  Descriptions,
  Timeline,
  Tag,
  Space,
  List,
  Typography,
  Statistic,
  Row,
  Col,
} from "antd";
import ClientService from "../service/ClientService";

export default function ClientPage({ id }) {
  const [client, setClient] = useState({});
  useEffect(() => {
    ClientService.getClientById(id).then(setClient);
  }, []);

  return (
    <>
      <Space direction="vertical" size="large">
        <Typography.Title level={4}>Client Info</Typography.Title>
        <Row gutter={16}>
          <Col>
            <List bordered split="true">
              <List.Item actions={[client.name]}>Name:</List.Item>
              <List.Item actions={[client.id]}>Identifier:</List.Item>
              <List.Item actions={[<Tag color="error">Inactive</Tag>]}>
                Status:
              </List.Item>
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
            <Timeline mode="left">
              <Timeline.Item label="04.10.2020">
                Status changed: <Tag color="error">Inactive</Tag>
              </Timeline.Item>
              <Timeline.Item label="03.10.2020">
                Status changed: <Tag color="purple">On Hold</Tag>
              </Timeline.Item>
              <Timeline.Item label="03.10.2020">
                Project added: Foo Bar
              </Timeline.Item>
              <Timeline.Item label="02.10.2020">
                Status changed: <Tag color="success">Active</Tag>
              </Timeline.Item>
              <Timeline.Item label="01.10.2020">
                Status changed: <Tag color="default">Potential</Tag>
              </Timeline.Item>
            </Timeline>
          </Col>
          <Col span={8}></Col>
        </Row>
      </Space>
    </>
  );
}
