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

export default class Videoitem extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
      }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                    <View style={[styles.itemBox,styles.itemFirst]}>
                        <Image source={require("../assets/img/4.jpg")} style={styles.itemBgImg} />
                        <View style={styles.itemContent}>
                            <View style={styles.hotBox}>
                                <Text style={styles.hotBoxTxt}>HOT</Text>
                            </View>
                            <Text style={styles.txtBox} numberOfLines={2}>
                                上海大众是一个好汽车，上海大众是一个好汽车上海大众是一个好汽车
                            </Text>
                            <View style={styles.userBox}>
                                <Image source={require("../assets/img/1.png")} style={styles.userImg} />
                                <Text style={styles.userName}>巴拉巴小魔仙</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.itemBox}>
                        <Image source={require("../assets/img/4.jpg")} style={styles.itemBgImg} />
                        <View style={styles.itemContent}>
                            <Text style={styles.txtBox} numberOfLines={2}>
                                上海大众是一个好汽车，上海大众是一个好汽车上海大众是一个好汽车
                            </Text>
                            <View style={styles.userBox}>
                                <Image source={require("../assets/img/1.png")} style={styles.userImg} />
                                <Text style={styles.userName}>巴拉巴小魔仙</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.itemBox}>
                        <Image source={require("../assets/img/4.jpg")} style={styles.itemBgImg} />
                        <View style={styles.itemContent}>
                        
                            <Text style={styles.txtBox} numberOfLines={2}>
                                上海大众是一个好汽车，上海大众是一个好汽车上海大众是一个好汽车
                            </Text>
                            <View style={styles.userBox}>
                                <Image source={require("../assets/img/1.png")} style={styles.userImg} />
                                <Text style={styles.userName}>巴拉巴小魔仙</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.itemBox}>
                        <Image source={require("../assets/img/4.jpg")} style={styles.itemBgImg} />
                        <View style={styles.itemContent}>
                            
                            <Text style={styles.txtBox} numberOfLines={2}>
                                上海大众是一个好汽车，上海大众是一个好汽车上海大众是一个好汽车
                            </Text>
                            <View style={styles.userBox}>
                                <Image source={require("../assets/img/1.png")} style={styles.userImg} />
                                <Text style={styles.userName}>巴拉巴小魔仙</Text>
                            </View>
                        </View>
                    </View>

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
        height:250,
        marginRight: 10
    },
    itemContent:{
        width:150,
        height:250,
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
        marginBottom: 5,
        justifyContent:"center",
        alignItems:"center"
    },
    hotBoxTxt:{
        fontSize: 12,
        lineHeight:14,
        color:"#ffffff",
        textAlign:"center"
    },
    txtBox:{
        lineHeight:22,
        fontSize: 14,
        color:"#ffffff",
        fontWeight:"bold",
        marginBottom:10
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
        height:250,
        borderRadius: 8
    }
   

  })
  