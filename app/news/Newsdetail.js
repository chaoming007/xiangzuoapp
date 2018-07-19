import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    StatusBar,
    Image,
    TouchableHighlight
} from 'react-native'

import {connect} from 'react-redux'

import Ionicons from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window')

import Guanzhuitem from '../components/Guanzhuitem'
import Listitem from '../components/Listitem'
import Statusbar from '../components/Statusbar'
import Gotop from '../components/Gotop'

class Newsdetail extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            goTopTuff:null
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
                    <View style={styles.newsBox}>
                        <Image source={require("../assets/img/car.jpg")} style={styles.newsImg} />
                        <View style={styles.backBtn}>
                            <Ionicons onPress={()=>{ navigation.goBack() }} name="md-arrow-back" size={25} color="#ffffff" />
                            <View style={styles.btnWarp}>
                                <Image source={require("../assets/icon/share.png")} style={styles.shareBtn} />
                                <Image source={require("../assets/icon/like.png")} style={styles.likeBtn} />
                            </View>
                        </View>
                        <Text style={styles.contentTitBox}>
                            大众汽车的质量怎么样呀？请大家评测一下，众汽车的质量怎么样呀
                        </Text>
                    </View>

                    <View style={styles.gzWarp}>
                        <Guanzhuitem />
                    </View>

                    <View style={styles.mainBox}>
                        <View style={styles.titBox}>
                            <Text style={styles.titTxt}>1.大众汽车的质量怎么样呀？</Text>
                        </View>
                        <View style={styles.contentBox}>
                            <Text style={styles.contentTxt}>
                            请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀!请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀
                            </Text>
                        </View>
                        <View style={styles.titBox}>
                            <Text style={styles.titTxt}>2.大众汽车的质量怎么样呀？</Text>
                        </View>
                        <View style={styles.contentBox}>
                            <Text style={styles.contentTxt}>
                            请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀!请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀
                            </Text>
                        </View>
                        <View style={styles.contentImg}>
                            <Image source={require("../assets/img/1.png")} style={styles.imgSty} />
                        </View>
                        <View style={styles.titBox}>
                            <Text style={styles.titTxt}>3.大众汽车的质量怎么样呀？</Text>
                        </View>
                        <View style={styles.contentBox}>
                            <Text style={styles.contentTxt}>
                            请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀!请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀
                            </Text>
                        </View>
                    </View>

                    

                    {/* 订阅内容 start  */}

                    <View style={styles.dingyueBox}>
                        <Text style={styles.dingyueTit}>我喜欢的汽车</Text>
                        <View style={styles.dingyueList}>
                            <Listitem isImg={true} playTuff={false} />
                            <Listitem isImg={true} playTuff={false} />
                            <Listitem isImg={true} playTuff={false} />
                            <Listitem isImg={true} playTuff={false} />
                        </View>
                    </View>
            
                    {/* 订阅内容 end  */}

                </ScrollView>

                <Gotop  goTopTuff={this.state.goTopTuff}  scrollFun={this._scrollToTop.bind(this)} />
                
            </View>
        )
    }
}

export default connect(state=>({state}))(Newsdetail)

const styles = StyleSheet.create({
   	container:{
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    headerTop:{
        height:33,
        backgroundColor:"#000000"
    },
    newsBox:{
        width:width,
        height:width*270/375
    },
    newsImg:{
        width:width,
        height:width*270/375
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
        marginBottom:16
    },
    contentTxt:{
        lineHeight:22,
        fontSize:14,
        color:"#0D0E15"
    },
    imgSty:{
        borderRadius: 10,
        width:width-32,
        height:220
    },
    contentImg:{
        marginBottom:16
    },
    gzWarp:{
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
    },
    btnNone:{
        opacity:0
    }
    
	
})
  