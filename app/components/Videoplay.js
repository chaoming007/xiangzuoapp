import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Dimensions} from 'react-native'

import Video from 'react-native-video'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Spinkit from 'react-native-spinkit'

const {width} = Dimensions.get('window')



export default class Videoplay extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            isPlay:true,       //默认暂停
            iconName:"play",    //播放图标
            volume:1,           //声音
            rate:1.0,            //默认速率
            muted:false,        //是否静音
            repeat:false,       //是否重复
            resizeMode:"contain", //播放器展示形式
            playInBackground:false, // 当app转到后台运行的时候，播放是否暂停
            playWhenInactive:false,   //当显示控制或通知中心时，视频继续播放
            isLoad:true             //是否显示加载画面
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
    }
    _loadStartFun(){

    }
    _loadEndFun(item){  // 当视频加载完毕时的回调函数
        console.log("加载完毕后：",item)
        this.setState({
            isLoad:false
        })
    }
    _setTimeFun(item){      // 进度控制，每250ms调用一次，以获取视频播放的进度
        console.log(item)
    }
    _onEndFun(item){            // 当视频播放完毕后的回调函数
        console.log(item)
    }
    _videoErrorFun(){

    }
    _onBufferFun(item){        //当远程视频正在缓冲时，回调 
       // console.log("正在缓冲:",item)
    }

    render() {
        let {videoUrl}=this.props

        //console.log(videoUrl)

        return (
            <View style={styles.container}>
                {
                    this.state.isLoad?<View style={styles.onLoadBox} >
                                        <Spinkit isVisible={true} color="#ffffff" type="FadingCircleAlt" size={38} ></Spinkit>
                                    </View>:""
                }
                
                <View style={styles.playBox}>
                    <TouchableHighlight 
                    onPress={()=>{this._controlPlayFun()}}
                    activeOpacity={1} 
                    underlayColor="transparent">
                        <View style={styles.btnBox}>
                            <FontAwesome name={this.state.iconName} style={styles.iconSty} size={18} />
                        </View>
                    </TouchableHighlight>

                </View>

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
                onLoadStart={()=>{this._loadStartFun()}}  // 当视频开始加载时的回调函数
                onLoad={(item)=>{this._loadEndFun(item)}}         // 当视频加载完毕时的回调函数
                onProgress={(item)=>{this._setTimeFun(item)}}     //  进度控制，每250ms调用一次，以获取视频播放的进度
                onEnd={(item)=>{this._onEndFun(item)}}             // 当视频播放完毕后的回调函数
                onBuffer = { (item)=>{this._onBufferFun(item) }} //当远程视频正在缓冲时，回调 
                onError={()=>{this._videoErrorFun()}}      // 当视频不能加载，或出错后的回调函数
                style={styles.videoSty}
                />
       
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
        backgroundColor:"rgba(0,0,0,0.5)",
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
        zIndex:15,
        justifyContent:"center",
        alignItems:"center"
    }

})
  