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

class Videodetail extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
        
        }
    }
  
    render() {
        let { barTuff,barVisited,barHeight }=this.props
        let isVisited=barVisited || false
        let barH=barHeight || 33

        return (
            <View>
                {
                    barTuff==="black"?<StatusBar  
                                        animated={true}             //指定状态栏的变化是否应以动画形式呈现 
                                        hidden={isVisited}              //是否隐藏状态栏。  
                                        barStyle={'light-content'}   
                                        >  
                                    </StatusBar>:<StatusBar  
                                    animated={true}             
                                    hidden={isVisited}                
                                    barStyle={'dark-content'}   
                                    >  
                                </StatusBar>
                }
                {
                    barTuff==="black"?<View style={styles.headerBlackTop} height={barH}></View>:<View style={styles.headerWhiteTop} height={barH}></View>
                } 
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
    headerBlackTop:{
        width:width,
        backgroundColor:"#000000"
    },
    headerWhiteTop:{
        width:width,
        backgroundColor:"#ffffff"
    }
})
  