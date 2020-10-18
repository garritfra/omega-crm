import React from "react";
import { Form, Input, Button, Card } from "antd";
import ClientService from "../service/ClientService";
import { useHistory } from "react-router-dom";

export default function NewClientPage() {
  const history = useHistory();
  const onSubmit = (values) => {
    ClientService.addClient(values).then((client) =>
      history.push("/clients/" + client.id)
    );
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 4 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 4 },
  };

  return (
    <>
      <Form onFinish={onSubmit} {...layout}>
        <Form.Item label="Name" name="name">
          <Input></Input>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
