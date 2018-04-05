/**
 * @author zhangyi
 * @date 2018/4/1
 */

import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import './index.less'
const FormItem = Form.Item;

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
    }

    onSubmit = () => {
        const { onSubmit } = this.props;
        onSubmit && onSubmit()
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} className="login-form">
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log&nbsp;in
                        <Icon type="arrow-right"/>
                    </Button>
                </FormItem>
            </Form>
        )
    }
}