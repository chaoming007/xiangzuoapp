import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
	View,
	ScrollView,
	Dimensions,
    Modal,
    StatusBar
} from 'react-native'

import Search from '../components/Search'
import Swiper from '../components/Swiper'
import Navlist from '../components/Navlist'
import Videoitem from '../components/videoItem'
import Scrollvideo from '../components/scrollVideo'
import Scrolllabel from '../components/Scrolllabel'
import Newsitem from '../components/Newsitem'
import Listitem from '../components/Listitem'
import Userlist from '../components/Userlist'
import Xinglinglist from '../components/Xinlinglist'
import Xinlingvideolist from '../components/Xinlingvideolist'
import Footline from '../components/Footline'
import Historypagemodel from '../page/Historypagemodel'
import Statusbar from '../components/Statusbar'
import {setSearchHistory} from '../store/Reducers'
import {connect} from 'react-redux'

import Entypo from 'react-native-vector-icons/Entypo'

const {height, width} = Dimensions.get('window')

class Home extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
       
      }
	}
    render() {

		let {state}=this.props

        return (
        <View style={styles.container}>
            <Statusbar  />
            <Search {...this.props} />
            
			<ScrollView
			showsVerticalScrollIndicator={false}
			>
				<View style={styles.container}>
					<Swiper />
				</View>
				<View style={styles.container}>
					<Navlist />
				</View>

				<View style={styles.container}>
					{/* 视觉盛宴 start  */}
						<View style={styles.contentBox}>
							{/* 标题 start  */}
								<View style={styles.titSty}>
											<Text style={styles.titH2}>视觉盛宴</Text>
											<View style={styles.titMore}>
												<Text style={styles.titMoreTxt}>更多</Text>
												<Entypo name="chevron-small-right" size={22} />
											</View>
								</View>
							{/* 标题 end  */}

								<Videoitem />
						</View>
					{/* 视觉盛宴 end */}
				</View>

				<View style={[styles.container,styles.videoBoxSty]}>
					<Scrollvideo />
				</View>
				<View style={[styles.container,styles.labelBoxSty]}>
					<Scrolllabel />
				</View>


				<View style={styles.container}>
					{/* 星座资讯 start  */}
						<View style={styles.contentBox}>
							{/* 标题 start  */}
								<View style={styles.titSty}>
											<Text style={styles.titH2}>星座资讯</Text>
											<View style={styles.titMore}>
												<Text style={styles.titMoreTxt}>更多</Text>
												<Entypo name="chevron-small-right" size={22} />
											</View>
								</View>
							{/* 标题 end  */}
							<Newsitem />

							<View>
								<Listitem />
								<Listitem isImg={true} />
							</View>

						</View>
					{/* 星座资讯 end */}
				</View>
				<View style={styles.container}>
					<Userlist />
				</View>


				<View style={styles.container}>

					{/* 聆听心灵 start  */}

							{/* 标题 start  */}
								<View style={styles.titSty}>
											<Text style={styles.titH2}>聆听心灵</Text>
											<View style={styles.titMore}>
												<Text style={styles.titMoreTxt}>更多</Text>
												<Entypo name="chevron-small-right" size={22} />
											</View>
								</View>
							{/* 标题 end  */}

							<Xinglinglist />

					{/* 聆听心灵 end */}

				</View>

				<View style={styles.container}>
					<Xinlingvideolist />
					<Footline />
				</View>

			</ScrollView>

			{/*搜索历史 start*/}
				<Historypagemodel />

			{/*搜索历史 end */}

		</View>
        )
    }
}

export default connect(state=>({state}),{setSearchHistory})(Home)



  const styles = StyleSheet.create({
   		container:{
			flex: 1,
			justifyContent:'flex-start',
			alignItems: 'center',
			backgroundColor: '#ffffff',
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
  