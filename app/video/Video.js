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
  StatusBar
} from 'react-native'

import Search from '../components/Search'
import Videoitem from '../components/videoItem'
import Scrollvideo from '../components/scrollVideo'
import Scrolllabel from '../components/Scrolllabel'
import Listitem from '../components/Listitem'
import Searchhistory from '../page/Searchhistory'
import Statusbar from '../components/Statusbar'
import Historypagemodel from '../page/Historypagemodel'

import {connect} from 'react-redux'
import {setSearchHistory} from '../store/Reducers'


import Entypo from 'react-native-vector-icons/Entypo'

const {height, width} = Dimensions.get('window')

class Video extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        dat:[0,1,2,3,4,5,6,7,8,9]
      }
  }
  _renderListFun({item}){
    if(item===0){
      return  <View style={styles.container}>    
                {/* 视觉盛宴 start  */}
                  <View style={styles.contentBox}>
                      <Videoitem {...this.props} linkUrl={'Videodetail'} playTuff={true} />
                  </View>
                {/* 视觉盛宴 end */}     
              </View>
    }else{
      return <View style={styles.contentBox}>
                <Listitem isImg={true} playTuff={true} {...this.props} />
            </View>
    }
  }

  render() {

	let {state}=this.props

    return (
      <View style={styles.container}>
        <Statusbar  />
        <Search {...this.props} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.dat}
          keyExtractor={(item)=>item.toString()}
          renderItem={ (item) =>this._renderListFun(item)}
          showsVerticalScrollIndicator= {false}
          onEndReachedThreshold={0.2} 
          onEndReached={()=>{ console.log("开始加载！") }}   
        />
      
        {/*搜索历史 start*/}
            <Historypagemodel />
        {/*搜索历史 end */}

      </View>
      
    )
  }
}

export default connect(state=>({state}),{setSearchHistory})(Video)

  const styles = StyleSheet.create({
   		container:{
			flex: 1,
			justifyContent:'flex-start',
			alignItems: 'center',
      backgroundColor: '#ffffff'
		},
		contentBox:{
      flex:1,
			flexDirection: 'column',
			marginHorizontal:16,
		},
		titSty:{
			 height:37,
			 width:width-32,
			 backgroundColor:"#ffffff",
			 flexDirection: 'row',
			 justifyContent:"space-between",
			 alignItems:"center",
			 marginBottom: 20,
		},
		titH2:{
			fontSize: 26,
			textAlign:"left",
			fontWeight:"bold"
		},
		titMore:{
			flexDirection: 'row',
			alignItems:"center",
			justifyContent:"flex-end"
		},
		titMoreTxt:{
			fontSize: 14,
		},
		videoBoxSty:{
			paddingBottom:16
		},
		labelBoxSty:{
			marginBottom:30
		},
		footBox:{
			flexDirection: 'row'
		}
  })
  