/**
 * @author zhangyi
 * @date 2018/4/1
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './index.less'
import LoginFrom from 'admin/components/LoginForm/'
import Http from 'base/Http'

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    onSubmit = () => {
        // this.props.history.push('/');
        const json = Http.post({
            url: '/api/signin'
        })
        console.log('json:', json)
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
