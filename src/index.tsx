import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, NavLink } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Layout, Menu, Breadcrumb } from 'antd'

const { Header, Content, Footer } = Layout

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item>
              <NavLink to="/delivery-cost">Delivery Cost</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/delivery-routes">Delivery Routes</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          <App />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
