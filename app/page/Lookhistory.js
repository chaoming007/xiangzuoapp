import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList
} from 'react-native'


const {height, width} = Dimensions.get('window')


import Title from '../components/Pagetitle'
import Item from '../components/Historyitem'
import Statusbar from '../components/Statusbar'

export default class Lookhistory extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        dat:[0,1,2,3,4,5,6,7,8,9]
      }
    }

    render() {
        return (
            <View style={styles.container}>
                <Statusbar />
                <Title  {...this.props} tit={"浏览历史"} />
                <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.dat}
                keyExtractor={(item)=>item.toString()}
                renderItem={ (item) =><Item />}
                showsVerticalScrollIndicator= {false}
                onEndReachedThreshold={0.2} 
                onEndReached={()=>{ console.log("开始加载！") }}   
                />
			</View>
        )
    }
  }

  const styles = StyleSheet.create({
   	container:{
			flex: 1,
			justifyContent:'flex-start',
			alignItems: 'center',
			backgroundColor: '#ffffff',
    }
	
  })
  