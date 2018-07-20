import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image
} from 'react-native'


import Ionicons from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window')

export default class Guanzhuitem extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
        
        }
    }
  
    render() {
        let {styTuff}=this.props
        return (
            <View style={styles.container}>
                <View style={styles.gzBox}>
                    <Image source={require("../assets/img/1.png")} style={styles.gzUserImg} />
                    <View style={styles.gzInfoBox}>
                        <Text style={styles.nameTxt}>我是汽车爱好者</Text>
                        <Text style={styles.timeTxt}>发布时间：2012.06.15</Text>
                    </View>
                    {
                        styTuff?<View style={styles.gzBtnBox}>
                                    <Text style={styles.btnTxt}>关注</Text>
                                </View>:
                                <View style={styles.ygzBtnBox}>
                                    <Text style={styles.ygzBtnTxt}>已关注</Text>
                                </View>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   	container:{
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    gzBox:{
        height:84,
        flexDirection: 'row',
        marginHorizontal: 16,
        alignItems: 'center'
    },
    gzUserImg:{
        width:60,
        height:60,
        borderRadius: 30,
        marginRight: 16
    },
    gzInfoBox:{
        flex:1
    },
    nameTxt:{
        height:20,
        lineHeight:20,
        color:"#0D0E15",
        fontSize: 14,
        textAlign:"left"
    },
    timeTxt:{
        lineHeight:20,
        color:"#768196",
        fontSize: 12,
        textAlign:"left"
    },
    gzBtnBox:{
        width:100,
        height:30,
        borderRadius:5,
        backgroundColor:"#AF00FF",
        justifyContent:"center",
        alignItems:"center"
    },
    btnTxt:{
        lineHeight:28,
        textAlign:"center",
        color:"#ffffff",
        fontSize: 12
    },
    ygzBtnBox:{
        width:100,
        height:30,
        borderRadius:5,
        backgroundColor:"#E0E2E7",
        justifyContent:"center",
        alignItems:"center"
    },
    ygzBtnTxt:{
        lineHeight:28,
        textAlign:"center",
        color:"#0D0E15",
        fontSize: 12
    }
	
})
  