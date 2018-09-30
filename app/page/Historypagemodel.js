import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Modal,
    StatusBar,
    Dimensions
} from 'react-native'


import Searchhistory from './Searchhistory'

import {connect} from 'react-redux'
import {setSearchHistory} from '../store/Reducers'

const {height, width} = Dimensions.get('window')

class Historypagemodel extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
      }
	}
    render() {
		let {state}=this.props
        return (
            <View style={styles.mainBox}>

                <Searchhistory {...this.props} />
                
                {/*
                
                <View>
                    <Modal
                    animationType='slide'           
                    transparent={false}              // 透明
                    visible={state.searchHistoryTuff}   // 是否显示
                    >
                        <Searchhistory {...this.props} />
                    </Modal>
                </View>
                */}
               
            </View>
            
        )
    }
}

export default connect(state=>({state}),{setSearchHistory})(Historypagemodel)


const styles = StyleSheet.create({
    container:{
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    mainBox:{
        width:width,
        height:height,
        backgroundColor:"#ffffff",
        position:"absolute",
        top:0,
        left:0,
        zIndex:10000
    }

})
  