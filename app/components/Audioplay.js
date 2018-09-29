import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    PanResponder,
    Animated,
    Easing,
    Image,
    Dimensions} from 'react-native'

import Video from 'react-native-video'
import Orientation from 'react-native-orientation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import Spinkit from 'react-native-spinkit'
import Config from '../util/config'
import { timeFormat } from '../util/tools'

const {width,height} = Dimensions.get('window')
const vW=width           //播放器的默认宽度
const vH=width*9/16      //播放器的默认高度

export default class Videoplay extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            isPlay:true,       //默认暂停
            iconName:"play",    //播放图标
            volume:1,           //声音
            rate:1.0,            //默认速率
            updateTim:200,      //播放中更新时间  默认250ms
            muted:false,        //是否静音
            repeat:false,       //是否重复
            resizeMode:"contain", //播放器展示形式
            playInBackground:false, // 当app转到后台运行的时候，播放是否暂停
            playWhenInactive:false,   //当显示控制或通知中心时，视频继续播放
            isLoad:true,             //是否显示加载画面
            totalTime:0,             //总时长
            currentTime:0,            //当前时长
            sCurrentTime:0,             //未处理的当前时长
            sTotalTime:0,                  //未处理的总时长
            mainProgressWidth:0,        //主进度条长度
            minProgressWidth:0,        //次进度条长度
            mainProgressX:0,             //主进度条左边距离
            currentProgressWidth:0,      //当前进度条的长度
            currentMinProgressWidth:0,   //当前次进度条的长度
            repeatTuff:false,        //重播控制
            timer:null,
            controlTuff:true,        //控制面板是否显示 
            isVideoEnd:false,        //视频是否播放完毕
            moveLeftNum:0,             //拖拽的距离
            moveTimeNum:0,              //拖拽的时间
            mouseX:0,                    //手指点击相对于相应元素边界的
            mouseDownWidth:0,            //当手指按下时候获取进度条宽度
            isBeginProgress:true,        //是否允许进度条显示相应进度
            timc:3000000,                  //控制条隐藏时间
            allTim:0,                    //没特殊处理过的总时间
            fullIcon:"screen-full",      //默认是全屏图标
            isFullScreen:false,          //是否是全屏
            videoWidht:vW,           //播放器的默认宽度
            videoHeight:vH,      //播放器的默认高度
            dotLeft:-13,           //控制点距离左边的位置
            dotVal:13,              //控制圆点位置纠正
            scrollTime:null,         //滑动选择之后播放间隔时间
            animValue: new Animated.Value(0),
            uri:"http://1251180858.vod2.myqcloud.com/4180480evodtransgzp1251180858/e56f49315285890781637511664/v.f20.mp4"
        }
    }
    componentDidMount() {
        //Orientation.lockToLandscape()    //横屏
        // Orientation.lockToPortrait()    //竖屏
        //this._testScreenFun()
        
    }
    componentWillUnmount() {
        this.setState({
            isPlay:false,
            iconName:"pause"
        })
        this.state.timer && clearTimeout(this.state.timer)
        this.state.scrollTime && clearTimeout(this.state.scrollTime)
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
    _loadStartFun(){                 // 当视频开始加载时的回调函数

    }
    _loadEndFun(item){              // 当视频加载完毕时的回调函数
        console.log("加载完毕后：",item)
        this.setState({
            isLoad:false,
            currentTime:timeFormat(item.currentTime),
            totalTime:timeFormat(item.duration),
            allTim:item.duration,
            currentProgressWidth:0
        })
    }
    _setTimeFun(item){      // 进度控制，默认每250ms调用一次，以获取视频播放的进度
        let cTim=timeFormat(item.currentTime)
        let bigW=0,samllW=0
        this.state.sCurrentTime=item.currentTime
        bigW=this.state.sCurrentTime*this.state.mainProgressWidth/this.state.allTim
        samllW=this.state.sCurrentTime*this.state.minProgressWidth/this.state.allTim

        if(this.state.isBeginProgress){
            this.setState({
                currentTime:cTim,
                sCurrentTime:item.currentTime,
                currentProgressWidth:bigW,
                currentMinProgressWidth:samllW,
                dotLeft:bigW-this.state.dotVal
            })
        }else{
            this.setState({
                currentTime:cTim,
                sCurrentTime:item.currentTime,
                currentMinProgressWidth:samllW
            })
        }
    }
    _setFullScreenProgressFun(){     //全屏时候设置进度条宽度
        let bigW=0,samllW=0
        if(this.state.allTim!==0){
            bigW=this.state.sCurrentTime*this.state.mainProgressWidth/this.state.allTim
            samllW=this.state.sCurrentTime*this.state.minProgressWidth/this.state.allTim
        }
        this.setState({
            currentProgressWidth:bigW,
            currentMinProgressWidth:samllW,
            dotLeft:bigW-this.state.dotVal
        })
    }

    _onEndFun(item){            // 当视频播放完毕后的回调函数
        console.log("播放完毕")
        this.state.timer && clearTimeout(this.state.timer)
        this.setState({
            isPlay:true,
            iconName:"play",
            repeatTuff:true,
            isVideoEnd:true,
            controlTuff:true,
            currentProgressWidth:this.state.mainProgressWidth,
            currentMinProgressWidth:this.state.minProgressWidth,
            dotLeft:this.state.mainProgressWidth-this.state.dotVal
        })
        setTimeout(()=>{
            this._repeatVideoFun()
        },500)
    }
    _timeControlFun(){          //定时显示隐藏控制条
        this.state.timer && clearTimeout(this.state.timer)
        this.state.timer=setTimeout(()=>{
            this.setState({
                controlTuff:false    //控制条隐藏
            })
        },this.state.timc)
    }
    _videoClickFun(){          //点击视频显示或隐藏控制条
        let bTuff=true
        if(this.state.isVideoEnd){
            return
        }
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
            isPlay:true,
            iconName:"play",
            repeatTuff:false,
            currentProgressWidth:0,
            currentMinProgressWidth:0,
            dotLeft:-this.state.dotVal,
            currentTime:timeFormat(0)
        })
    }
    // 获取主进度条大小
    _getProgressFun(e){
        let {x,y,width,height}=e.layout
        this.setState({
            mainProgressWidth:width,
            mainProgressX:x
        },()=>{
            this._setFullScreenProgressFun()
        })
    }
    // 获取次进度条大小
    _getMinProgressFun(e){
        let {x,y,width,height}=e.layout
        this.setState({
            minProgressWidth:width
        },()=>{
            this._setFullScreenProgressFun()
        })
    }

    _panResponder = PanResponder.create({           //拖拽进度条
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderGrant: (evt, gestureState) => {   
            this.state.timer && clearTimeout(this.state.timer)
            this.state.scrollTime && clearTimeout(this.state.scrollTime)
            this.setState({
                mouseX:evt.nativeEvent.locationX,
                mouseY:evt.nativeEvent.locationY,
                mouseDownWidth:this.state.currentProgressWidth,
                isBeginProgress:false
            })
        },
        onPanResponderMove: (evt, gestureState) => {  
            let disVal=0,val=0
            if(this.state.isFullScreen){    //全屏状态下
                disVal=gestureState.dy
            }else{                          //不是全屏状态
                disVal=gestureState.dx
            }
            val=this.state.mouseDownWidth+disVal
            if(val>=this.state.mainProgressWidth){
                val=this.state.mainProgressWidth
            }
            if(val<=0){
                val=0
            }
            this.setState({
                currentProgressWidth:val,
                dotLeft:val-this.state.dotVal
            })
        },
        onPanResponderRelease: (evt, gestureState) => {  
            let currentTim=this.state.currentProgressWidth*this.state.allTim/this.state.mainProgressWidth
            if(currentTim<=0){
                currentTim=0
            }
            if(currentTim>=this.state.totalTime){
                currentTim=this.state.totalTime
            }
            this.state.scrollTime=setTimeout(()=>{
                this.player.seek(currentTim)
                this.setState({
                    mouseX:0,
                    isBeginProgress:true
                })
            },500)
            this._timeControlFun()
        },
    })

    _fullScreenFun(){           //全屏事件
        this._timeControlFun()
        if(this.state.isFullScreen){        //是全屏，退出全屏
            this.setState({
                fullIcon:"screen-full",
                isFullScreen:false,
                videoWidht:vW,
                videoHeight:vH
            })
        }else{
            this.setState({                 //不是全屏,进入全屏
                fullIcon:"screen-normal",
                isFullScreen:true,
                videoWidht:height,
                videoHeight:width
            })
        }
       this.props.fullCallBack(!this.state.isFullScreen)   //通知外部是不是全屏
       this._animateFun()
    }
 
    _testScreenFun(){       //判断手机横竖屏
        Orientation.addOrientationListener(orientationDidChange.bind(this))
        function orientationDidChange(orientation){
            if (orientation === 'LANDSCAPE') {      //横屏
                console.log("横屏")
                this.setState({                 //不是全屏,进入全屏
                    fullIcon:"screen-normal",
                    isFullScreen:true,
                    videoWidht:height,
                    videoHeight:width,
                    controlTuff:false
                })
            } else {                                //竖屏
                console.log("竖屏")
                this.setState({
                    fullIcon:"screen-full",
                    isFullScreen:false,
                    videoWidht:vW,
                    videoHeight:vH,
                    controlTuff:false
                })
            }
        }
        this.props.fullCallBack(!this.state.isFullScreen)   //通知外部是不是全屏
        this._animateFun()
    }

    _animateFun(){          //动画函数
        let val=0
        if(this.state.isFullScreen){        //是全屏，退出全屏
            this.state.animValue=new Animated.Value(1)
            val=0
        }else{                          //不是全屏,进入全屏
            this.state.animValue=new Animated.Value(0)
            val=1
        }
        Animated.timing(
            this.state.animValue,
            {
                toValue:val,
                duration:400,
                easing: Easing.linear
            }
        ).start()
    }


    render() {
        let {videoUrl,videoTitle}=this.props
        let uri=videoUrl?videoUrl:this.state.uri
        //console.log(videoUrl)
        console.log("uri",uri)
        return (
            <View style={styles.content}>
                <View style={styles.container}>           
                    
                    <View style={styles.playBox}>
                        <View style={styles.controlWarp}>
                                   
                                    <View style={styles.controlContent}>

                                        <View style={styles.audioControl}>
                                            <View style={styles.controlBox}>
                                                <View style={styles.progressBox}>
                                                    <View style={styles.progressBg} >
                                                        <View style={styles.progressBgWarp} onLayout={({nativeEvent:e})=>this._getProgressFun(e)}>
                                                            <View style={styles.progressItem} width={this.state.currentProgressWidth} ></View>
                                                        </View>
                                                        <View style={styles.dotBox} left={this.state.dotLeft}   {...this._panResponder.panHandlers}>
                                                            <View style={styles.minDotBox}>
                                                                <View style={styles.minsNumBox}></View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.timContent}>                
                                            <Text style={styles.timBox}>{this.state.currentTime}</Text>
                                            <Text style={styles.timBox}>{this.state.totalTime}</Text>   
                                        </View>

                                        {/* 控制容器 start */}

                                        <View style={styles.audioWarpBox}>
                                            <View style={styles.playVideoBtn}>
                                                <Image source={require("../assets/icon/shoucang.png")} style={styles.scBtn} />
                                                <View style={styles.playB}>
                                                    <Image source={require("../assets/icon/next.png")} style={styles.nextBtn} />

                                                    <TouchableHighlight 
                                                    onPress={()=>{this._controlPlayFun()}}
                                                    activeOpacity={1} 
                                                    underlayColor="transparent">
                                                        <View style={styles.audioPlayBtn}>
                                                            <View style={styles.audioPlayMinBtn}>
                                                                <FontAwesome name={this.state.iconName}  size={20} />
                                                            </View>
                                                        </View>
                                                    </TouchableHighlight>

                                                    <Image source={require("../assets/icon/next.png")} style={styles.nextBtn} />
                                                </View>
                                                <Image source={require("../assets/icon/liebiao.png")} style={styles.lbBtn} />
                                            </View>
                                        </View>

                                        {/* 控制容器 end */}

                                    </View>


                                  
                        </View>
                    </View>
                    <View style={styles.videoWarpBox}>
                        <Video
                        source={{uri}} // 视频的URL地址，或者本地地址
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
            </View>         
        )
    }
}


const styles = StyleSheet.create({
    content:{
        justifyContent:'flex-start',
        alignItems: 'center',
        width:vW,
        flex:1,
        position:"relative",
        zIndex:2000
    },
   	container:{
        justifyContent:'flex-start',
        alignItems: 'center',
        // width:width,
        height:"100%",
        width:"100%"
    },
    fullScreenSty:{
        transform: [{ rotate: '90deg'},{translate:[width*9/32+10,0,0]}],
        position:"absolute",
        zIndex:2000,
        width:height,
        height:width
    },
    videoSty:{
        width:"100%",
        height:0
    },
    playBox:{
        width:"100%",
        height:"100%",
        zIndex:10,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:30
    },
    iconSty:{
        color:"#ffffff"
    },
    btnTounchBox:{
        position:"absolute",
        zIndex:15
    },
    btnBox:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:"rgba(0,0,0,0.5)",
        justifyContent:"center",
        alignItems:"center"
    },
    onLoadBox:{
        position:"absolute",
        top:0,
        left:0,
        width:"100%",
        height:"100%",
        backgroundColor:"rgba(0,0,0,1)",
        zIndex:50,
        justifyContent:"center",
        alignItems:"center"
    },
    controlContent:{
        width:"100%",
        zIndex:15,
        flexDirection: 'column',
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:0
    },
    controlBox:{
        width:"100%",
        height:30,
        borderRadius:5,
        //backgroundColor:"rgba(0,0,0,.5)",
        zIndex:15,
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
    },
    timBox:{
        paddingHorizontal: 5,
        textAlign:"center",
        color:"#93A8B3",
        fontSize: 12,
        width:50
    },
    fullBtn:{
        paddingRight: 10,
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
    },
    fullBtnBox:{
        width:50,
        height:50,
        position:"absolute",
        top:"50%",
        left:"50%",
        marginTop: -25,
        marginLeft:-25,
        zIndex:10
    },
    fullIcon:{
        position:"relative",
        zIndex:15,
        color:"#ffffff"
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
        position:"relative",
        flex: 1,
        paddingHorizontal:8
    },
    progressBgWarp:{
        height:3,
        backgroundColor:"#ffffff",
        position:"relative",
        flex: 1,
    },
    progressItem:{
        height:3,
        position:"absolute",
        backgroundColor:"#3C425B",
        top:0,
        left:0,
        width:0
    },
    smallPromptBox:{
        height:3,
        position:"absolute",
        backgroundColor:"#ffffff",
        left:0,
        bottom:0,
        width:"100%",
        justifyContent:"flex-start",
        alignItems:"center",
        flexDirection:"row",
        zIndex:1000
    },
    smallPromptItem:{
        height:3,
        backgroundColor:"#3C425B",
        width:0
    },
    againBox:{
        position:"absolute",
        top:0,
        left:0,
        width:"100%",
        height:"100%",
        backgroundColor:"rgba(0,0,0,.7)",
        zIndex:45,
        justifyContent:"center",
        alignItems:"center"
    },
    repeatIconBox:{
        height:80,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    repeatTxt:{
        lineHeight:80,
        color:"#ffffff",
        fontSize:14,
        paddingLeft: 10
    },
    repeatIcon:{
        color:"#ffffff"
    },
    controlWarp:{
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    titFullScreen:{
        height:30,
        width:"100%",
        justifyContent:"flex-start",
        alignItems:"center",
        flexDirection:"row",
        //backgroundColor:"rgba(0,0,0,.5)",
        position:"absolute",
        top:10,
        left:0,
        zIndex:20000
    },
    titIcon:{
        color:"#ffffff",
        marginLeft: 15,
        marginRight: 20
    },
    titTxtFull:{
        lineHeight:30,
        textAlign:"left",
        color:"#ffffff",
        fontSize:18
    },
    cBoxWarp:{
        position:"absolute",
        top:0,
        left:0,
        height:"100%",
        width:"100%",
        zIndex:13
    },
    videoWarpBox:{
        width:0,
        height:0
    },
    dotBox:{
        width:36,
        height:36,
        //backgroundColor:"rgba(255,255,255,.7)",
        borderRadius:18,
        position:"absolute",
        top:-17,
        left:0,
        justifyContent:"center",
        alignItems:"center"
    },
    minDotBox:{
        width:16,
        height:16,
        backgroundColor:"rgba(255,255,255,.7)",
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center"
    },
    minsNumBox:{
        width:10,
        height:10,
        backgroundColor:"rgba(255,255,255,1)",
        borderRadius:5,
    },
    hiddenSty:{
        height:0,
        overflow: 'hidden'
    },
    timContent:{
        height:12,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%"
    },
    audioControl:{
        width:"100%"
    },

    audioWarpBox:{
        marginTop:50,
        width:"100%"
    },

    playVideoBtn:{
        height:96,
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%"
    },
    scBtn:{
        width:14,
        height:18
    },
    lbBtn:{
        width:20,
        height:14
    },
    playB:{
        width:width-200,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection: 'row'
    },
    prevBtn:{
        width:24,
        height:13
    },
    nextBtn:{
        width:24,
        height:13
    },
    audioPlayBtn:{
        width:96,
        height:96,
        borderRadius:48,
        backgroundColor:"rgba(255,255,255,0.3)",
        alignItems:"center",
        justifyContent:"center"
    },
    audioPlayMinBtn:{
        width:72,
        height:72,
        borderRadius:36,
        backgroundColor:"rgba(255,255,255,1)",
        alignItems:"center",
        justifyContent:"center"
    }



})
  