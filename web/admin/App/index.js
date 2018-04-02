/**
 * @author zhangyi
 * @date 2018/3/31
 */
import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom'
import BaseContainer from '@adminComponents/BaseContainer/'
import Login from '../containers/Login'
import Home from '../containers/Home'
import './index.less'


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <BaseContainer>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </BaseContainer>
        )
    }
}

export default hot(module)(App)