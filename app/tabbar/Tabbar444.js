/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-06-25 15:16:50 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-07-02 11:53:39
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

import Home from '../home/Home'
// import Userouter from '../router/Userouter'
import Video from '../video/Video'
import Audio from '../audio/Audio'
import News from '../news/News'
import User from '../user/User'

import { createBottomTabNavigator,BottomTabBar} from 'react-navigation-tabs'

const TabBarComponent = (props) => (<BottomTabBar {...props} />)

export default createBottomTabNavigator(
    {
        Home: {
            screen:Home,
            navigationOptions:{
                tabBarLabel: '首页',
                tabBarIcon:({tintColor})=>(<Icon name="ios-home" size={22} color={tintColor} />)  
            }
        },
        Video: {
            screen: Video,
            navigationOptions:{
                tabBarLabel: '视频',
                tabBarIcon:({tintColor})=>(<Feather name="video"  size={22} color={tintColor} />)  
            }
        },
        News: {
            screen: News,
            navigationOptions:{
                tabBarLabel: '资讯',
                tabBarIcon:({tintColor})=><View>
                    <Feather name="file-text" size={22} color={tintColor} />
                    <View style={styles.messageDot}>
                        <Text style={styles.dotTxt}>39</Text>
                    </View>
                </View>  
            }
        },
        Audio: {
            screen: Audio,
            navigationOptions:{
                tabBarLabel: '音频',
                tabBarIcon:({tintColor})=>(<Icon name="md-musical-notes" size={22} color={tintColor} />)  
            }
        },
        User: {
            screen: User,
            navigationOptions:{
                tabBarLabel: '用户',
                tabBarIcon:({tintColor})=>(<Feather name="user" size={22} color={tintColor} />)  
            }
        }
    },{
        initialRouteName: 'Home',
        //tabBarComponent:BottomTabBar,
        //swipeEnabled:false,  
        animationEnabled:true,
        lazy:true,
        tabBarOptions:{
            style: { height:55,backgroundColor:"#ffffff",borderTopColor:"#ffffff",shadowOffset:{ width:0, height:-5 }, shadowColor:'#000000', shadowOpacity:0.05, shadowRadius:5},                         //tabbar的样式
            labelStyle:{marginTop:4, marginBottom:10,fontSize:10},  //tabbar文字标题样式
            tabStyle:{ paddingTop: 8},
            activeTintColor:"#AF00FF"                 //选中图标样式
        }
    }
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    messageDot:{
       height:16,
       borderRadius: 8,
       backgroundColor:"#ec333c",
       position: "absolute",
       top:-3,
       left:15,
       paddingHorizontal: 5
    },
    dotTxt:{
        textAlign:"center",
        fontSize: 10,
        color:"#ffffff",
        lineHeight:16
    }
})
