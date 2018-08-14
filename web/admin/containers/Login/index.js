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
            this.props.history.push('/');
        }
    };

    render() {
        return (
            <div className="login-wrap">
                <Row className="login-popup">
                    <Col span={12} className="login-main">
                    <div className="login-content">
                    <h2 className="title">Log in</h2>
                    <LoginFrom
                        onSubmit={this.onSubmit}
                    />
                    </div>
                    </Col>
                    <Col span={12} className="right-main">
                        <img className="logo-img" src="http://owtrjd7fu.bkt.clouddn.com/sun.jpeg" alt=""/>
                        <div className="intro">
                            <p className="intro-title">浅秋</p>
                            <p className="intro-detail">这是一个博客是滴</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
