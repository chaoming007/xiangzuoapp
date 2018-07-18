/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-06-25 15:23:12 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-07-02 17:12:36
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Store from './app/store/Store.js'

import { Provider } from 'react-redux'


import App from './app/router/Homerouter'

export default class Appbox extends Component{
  render() {
    return (
      <Provider store={ Store }>
        <App />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
  
});
