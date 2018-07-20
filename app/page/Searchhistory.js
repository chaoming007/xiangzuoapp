import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions
} from 'react-native'

const {height, width} = Dimensions.get('window')

import Feather from 'react-native-vector-icons/Feather'

export default class Searchhistory extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
      }
    }
    render() {
        let { setSearchHistory } = this.props
        return (
            <View style={styles.container}>
               
                <View style={styles.inpWarp}>
                    <View style={styles.inpWarpSty}>
                        <Feather name="search" size={20} style={styles.inpIcon}  />
                        <TextInput autoCorrect={false} placeholder="请输入文字" style={styles.inpSty} ></TextInput>
                    </View>
                    <View style={styles.closeBox}>
                        <Text style={styles.closeTxt} onPress={()=>{setSearchHistory()}} >取消</Text>
                    </View>
                </View>


                {/* 搜索历史 start */}

                <View style={styles.historyTitWarp}>
                    <View style={styles.historyTit}>
                        <Text style={styles.historyTitTxt}>搜索历史</Text>
                    </View>
                    <View style={styles.clearWarp}>
                        <Image source={require("../assets/icon/clear.png")} style={styles.clearHistory} />
                    </View>
                </View>

                <View style={styles.historyList}>
                    <View style={styles.historyItem}>
                        <View style={styles.searchIcon}><Feather name="search" size={15} color="#0d0e15"  /></View>
                        <View style={styles.searchTxtBox}>
                            <Text style={styles.searchTxt}>大众马自达</Text>
                        </View>
                    </View>
                    <View style={styles.historyItem}>
                        <View style={styles.searchIcon}><Feather name="search" size={15} color="#0d0e15"  /></View>
                        <View style={styles.searchTxtBox}>
                            <Text style={styles.searchTxt}>大众马自达</Text>
                        </View>
                    </View>
                    <View style={styles.historyItem}>
                        <Image source={require("../assets/img/123.jpg")} style={styles.searchUser} />
                        <View style={styles.searchName}>
                            <Text style={styles.searchNameTxt}>大众马自达</Text>
                        </View>
                    </View>
                </View>

                {/* 搜索历史 end */}

                {/* 热门搜索 start  */}
                <View style={styles.historyTitWarp}>
                    <View style={styles.historyTit}>
                        <Text style={styles.historyTitTxt}>热门搜索</Text>
                    </View>
                </View>
                <View style={styles.searchHot}>
                    <View style={styles.hotBox}><Text style={styles.hotTxt}>热门车</Text></View>
                    <View style={styles.hotBox}><Text style={styles.hotTxt}>大众速腾</Text></View>
                    <View style={styles.hotBox}><Text style={styles.hotTxt}>奇瑞</Text></View>
                    <View style={styles.hotBox}><Text style={styles.hotTxt}>比亚迪</Text></View>
                    <View style={styles.hotBox}><Text style={styles.hotTxt}>雷克萨斯</Text></View>
                    <View style={styles.hotBox}><Text style={styles.hotTxt}>本田</Text></View>
                    <View style={styles.hotBox}><Text style={styles.hotTxt}>丰田</Text></View>
                    <View style={styles.hotBox}><Text style={styles.hotTxt}>奥迪Q4</Text></View>
                </View>

                {/* 热门搜索 end  */}

            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 46
    },
    inpWarp:{
        marginHorizontal: 16,
        flexDirection: 'row',
        marginBottom: 15,
        width:width-32
    },
    inpWarpSty:{
        borderRadius: 20,
        flex:1,
        backgroundColor:"#E0E2E7",
        flexDirection: 'row',
        alignItems:'center',
        paddingRight: 10
    },
    inpSty:{
        height:40,
        flex:1
    },
    inpIcon:{
        color:"#000000",
        marginLeft: 16,
        marginRight: 10
    },
    closeBox:{
        width:40,
        height:40,
        marginLeft:20,
        justifyContent:"flex-end"
    },
    closeTxt:{
        lineHeight:40,
        fontSize: 16,
        textAlign:"right"
    },
    historyBox:{
       
    },
    historyTitWarp:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal: 16
    },
    historyTit:{
        height:36,
        flex:1
    },
    historyTitTxt:{
        lineHeight:36,
        textAlign:"left",
        color:"#768196",
        fontSize: 14,
    },
    clearWarp:{
        width:13,
        height:15
    },
    clearHistory:{
        width:13,
        height:15
    },
    historyList:{
        marginBottom: 15
    },
    historyItem:{
        flexDirection: 'row',
        marginHorizontal: 16,
        justifyContent:"flex-start",
        alignItems: 'center',
        width:width-32
    },
    searchIcon:{
        width:15,
        height:15,
        marginRight:10
    },
    searchTxtBox:{
        height:48,
        flex:1,
        justifyContent:"center"
    },
    searchTxt:{
        textAlign:"left",
        fontSize: 14,
        color:"#0D0E15",
        lineHeight:46
    },
    searchUser:{
        width:40,
        height:40,
        marginRight:15,
        borderRadius: 20
    },
    searchName:{
        height:56,
        flex:1,
        justifyContent:"center"
    },
    searchNameTxt:{
        textAlign:"left",
        fontSize: 14,
        color:"#0D0E15",
        lineHeight:54
    },
    searchHot:{
        marginLeft:16,
        width:width-16,
        flexDirection: 'row',
        marginTop: 10,
        flexWrap:"wrap"
    },
    hotBox:{
        height:30,
        backgroundColor:"#E0E2E7",
        borderRadius:15,
        paddingHorizontal: 15,
        marginRight: 15,
        marginBottom:15,
        justifyContent:"center",
        alignItems:"center"
    },
    hotTxt:{
        lineHeight:28,
        height:30,
        textAlign:"center",
        fontSize: 14,
        color:"#0D0E15",
    }
   
  })
  