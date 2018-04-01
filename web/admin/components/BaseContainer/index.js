/**
 * @author zhangyi
 * @date 2018/4/1
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BaseContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props;

        return (
            <div className="admin-layout">
                { children }
            </div>
        )
    }
}