import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  RefreshControl
} from 'react-native'


export default class Xinlingvideolist extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
      }
    }
    render() {
        return (
            <RefreshControl>
            </RefreshControl>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }

  })
  