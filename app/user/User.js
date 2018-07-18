import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

const {height, width} = Dimensions.get('window')

export default class User extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            
        }
    }

    render() {

        let {navigation}=this.props

        return (
            <View style={styles.container}>
                <ScrollView
                showsVerticalScrollIndicator={false}
                >
                    <ImageBackground style={styles.topBox} source={require('../assets/img/1.png')} resizeMode='cover' >
                        <View style={styles.topBg}></View>
                        <View style={styles.topBar}></View>
                        <View style={styles.topNav}>
                            <TouchableHighlight 
                            onPress={ ()=>{ navigation.navigate("Editinformation") } }
                            activeOpacity={1} 
                            underlayColor="transparent">
                                <Image  source={require("../assets/icon/edit.png")} style={styles.imgSty} />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.userInfoBox}>
                            <View style={styles.avatorBox}>
                                <Image source={require("../assets/img/123.jpg")} style={styles.avatorImg} />
                                <Image source={require("../assets/icon/Vip.png")} style={styles.hyIcon} />
                            </View>
                            <Text style={styles.userName}>
                                大众科鲁兹
                            </Text>
                            <Text style={styles.userInfo}>
                                人间事常难遂人愿，且看明月又有几时圆
                            </Text>
                            <View style={styles.levelBox}>
                                <View style={styles.classBox}>
                                    <Text style={styles.t1}>Lv20</Text>
                                    <Text style={styles.t2}>等级</Text>
                                </View>
                                <View style={styles.classBox}>
                                    <Text style={styles.t1}>62</Text>
                                    <Text style={styles.t2}>关注</Text>
                                </View>
                                <View style={styles.classBox}>
                                    <Text style={styles.t1}>247</Text>
                                    <Text style={styles.t2}>收藏</Text>
                                </View>
                            </View>

                        </View>
                    </ImageBackground>

                    {/* 导航 start */}
                    <View style={styles.navContent}>
                        <TouchableHighlight 
                        onPress={ ()=>{ navigation.navigate("Membercenter") } }
                        activeOpacity={1} 
                        underlayColor="transparent">
                            <View style={styles.linkBoxItem} >
                                <View style={styles.linkIconBox}>
                                    <Image source={require("../assets/icon/hy_icon.png")} style={styles.iconSty} />
                                    <Text style={styles.linkName}>会员在线</Text>
                                </View>
                                <View style={styles.jtBox}>
                                    <Image source={require("../assets/icon/Arrow_Small_Right.png")} style={styles.jtImg} />
                                </View>
                            </View>
                        </TouchableHighlight>

                        <View style={styles.linkBoxItem}>
                            <View style={styles.linkIconBox}>
                                <Image source={require("../assets/icon/xxtz_icon.png")} style={styles.iconSty} />
                                <Text style={styles.linkName}>消息通知</Text>
                            </View>
                            <View style={styles.jtBox}>
                                <Image source={require("../assets/icon/Arrow_Small_Right.png")} style={styles.jtImg} />
                            </View>
                        </View>
                        <View style={styles.linkBoxItem}>
                            <View style={styles.linkIconBox}>
                                <Image source={require("../assets/icon/edit.png")} style={styles.iconSty} />
                                <Text style={styles.linkName}>推荐给朋友</Text>
                            </View>
                            <View style={styles.jtBox}>
                                <Image source={require("../assets/icon/Arrow_Small_Right.png")} style={styles.jtImg} />
                            </View>
                        </View>

                        <TouchableHighlight 
                        onPress={ ()=>{ navigation.navigate("Setuppage") } }
                        activeOpacity={1} 
                        underlayColor="transparent">
                            <View style={styles.linkBoxItem}>
                                <View style={styles.linkIconBox}>
                                    <Image source={require("../assets/icon/shezhi.png")} style={styles.iconSty} />
                                    <Text style={styles.linkName}>设置</Text>
                                </View>
                                <View style={styles.jtBox}>
                                    <Image source={require("../assets/icon/Arrow_Small_Right.png")} style={styles.jtImg} />
                                </View>
                            </View>
                        </TouchableHighlight>

                        <View style={styles.linkBoxItem}>
                            <View style={styles.linkIconBox}>
                                <Image source={require("../assets/icon/guanyu_icon.png")} style={styles.iconSty} />
                                <Text style={styles.linkName}>关于</Text>
                            </View>
                            <View style={styles.jtBox}>
                                <Image source={require("../assets/icon/Arrow_Small_Right.png")} style={styles.jtImg} />
                            </View>
                        </View>

                    </View>

                    {/* 导航 end */}

                </ScrollView>

            </View>
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
    topBox:{
        width:width,
        height:320*width/375
    },
    topBg:{
        width:width,
        height:320*width/375,
        backgroundColor:"#ffffff",
        backgroundColor:"rgba(255,255,255,0.8)",
        position:"absolute",
        top:0,
        left:0
    },
    topBar:{
        height:44,
        width:width-32
    },
    topNav:{
        height:44,
        width:width-32,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"flex-end"
    },
    userInfoBox:{
        alignItems:"center"
    },
    avatorBox:{
        width:80,
        height:80,
        marginBottom: 25
    },
    avatorImg:{
        width:80,
        height:80,
        borderRadius: 40
    },
    hyIcon:{
        width:50,
        height:50,
        position:"absolute",
        bottom:0,
        left:"50%",
        marginBottom: -25,
        marginLeft: -25
    },
    userName:{
        lineHeight:48,
        textAlign:"center",
        color:"#0D0E15",
        fontSize: 34,
        fontWeight:"bold",
        marginBottom:5
    },
    userInfo:{
        lineHeight:16,
        textAlign:"center",
        color:"#000000",
        fontSize: 12,
        marginBottom:5,
        marginBottom: 20
    },
    levelBox:{
        width:width-52,
        backgroundColor:"#ffffff",
        borderRadius:5,
        shadowOffset:{ width:0, height:3 }, 
        shadowColor:'#000000', 
        shadowOpacity:0.1, 
        shadowRadius:10,
        height:75,
        flexDirection: 'row'
    },
    classBox:{
        flex:1
    },
    t1:{
        lineHeight:28,
        fontSize:24,
        fontWeight:"bold",
        color:"#000000",
        textAlign:"center",
        marginBottom:5,
        marginTop: 15
    },
    t2:{
        lineHeight:17,
        fontSize:12,
        color:"#000000",
        textAlign:"center"
    },
    navContent:{
        backgroundColor:"#ffffff",
        marginHorizontal:16,
        marginTop: 70,
        borderBottomColor: "#E0E2E7",
        borderBottomWidth: 0.5,
        marginBottom:100
    },
    linkBoxItem:{
        height:48,
        flexDirection: 'row',
        justifyContent:"space-between"
    },
    linkIconBox:{
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"flex-start"
    },
    iconSty:{
        width:16,
        height:15
    },
    linkName:{
        lineHeight:20,
        marginLeft: 10,
        fontSize:14,
        color:"#0D0E15"
    },
    jtBox:{
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    jtImg:{
        width:22,
        height:22
    }

   
  })
  
