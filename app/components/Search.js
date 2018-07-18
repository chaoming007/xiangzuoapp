import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Search extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
       
      }
    }
    render() {

        let { navigation,setSearchHistory } = this.props

        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.touchSty} activeOpacity={1} underlayColor="transparent" onPress={ ()=>{ setSearchHistory() } }>
                    <View style={styles.inpWarp}>
                        <Feather name="search" size={20} style={styles.inpIcon}  />
                        <View style={styles.inpSty} ></View>
                    </View>
                </TouchableHighlight>
                <View style={styles.messageWarp}>
                    <FontAwesome name="envelope-o" size={22} style={styles.letterSty} />
                    <MaterialCommunityIcons name="clock" size={25} style={styles.timeSty} onPress={()=>{navigation.navigate("Lookhistory") } } />
                </View>
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15
    },
    inpWarp:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        shadowOffset:{ width:0, height:0 }, 
        shadowColor:'#000000', 
        shadowOpacity:0.08, 
        shadowRadius:5,
        borderRadius: 20,
        backgroundColor:"#ffffff"
    },
    inpSty:{
        height:40,
        flex:1
    },
    inpIcon:{
        color:"#000000",
        marginLeft: 16,
        marginRight: 10
    },
    messageWarp:{
        width:108,
        height:40,
        flexDirection: 'row',
        alignItems:'center'
    },
    letterSty:{
        marginLeft:34
    },
    timeSty:{
        marginLeft:30
    },
    touchSty:{
        margin: 0,
        padding:0,
        flex:1
    }
   
  })
  