import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const SubMenu = Menu.SubMenu

function agentMenu(menu) {
  return menu.map(item => {
    const { key, icon, title, hide = false, children } = item

    if (hide) {
      return false
    }

    return Array.isArray(children) && children.length > 0 ? (
      <SubMenu
        key={key}
        title={
          <span>
            <Icon type={icon} />
            <span>{title}</span>
          </span>
        }
      >
        {agentMenu(children)}
      </SubMenu>
    ) : (
      <Menu.Item key={key}>
        <Icon type={icon} />
        <span>{title}</span>
      </Menu.Item>
    )
  })
}

export default ({ menuData, ...other }) => (
  <Menu {...other}>{agentMenu(menuData)}</Menu>
)
