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
                <View style={styles.itemBox}>
                    <View style={styles.imgWarp}>
                        <Image source={require("../assets/img/1.png")} style={styles.imgSty} />
                    </View>
                    <View style={styles.txtBox}>
                        <Text style={styles.tit1} numberOfLines={2}>
                            卡罗拉是一个豪车，我非常喜欢这个车，这个车太好了
                        </Text>
                        <Text style={styles.tit2} numberOfLines={1}>
                                卡罗拉是一个豪车，我非常喜欢这个车，这个车太好了
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width:width  
    },
    itemBox:{
        height:px2dp(110),
        shadowOffset:{ width:0, height:0 }, 
        shadowColor:'#000000', 
        shadowOpacity:0.05, 
        shadowRadius:10,
        marginBottom: px2dp(16),
        width:width-32,
        borderRadius: 5,
        flexDirection:'row',
        backgroundColor: "#ffffff",
    },
    imgWarp:{
        width:px2dp(110),
        height:px2dp(110),
        marginRight: 16,
        overflow: 'hidden',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    imgSty:{
        width:px2dp(110),
        height:px2dp(110)
    },
    txtBox:{
        flex:1,
        flexDirection:"column",
        marginTop: px2dp(10)
    },
    tit1:{
        lineHeight:px2dp(25),
        fontSize: px2dp(18),
        color:"#000000",
        marginBottom:10,
        fontWeight:"bold"
    },
    tit2:{
        lineHeight:px2dp(20),
        fontSize: px2dp(13),
        color:"#000000"
    }
  })
  