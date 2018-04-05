/**
 * @author zhangyi
 * @date 2018/4/1
 */
import React from 'react'
import BasePage from '@adminComponents/BasePage/'
import {
    Layout, Breadcrumb, Menu, Icon,
    Avatar, Input, Tooltip, Card,
    Col, Row
} from 'antd'
import { Link } from 'react-router-dom'
import './index.less'
const { Header, Footer, Sider, Content } = Layout;
const Search = Input.Search;

const routes = [{
    path: '/',
    icon: 'home',
    title: '首页'
},{
    path: '/list',
    icon: 'home',
    title: '文章列表'
},{
    path: '/edit',
    icon: 'home',
    title: '编辑'
},{
    path: '/demo',
    icon: 'home',
    title: '添加'
}];

export default class Home extends BasePage {
    constructor(props) {
        super(props);
    }

    render() {
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
                            src="http://owtrjd7fu.bkt.clouddn.com/sun.jpeg"/>
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
                </Sider>
                <Layout>
                    <Header className="home-header">
                        {/*<a href="#" className="header-action btn-new">*/}
                            {/*<Icon type="plus"/>*/}
                        {/*</a>*/}
                        <Search
                            className="home-search"
                            placeholder="Search..."
                            onSearch={value => console.log(value)}
                        />
                        <a href="#" className="header-action btn-logout">
                            <Icon type="logout"/>
                        </a>
                        <a href="#" className="header-action btn-logout">
                            <Icon type="plus"/>
                        </a>
                    </Header>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>那些年写的bug</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="main">
                            <Row gutter={20}>
                                <Col span={8}>
                                    <Card title="Card title" bordered={false}>Card content</Card>
                                </Col>
                                <Col span={8}>
                                    <Card title="Card title" bordered={false}>Card content</Card>
                                </Col>
                                <Col span={8}>
                                    <Card title="Card title" bordered={false}>Card content</Card>
                                </Col>
                                <Col span={8}>
                                    <Card title="Card title" bordered={false}>Card content</Card>
                                </Col>
                                <Col span={8}>
                                    <Card title="Card title" bordered={false}>Card content</Card>
                                </Col>
                                <Col span={8}>
                                    <Card title="Card title" bordered={false}>Card content</Card>
                                </Col>
                            </Row>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}