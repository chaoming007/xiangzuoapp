import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
    Switch
} from 'react-native'


import {connect} from 'react-redux'
import {setSearchHistory} from '../store/Reducers'



import Title from '../components/Pagetitle'
import Statusbar from '../components/Statusbar'

const {width} = Dimensions.get('window')

class Setuppage extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        value:true
      }
  }

  render() {
    return (
        <View style={styles.container}>
            <Statusbar />
            <Title  {...this.props} tit={"设置"} />
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
            <View style={styles.contentBox}>
                <Text style={styles.titSty}>通用设置</Text>
                <View style={styles.linkBoxItem}>
                    <View style={styles.linkIconBox}>
                        <Text style={styles.linkName}>账号管理</Text>
                    </View>
                    <View style={styles.jtBox}>
                        <Image source={require("../assets/icon/Arrow_Small_Right.png")} style={styles.jtImg} />
                    </View>
                </View>
                <View style={styles.linkBoxItem}>
                    <View style={styles.linkIconBox}>
                        <Text style={styles.linkName}>视频自动播放</Text>
                    </View>
                    <View style={styles.jtBox}>
                        <Text style={styles.jtTxt}>仅WiFi</Text>
                    </View>
                </View>
                <View style={styles.linkBoxItem}>
                    <View style={styles.linkIconBox}>
                        <Text style={styles.linkName}>隐私设置</Text>
                    </View>
                    <View style={styles.jtBox}>
                        <Image source={require("../assets/icon/Arrow_Small_Right.png")} style={styles.jtImg} />
                    </View>
                </View>
                <View style={[styles.linkBoxItem,styles.linkItemLine]}>
                    <View style={styles.linkIconBox}>
                        <Text style={styles.linkName}>消息通知</Text>
                    </View>
                    <View style={styles.jtBox}>
                        <Switch
                        value={this.state.value}
                        onValueChange={(value)=>{this.setState({value: value})}}
                        />
                    </View>
                </View>
                <Text style={styles.titSty}>其他</Text>
                <View style={styles.linkBoxItem}>
                    <View style={styles.linkIconBox}>
                        <Text style={styles.linkName}>清理缓存</Text>
                    </View>
                    <View style={styles.jtBox}>
                        <Text style={styles.jtTxt}>128M</Text>
                    </View>
                </View>
                <View style={styles.linkBoxItem}>
                    <View style={styles.linkIconBox}>
                        <Text style={styles.linkName}>版本信息</Text>
                    </View>
                    <View style={styles.jtBox}>
                        <Text style={styles.jtTxt}>(1.0.0)</Text>
                    </View>
                </View>
                <View style={styles.linkBoxItem}>
                    <View style={styles.linkIconBox}>
                        <Text style={styles.linkName}>意见反馈</Text>
                    </View>
                    <View style={styles.jtBox}>
                        <Image source={require("../assets/icon/Arrow_Small_Right.png")} style={styles.jtImg} />
                    </View>
                </View>
                <View style={[styles.linkBoxItem,styles.linkItemLine]}>
                    <View style={styles.linkIconBox}>
                        <Text style={styles.linkName}>给我们打分</Text>
                    </View>
                    <View style={styles.jtBox}>
                        <Image source={require("../assets/icon/Arrow_Small_Right.png")} style={styles.jtImg} />
                    </View>
                </View>

            </View>

            </ScrollView>

        </View>
    )
  }
}

export default connect(state=>({state}),{setSearchHistory})(Setuppage)

  const styles = StyleSheet.create({
   		container:{
			flex: 1,
			justifyContent:'flex-start',
			alignItems: 'center',
            backgroundColor: '#ffffff'
        },
        contentBox:{
            marginHorizontal: 16,
            marginTop: 13
        },
        titSty:{
            lineHeight:36,
            fontSize: 14,
            color:"#768196",
            width:width-36
        },
        linkBoxItem:{
            height:48,
            flexDirection: 'row',
            justifyContent:"space-between"
        },
        linkItemLine:{
            borderBottomWidth: 0.5,
            borderBottomColor: "#E0E2E7",
            marginBottom: 16
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
        },
        jtTxt:{
            lineHeight:20,
            fontSize:14,
            color:"#768196"
        }
	
  })
  