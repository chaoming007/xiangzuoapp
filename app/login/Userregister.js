import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
	View,
    Image,
    Dimensions,
    TextInput
} from 'react-native'

import Title from '../components/Pagetitle'
import Statusbar from '../components/Statusbar'

const {width,height} = Dimensions.get('window')

export default class Userregister extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
       
      }
    }

    render() {
        return (
            <View style={styles.container}>
                <Statusbar />
                <Title  {...this.props} tit={"新用户注册"} />

                <View style={styles.contentBox}>
                    <Text style={styles.inpTit}>邮箱或手机号</Text>
                    <View style={styles.inputWarp}>
                        <TextInput
                        style={styles.txtInpSty}
                        onChangeText={(name) => this.setState({name})}
                        placeholder={"邮箱或手机号"}
                        placeholderTextColor="#0D0E15"
                        autoCorrect={false}
                        />
                    </View>
                    <Text style={styles.inpTit}>密码</Text>
                    <View style={styles.inputWarp}>
                        <TextInput
                        style={styles.txtInpSty}
                        onChangeText={(name) => this.setState({name})}
                        placeholder={"请输入密码"}
                        placeholderTextColor="#0D0E15"
                        autoCorrect={false}
                        />
                    </View>
                    <Text style={styles.inpTit}>确认密码</Text>
                    <View style={styles.inputWarp}>
                        <TextInput
                        style={styles.txtInpSty}
                        onChangeText={(name) => this.setState({name})}
                        placeholder={"请重复输入密码"}
                        placeholderTextColor="#0D0E15"
                        autoCorrect={false}
                        />
                    </View>
                    <Text style={styles.inpTit}>验证码</Text>
                    <View style={styles.inputWarp}>
                        <TextInput
                        style={styles.txtInpSty}
                        onChangeText={(name) => this.setState({name})}
                        placeholder={"手机或邮箱收到的验证码"}
                        placeholderTextColor="#0D0E15"
                        autoCorrect={false}
                        />
                    </View>
                    <View style={styles.btnSty}>
                        <Text style={styles.btnTxt}>马上注册</Text>
                    </View>




                </View>
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
    contentBox:{
        width:width-112
    },
    inpTit:{
        marginTop:26,
        height:20,
        lineHeight:18,
        fontSize:12,
        color:"#768196"
    },
    inputWarp:{
        width:width-112,
        height:40,
        borderBottomColor: "#0D0E15",
        borderBottomWidth: 0.5,
        alignItems:"center",
        justifyContent:"center"
    },
    txtInpSty:{
        height:20,
        lineHeight:20,
        color:"#0D0E15",
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
    }
   
   
  })
  