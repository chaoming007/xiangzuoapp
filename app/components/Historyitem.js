import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
    View,
    ScrollView,
    Dimensions,
    Image
} from 'react-native'


const {height, width} = Dimensions.get('window')

export default class Historyitem extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        
      }
    }

    render() {
        return (
            <View style={styles.container}>
                
                <View style={[styles.txtBox]}>
                        <View style={styles.contentWarp}>
 
                            <View style={styles.imgWarp}>
                                <Image source={require("../assets/img/1.png")} style={styles.imgSetSty} />
                            </View>
                            <View style={[styles.txtWarpBox]}>
                                <Text style={styles.titBox} numberOfLines={2}>下周的汽车行汽车行情汽车行情汽车行情汽车行情汽车行情情怎么样？</Text>
                                <Text style={styles.txtInfoBox}  numberOfLines={1}>
                                下周的汽车行汽车行情汽车行情汽车行情汽车行情汽车行情情怎么样？
                                </Text> 
                            </View>
                        </View>

                </View>
        </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        shadowOffset:{ width:0, height:3 }, 
        shadowColor:'#000000', 
        shadowOpacity:0.05, 
        shadowRadius:10,
        marginBottom:15,
        borderRadius:10
    },
    contentWarp:{
        flexDirection: 'row',
        borderRadius: 7,
        overflow:"hidden"
    },
    imgWarp:{
        width:110,
        height:110,
        overflow: 'hidden'
    },
    imgSetSty:{
        width:110,
        height:110
    },
    txtWarpBox:{
        flex:1,
        marginTop: 15,
        marginRight:16,
        marginLeft:16,
        marginBottom:15
    },
    txtBox:{
        width:width-32
    },
    titBox:{
        fontSize: 18,
        lineHeight:25,
        fontWeight:"bold",
        marginBottom:10
        //textAlign:"left",
        //flex:1
    },
    txtInfoBox:{
        fontSize: 13,
        lineHeight:20
    }
   

	
  })
  