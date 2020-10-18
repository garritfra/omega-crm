import React from "react";
import { Form, Input, Button, Row, Col, Select, Tag } from "antd";
import ClientService from "../service/ClientService";
import { useHistory } from "react-router-dom";

const { Option } = Select;

export default function NewClientPage() {
  const history = useHistory();
  const onSubmit = (values) => {
    ClientService.addClient(values).then((client) =>
      history.push("/clients/" + client.id)
    );
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 4 },
  };

  return (
    <>
      <Form onFinish={onSubmit}>
        <Row gutter={16}>
          <Col>
            <Form.Item label="Name" name="name" required="true">
              <Input type="name"></Input>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Email" name="email">
              <Input type="email"></Input>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="status" name="status" required>
              <Select defaultValue="active">
                <Option value="potential">
                  <Tag color="default">Potential</Tag>
                </Option>
                <Option value="active">
                  <Tag color="success">Active</Tag>
                </Option>
                <Option value="on_hold">
                  <Tag color="purple">On Hold</Tag>
                </Option>
                <Option value="inactive">
                  <Tag color="error">Inactive</Tag>
                </Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col>
            <Form.Item label="Address" name="address">
              <Input.TextArea></Input.TextArea>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Telephone" name="telephone">
              <Input type="tel"></Input>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
