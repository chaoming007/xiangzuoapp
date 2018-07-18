import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
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

        let {isImg,playTuff,linkUrl,navigation}=this.props
       

        return (
            <View style={styles.container}>
                
                <View style={isImg?[styles.txtBox]:[styles.txtBox,styles.txtSetP]}>
                   
                    {/* 图文信息 start */}

                    <TouchableHighlight 
                    onPress={()=>{navigation.navigate(linkUrl,{id:5})}}
                    activeOpacity={1} 
                    underlayColor="transparent">

                        <View style={styles.contentWarp}>
                            {
                                isImg?<View style={styles.imgWarp}>
                                    <Image source={require("../assets/img/1.png")} style={styles.imgSetSty} />
                                    {
                                        playTuff?<View style={styles.playSty}>
                                                    <Image source={require("../assets/icon/play.png")} style={styles.playImgSty} />
                                                </View>:""
                                    }
                                </View>:""
                            }
                        
                            <View style={isImg?[styles.txtWarpBox]:[styles.txtWarpBox,styles.txtNoImg]}>
                                <Text style={styles.titBox} numberOfLines={2}>下周的汽车行汽车行情汽车行情汽车行情汽车行情汽车行情情怎么样？</Text>
                                <Text style={styles.txtInfoBox}  numberOfLines={1}>
                                下周的汽车行汽车行情汽车行情汽车行情汽车行情汽车行情情怎么样？
                                </Text> 
                            </View>
                        </View>
                    
                    </TouchableHighlight>

                    {/* 图文信息 end */}



                    {/* 用户信息 start */}

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

                    {/* 用户信息 end */}


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
        marginBottom:10,
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        overflow:"hidden"
    },
    imgWarp:{
        width:130,
        height:130,
        overflow: 'hidden'
    },
    playSty:{
        width:30,
        height:30,
        position: "absolute",
        backgroundColor:"rgba(0,0,0,0.5)",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
        top:"50%",
        left:"50%",
        marginTop: -15,
        marginLeft: -15
    },
    playImgSty:{
        width:8,
        height:9
    },
    imgSetSty:{
        width:130,
        height:130
    },
    txtWarpBox:{
        flex:1,
        marginTop: 20,
        marginRight:16,
        marginLeft:16,
        paddingBottom:10,
        borderBottomColor: "#E0E2E7",
        borderBottomWidth: 0.5
    },
    txtNoImg:{
        
        borderBottomWidth:0
    },
    txtBox:{
        paddingBottom: 10,
        width:width-32
    },
    txtSetP:{
        paddingBottom: 20,
    },
    titBox:{
        fontSize: 18,
        lineHeight:25,
        fontWeight:"bold",
        marginBottom: 10
        //textAlign:"left",
        //flex:1
    },
    txtInfoBox:{
        lineHeight:20,
        fontSize:13,
        color:"#000000"
    },
    infoBox:{
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems: 'center',
        height:30,
        flex:1,
        paddingHorizontal: 16
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
  