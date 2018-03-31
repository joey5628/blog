/**
 * @author zhangyi
 * @date 2018/3/31
 */
import React, { Component } from 'react'
import './index.less'
import { hot } from 'react-hot-loader'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>chaiyBlog</h1>
        )
    }
}

export default hot(module)(App)