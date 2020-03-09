import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'umi';
import styles from './index.less';
import {  Layout, Menu, Breadcrumb } from "antd";
import routers from '@/router/main-routers';
import products from '@/models/products';

const { Header, Footer, Sider, Content } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;


class Inbox extends React.Component {
  render() {
    return (
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div id="main-content" className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          Content
        </div>
      </Content>
    )
  }
}

export default () => {
  return (
      <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          {
              routers.map((route, index) => {
                  if (route.subRoutes) {
                      return (
                          <SubMenu key={index} title={<span><span className="nav-text">{route.name}</span></span>}>
                              {
                                  route.subRoutes.map((subRoute, subIndex) => (
                                      <MenuItem key={index + '-' + subIndex}>
                                          <Link to={route.path + subRoute.path}>{subRoute.name}</Link>
                                      </MenuItem>
                                  ))
                              }
                          </SubMenu>
                      )
                  } else {
                      return (
                          <MenuItem key={index}>
                                <Link  to="products" innerRef=""> 
                                <span className="nav-text">{route.name}</span> 
                                </Link>
                          </MenuItem>
                      )
                  }
              })
          }
        </Menu>
      </Header>
      <Inbox/>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}