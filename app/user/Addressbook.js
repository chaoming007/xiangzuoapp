import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Modal,
    FlatList,
    StatusBar,
    Image,
    Switch
} from 'react-native'


import {connect} from 'react-redux'
import {setSearchHistory} from '../store/Reducers'


import Entypo from 'react-native-vector-icons/Entypo'

import Title from '../components/Pagetitle'
import Statusbar from '../components/Statusbar'

const {height, width} = Dimensions.get('window')

class Addressbook extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        
      }
  }

  render() {
	let {state}=this.props
    return (
        <View style={styles.container}>
            <Statusbar />
            <Title  {...this.props} tit={"通讯录"} />
            <Text>通讯录</Text>
        </View>
    )
  }
}

export default connect(state=>({state}),{setSearchHistory})(Addressbook)

  const styles = StyleSheet.create({
   		container:{
			flex: 1,
			justifyContent:'flex-start',
			alignItems: 'center',
            backgroundColor: '#ffffff'
        }
  })
  