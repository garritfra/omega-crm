import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import UserService from "../service/UserService";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [error, setError] = useState();
  const history = useHistory();

  const onSubmit = ({ email, password }) => {
    UserService.login(email, password)
      .then(() => history.push("/profile"))
      .catch((err) => {
        setError(err);
      });
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
      {error && <Alert message={"Login failed:" + error} type="error" />}
      <br />
      <Form onFinish={onSubmit} {...layout}>
        <Form.Item label="Email" name="email">
          <Input type="email"></Input>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password"></Input>
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
