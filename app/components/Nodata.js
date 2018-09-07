import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
	View,
    Image,
    Dimensions
} from 'react-native'


const {height, width} = Dimensions.get('window')

export default class Nodata extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
       
      }
    }
    render() {
        const { isVisited}=this.props
        return (
            <View style={isVisited?styles["container"]:styles["showSty"]} >
                
                <Text>没有更多数据了</Text>
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container:{
        width:width,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        height:50
    },
    showSty:{
        display: 'none'
    }
   
  })
  