/**
 * @author zhangyi
 * @date 2018/4/1
 */
import React, { Component } from 'react'
import {
    Layout, Breadcrumb, Menu, Icon,
    Avatar, Input, Tooltip, Card,
    List, Popover, Button, Col, Row
} from 'antd'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import './index.less'
const { Header, Footer, Sider, Content } = Layout;
const Search = Input.Search;

const routes = [{
    path: '/admin',
    icon: 'home',
    title: '文章管理'
},{
    path: '/admin/edit',
    icon: 'edit',
    title: '添加/编辑文章'
},{
    path: '/admin/category',
    icon: 'bars',
    title: '分类'
},{
    path: '/admin/comments',
    icon: 'message',
    title: '评论管理'
}];

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = [
            {
                title: 'Title 1',
            },
            {
                title: 'Title 2',
            },
            {
                title: 'Title 3',
            },
            {
                title: 'Title 4',
            },
        ];

        const { location: {pathname} } = this.props;

        return (
            <Content className="main">
                <List
                    grid={{ gutter: 40, column: 3 }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                title={item.title}
                                bordered={false}
                            >
                                Card content
                            </Card>
                        </List.Item>
                    )}
                />
            </Content>
        )
    }
}