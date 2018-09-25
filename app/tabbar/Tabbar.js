/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-06-25 15:16:50 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-09-21 14:23:34
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

import TabNavigator from 'react-native-tab-navigator'

import Home from '../home/Home'
import Video from '../video/Video'
import Audio from '../audio/Audio'
import News from '../news/News'
import User from '../user/User'

const {height, width} = Dimensions.get('window')



export default class Tabbar extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            selectedTab: 'audio'
        }
    }
    render(){
        return(
            <TabNavigator  tabBarStyle={styles.tabStyle} tabBarShadowStyle={styles.tabStyleShadow}>
                <TabNavigator.Item
                    title="首页"
                    renderIcon={()=><Icon name="ios-home" size={22} color="#768196" />}
                    renderSelectedIcon={()=><Icon name="ios-home" size={22} color="#AF00FF"  />}
                    titleStyle={styles.tabTit}
                    selectedTitleStyle={styles.tabSelectTit}
                    selected={ this.state.selectedTab === 'home'}
                    onPress={() => { this.setState({ selectedTab: 'home'})}} 
                >
                    <Home {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="视频"
                    renderIcon={()=><Feather name="video"  size={22} color="#768196" />}
                    renderSelectedIcon={()=><Feather name="video"  size={22} color="#AF00FF"  />}
                    titleStyle={styles.tabTit}
                    selectedTitleStyle={styles.tabSelectTit}
                    selected={ this.state.selectedTab === "video"}
                    onPress={() => { this.setState({ selectedTab: 'video'})}} 
                >
                    <Video {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="资讯"
                    renderBadge={()=> <View style={styles.messageDot}>
                            <Text style={styles.dotTxt}>46</Text>
                    </View>}
                    renderIcon={()=><Feather name="file-text" size={22} color="#768196" />}
                    renderSelectedIcon={()=><Feather name="file-text" size={22} color="#AF00FF"  />}
                    titleStyle={styles.tabTit}
                    selectedTitleStyle={styles.tabSelectTit}
                    selected={ this.state.selectedTab === "news"}
                    onPress={() => { this.setState({ selectedTab: 'news'})}} 
                >
                    <News {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="音频"
                    renderIcon={()=><Icon name="md-musical-notes" size={22} color="#768196"  />}
                    renderSelectedIcon={()=><Icon name="md-musical-notes" size={22} color="#AF00FF"  />}
                    titleStyle={styles.tabTit}
                    selectedTitleStyle={styles.tabSelectTit}
                    selected={ this.state.selectedTab === 'audio'}
                    onPress={() => { this.setState({ selectedTab: 'audio'})}} 
                >
                    <Audio {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="用户"
                    renderIcon={()=><Feather name="user" size={22}  color="#768196" />}
                    renderSelectedIcon={()=><Feather name="user" size={22} color="#AF00FF"  />}
                    titleStyle={styles.tabTit}
                    selectedTitleStyle={styles.tabSelectTit}
                    selected={ this.state.selectedTab === "user"}
                    onPress={() => { this.setState({ selectedTab: 'user'})}} 
                >
                    <User {...this.props} />
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}


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
       top:-2,
       left:10,
       paddingHorizontal: 3
    },
    dotTxt:{
        textAlign:"center",
        fontSize: 10,
        color:"#ffffff",
        lineHeight:16
    },
    tabStyle:{
        height:55,
        overflow:"hidden",
        backgroundColor:"#ffffff"
    },
    tabTit:{
        paddingBottom: 5,
        color:"#768196"
    },
    tabSelectTit:{
        color:"#AF00FF"
    },
    tabStyleShadow:{
        shadowOffset:{ width:0, height:-5 }, 
        shadowColor:'#000000', 
        shadowOpacity:0.5, 
        shadowRadius:5
    }
})
