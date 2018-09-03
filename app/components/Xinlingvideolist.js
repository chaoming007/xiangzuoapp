import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'

const {height, width} = Dimensions.get('window')

export default class Xinlingvideolist extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
      }
    }

    render() {
        let renderDat=this.props.renderDat
        return (
            <View style={styles.container}>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >

                {
                    renderDat.map((item,key)=>{

                        return  <View style={[styles.itemBox,key===0?styles.itemFirst:""]} key={key}>
                                    <Image source={{uri:item.cover}} style={styles.itemBgImg} />
                                    <View style={styles.itemContent}>
                                        <Text style={styles.txtBox} numberOfLines={2}>
                                            {item.title}
                                        </Text>
                                        <View style={styles.userBox}>
                                            <Image source={{uri:item.author.portrait}} style={styles.userImg} />
                                            <Text style={styles.userName}>{item.author.name}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.playBox}>
                                        <Image source={require("../assets/icon/playnum.png")} style={styles.playIcon} />
                                        <Text style={styles.playTxt}>343545</Text>
                                    </View>
                                </View>
                    })
                }

                </ScrollView>
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    itemBox:{
        width:150,
        height:200,
        marginRight: 10
    },
    itemContent:{
        width:150,
        height:200,
        backgroundColor:"rgba(0,0,0,0.5)",
        position: "absolute",
        top:0,
        left:0,
        borderRadius: 8,
        padding: 10,
        justifyContent:"flex-end"
    },
    hotBox:{
        width:30,
        height:16,
        backgroundColor:"#ec333c",
        borderRadius:3,
        marginBottom: 5
    },
    hotBoxTxt:{
        fontSize: 12,
        lineHeight:16,
        color:"#ffffff",
        textAlign:"center"
    },
    txtBox:{
        lineHeight:20,
        fontSize: 14,
        color:"#ffffff",
        fontWeight:"bold",
        marginBottom:5
    },
    userBox:{
        height:16,
        flexDirection: 'row',
        justifyContent:"flex-start",
        alignItems: 'center'
    },
    userImg:{
        width:16,
        height:16,
        borderRadius:8,
        marginRight: 5
    },
    userName:{
        lineHeight:16,
        fontSize:12,
        color:"#ffffff"
    },
    itemFirst:{
        marginLeft: 15,
    },
    itemBgImg:{
        width:150,
        height:200,
        borderRadius: 8
    },
    playBox:{
       height:17,
       position: "absolute",
       top:8,
       left:10,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent:"center"
    },
    playIcon:{
        width:12,
        height:12,
        marginRight:5
    },
    playTxt:{
        lineHeight:15,
        fontFamily: 'Helvetica',
        height:17,
        fontSize: 12,
        color:"#ffffff",
        textAlign:"left"
    }
   

  })
  