import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image} from 'react-native'

import {connect} from 'react-redux'

import Ionicons from 'react-native-vector-icons/Ionicons'

const {width} = Dimensions.get('window')

import Listitem from '../components/Listitem'
import Gotop from '../components/Gotop'
import Audio from '../components/Audioplay'

import request from '../util/request'
import config from '../util/config'

class Audiodetail extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            goTopTuff:null,
            contentDat:{}
        }
    }

    _scrollToTop(){
        this.refs.scrollMain.scrollTo({x:0,y:0})
    }
    _goTopFun(evt){
        if(!evt) return 
        let y=evt.nativeEvent.contentOffset.y
        if(y<300){
            this.setState({
                goTopTuff:false
            })
        }else{
            this.setState({
                goTopTuff:true
            })
        }
    }


    componentDidMount() {
        this._requestDatFun()
    }

    _requestDatFun(){  
        let id=this.props.navigation.state.params.id
        let url=config.contentUrl.replace(/\{0\}/gi,id)              //数据请求
        request.get(url).then((dat)=>{
            if(dat.data.errCode===0 && dat.data.errMsg==="成功"){
                let data=dat.data.data
                console.log("音频数据",data)
                this.setState({
                    contentDat:{...data}
                })
            }
        }).catch((err)=>{
            console.log(err)
        }) 
    }
  
    render() {

        let {navigation}=this.props
        return (
            <View style={styles.container}>
                
                <ScrollView
                showsVerticalScrollIndicator={false}
                ref="scrollMain"
                scrollEventThrottle={10}
                onScroll={(v)=>{this._goTopFun(v)}}
                >


                    <View style={styles.audioTopBox}>

                        <View style={styles.backBtn}>
                            <Ionicons onPress={()=>{ navigation.goBack() }} name="md-arrow-back" size={25} color="#000000" />
                            <View style={styles.btnWarp}>
                                <Image source={require("../assets/icon/share.png")} style={styles.shareBtn} />
                                <Image source={require("../assets/icon/like.png")} style={styles.likeBtn} />
                            </View>
                        </View>
                       
                        <View style={styles.audioBgBox}>                        
                            <Image source={{uri:this.state.contentDat.cover}} style={styles.audioImg} />
                        </View>
                        <View style={styles.audioTitBox}>
                            <Text style={styles.audioTitTxt}>
                                {this.state.contentDat.title}
                            </Text>
                            <Text style={styles.audioTitInfo}>
                                {this.state.contentDat.content}
                            </Text>
                        </View>
                        
                        {/* video播放器 start */}

                        <Audio 
                        videoUrl={this.state.contentDat.resourceUrl} 
                        videoTitle={"标题"} 
                        />
                   
                        {/* video播放器 end */}

                    </View>

    
                    {/* 订阅内容 start  */}

                    <View style={styles.dingyueBox}>
                        <Text style={styles.dingyueTit}>我喜欢的汽车</Text>
                        <View style={styles.dingyueList}>
                            <Listitem isImg={true} playTuff={true} />
                            <Listitem isImg={true} playTuff={true} />
                            <Listitem isImg={true} playTuff={true} />
                            <Listitem isImg={true} playTuff={true} />
                        </View>
                    </View>
            
                    {/* 订阅内容 end  */}

                </ScrollView>

                <Gotop  goTopTuff={this.state.goTopTuff}  scrollFun={this._scrollToTop.bind(this)} />
                
            </View>
        )
    }
}

export default connect(state=>({state}))(Audiodetail)

const styles = StyleSheet.create({
   	container:{
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    headerTop:{
        height:33,
        backgroundColor:"#000000"
    },
    audioTopBox:{
        backgroundColor:"#f0dde3",
        width:width,
        paddingBottom: 50,
        justifyContent:'center',
        alignItems: 'center'
    },
    backBtn:{
        position:"absolute",
        top: 43,
        left:16,
        width:width-32,
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"space-between"
    },
    btnWarp:{
        flexDirection: 'row',
        alignItems:"center"
    },
    likeBtn:{
        width:22,
        height:20,
        marginLeft: 30
    },
    shareBtn:{
        width:20,
        height:21
    },
    contentTitBox:{
        position:"absolute",
        bottom: 15,
        left:16,
        color:"#ffffff",
        lineHeight:25,
        fontSize: 18,
        fontWeight:"bold"
    },
    audioBgBox:{
        marginHorizontal:23,
        width:width-46,
        height:width-156,
        backgroundColor:"rgba(255,255,255,0.2)",
        marginTop:128,
        borderRadius:5,
        marginBottom:50
    },
   
    audioImg:{
        position:"absolute",
        width:width-106,
        height:width-106,
        borderRadius:5,
        top:"50%",
        left:"50%",
        marginTop:-(width-106)/2,
        marginLeft:-(width-106)/2
    },
    audioTitBox:{
        alignItems:"center",
        marginBottom:30
    },
    audioTitTxt:{
        lineHeight:25,
        textAlign:"center",
        color:"#3C425B",
        fontSize:18,
        fontWeight:"bold",
        marginBottom:5
    },
    audioTitInfo:{
        lineHeight:20,
        textAlign:"center",
        color:"#93A8B3",
        fontSize:14
    },
    audioPlay:{
        width:width-72,
        marginBottom:30,
        height:30
    },
    timeLine:{
        height:2,
        backgroundColor:"#ffffff",
        borderRadius: 1,
        marginBottom:10
       
    },
    timeLineBg:{
        height:2,
        backgroundColor:"#3C425B",
        borderRadius: 1,
        width:"50%",
        position:"absolute",
        top:0,
        left:0
    },
    timeDott:{
        height:6,
        backgroundColor:"#3C425B",
        borderRadius: 3,
        width:6,
        position:"absolute",
        top:-2,
        right:0
    },
    timeBox:{
        height:12,
        flexDirection: 'row',
        justifyContent:"space-between"
    },
    timTxt:{
        color:"#93A8B3",
        fontSize:10
    },
    playVideoBtn:{
        height:96,
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems:"center",
        width:width-72,
        marginBottom:40
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
        height:96
    },
    dingyueBox:{
        marginHorizontal:16
    },
    dingyueTit:{
        height:37,
        lineHeight:37,
        fontSize:26,
        fontWeight:"bold",
        color:"#000000",
        marginBottom:20,
        marginTop:30
    },
    dingyueList:{
        marginBottom:20
    },
    btnNone:{
        opacity:0
    }
    
	
})
  