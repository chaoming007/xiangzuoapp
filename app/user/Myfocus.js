import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableHighlight
} from 'react-native'


import {connect} from 'react-redux'
import {setSearchHistory} from '../store/Reducers'



import Title from '../components/Pagetitle'
import Statusbar from '../components/Statusbar'



class Myfocus extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        
      }
  }
  _titRightBox(nag){
    return <TouchableHighlight 
    onPress={ ()=>{ nag.navigate("Addressbook") } }
    activeOpacity={1} 
    underlayColor="transparent">
        <Image  source={require("../assets/icon/Combined_Shape.png")} style={styles.rightIcon} />
    </TouchableHighlight>
  }

  render() {
    let {navigation}=this.props
    console.log(this.props)
    return (
        <View style={styles.container}>
            <Statusbar />
            <Title  {...this.props} tit={"我的关注"} rightIcon={this._titRightBox(navigation)} />
           <Text>我的关注</Text>
        </View>
    )
  }
}

export default connect(state=>({state}),{setSearchHistory})(Myfocus)

  const styles = StyleSheet.create({
   		container:{
			flex: 1,
			justifyContent:'flex-start',
			alignItems: 'center',
            backgroundColor: '#ffffff'
        },
        rightIcon:{
            width:21,
            height:21
        }
  })
  