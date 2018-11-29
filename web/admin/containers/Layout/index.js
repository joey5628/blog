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
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Category from '../Category'
import ArticleEdit from '../ArticleEdit'
import config from '../../config'

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

export default class LayoutPage extends Component {
    constructor(props) {
        super(props);
    }

    logout = () => {
        Cookies.remove('token');
        this.props.history.replace('/login');
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
            <Layout className="home-layout">
                <Sider
                    collapsible={false}
                    className="home-sider"
                >
                    <div className="home-logo-wrap">
                        <Avatar
                            className="home-avatar"
                            shape="square"
                            src={`${config.qiniuDomain}/imgs/sun.jpg`}/>
                    </div>
                    <Menu
                        mode="inline"
                        selectedKeys={[pathname]}
                        className="home-menu">
                        {
                            routes.map((route)=>{
                                return (
                                    <Menu.Item key={route.path}>
                                        <Tooltip
                                            arrowPointAtCenter
                                            placement="rightTop"
                                            title={route.title}>
                                            <Link to={route.path}>
                                                <Icon type={route.icon}/>
                                            </Link>
                                        </Tooltip>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                    <a className="header-action btn-logout" onClick={this.logout}>
                        <Icon type="logout"/>
                    </a>
                </Sider>
                <Layout>
                    <Header className="home-header">
                        <Search
                            className="home-search"
                            placeholder="Search..."
                            onSearch={value => console.log(value)}
                        />
                        <a className="header-action btn-new">
                            <Icon type="plus"/>
                        </a>
                    </Header>
                    <Layout>
                        <Switch>
                            <Route exact path="/admin" component={Home}/>
                            <Route path="/admin/category" component={Category}/>
                            <Route path="/admin/edit" component={ArticleEdit}/>
                        </Switch>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}