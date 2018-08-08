import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Gotop extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
      }
    }

    render() {
        let {goTopTuff,scrollFun}=this.props
        return (
            goTopTuff?<TouchableHighlight style={[styles.touchSty]}  activeOpacity={1}               underlayColor="transparent"  onPress={()=>{ scrollFun() }}>
                <View style={[styles.goTop]} >
                    <Ionicons name="md-arrow-up" color="#000000" size={22} />
                </View>
            </TouchableHighlight>:""
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    goTop:{
        width:42,
        height:42,
        shadowOpacity:0.08, 
        borderRadius:21,
        backgroundColor:"#ffffff",
        alignItems:"center",
        justifyContent:"center",
        shadowOffset:{ width:0, height:0 }, 
        shadowColor:'#000000', 
        shadowRadius:5
    },
    touchSty:{
        width:42,
        height:42,
        position:"absolute",
        right:20,
        bottom:50
    }
})
  