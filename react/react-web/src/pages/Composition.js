import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { Route } from 'react-router-dom'
import { Button } from '../components/ui'
import { Breadcrumb, Footer, Header, Menu } from '../components/layout'
import { saveFormData, saveImg, clearData } from '../actions/home'
import menu from '../containers/menu'

const { Content, Sider } = Layout

class Composition extends Component {
  state = {
    collapsed: false
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  render() {
    console.log(this)
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            menuData={menu}
          />
        </Sider>
        <Layout>
          <Header />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb />
            <div style={{ padding: 24, background: '#fff', minHeight: '80vh' }}>
              <Route path="/button" component={Button} />
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

export default connect(
  state => ({ fromData: state.fromData }),
  {
    saveFormData,
    saveImg,
    clearData
  }
)(Composition)
