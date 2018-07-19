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

import Guanzhuitem from '../components/Guanzhuitem'

const {height, width} = Dimensions.get('window')

class Addressbook extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        dat:[0,1,2,3,4,5,6,7,8,9]
      }
  }

  render() {
	let {state}=this.props
    return (
        <View style={styles.container}>
            <Statusbar />
            <Title  {...this.props} tit={"通讯录"} />
            <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.dat}
            keyExtractor={(item)=>item.toString()}
            renderItem={ (item) =>
                <View style={styles.itemBox}>
                    <Guanzhuitem />
                </View>
            }
            showsVerticalScrollIndicator= {false}
            onEndReachedThreshold={0.2} 
            onEndReached={()=>{ console.log("开始加载！") }}   
            />
        </View>
    )
  }
}

export default connect(state=>({state}),{setSearchHistory})(Addressbook)

  const styles = StyleSheet.create({
   		container:{
			flex: 1,
			justifyContent:'center',
			alignItems: 'center',
            backgroundColor: '#ffffff'
        },
        itemBox:{
            width:width
        }
  })
  