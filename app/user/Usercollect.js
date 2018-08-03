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
import { SwipeListView } from 'react-native-swipe-list-view'

class Usercollect extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        dat:[0,1,2,3,4,5,6,7,8,9]
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

                <SwipeListView
                    useFlatList
                    closeOnRowBeginSwipe={true}
                    data={this.state.dat}
                    renderItem={ (data) => (
                        <View style={styles.rowSty}>
                            <Text>范德萨范德萨发发</Text>
                        </View>
                    )}
                    renderHiddenItem={ (data) => (
                        <View style={styles.rowBack}>
                            <Text>Left</Text>
                            <Text>Right</Text>
                        </View>
                    )}
                    leftOpenValue={75}
                    rightOpenValue={-75}

                />

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
        }
  })
  