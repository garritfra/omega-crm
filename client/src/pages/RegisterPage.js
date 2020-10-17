import React, { useState } from "react"
import { Form, Alert, Button, Input } from "antd"

import UserService from "../service/UserService"

export default function RegisterPage() {

    const [error, setError] = useState();

    const onSubmit = ({ email, password, fullName }) => {
        UserService.register(email, password, fullName)
            .then(() => (window.location = "/login"))
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
            {error && <Alert message="Registration failed" type="error" />}
            <br />
            <Form onFinish={onSubmit} {...layout}>
                <Form.Item label="Email" name="email">
                    <Input type="email"></Input>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type="password"></Input>
                </Form.Item>
                <Form.Item label="Full Name" name="fullName">
                    <Input type="name"></Input>
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