import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    StatusBar,
    TextInput,
    TouchableHighlight
} from 'react-native'

const {width,height} = Dimensions.get('window')

import Statusbar from '../components/Statusbar'

export default class Login extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        
      }
    }

    render() {

            let {navigation}=this.props

			return (
                <View style={styles.container}>
                    <ImageBackground style={styles.imgBgSty} source={require('../assets/img/timg.jpeg')} resizeMode='cover'>
                        <StatusBar  
                        animated={true}             
                        hidden={false}                
                        barStyle={'light-content'}   
                        /> 
                        <View style={styles.contentBox}>
                            <View style={styles.loginContent}>
                                <Text style={styles.titSty}>登录</Text>
                                <View style={styles.loginBox}>
                                    <Text style={styles.inpTit}>账号</Text>
                                    <View style={styles.inputWarp}>
                                        <TextInput
                                        style={styles.txtInpSty}
                                        onChangeText={(name) => this.setState({name})}
                                        placeholder={"请输入账号"}
                                        placeholderTextColor="#ffffff"
                                        autoCorrect={false}
                                        />
                                    </View>
                                    <Text style={styles.inpTit}>密码</Text>
                                    <View style={styles.inputWarp}>
                                        <TextInput
                                        style={styles.txtInpSty}
                                        onChangeText={(name) => this.setState({name})}
                                        placeholder={"请输入密码"}
                                        placeholderTextColor="#ffffff"
                                        autoCorrect={false}
                                        />
                                    </View>
                                    <View style={styles.btnSty}>
                                        <Text style={styles.btnTxt}>登录</Text>
                                    </View>
                                    <View style={styles.infoWarp}>
                                        <Text style={styles.loginInfoTxt}>或其他登录方式</Text>
                                        <View style={styles.loginInfo}>
                                            <Image source={require("../assets/icon/weixin.png")} style={styles.imgStyWx} />
                                            <Image source={require("../assets/icon/weibo.png")} style={styles.imgStyWb} />
                                            <Image source={require("../assets/icon/QQ.png")} style={styles.imgStyQq} />

                                        </View>
                                        <TouchableHighlight 
                                        onPress={ ()=>{ navigation.navigate("Userregister")  } }
                                        activeOpacity={1} 
                                        underlayColor="transparent">
                                            <Text style={styles.reginsterTxt}>你还没有账号？马上注册</Text>
                                        </TouchableHighlight>
                                    </View>



                                </View>
                            </View>
                        </View>
                    </ImageBackground>
				</View>
			)
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent:'flex-start',
      alignItems: 'center',
      backgroundColor: '#ffffff'
    },
    headerBlackTop:{
        height:44,
        width:width
    },
    imgBgSty:{
        width:width,
        height:height
    },
    contentBox:{
        position:"absolute",
        top: 0,
        left:0,
        width:width,
        height:height,
        backgroundColor:"rgba(0,0,0,0.7)",
        alignItems:"center",
        justifyContent:"center"
    },
    loginContent:{
        width:width-112,
        alignSelf: 'center'
    },
    titSty:{
        lineHeight:42,
        fontSize: 34,
        fontWeight:"bold",
        color:"#ffffff"
    },
    loginBox:{
        margin: 0
    },
    inpTit:{
        marginTop:45,
        height:20,
        lineHeight:18,
        fontSize:12,
        color:"#ffffff"
    },
    inputWarp:{
        width:width-112,
        height:40,
        borderBottomColor: "#ffffff",
        borderBottomWidth: 0.5,
        alignItems:"center",
        justifyContent:"center"
    },
    txtInpSty:{
        height:20,
        lineHeight:20,
        color:"#ffffff",
        width:width-112,
        fontSize:14
    },
    btnSty:{
        height:56,
        width:width-112,
        backgroundColor:"#AF00FF",
        marginTop:36,
        borderRadius: 5,
        marginBottom: 60
    },
    btnTxt:{
        height:56,
        lineHeight:54,
        textAlign:"center",
        fontSize:16,
        color:"#ffffff"
    },
    infoWarp:{
        alignItems:"center"
    },
    loginInfoTxt:{
        height:20,
        lineHeight:20,
        color:"#ffffff",
        fontSize:14,
        width:width-112,
        textAlign:"center",
        marginBottom:40
    },
    loginInfo:{
        height:22,
        width:width-238,
        flexDirection: 'row',
        justifyContent:"space-between"
    },
    imgStyWx:{
        width:22,
        height:18
    },
    imgStyWb:{
        width:22,
        height:18
    },
    imgStyQq:{
        width:18,
        height:22
    },
    reginsterTxt:{
        height:20,
        lineHeight:20,
        color:"#ffffff",
        fontSize:14,
        width:width-112,
        textAlign:"center",
        marginTop: 50
    }
   
   
  })
  