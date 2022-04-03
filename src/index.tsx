import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, NavLink } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Layout, Menu } from 'antd'

const { Header, Content, Footer } = Layout

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item key="0">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="1">
              <NavLink to="/delivery-cost">Delivery Cost</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/delivery-routes">Delivery Routes</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="main-content">
          <App />
        </Content>
        <Footer>Amity Delivery Service ©2022 Created by Sudesh Nimesha</Footer>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
