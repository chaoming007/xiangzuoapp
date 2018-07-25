import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions} from 'react-native'

import { SwipeListView } from 'react-native-swipe-list-view'

const {width} = Dimensions.get('window')

export default class Scitem extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
      }
    }

    render() {
        let swipeoutBtns = [
            {
              text: 'Button'
            }
        ]
        return (
            <View style={styles.container}>
                <Swipeout right={swipeoutBtns} style={styles.swiperBox}>
                    <View style={styles.swiperView}>
                        <Text>Swipe me left</Text>
                    </View>
                </Swipeout>
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width:width
    },
    swiperBox:{
        width:width,
        backgroundColor:"#ffffff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    swiperView:{
        width:width,
        marginBottom: 16
    }
    
  })
  