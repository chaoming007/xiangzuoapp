import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native'

const {height, width} = Dimensions.get('window')
// import Feather from 'react-native-vector-icons/Feather'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Userlist extends Component {
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
                    <View style={[styles.userBoxWarp,styles.userFirst]}>
                        <View style={[styles.userItem]}>
                            <View style={styles.addBtn}> 
                                <Image source={require("../assets/icon/add.png")} style={styles.addImg} />
                            </View>
                            <View style={styles.contentBox}>
                                <Image source={require("../assets/img/123.jpg")} style={styles.userImg} />
                                <Text style={styles.nameTxt}>
                                    妮可基德曼
                                </Text>
                                <Text style={styles.userInfoTxt}>
                                    创意计划自媒体签约经纪人
                                </Text>
                                <View style={styles.userInfoBox}>
                                <View style={styles.fsBox}>
                                    <Text style={styles.fsTxt} numberOfLines={1}>粉丝1222</Text>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.fbBox}>
                                    <Text style={styles.fbTxt} numberOfLines={1}>发布12222</Text>
                                </View>
                            </View>

                            </View>
                        </View>
                    </View>
                    <View style={styles.userBoxWarp}>
                        <View style={[styles.userItem]}>

                                <View style={styles.addBtn}> 
                                        <Image source={require("../assets/icon/add.png")} style={styles.addImg} />
                                </View>
                                <View style={styles.contentBox}>
                                    <Image source={require("../assets/img/123.jpg")} style={styles.userImg} />
                                    <Text style={styles.nameTxt}>
                                        妮可基德曼
                                    </Text>
                                    <Text style={styles.userInfoTxt}>
                                        创意计划自媒体签约经纪人
                                    </Text>
                                    <View style={styles.userInfoBox}>
                                        <View style={styles.fsBox}>
                                            <Text style={styles.fsTxt} numberOfLines={1}>粉丝1222344545</Text>
                                        </View>
                                        <View style={styles.line}></View>
                                        <View style={styles.fbBox}>
                                            <Text style={styles.fbTxt} numberOfLines={1}>发布122234</Text>
                                        </View>
                                    </View>

                                </View>


                        </View>
                    </View>
                    <View style={styles.userBoxWarp}>
                        <View style={[styles.userItem]}>


                                <View style={styles.addBtn}> 
                                        <Image source={require("../assets/icon/add.png")} style={styles.addImg} />
                                </View>
                                <View style={styles.contentBox}>
                                    <Image source={require("../assets/img/123.jpg")} style={styles.userImg} />
                                    <Text style={styles.nameTxt}>
                                        妮可基德曼
                                    </Text>
                                    <Text style={styles.userInfoTxt}>
                                        创意计划自媒体签约经纪人
                                    </Text>
                                    <View style={styles.userInfoBox}>
                                        <View style={styles.fsBox}>
                                            <Text style={styles.fsTxt} numberOfLines={1}>粉丝1222344545</Text>
                                        </View>
                                        <View style={styles.line}></View>
                                        <View style={styles.fbBox}>
                                            <Text style={styles.fbTxt} numberOfLines={1}>发布122234</Text>
                                        </View>
                                    </View>

                                </View>


                        </View>
                    </View>
                    <View style={styles.userBoxWarp}>
                        <View style={[styles.userItem]}>

                                 <View style={styles.addBtn}> 
                                        <Image source={require("../assets/icon/add.png")} style={styles.addImg} />
                                </View>
                                <View style={styles.contentBox}>
                                    <Image source={require("../assets/img/123.jpg")} style={styles.userImg} />
                                    <Text style={styles.nameTxt}>
                                        妮可基德曼
                                    </Text>
                                    <Text style={styles.userInfoTxt}>
                                        创意计划自媒体签约经纪人
                                    </Text>
                                    <View style={styles.userInfoBox}>
                                        <View style={styles.fsBox}>
                                            <Text style={styles.fsTxt} numberOfLines={1}>粉丝1222344545</Text>
                                        </View>
                                        <View style={styles.line}></View>
                                        <View style={styles.fbBox}>
                                            <Text style={styles.fbTxt} numberOfLines={1}>发布122234</Text>
                                        </View>
                                    </View>

                                </View>


                        </View>
                    </View>
                    <View style={styles.userBoxWarp}>
                        <View style={[styles.userItem]}>

                                 <View style={styles.addBtn}> 
                                        <Image source={require("../assets/icon/add.png")} style={styles.addImg} />
                                </View>
                                <View style={styles.contentBox}>
                                    <Image source={require("../assets/img/123.jpg")} style={styles.userImg} />
                                    <Text style={styles.nameTxt}>
                                        妮可基德曼
                                    </Text>
                                    <Text style={styles.userInfoTxt} numberOfLines={1}>
                                        创意计划自媒体签约经纪人
                                    </Text>
                                    <View style={styles.userInfoBox}>
                                        <View style={styles.fsBox}>
                                            <Text style={styles.fsTxt} numberOfLines={1}>粉丝1222344545</Text>
                                        </View>
                                        <View style={styles.line}></View>
                                        <View style={styles.fbBox}>
                                            <Text style={styles.fbTxt} numberOfLines={1}>发布122234</Text>
                                        </View>
                                    </View>

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
        backgroundColor: '#ffffff',
        marginBottom:15
    },
    userBoxWarp:{
        paddingTop: 15,
        paddingBottom: 15
    },
    userItem:{
        width:180,
        height:198,
        shadowOffset:{ width:0, height:3}, 
        shadowColor:'#000000', 
        shadowOpacity:0.1, 
        shadowRadius:10,
        borderRadius:10,
        backgroundColor:"#ffffff",
        marginRight: 16
    },
    userFirst:{
        marginLeft: 16
    },
    addBtn:{
        width:40,
        height:40,
        backgroundColor:"#AF00FF",
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        position: "absolute",
        top:0,
        right:0,
        justifyContent:"center",
        alignItems:"center"
    },
    addImg:{
        width:14,
        height:14
    },
    contentBox:{
        justifyContent:"center",
        alignItems:"center",
        paddingTop:20,
        paddingLeft: 10,
        paddingRight: 10
    },
    userImg:{
        width:66,
        height:66,
        borderRadius:33,
        marginBottom:10
    },
    nameTxt:{
        textAlign:"center",
        lineHeight:22,
        height:22,
        fontSize: 16,
        fontWeight:"bold",
        marginBottom: 10
    },
    userInfoTxt:{
        textAlign:"center",
        lineHeight:16,
        fontSize: 12,
        marginBottom: 16
    },
    userInfoBox:{
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center"
    },
    fsBox:{
        flex:1,
        height:17,
        justifyContent:"center",
        alignItems:"center"
    },
    fsTxt:{
        fontSize: 12,
        lineHeight:17,
        textAlign:"left"
    },
    fbBox:{
        flex:1,
        height:17,
        justifyContent:"center",
        alignItems:"center"
    },
    fbTxt:{
        fontSize: 12,
        lineHeight:17,
        textAlign:"left"
    },
    line:{
        height:15,
        width:1,
        backgroundColor:"#DCE2EA",
        marginLeft: 10,
        marginRight: 10
    }



  })
  