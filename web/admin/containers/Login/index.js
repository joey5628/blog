/**
 * @author zhangyi
 * @date 2018/4/1
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './index.less'
import LoginFrom from '@adminComponents/LoginForm/'

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        {/*<Row className="login-wrap">*/}
            {/*<Col span={12} className="login-main">*/}
                {/*<div className="login-content">*/}
                    {/*<h3 className="title">登录</h3>*/}
                    {/*<LoginFrom></LoginFrom>*/}
                {/*</div>*/}
            {/*</Col>*/}
            {/*<Col span={12} className="right-main">*/}

            {/*</Col>*/}
        {/*</Row>*/}
        return (
            <div className="login-wrap">
                <Row className="login-popup">
                    <Col span={12} className="login-main">
                    <div className="login-content">
                    <h2 className="title">登录</h2>
                    <LoginFrom></LoginFrom>
                    </div>
                    </Col>
                    <Col span={12} className="right-main">

                    </Col>
                </Row>
            </div>
        )
    }
}
