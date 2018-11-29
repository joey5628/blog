/**
 * @author zhangyi
 * @date 2018/4/1
 */
import React, { Component } from 'react'
import { Row, Col, message } from 'antd';
import './index.less'
import LoginFrom from 'admin/components/LoginForm/'
import Http from 'base/Http'
import MD5 from 'md5'

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    onSubmit = async (e, values) => {
        e.preventDefault();
        const json = await Http.post({
            url: '/api/signin',
            params: {
                username: values.username,
                password: MD5(values.password)
            }
        })
        if (json && json.code !== 0) {
            message.error(json.message)
        } else {
            this.props.history.push('/admin');
        }
    };

    render() {
        return (
            <div className="login-wrap">
                <div className="login-content">
                    <h2 className="title">登 录</h2>
                    <LoginFrom
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}
