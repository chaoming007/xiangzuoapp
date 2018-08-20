import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native'

const {height, width} = Dimensions.get('window')
// import Feather from 'react-native-vector-icons/Feather'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Videoitem extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
      }
    }

    render() {

        let { navigation, playTuff,linkUrl,renderDat }=this.props    
        return (
            <View style={styles.container}>

                <TouchableHighlight 
                onPress={()=>{navigation.navigate(linkUrl,{id:5})}} 
                style={styles.touchSty} 
                activeOpacity={1} 
                underlayColor="transparent">
                    <View style={styles.imgBox}>
                        <Image source={{uri:renderDat.cover}} style={styles.imgSty} />
                        {
                            playTuff?<View style={styles.playSty}>
                                        <Image source={require("../assets/icon/play.png")} style={styles.playImgSty} />
                                    </View>:""
                        }
                    </View>
                </TouchableHighlight>

                <View style={styles.txtBox}>
                    <Text style={styles.titBox}>{renderDat.title}</Text>
                    <View style={styles.infoBox}>
                        <View style={styles.userBox}>
                            <Image source={require("../assets/img/123.jpg")} style={styles.userImg} />
                            <Text style={styles.userName}>{renderDat.authorName}</Text>
                        </View>
                        <View style={styles.videoInfo}>
                            <View style={styles.scNum}>
                                <Image source={require("../assets/icon/liulan.png")} style={styles.ckImg} />
                                <Text style={styles.scNumTxt}>432434</Text>
                            </View>
                            <View style={styles.scNum}>
                                <Image source={require("../assets/icon/xh.png")} style={styles.scImg} />
                                <Text style={styles.scNumTxt}>4324</Text>
                            </View>
                        
                        </View>
                    </View>
                </View>
            </View>
        )
    }
  }

  Videoitem.propTypes = {
    picDat: PropTypes.object
  }
  

  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        shadowOffset:{ width:0, height:3 }, 
        shadowColor:'#000000', 
        shadowOpacity:0.1, 
        shadowRadius:10,
        marginBottom:15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    imgBox:{
       margin: 0
    },
    playSty:{
        width:50,
        height:50,
        position: "absolute",
        backgroundColor:"rgba(0,0,0,0.5)",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        top:"50%",
        left:"50%",
        marginTop: -25,
        marginLeft: -25
    },
    playImgSty:{
        width:12,
        height:15
    },
    imgSty:{
        width:width-32,
        height:208*(width-32)/343,
        borderRadius: 5,
    },
    txtBox:{
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 20,
        width:width-32,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    titBox:{
        height:25,
        fontSize: 18,
        fontWeight:"bold",
        marginBottom: 15,
        //textAlign:"left",
        //flex:1
    },
    infoBox:{
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems: 'center',
        height:30,
        flex:1
    },
    userBox:{
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"flex-start"
    },
    userImg:{
        width:30,
        height:30,
        borderRadius:15,
        marginRight: 5
    },
    userName:{
        height:20,
        fontSize: 14,
        lineHeight:20
    },
    videoInfo:{
        flexDirection: 'row',
        justifyContent:"flex-end",
        alignItems:"center"
    },
    scNum:{
        flexDirection: 'row',
        height:20,
        alignItems:"center"
    },
    scNumTxt:{
        fontSize:14,
        color:"#717B93"
    },
    scImg:{
        width:15,
        height:14,
        marginLeft: 10,
        marginRight: 5
    },
    ckImg:{
        width:15,
        height:12,
        marginLeft: 10,
        marginRight: 5
    }



  })
  