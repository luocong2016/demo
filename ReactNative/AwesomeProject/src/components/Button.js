import React, { Component } from 'react'
import { Button } from 'react-native'

/**
 * Props
 * onPress
 * title
 * accessibilityLabel
 * color
 * disabled
 * testID
 * hasTVPreferredFocus
 */

export default class ButtonDemo extends Component {
  onPressLearnMore() {
    console.log(this)
  }

  render() {
    return (
      <Button
        title="Learn More"
        onPress={this.onPressLearnMore}
        accessibilityLabel="Learn more about this purple button"
      />
    )
  }
}
