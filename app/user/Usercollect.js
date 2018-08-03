import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    FlatList,
    TouchableHighlight
} from 'react-native'



import {connect} from 'react-redux'
import {setSearchHistory} from '../store/Reducers'
const {width} = Dimensions.get('window')


import Title from '../components/Pagetitle'
import Statusbar from '../components/Statusbar'
import Item from '../components/collectItem'

class Usercollect extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        dat:[0,1,2]
      }
  }
  _titRightBox(nag){
    return <TouchableHighlight 
    onPress={ ()=>{  } }
    activeOpacity={1} 
    underlayColor="transparent">
        <Text style={styles.rightTxt}>编辑</Text>
    </TouchableHighlight>
  }

  render() {
    let {navigation}=this.props

    console.log(this.props)

    return (
        <View style={styles.container}>
            <Statusbar />
            <Title  {...this.props} tit={"收藏"} rightIcon={this._titRightBox(navigation)} />

            <View style={styles.listBox}>

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
        </View>
    )
  }
}

export default connect(state=>({state}),{setSearchHistory})(Usercollect)

  const styles = StyleSheet.create({
   		container:{
			flex: 1,
			justifyContent:'flex-start',
			alignItems: 'center',
            backgroundColor: '#ffffff'
        },
        rightTxt:{
            fontSize: 14,
            lineHeight:22,
            color:"#0D0E15"
        },
        rowSty:{
            alignItems: 'center',
            backgroundColor: '#CCC',
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            justifyContent: 'center',
            height: 50,
            width:width
        },
        rowBack: {
            alignItems: 'center',
            backgroundColor: '#DDD',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 15,
        },
        listBox:{
            margin:0,
        }
  })
  