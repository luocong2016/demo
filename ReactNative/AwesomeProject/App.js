/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @form.at
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Picker } from 'react-native'
import { Button } from '@ant-design/react-native'

import ActivityIndicator from './src/components/ActivityIndicator'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

type Props = {}
export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {
      language: 'java'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <ActivityIndicator />

        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <Button size="small">按钮3</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
