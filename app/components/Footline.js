import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'

const {height, width} = Dimensions.get('window')
// import Feather from 'react-native-vector-icons/Feather'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Footline extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
      }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.line}></View><Text style={styles.txtBox}>我是有底线的</Text><View style={styles.line}></View>
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        flexDirection: 'row',
        width:width
    },
    txtBox:{
        height:50,
        lineHeight:50,
        textAlign:"center",
        fontSize: 12,
        color:"#8b8b8b",
        marginLeft: 10,
        marginRight: 10
    },
    line:{
        height:1,
        backgroundColor:"#dadada",
        width:50
    }
    
  })
  