import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
	View,
	Image
} from 'react-native'

export default class Navlist extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
       
      }
    }

    render() {
			return (
				<View style={styles.container}>
						<View style={styles.navItem}>
							<Image source={require('../assets/icon/zhanbu.png')} style={styles.navImg} />
							<Text style={styles.navTxt}>占卜</Text>	
						</View>
						<View style={styles.navItem}>
							<Image source={require('../assets/icon/guaxiang.png')} style={styles.navImg} />
							<Text style={styles.navTxt}>卦象</Text>	
						</View>
						<View style={styles.navItem}>
							<Image source={require('../assets/icon/xingzuo.png')} style={styles.navImg} />
							<Text style={styles.navTxt}>星座</Text>	
						</View>
						<View style={styles.navItem}>
							<Image source={require('../assets/icon/yunshi.png')} style={styles.navImg} />
							<Text style={styles.navTxt}>运势</Text>	
						</View>
						<View style={[styles.navItem,styles.navLast]}>
							<Image source={require('../assets/icon/wuxing.png')} style={styles.navImg} />
							<Text style={styles.navTxt}>五行</Text>	
						</View>
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
      marginTop: 15,
			flexDirection: 'row',
			paddingLeft: 16,
			paddingRight: 16,
			paddingBottom: 40
    },
    navItem:{
			flex:1,
			marginRight: 14,
			flexDirection: 'column',
			height:77
		},
		navLast:{
			marginRight:0
		},
		navImg:{
			width:56,
			height:60
		},
		navTxt:{
			textAlign:"center",
			height:17,
			fontSize: 12,
			color:"#222222"
		}
   
  })
  