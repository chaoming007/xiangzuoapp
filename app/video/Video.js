import React, { Component } from 'react'
import {
  StyleSheet,
  View,
	Dimensions,
  FlatList} from 'react-native'

import Search from '../components/Search'
import Videoitem from '../components/videoItem'
import Listitem from '../components/Listitem'
import Statusbar from '../components/Statusbar'
import Historypagemodel from '../page/Historypagemodel'

import {connect} from 'react-redux'
import {setSearchHistory} from '../store/Reducers'

import request from '../util/request'
import Loading from '../components/Loading'
import Downloading from '../components/Downloading'
import Nodata from '../components/Nodata'
import config from '../util/config'


const {width} = Dimensions.get('window')

class Video extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        listDat:[],   //列表渲染数据
        pageNum:70,   //第几页
        downTuff:true,        //加载更多控制
        noDataTuff:false,    //没有数据了
        refreshTuff:false,    //下拉刷新控制
        linkUrl:"Videodetail"
      }
    }
    componentDidMount() {
        this._requestDatFun("up")
    }

    _requestDatFun(direction){           //请求数据
        let params={
            size:config.pageSize,               //数据条数
            type:config.dataType[2].typenum,  //数据类型（0为资讯、1为音频、2为视频）
            opusId:this.state.pageNum          //第几页
        }
        request.get(config.listUrl,params).then((dat)=>{
            if(dat.data.errCode===0 && dat.data.errMsg==="成功"){
                let data=dat.data.data
                if(data.length<=0){
                    this.setState({
                        downTuff:false,
                        noDataTuff:true,
                        refreshTuff:false
                    })
                }else{
                    setTimeout(()=>{
                        this._renderDatFun(data,direction)
                    },500)
                }  
            }
        }).catch((err)=>{
            console.log(err)
        }) 
    }

    _renderDatFun(dat,direction){       //渲染数据处理
        let pageNum=this._minOpusIdFun(dat)   //获取最小id
        if(direction==="up"){       //上拉加载更多
            this.setState({
                downTuff:false,
                listDat:this.state.listDat.concat(dat),
                pageNum:pageNum
            })
        }
        if(direction==="down"){    //下拉刷新
            this.setState({
                refreshTuff:false,
                listDat:dat.concat(this.state.listDat),
                pageNum:pageNum
            })
        }
    }

    _minOpusIdFun(arr){    //选择最小opusId
        arr.forEach((item,key)=>{
            if(item.id<this.state.pageNum){
                this.state.pageNum=item.id
            }
        })
        return this.state.pageNum
    }

    _beginUpLoadFun(){    //开始上拉加载
        if(!this.state.downTuff && !this.state.noDataTuff && !this.state.refreshTuff){
            this.setState({
                downTuff:true
            })
            console.log("上拉加载")
            this._requestDatFun("up")
        }
    }       

    _beginDownRefreshFun(){       //下拉刷新
        if(!this.state.refreshTuff && !this.state.downTuff){
            this.setState({
                refreshTuff:true
            })
            console.log("下拉刷新")
            this._requestDatFun("down")
        }
    }  

    _renderListFun({item,index}){
        return index===0?<View style={styles.container}>    
            <View style={styles.contentBox}>
                <Videoitem 
                {...this.props} 
                renderDat={item} 
                linkUrl={this.state.linkUrl} 
                playTuff={true} 
                />
            </View>
            </View>:<View style={styles.contentBox}>
                    <Listitem 
                    renderDat={item} 
                    isImg={true} 
                    playTuff={true} 
                    {...this.props} 
                    linkUrl={this.state.linkUrl}
                    />
                </View>
    }

  render() {

    return (
      <View style={styles.container}>
        <Statusbar  />
        <Search {...this.props} />
        <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.listDat}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ (item) =>this._renderListFun(item)}
            showsVerticalScrollIndicator= {false}
            onEndReachedThreshold={0.2} 
            onRefresh={()=>{ this._beginDownRefreshFun() }}
            refreshing={this.state.refreshTuff}
            onEndReached={()=>{ this._beginUpLoadFun()}}   
            ListFooterComponent={ 
                ()=><View>
                <Downloading isVisited={this.state.downTuff} />
                <Nodata isVisited={this.state.noDataTuff} />
                </View>
            }
        />
      
        {/*搜索历史 start*/}
        <Historypagemodel {...this.props}/>
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
  