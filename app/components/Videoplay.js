import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Dimensions} from 'react-native'

import Video from 'react-native-video'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Spinkit from 'react-native-spinkit'
import { timeFormat } from '../util/tools'

const {width} = Dimensions.get('window')



export default class Videoplay extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            isPlay:true,       //默认暂停
            iconName:"play",    //播放图标
            volume:1,           //声音
            rate:1.0,            //默认速率
            updateTim:100,      //播放中更新时间  默认250ms
            muted:false,        //是否静音
            repeat:false,       //是否重复
            resizeMode:"contain", //播放器展示形式
            playInBackground:false, // 当app转到后台运行的时候，播放是否暂停
            playWhenInactive:false,   //当显示控制或通知中心时，视频继续播放
            isLoad:true,             //是否显示加载画面
            totalTime:0,             //总时长
            currentTime:0,            //当前时长
            mainProgressWidth:0,        //主进度条长度
            minProgressWidth:0,        //次进度条长度
            mainProgressX:0,             //主进度条左边距离
            currentProgressWidth:0,      //当前进度条的长度
            currentMinProgressWidth:0,   //当前次进度条的长度
            repeatTuff:false,        //重播控制
            timer:null,
            controlTuff:true        //控制面板是否显示 
        }
    }
    componentDidMount() {
       
    }
    _controlPlayFun(){   //控制视频播放还是暂停
        if(this.state.isPlay){       //暂停
            this.setState({
                isPlay:false,
                iconName:"pause"
            })
        }else{                      //播放
            this.setState({
                isPlay:true,
                iconName:"play"
            })
        }
        this._timeControlFun()
    }
    _loadStartFun(){                 // 当视频开始加载时的回调函数

    }
    _loadEndFun(item){              // 当视频加载完毕时的回调函数
        console.log("加载完毕后：",item)
        this.setState({
            isLoad:false,
            currentTime:timeFormat(item.currentTime),
            totalTime:timeFormat(item.duration)
        })
    }
    _setTimeFun(item){      // 进度控制，每250ms调用一次，以获取视频播放的进度
        let cTim=timeFormat(item.currentTime)
        let bigW=0,samllW=0
        bigW=item.currentTime*this.state.mainProgressWidth/item.playableDuration
        samllW=item.currentTime*this.state.minProgressWidth/item.playableDuration
        this.setState({
            currentTime:cTim,
            currentProgressWidth:bigW,
            currentMinProgressWidth:samllW
        })
    }
    _onEndFun(item){            // 当视频播放完毕后的回调函数
        console.log("播放完毕：")
        this.setState({
            isPlay:true,
            iconName:"play",
            repeatTuff:true,
            currentProgressWidth:this.state.mainProgressWidth,
            currentMinProgressWidth:this.state.minProgressWidth
        })
    }
    _timeControlFun(){          //定时显示隐藏控制条
        this.timer && clearTimeout(this.timer)
        this.timer=setTimeout(()=>{
            this.setState({
                controlTuff:false
            })
        },3000)
    }
    _videoClickFun(){          //点击视频显示或隐藏控制条
        let bTuff=true
        if(this.state.controlTuff){
            bTuff=false
        }
        this.setState({
            controlTuff:bTuff
        })
        this._timeControlFun()
    }

    _videoErrorFun(){

    }
    _onBufferFun(item){        //当远程视频正在缓冲时，回调 
       // console.log("正在缓冲:",item)
    }
    _repeatVideoFun(){      //视频重播
        this.player.seek(0)
        this.setState({
            isPlay:false,
            iconName:"pause",
            repeatTuff:false,
            currentProgressWidth:0,
            currentMinProgressWidth:0,
            controlTuff:true
        })
        this._timeControlFun()
    }
    // 获取主进度条大小
    _getProgressFun(e){
        let {x,y,width,height}=e.layout
        this.setState({
            mainProgressWidth:width,
            mainProgressX:x
        })
    }
    // 获取次进度条大小
    _getMinProgressFun(e){
        let {x,y,width,height}=e.layout
        this.setState({
            minProgressWidth:width
        })
    }


    render() {
        let {videoUrl}=this.props
        //console.log(videoUrl)

        return (
            <TouchableHighlight 
            onPress={()=>{this._videoClickFun()}}
            activeOpacity={1} 
            underlayColor="transparent">

            <View style={styles.container}>
                {
                    this.state.isLoad?<View style={styles.onLoadBox} >
                                        <Spinkit isVisible={true} color="#ffffff" type="FadingCircleAlt" size={38} ></Spinkit>
                                    </View>:""
                }
                {
                    this.state.repeatTuff?<View style={styles.againBox}>
                                                <TouchableHighlight 
                                                onPress={()=>{this._repeatVideoFun()}}
                                                activeOpacity={1} 
                                                underlayColor="transparent">
                                                    <View style={styles.repeatIconBox}>
                                                        <FontAwesome name="repeat" style={styles.repeatIcon} size={24} />
                                                    </View>
                                                </TouchableHighlight>
                                        </View>:""
                }
                
                <View style={styles.playBox}>
                    {
                        this.state.controlTuff?<View style={styles.controlWarp}>
                                    <TouchableHighlight 
                                    onPress={()=>{this._controlPlayFun()}}
                                    activeOpacity={1} 
                                    underlayColor="transparent">
                                        <View style={styles.btnBox}>
                                            <FontAwesome name={this.state.iconName} style={styles.iconSty} size={18} />
                                        </View>
                                    </TouchableHighlight>

                                    <View style={styles.controlBox}>
                                        <Text style={styles.timBox}>{this.state.currentTime}</Text>   
                                        <View style={styles.progressBox} onLayout={({nativeEvent:e})=>this._getProgressFun(e)}>
                                            <View style={styles.progressBg} >
                                                <View style={styles.progressItem} width={this.state.currentProgressWidth} ></View>
                                            </View>
                                        </View>
                                        <Text style={styles.timBox}>{this.state.totalTime}</Text>
                                        <Text style={styles.fullBtn}>全屏</Text>
                                    </View>
                                </View>:<View style={styles.smallPromptBox} onLayout={({nativeEvent:e})=>this._getMinProgressFun(e)}>
                                    <View style={styles.smallPromptItem} width={this.state.currentMinProgressWidth} ></View>
                                </View>
                    }
                </View>


                <View style={styles.videoWarpBox}>
                    <Video
                    source={{uri:"http://1251180858.vod2.myqcloud.com/4180480evodtransgzp1251180858/e56f49315285890781637511664/v.f20.mp4"}} // 视频的URL地址，或者本地地址
                    ref={(ref) => {this.player = ref}}        
                    rate={this.state.rate}        // 1.0表示默认速率
                    volume={this.state.volume}     // 声音的放声音的放大倍数大倍数，0 为静音  ，1 为正常音量 ，更大的数字表示放大的倍数
                    muted={this.state.muted}       // true代表静音，默认为false.
                    paused={this.state.isPlay}      // true代表暂停，默认为false
                    resizeMode={this.state.resizeMode}   // 视频的自适应伸缩铺放行为，contain、stretch、cover
                    repeat={this.state.repeat}          // 是否重复播放
                    playInBackground={this.state.playInBackground}       // 当app转到后台运行的时候，播放是否暂停
                    playWhenInactive={this.state.playWhenInactive}       //当显示控制或通知中心时，视频继续播放
                    onLoadStart={()=>{this._loadStartFun()}}            // 当视频开始加载时的回调函数
                    onLoad={(item)=>{this._loadEndFun(item)}}         // 当视频加载完毕时的回调函数
                    onProgress={(item)=>{this._setTimeFun(item)}}     //  进度控制，每250ms调用一次，以获取视频播放的进度
                    onEnd={(item)=>{this._onEndFun(item)}}             // 当视频播放完毕后的回调函数
                    onBuffer = { (item)=>{this._onBufferFun(item) }} //当远程视频正在缓冲时，回调 
                    onError={()=>{this._videoErrorFun()}}      // 当视频不能加载，或出错后的回调函数
                    progressUpdateInterval={this.state.updateTim}  //进度控制，每250ms调用一次，以获取视频播放的进度
                    style={styles.videoSty}
                    
                    />
                </View>

            </View>
            </TouchableHighlight>
        )
    }
}


const styles = StyleSheet.create({
   	container:{
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    videoSty:{
        backgroundColor:"#000000",
        width:width,
        height:width*9/16
    },
    playBox:{
        position:"absolute",
        top:0,
        left:0,
        width:width,
        height:width*9/16,
        backgroundColor:"rgba(0,0,0,0)",
        zIndex:10,
        justifyContent:"center",
        alignItems:"center"
    },
    iconSty:{
        color:"#ffffff"
    },
    btnBox:{
        width:50,
        height:50,
        borderRadius:15,
        backgroundColor:"rgba(0,0,0,0.8)",
        justifyContent:"center",
        alignItems:"center"
    },
    onLoadBox:{
        position:"absolute",
        top:0,
        left:0,
        width:width,
        height:width*9/16,
        backgroundColor:"rgba(0,0,0,1)",
        zIndex:50,
        justifyContent:"center",
        alignItems:"center"
    },
    controlBox:{
        width:width-30,
        height:30,
        borderRadius:5,
        backgroundColor:"rgba(0,0,0,.8)",
        position:"absolute",
        bottom:10,
        left:15,
        zIndex:15,
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",

    },
    timBox:{
        paddingHorizontal: 10,
        textAlign:"center",
        color:"#ffffff",
        fontSize: 12
    },
    fullBtn:{
        textAlign:"center",
        color:"#ffffff",
        fontSize: 12,
        paddingRight: 10

    },
    progressBox:{
        height:30,
        justifyContent:"center",
        alignItems:"center",
        flex: 1,
        flexDirection:"row"
    },
    progressBg:{
        height:3,
        backgroundColor:"#ffffff",
        position:"relative",
        flex: 1
    },
    progressItem:{
        height:3,
        position:"absolute",
        backgroundColor:"#cc0000",
        top:0,
        left:0,
        width:0
    },
    smallPromptBox:{
        height:3,
        position:"absolute",
        backgroundColor:"#ffffff",
        left:0,
        bottom:-3,
        width:width,
        justifyContent:"flex-start",
        alignItems:"center",
        flexDirection:"row"
    },
    smallPromptItem:{
        height:3,
        backgroundColor:"#cc0000",
        width:width,
        width:"50%"
    },
    againBox:{
        position:"absolute",
        top:0,
        left:0,
        width:width,
        height:width*9/16,
        backgroundColor:"rgba(0,0,0,.7)",
        zIndex:45,
        justifyContent:"center",
        alignItems:"center"
    },
    repeatIconBox:{
        width:80,
        height:80,
        justifyContent:"center",
        alignItems:"center"
    },
    repeatIcon:{
        color:"#ffffff"
    },
    controlWarp:{
        position:"absolute",
        top:0,
        left:0,
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    videoWarpBox:{
        width:width,
        height:width*9/16
    }


})
  