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
// import Feather from 'react-native-vector-icons/Feather'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Newsitem extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
      }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imgBox}>
                    <View style={styles.imgWarp}>
                        <Image source={require("../assets/img/123.jpg")} style={styles.imgBig} />
                        <View style={styles.imgSileBox}>
                            <Image source={require("../assets/img/123.jpg")} style={styles.imgSmall} />
                            <Image source={require("../assets/img/123.jpg")} style={styles.imgSmall} />
                        </View>

                    </View>
                    <View style={styles.numBox}>
                       <Text style={styles.numTxt}>64+</Text>
                    </View>
                </View>
                <View style={styles.txtBox}>
                    <Text style={styles.titBox} numberOfLines={2}>11下周的汽车行汽车行情汽车行情汽车行情汽车行情汽车行情情怎么样？</Text>
                    <View style={styles.infoBox}>
                        <View style={styles.userBox}>
                            <Image source={require("../assets/img/123.jpg")} style={styles.userImg} />
                            <Text style={styles.userName}>你可开的慢名字</Text>
                        </View>
                        <View style={styles.videoInfo}>
                            <View style={styles.scNum}>
                                <Image source={require("../assets/icon/liulan.png")} style={styles.ckImg} />
                                <Text style={styles.scNumTxt}>432434</Text>
                            </View>
                            <View style={styles.scNum}>
                                <Image source={require("../assets/icon/xh.png")} style={styles.scImg} />
                                <Text style={styles.scNumTxt}>4324</Text>
                            </View>
                        
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
        shadowOpacity:0.1, 
        shadowRadius:10,
        marginBottom:15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    imgBox:{
       margin: 0
    },
    numBox:{
        width:33,
        height:33,
        position: "absolute",
        backgroundColor:"#AF00FF",
        justifyContent:"center",
        alignItems:"center",
        borderTopLeftRadius: 3,
        borderBottomLeftRadius:3,
        top:77,
        right:0
    },
    numTxt:{
        lineHeight:33,
        textAlign:"center",
        fontSize:14,
        color:"#ffffff",
        fontWeight:"bold",
        height:33
    },
    imgWarp:{
        width:width-32,
        height:188,
        overflow:"hidden",
        flexDirection: 'row',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7
    },
    imgBig:{
        width:248,
        height:188,
        marginRight:2
    },
    imgSileBox:{
        flex:1,
        flexDirection: 'column',
        justifyContent:"space-between"
    },
    imgSmall:{
        width:93,
        height:93
    },

    txtBox:{
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 20,
        width:width-32,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    titBox:{
        fontSize: 18,
        lineHeight:25,
        fontWeight:"bold",
        marginBottom: 15
        //textAlign:"left",
        //flex:1
    },
    infoBox:{
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems: 'center',
        height:30,
        flex:1
    },
    userBox:{
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"flex-start"
    },
    userImg:{
        width:30,
        height:30,
        borderRadius:15,
        marginRight: 5
    },
    userName:{
        height:20,
        fontSize: 14,
        lineHeight:20
    },
    videoInfo:{
        flexDirection: 'row',
        justifyContent:"flex-end",
        alignItems:"center"
    },
    scNum:{
        flexDirection: 'row',
        height:20,
        alignItems:"center"
    },
    scNumTxt:{
        fontSize:14,
        color:"#717B93"
    },
    scImg:{
        width:15,
        height:14,
        marginLeft: 10,
        marginRight: 5
    },
    ckImg:{
        width:15,
        height:12,
        marginLeft: 10,
        marginRight: 5
    }



  })
  