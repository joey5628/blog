/**
 * @author zhangyi
 * @date 2018/4/1
 */

import React, { Component } from 'antd'
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.item;

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Form onSubmit={()=>{}} className="login-form">
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </FormItem>
            </Form>
        )
    }
}