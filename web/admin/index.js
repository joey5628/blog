/**
 * @author zhangyi
 * @date 2018/3/31
 */
import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import App from './APP'
import 'normalize.css'
import 'antd/dist/antd.css'
import './assets/base.css'


ReactDom.render(
    <HashRouter basename="/admin">
        <App/>
    </HashRouter>,
    document.getElementById('root')
);