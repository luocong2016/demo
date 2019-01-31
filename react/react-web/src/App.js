import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Composition from './pages/Composition'
import { Button } from './components/ui'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Button} />
        <Route path="/" component={Composition} />
      </Switch>
    )
  }
}
