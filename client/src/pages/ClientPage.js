import React, { useState, useEffect } from "react";
import {
  Timeline,
  Tag,
  Space,
  List,
  Typography,
  Statistic,
  Row,
  Col,
} from "antd";

import statusTagMap from "../util/statusTagMap.json";
import ClientService from "../service/ClientService";
import StatusTimeline from "../components/StatusTimeline";

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
              <List.Item
                actions={[
                  (() =>
                    statusTagMap[client.status] ? (
                      <Tag color={statusTagMap[client.status].color}>
                        {statusTagMap[client.status].text}
                      </Tag>
                    ) : (
                      <></>
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
