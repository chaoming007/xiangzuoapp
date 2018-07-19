import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
	View,
	ScrollView,
    Dimensions,
    TouchableHighlight
} from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const {height, width} = Dimensions.get('window')

export default class Pagetitle extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
       
      }
    }

    render() {
        let {navigation,tit,rightIcon}=this.props
        return (
            <View style={styles.container}>
                <View style={styles.topTitle}>
                    <View style={styles.backBox}  >
                        <MaterialIcons onPress={()=>{ navigation.goBack() }}  name="arrow-back" size={22} color="#000000" />
                    </View>
                    <Text style={styles.titTxt} onPress={()=>{ navigation.goBack() }} >{tit}</Text>
                    {
                        rightIcon?<View style={styles.rigBox}>{rightIcon}</View>:""
                    }
                </View>
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
   	container:{
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    topTitle:{
        height:24,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginBottom: 15
    },
    titTxt:{
        lineHeight:24,
        fontSize: 16,
        color:"#0D0E15",
        textAlign:"center",
        flex:1
    },
    backBox:{
        width:22,
        height:17,
        position: "absolute",
        top:"50%",
        marginTop:-10,
        left:15
    },
    rigBox:{
        height:24,
        position: "absolute",
        top:"50%",
        marginTop:-12,
        right:15
    }

   
	
  })
  