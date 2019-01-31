import React, { Component } from 'react'
import { Button, Card, Col, Divider, Row } from 'antd'

export default class ButtonUI extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    console.log(this)
    return (
      <div>
        <Row>
          <Col span={12}>
            <Card>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="danger">Danger</Button>
              <Divider orientation="left">按钮类型</Divider>
              <div>按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。</div>
            </Card>
          </Col>
          <Col span={12} />
        </Row>
      </div>
    )
  }
}
