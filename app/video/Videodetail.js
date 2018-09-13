import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    StatusBar,
    Image
} from 'react-native'

import {connect} from 'react-redux'

import Ionicons from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window')

import Guanzhuitem from '../components/Guanzhuitem'
import Listitem from '../components/Listitem'
import Statusbar from '../components/Statusbar'
import Video from '../components/Videoplay'

import request from '../util/request'
import config from '../util/config'

class Videodetail extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            contentDat:"",
            authorDat:"",
            isFullScreen:false
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
                console.log("视频数据",data)
                this.setState({
                    contentDat:{...data},
                    authorDat:{...data.author}
                })
            }
        }).catch((err)=>{
            console.log(err)
        }) 
    }

    _setIsFullScreen(item){
        this.setState({
            isFullScreen:item
        })
    }

    render() {
        let {navigation}=this.props
        return (
            <View style={styles.container}>
                <Statusbar barTuff="black" barVisited={this.state.isFullScreen?true:false}  />

                <View style={styles.videoBox}>
                    <Video 
                    videoUrl={this.state.contentDat.resourceUrl} 
                    videoTitle={this.state.contentDat.title} 
                    fullCallBack={(item)=>{this._setIsFullScreen(item)}} 
                    />
                    <View style={[styles.backBtn,this.state.isFullScreen?"":styles.setZindexNum]}>
                        <Ionicons onPress={()=>{ navigation.goBack() }} name="md-arrow-back" size={25} color="#ffffff" />
                    </View>
                </View>

                <ScrollView
                showsVerticalScrollIndicator={false}
                >       
                    <View style={styles.mainBox}>
                        <View style={styles.titBox}>
                            <Text style={styles.titTxt}>{this.state.contentDat.title}</Text>
                        </View>
                        <View style={styles.contentBox}>
                            <Text style={styles.contentTxt}>
                            {this.state.contentDat.content}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.gzWarp}>
                        <Guanzhuitem renderDat={this.state.authorDat} />
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
            </View>
        )
    }
}

export default connect(state=>({state}))(Videodetail)

const styles = StyleSheet.create({
   	container:{
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flex: 1,
        width:"100%"
    },
    headerTop:{
        height:33,
        backgroundColor:"#000000"
    },
    videoBox:{
        width:width,
        height:width*212/375,
        position:"relative",
        zIndex: 100
    },
    videoImg:{
        width:width,
        height:width*212/375
    },
    backBtn:{
        position:"absolute",
        top: 10,
        left:16
    },
    setZindexNum:{
        zIndex: 2000
    },
    mainBox:{
        margin: 16
    },
    titBox:{
        marginBottom: 11
    },
    titTxt:{
        lineHeight:25,
        fontSize: 18,
        color:"#000000",
        textAlign:"left",
        fontWeight:"bold"
    },
    contentBox:{
        margin:0
    },
    contentTxt:{
        lineHeight:20,
        fontSize:14,
        color:"#717B93"
    },
    gzWarp:{
        marginBottom:50
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
        marginBottom:20
    },
    dingyueList:{
        marginBottom:20
    }
    
	
})
  