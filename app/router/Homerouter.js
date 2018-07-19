import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native'

import { createStackNavigator} from 'react-navigation'
import CardStackStyleInterpolator from "react-navigation/src/views/StackView/StackViewStyleInterpolator"

import Tabbar from '../tabbar/Tabbar'
import Lookhistory from '../page/Lookhistory'
import Videodetail from '../video/Videodetail'
import Newsdetail from '../news/Newsdetail'
import Audiodetail from '../audio/Audiodetail'
import Membercenter from '../user/Membercenter'
import Setuppage  from '../user/Setuppage'
import Editinformation  from '../user/Editinformation'
import Addressbook  from '../user/Addressbook'

const {height, width} = Dimensions.get('window')

const TransitionConfiguration = () => ({
    screenInterpolator:(sceneProps) => {
        const { scene } = sceneProps;
        const { route } = scene;
        const params = route.params||{}
        const transition = params.transition || 'forHorizontal'
        return CardStackStyleInterpolator[transition](sceneProps)
        // forHorizontal,
        // forVertical,
        // forFadeFromBottomAndroid,
        // forFade,
    }
})

export default createStackNavigator(  
    {  
        Tabbar: {  
            screen: Tabbar,
            navigationOptions:{             
              headerTitle:"首页"
            }
        },
        Lookhistory:{  
            screen: Lookhistory,
            navigationOptions:{             
              headerTitle:"浏览历史"
            }
        },
        Videodetail:{
            screen:Videodetail,
            navigationOptions:{             
                headerTitle:"视频详情"
            }
        },
        Newsdetail:{
            screen:Newsdetail,
            navigationOptions:{             
                headerTitle:"资讯详情"
            }
        },
        Audiodetail:{
            screen:Audiodetail,
            navigationOptions:{             
                headerTitle:"音频详情"
            }
        },
        Membercenter:{
            screen:Membercenter,        //会员中心
            navigationOptions:{             
                headerTitle:"会员中心"
            }
        },
        Setuppage:{
            screen:Setuppage,        //设置
            navigationOptions:{             
                headerTitle:"设置"
            }
        },
        Editinformation:{
            screen:Editinformation,        //编辑个人信息
            navigationOptions:{             
                headerTitle:"编辑个人信息"
            }
        },
        Addressbook:{
            screen:Addressbook,        //关注通讯录
            navigationOptions:{             
                headerTitle:"关注通讯录"
            }
        }
        // Detail:{
        //     screen: Detail,
        //     navigationOptions:({navigation})=>({          
        //       headerTitle:"详情页",
        //       headerLeft:(s)=>(
        //         <View style={styles.leftBackBox}>
        //           <Icon onPress={() => navigation.goBack()} name="ios-arrow-back" size={24} style={styles.backIcon}></Icon>
        //           <Text onPress={() => navigation.goBack()} style={styles.backSty}>返回</Text>
        //         </View>
        //       ),
        //       tabBarVisible: false
        //     })            
        // }
    },
    {
        transitionConfig:TransitionConfiguration,
        headerMode: 'none',       
        navigationOptions:{             
            // title:"标题",
            headerStyle:{backgroundColor:"#cc0000"},    //标题样式
            headerTitleStyle:{color:"#ffffff"}          
        }   
    }   
)

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#ffffff",
        height:height
    }
});
  