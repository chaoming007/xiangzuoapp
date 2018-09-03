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
        let renderDat=this.props.renderDat

        return (
            <View style={styles.container}>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >

                {
                    renderDat.map((item,key)=>{

                        return  <View style={[styles.contentBox,key===0?styles.contentFirst:""]} key={key}>
                                    <Image source={{uri:item.cover}} style={styles.imgBgSty} />
                                    <View style={styles.infoBox}>
                                        <View style={styles.v1Box}>
                                            <View style={[styles.txtBoxWarp,styles.b1]}>
                                                <Text style={styles.txtSty} numberOfLines={1} >雷克萨斯怎么样，雷克萨样？</Text>
                                            </View>
                                            <Image source={require("../assets/img/a.jpg")} style={styles.userImg} />
                                        </View>
                                        
                                        <View style={styles.v1Box}>
                                            <View style={[styles.txtBoxWarp,styles.b2]}>
                                                <Text style={styles.txtSty} numberOfLines={2}>雷克萨斯怎么样，雷克萨样？雷克萨斯怎么样雷克萨斯怎么样</Text>
                                            </View>
                                            <Image source={require("../assets/img/b.jpg")} style={styles.userImg} />
                                        </View>
                                        <View style={styles.v1Box}>
                                            <View style={[styles.txtBoxWarp,styles.b3]}>
                                                <Text style={styles.txtSty} numberOfLines={1}>雷克萨斯怎么样？</Text>
                                            </View>
                                            <Image source={require("../assets/img/c.jpg")} style={styles.userImg} />
                                        </View>
                                        <Text style={styles.titMsg} numberOfLines={2}>
                                            {item.title}
                                        </Text>
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
        backgroundColor: '#ffffff',
        marginBottom: 20
    },
    contentBox:{
        borderRadius: 10,
        width:280,
        height:390,
        overflow:"hidden",
        marginRight: 16
    },
    contentFirst:{
        marginLeft:16
    },
    imgBgSty:{
        width:280,
        height:390,
    },
    infoBox:{
        position: "absolute",
        top:145,
        left:0,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 15
    },
    v1Box:{
        marginBottom: 10,
        flexDirection: 'row'
    },
    userImg:{
       height:30,
       width:30,
       borderRadius:15,
       position: "absolute",
       top:"50%",
       left:0,
       marginTop: -15
    },
    txtBoxWarp:{
        padding: 10,
        paddingLeft:23,
        marginLeft: 15,
        borderRadius:5
    },
    b1:{
        backgroundColor:"rgba(0,0,0,0.6)"
    },
    b2:{
        backgroundColor:"rgba(0,0,0,0.8)"
    },
    b3:{
        backgroundColor:"rgba(175,0,255,0.8)"
    },
    txtSty:{
        fontSize: 14,
        lineHeight:20,
        color:"#ffffff"
    },
    titMsg:{
        marginTop:5,
        height:52,
        lineHeight:25,
        color:"#ffffff",
        fontSize:18,
        fontWeight:"bold"
    }
    
  })
  