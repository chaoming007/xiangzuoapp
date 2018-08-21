import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
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
import config from '../util/config'

import Entypo from 'react-native-vector-icons/Entypo'

const {width} = Dimensions.get('window')

class Home extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        isVisited:true,
        datJson:{},
        videoFirstDat:"",   //视觉盛宴第一条数据
        videoListDat:[],     //视觉盛宴列表
        newFirstDat:"",      //资讯第一条数据额
        newListDat:[]       //资讯数据列表
      }
    }
    componentDidMount(){
        this._requestDatFun()
    }

    _requestDatFun(){           //请求数据
        request.get(config.homeUrl).then((dat)=>{
            if(dat.data.errCode===0 && dat.data.errMsg==="ok"){
                let data=dat.data.data
                this.setState({
                    isVisited:false,
                    datJson:{...data}
                })
                this._setDatFun(data)
            }
        }).catch((err)=>{
            console.log(err)
        }) 
    }
    _setDatFun(dat){              //设置频道渲染数据
        let firstVideoDat=dat.videos.slice(0,1)[0]
        let listVideoDat=dat.videos.slice(1)
        let firstNewDat=dat.articles.slice(0,1)[0]
        let listNewDat=dat.articles.slice(1)
        this.setState({
            videoFirstDat:firstVideoDat,
            videoListDat:listVideoDat,
            newFirstDat:firstNewDat,
            newListDat:listNewDat
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
				{ /*<View style={styles.container}>
					<Navlist />
                </View>*/
                }
                {/* 类别导航 end  */}

                {/* 视觉盛宴 start  */}

                    <View style={styles.container}>
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
                             
                                <Videoitem 
                                playTuff={true} 
                                linkUrl={"Videodetail"} 
                                {...this.props} 
                                renderDat={this.state.videoFirstDat} />
                                
                            </View>
                    </View>

                    <View style={[styles.container,styles.videoBoxSty]}>
                        <Scrollvideo {...this.props} renderDat={this.state.videoListDat} />
                    </View>

                    {
                    /*<View style={[styles.container,styles.labelBoxSty]}>
                        <Scrolllabel />
                    </View>*/
                    }
                    
                {/* 视觉盛宴 end */}

                {/* 星座资讯 start  */}

				<View style={styles.container}>
					
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
							<Newsitem {...this.props} renderDat={this.state.newFirstDat} />
                            <View>
                                {
                                    this.state.newListDat.map((item,key)=>{
                                        return <Listitem 
                                                linkUrl={"Newsdetail"} 
                                                renderDat={item} 
                                                {...this.props} 
                                                isImg={true} 
                                                key={key} />
                                    })
                                }
							</View>

						</View>
                </View>

                {/*
                    <View style={styles.container}>
                        <Userlist />
                    </View>
                */}

                {/* 星座资讯 end */}



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
  