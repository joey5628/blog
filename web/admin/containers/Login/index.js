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
        {/*<div className="login-wrap">*/}
            {/*<div className="login-main">*/}
                {/*Login*/}
            {/*</div>*/}
            {/*<div className="right-wrap">*/}

            {/*</div>*/}
        {/*</div>*/}
        {/*<Row>*/}
            {/*<Col span={12}>col-12</Col>*/}
            {/*<Col span={12}>col-12</Col>*/}
        {/*</Row>*/}
        return (
            <div className="login-wrap">
                <div className="login-main">
                    <div className="login-content">
                        <h3 className="title">登录</h3>
                        <LoginFrom></LoginFrom>
                    </div>
                </div>
                <div className="right-main">

                </div>
            </div>
        )
    }
}
