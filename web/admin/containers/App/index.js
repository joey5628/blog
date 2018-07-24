/**
 * @author zhangyi
 * @date 2018/3/31
 */
import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom'
import Login from '../Login/index'
import Home from '../Home/index'
import './index.less'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="admin-layout">
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        )
    }
}

export default hot(module)(App)