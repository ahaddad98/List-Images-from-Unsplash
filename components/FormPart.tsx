import React from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import styled from "styled-components";
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const Formsttyle = styled.div`
    width: 400px;
    .title{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;
        color: #141519;
        margin-bottom: 1rem;
    }
    .title2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 30px;
        color: #BBBABF;
        margin-bottom: 2.5rem;
    }
    .test{
        height: 50px;
        border: 1.06461px solid #c4c4c4;
        border-radius: 6.38763px;
    }
    ant-row {
        flex-direction: column;
        align-items: start;
        width: 100%;
    }
    .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
        display: none;
    }
    .ant-form-horizontal .ant-form-item-control {
        width: 100%;
    }
    .ant-form-item-label > label::after {
        content: '';
    }
    .ant-form-item-control-input-content {
        display: flex;
        justify-content: space-between;
    }
    .login-form-forgot{
        color: #141519;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #141519;
        cursor: pointer;
    }
`

const FormPart = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return <Formsttyle>
        <div className="form">
            <div className="title">
                Welcome back
            </div>
            <div className="title2">
                Welcome back! please enter your details.
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    label='Email'
                    rules={[{ required: true, message: 'Enter your email' }]}
                >
                    <Input bordered={false} className='test' placeholder="Username" />
                </Form.Item>
                <Form.Item
                    label='Password'
                    name="password"
                    rules={[{ required: true, message: 'Enter your email' }]}
                >
                    <Input
                        type="password"
                        placeholder="Password"
                        bordered={false}
                        className='test'
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember for 30 days</Checkbox>
                    </Form.Item>
                    <div className="login-form-forgot">
                        Forgot password
                    </div>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </Formsttyle>
}
export default FormPart