import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
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
        return (
            <View style={styles.container}>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                    <View style={[styles.labelBox,styles.labelBoxFirst,styles.c1]}>
                        <Text style={styles.labelTxt}>大众卡罗拉</Text>
                    </View>
                    <View style={[styles.labelBox,styles.c2]}>
                        <Text style={styles.labelTxt}>途昂</Text>
                    </View>
                    <View style={[styles.labelBox,styles.c3]}>
                        <Text style={styles.labelTxt}>卡罗拉</Text>
                    </View>
                    <View style={[styles.labelBox,styles.c1]}>
                        <Text style={styles.labelTxt}>大众卡罗拉</Text>
                    </View>
                    <View style={[styles.labelBox,styles.c3]}>
                        <Text style={styles.labelTxt}>大众</Text>
                    </View>
                    <View style={[styles.labelBox,styles.c3]}>
                        <Text style={styles.labelTxt}>大众卡罗拉</Text>
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
        height:50
    },
    labelBox:{
        height:30,
        shadowOffset:{ width:0, height:3 }, 
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        marginRight: 16,
        justifyContent:"center",
        alignItems:"center"
    },
    labelBoxFirst:{
        marginLeft: 15,
    },
    labelTxt:{
        textAlign:"center",
        lineHeight:28,
        fontSize:14,
        color:"#ffffff"
    },
    c1:{
        shadowColor:'#a030f6', 
        shadowOpacity:0.5, 
        shadowRadius:5,
        backgroundColor:"#a030f6"
    },
    c2:{
        shadowColor:'#5cd3eb', 
        shadowOpacity:0.5, 
        shadowRadius:5,
        backgroundColor:"#5cd3eb"
    },
    c3:{
        shadowColor:'#f2963c', 
        shadowOpacity:0.5, 
        shadowRadius:5,
        backgroundColor:"#f2963c"
    }


  })
  