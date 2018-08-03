import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import {px2dp} from '../util/tools'

const {height, width} = Dimensions.get('window')

export default class collectItem extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={

      }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    
                </View>
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width:width,
        height:height,
        backgroundColor:"#cccccc"
        
    },
    box:{
        width:px2dp(100),
        height:px2dp(100),
        backgroundColor: '#cc0000'
    }
  })
  