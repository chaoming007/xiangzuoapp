import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableHighlight,
  ScrollView
} from 'react-native'

const {height, width} = Dimensions.get('window')

import Feather from 'react-native-vector-icons/Feather'
import Spinkit from 'react-native-spinkit'
import request from '../util/request'
import config from '../util/config'


export default class Searchhistory extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
          keywords:"",    //搜索关键字
          data:[],          //请求数据
          focus:true,        //搜索框是否为焦点
          linkUrl:"Videodetail",
          loading:false,
          noContent:false,      //默认搜索到了内容
          timer:null
      }
    }

    componentDidMount() {
        //this._requestDatFun()
    }

    _changeTxtFun(txt){             //输入关键词搜索
        console.log(txt)
        this.state.timer && clearTimeout(this.state.timer)
        if(txt==""){
            this.setState({
                data:[],
                keywords:txt,
                loading:false,
                noContent:false
            })
        }else{
            this.setState({
                loading:true,
                keywords:txt,
                noContent:false
            })
            this.state.timer=setTimeout(()=>{
                this._requestDatFun(txt)
            },300)
        }
    }

    _requestDatFun(keywords){           //请求数据
        request.get(config.listUrl,{title:keywords}).then((dat)=>{
            if(dat.data.errCode===0 && dat.data.errMsg==="成功"){
                let data=dat.data.data.length>5?dat.data.data.slice(0,5):dat.data.data
                console.log("搜索结果数据：",data)
                if(data.length<=0){
                    this.setState({
                        loading:false,
                        noContent:true,
                        data:[...data]
                    })
                }else{
                    setTimeout(()=>{
                        this.setState({
                            loading:false,
                            data:[...data]
                        })
                    },300)
                }
                
            }
        }).catch((err)=>{
            console.log(err)
        }) 
    }

    _replaceStr(val){            //搜索结果替换
        let  reg=new RegExp(this.state.keywords,"gi")
        let resultVal=val.replace(reg,<Text style={styles.keywordsSty}>$1</Text>)            
        return resultVal
    }

    render() {
        let { setSearchHistory ,navigation } = this.props
        return (
        <View style={styles.container}>

                <View style={styles.inpWarp}>
                        <View style={styles.inpWarpSty}>
                            <Feather name="search" size={20} style={styles.inpIcon}  />
                            <TextInput 
                            autoCorrect={false} 
                            placeholder="请输入文字" 
                            autoFocus={this.state.focus}
                            onChangeText={(txt)=>{this._changeTxtFun(txt)}}
                            style={styles.inpSty} >
                            </TextInput>
                        </View>
                        <View style={styles.closeBox}>
                            <Text style={styles.closeTxt} onPress={()=>{ navigation.goBack() }}  >取消</Text>
                        </View>
                </View>

                 
                {
                    this.state.keywords===""? <View style={styles.historyContentBox}>
                    <View style={styles.historyTitWarp}>
                        <View style={styles.historyTit}>
                            <Text style={styles.historyTitTxt}>搜索历史</Text>
                        </View>
                        <View style={styles.clearWarp}>
                            <Image source={require("../assets/icon/clear.png")} style={styles.clearHistory} />
                        </View>
                    </View>

                    <View style={styles.historyList}> 
                        <TouchableHighlight 
                        activeOpacity={1}     
                        underlayColor="transparent">
                            <View style={styles.historyItem} >
                                <View style={styles.searchIcon}><Feather name="search" size={15} color="#0d0e15"  /></View>
                                <View style={styles.searchTxtBox}>
                                    <Text style={styles.searchTxt}>
                                       这是一个搜索历史标题
                                    </Text>
                                </View>
                            </View>
                        </TouchableHighlight>                                      
                    </View>
                </View>:<View style={styles.resultBox}>
                    {
                        this.state.loading?<Spinkit isVisible={true} 
                        color="#000000" 
                        type="ThreeBounce" 
                        size={38} ></Spinkit>:<View>
                            {
                                this.state.noContent?<View style={styles.noContent}>
                                    <Text style={styles.noContentTxt}>没有搜索到相关内容！</Text>
                                </View>:<ScrollView
                                showsVerticalScrollIndicator={false}
                                scrollEventThrottle={10}
                                style={styles.searchList}
                                >
                                    {                              
                                        this.state.data.map((item,key)=>{
                                            return  <TouchableHighlight 
                                                    activeOpacity={1} 
                                                    key={key}
                                                    onPress={()=>{navigation.navigate(this.state.linkUrl,{id:item.id})}}
                                                    underlayColor="transparent">
                                                        <View style={styles.historyItem} >
                                                            <View style={styles.searchIcon}><Feather name="search" size={15} color="#0d0e15"  /></View>
                                                            <View style={styles.searchTxtBox}>
                                                                <Text style={styles.searchTxt}>
                                                                    {this._replaceStr(item.title)}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                    </TouchableHighlight>    
                                                                                
                                        })                                
                                    }                  
                                </ScrollView>
                            }
                        </View>
                    }
 
                }                  
             
            </View>     
                
                
                }
                

        
                {/* 热门搜索 start  */}
                    {
                        /*
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
                        */
                    }

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
        paddingTop: 46,
        flexDirection:"column",
        height:height
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
        marginHorizontal: 16,
        height:30,
        width:width-32

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
        marginBottom: 15,
        flex:1,
        height:500
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
    },
    resultBox:{
        flex:1
    },
    historyContentBox:{
        flex:1,
        flexDirection:"column"
    },
    searchList:{
        flex:1,
        width:"100%"
    },
    noContent:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        width:"100%",
        paddingTop:20
    },
    noContentTxt:{
        height:50,
        lineHeight:50,
        textAlign:"center",
        fontSize: 16,
        color:"#999999"
    },
    keywordsSty:{
        color:"#cc0000"
    }
   
  })
  