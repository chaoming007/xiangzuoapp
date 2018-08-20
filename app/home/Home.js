import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
	View,
	ScrollView,
	Dimensions} from 'react-native'

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

import request from '../util/request'
import Loading from '../components/Loading'


import Entypo from 'react-native-vector-icons/Entypo'

const {width} = Dimensions.get('window')

class Home extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        isVisited:true,
        datJson:{}
      }
    }
    componentDidMount(){
        this._requestDatFun()
    }

    _requestDatFun(){           //请求数据
        request.get("http://111.231.193.35/thor-api/app/page/home").then((dat)=>{
            if(dat.data.errCode===0 && dat.data.errMsg==="ok"){
                this.setState({
                    isVisited:false,
                    datJson:{...dat.data.data}
                })
            }
        }).catch((err)=>{
            console.log(err)
        }) 
    }

    render() {

        return (
        <View style={styles.container}>
            <Statusbar  />
            <Search {...this.props} />
            <Loading isVisited={this.state.isVisited}/>
			<ScrollView
			showsVerticalScrollIndicator={false}
            >
                {/* 幻灯片 start  */}
				<View style={styles.container}>
					<Swiper {...this.props} picDat={this.state.datJson.frames || []}  />
                </View>
                {/* 幻灯片 end  */}
                
                {/* 类别导航 start  */}
				<View style={styles.container}>
					<Navlist />
                </View>
                {/* 类别导航 end  */}

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
  