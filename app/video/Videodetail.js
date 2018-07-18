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

class Videodetail extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
        
        }
    }
  
    render() {
        let {navigation}=this.props

        return (
            <View style={styles.container}>
                <Statusbar barTuff="black" />
                
                <ScrollView
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}
                >
                    <View style={styles.videoBox}>
                        <Image source={require("../assets/img/1.png")} style={styles.videoImg} />
                        <View style={styles.backBtn}>
                            <Ionicons onPress={()=>{ navigation.goBack() }} name="md-arrow-back" size={25} color="#ffffff" />
                        </View>
                    </View>

                    <View style={styles.mainBox}>
                        <View style={styles.titBox}>
                            <Text style={styles.titTxt}>大众汽车的质量怎么样呀？请大家评测一下，众汽车的质量怎么样呀</Text>
                        </View>
                        <View style={styles.contentBox}>
                            <Text style={styles.contentTxt}>
                            请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀!请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀请大家评测一下，大众汽车的质量怎么样呀大众汽车的质量怎么样呀
                            </Text>
                        </View>
                    </View>

                    <View style={styles.gzWarp}>
                        <Guanzhuitem />
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
        backgroundColor: '#ffffff'
    },
    headerTop:{
        height:33,
        backgroundColor:"#000000"
    },
    videoBox:{
        width:width,
        height:width*212/375
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
  