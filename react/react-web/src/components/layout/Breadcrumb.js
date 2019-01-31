import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import menu from '../../containers/menu'

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1
  console.log(0, route, params, routes, paths)
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  )
}

class Crumb extends Component {
  render() {
    console.log(111, this.props)
    return (
      // <Breadcrumb style={{ margin: '16px 0' }}>
      //   <Breadcrumb.Item>User</Breadcrumb.Item>
      //   <Breadcrumb.Item>Bill</Breadcrumb.Item>
      // </Breadcrumb>

      <Breadcrumb itemRender={itemRender} routes={menu} />
    )
  }
}

export default withRouter(Crumb)
