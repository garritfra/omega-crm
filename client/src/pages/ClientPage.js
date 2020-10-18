import React, { useState, useEffect } from "react";
import { Descriptions, Timeline, Tag, Space, Layout } from "antd";
import ClientService from "../service/ClientService";

export default function ClientPage({ id }) {
  const [client, setClient] = useState({});
  useEffect(() => {
    ClientService.getClientById(id).then(setClient);
  }, []);

  return (
    <>
      <Space direction="vertical" size="large">
        <Descriptions title="Client Info" bordered>
          <Descriptions.Item label="Name">{client.name}</Descriptions.Item>
          <Descriptions.Item label="Identifier">{client.id}</Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color="error">Inactive</Tag>
          </Descriptions.Item>
        </Descriptions>
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
      </Space>
    </>
  );
}
