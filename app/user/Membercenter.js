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


import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Statusbar from '../components/Statusbar'

export default class Membercenter extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
        }
    }

    render() {
        
        let {navigation}=this.props

        return (

        <View style={styles.container}>
                <ImageBackground style={styles.topBox} source={require('../assets/img/grzx_hy_bg.png')} resizeMode='cover'>
                    <View style={styles.topHeader}>
                        <View style={styles.topBar}></View>
                        <View style={styles.topTitle}>
                            <View style={styles.backBox}  >
                                <MaterialIcons onPress={()=>{ navigation.goBack() }}  name="arrow-back" size={22} color="#ffffff" />
                            </View>
                            <Text style={styles.titTxt} onPress={()=>{ navigation.goBack() }} >会员中心</Text>
                        </View>
                        <Text style={styles.dqTimBox}>会员到期时间 2018年08月25日</Text>
                        <View style={styles.userImgBox}>
                            <Image source={require("../assets/img/1.png")} style={styles.userImg} />
                            <Image source={require("../assets/icon/Vip.png")} style={styles.hyIcon} />
                        </View>
                    </View>
                </ImageBackground>
            <ScrollView>
                    <View style={styles.mainBox}>
                        <Text style={styles.titBox}>会员权益</Text>
                        <View style={styles.hyqyBox}>
                            <ScrollView horizontal={true} >
                                <View style={styles.markList}>
                                    <View style={styles.markItem}>
                                        <Image source={require("../assets/icon/zsbz.png")} style={styles.markImg} />
                                        <Text style={styles.bzTxt1}>专属标志</Text>
                                        <Text style={styles.bzTxt2}>会员专属标志</Text>
                                    </View>
                                    <View style={styles.markItem}>
                                        <Image source={require("../assets/icon/jyfb.png")} style={styles.markImg} />
                                        <Text style={styles.bzTxt1}>经验翻倍</Text>
                                        <Text style={styles.bzTxt2}>经验值两倍奖励</Text>
                                    </View>
                                    <View style={styles.markItem}>
                                        <Image source={require("../assets/icon/ysfk.png")} style={styles.markImg} />
                                        <Text style={styles.bzTxt1}>隐身访客</Text>
                                        <Text style={styles.bzTxt2}>匿名浏览其他人</Text>
                                    </View>
                                    <View style={styles.markItem}>
                                        <Image source={require("../assets/icon/tdyl.png")} style={styles.markImg} />
                                        <Text style={styles.bzTxt1}>特定预览</Text>
                                        <Text style={styles.bzTxt2}>会员特定预览</Text>
                                    </View>

                                </View>
                            </ScrollView>
                        </View>
                        <Text style={styles.titBox}>会员套餐</Text>
                        <View style={styles.listWarp}>

                            <View style={styles.listItem}>
                                <View style={styles.txtContent}>
                                    <Text style={styles.t1}>汽车价格加价5万元</Text>
                                    <Text style={styles.t2}>需要加价50000元才可以买到</Text>
                                </View>
                                <View style={styles.btnBox}>
                                    <Text style={styles.btnTxt}>开通会员</Text>
                                </View>
                            </View>
                            <View style={styles.listItem}>
                                <View style={styles.txtContent}>
                                    <Text style={styles.t1}>汽车价格加价5万元</Text>
                                    <Text style={styles.t2}>需要加价50000元才可以买到</Text>
                                </View>
                                <View style={styles.btnBox}>
                                    <Text style={styles.btnTxt}>开通会员</Text>
                                </View>
                            </View>
                            <View style={styles.listItem}>
                                <View style={styles.txtContent}>
                                    <Text style={styles.t1}>汽车价格加价5万元</Text>
                                    <Text style={styles.t2}>需要加价50000元才可以买到</Text>
                                </View>
                                <View style={styles.btnBox}>
                                    <Text style={styles.btnTxt}>开通会员</Text>
                                </View>
                            </View>

                        </View>
                    </View>

            </ScrollView>
        </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flex:1
    },
    topTitle:{
        height:24,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15
    },
    topTitleBlock:{
        height:34,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15,
        paddingBottom: 10
    },
    titTxt:{
        lineHeight:24,
        fontSize: 16,
        color:"#ffffff",
        textAlign:"center",
        flex:1
    },
    titTxtBlock:{
        lineHeight:24,
        fontSize: 16,
        color:"#000000",
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
    markList:{
        flexDirection:"row",
        marginLeft:16
    },
    markItem:{
        alignItems:"center",
        marginRight: 20
    },
    markImg:{
        width:60,
        height:60,
        borderRadius: 30,
        marginBottom:10
    },
    bzTxt1:{
        lineHeight:20,
        textAlign:"center",
        color:"#0D0E15",
        fontWeight:"bold",
        fontSize: 14,
        marginBottom:6
    },
    bzTxt2:{
        lineHeight:17,
        textAlign:"center",
        color:"#717B93",
        fontSize: 12
    },
    topBar:{
        height:33,
        width:width
    },
    topBox:{
        width:width,
        height:276*width/375,
        marginBottom: 40
    },
    topHeader:{
        width:width,
        height:250
    },
    dqTimBox:{
        lineHeight:20,
        textAlign:"center",
        fontSize:14,
        color:"#ffffff",
        marginTop:25,
        fontWeight:"bold"
    },
    userImgBox:{
        width:122,
        height:122,
        position: "absolute",
        bottom:0,
        left:"50%",
        marginLeft: -61,
        marginBottom:-60
    },
    userImg:{
        width:122,
        height:122,
        borderRadius: 61
    },
    hyIcon:{
        width:50,
        height:50,
        position:"absolute",
        bottom:0,
        right:0,
        marginBottom:-10,
        marginLeft: -35
    },
    mainBox:{
        
    },
    titBox:{
        lineHeight:36,
        marginHorizontal: 16,
        fontSize:14,
        color:"#768196"
    },
    hyqyBox:{
        width:width,
        marginTop:16,
        marginBottom:30
    },
    listWarp:{
        marginHorizontal:16
    },
    listItem:{
        borderBottomColor: "#E0E2E7",
        borderBottomWidth: 0.5,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems:"center"
    },
    txtContent:{
        flex:1
    },
    t1:{
        lineHeight:20,
        fontSize:14,
        color:"#0D0E15",
        marginBottom:12
    },
    t2:{
        lineHeight:20,
        fontSize:12,
        color:"#768196"
    },
    btnBox:{
        width:100,
        height:30,
        borderRadius:5,
        backgroundColor:"#AF00FF"
    },
    btnTxt:{
        lineHeight:30,
        color:"#ffffff",
        textAlign:"center",
        fontSize:12
    }


    
  })
  