import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image
} from 'react-native'

import Swiper from 'react-native-swiper'
import Feather from 'react-native-vector-icons/Feather'

const {height, width} = Dimensions.get('window')

export default class Search extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
       
      }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imgBox}>
                    <Swiper
                        horizontal={true}
                        showsButtons={false}
                        dot={<View style={{           //未选中的圆点样式
                            backgroundColor: 'rgba(0,0,0,.2)',
                            width: 7,
                            height: 5,
                            borderRadius: 2,
                            marginLeft: 4,
                            marginRight: 4,
                            marginBottom: -100,
                        }}/>}
                            activeDot={<View style={{    //选中的圆点样式
                            backgroundColor: '#222222',
                            width: 12,
                            height: 5,
                            borderRadius: 2,
                            marginLeft: 4,
                            marginRight: 4,
                            marginBottom: -100,
                        }}/>}
                        
                    >
                        <View style={styles.imgViewBox}>
                            <Image source={require('../assets/img/b.jpg')} style={styles.imgSty}/>
                            <View style={styles.imgTxt}>
                                <Text style={styles.titH1}>这是标题1</Text>
                                <Text style={styles.titH2}>这是内容这是内容</Text>
                            </View>
                        </View>
                        <View style={styles.imgViewBox}>
                            <Image source={require('../assets/img/b.jpg')} style={styles.imgSty}/>
                            <View style={styles.imgTxt}>
                                <Text style={styles.titH1}>这是标题2</Text>
                                <Text style={styles.titH2}>这是内容这是内容</Text>
                            </View>
                        </View>
                        <View style={styles.imgViewBox}>
                            <Image source={require('../assets/img/b.jpg')} style={styles.imgSty}/>
                            <View style={styles.imgTxt}>
                                <Text style={styles.titH1}>这是标题3</Text>
                                <Text style={styles.titH2}>这是内容这是内容</Text>
                            </View>
                        </View>
                       
                    </Swiper>
                </View>
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop:15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 50,
    },
    imgBox:{
        shadowOffset:{ width:0, height:3 }, 
        shadowColor:'#000000', 
        shadowOpacity:0.1, 
        shadowRadius:10,
        height:409
    },
    imgViewBox:{
        borderRadius: 5
    },
    imgSty:{
        height:334,
        width:width-30,
        borderRadius:5
    },
    imgTxt:{
        height:75,
        flexDirection:"column",
        paddingHorizontal:20,
        paddingVertical: 10,
        backgroundColor:"#ffffff",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    titH1:{
        height:28,
        fontSize: 20,
        lineHeight:28,
        color:"#000000",
        marginBottom: 5
    },
    titH2:{
        height:12,
        fontSize: 12,
        lineHeight:12,
        color:"#000000"
    }
  })
  