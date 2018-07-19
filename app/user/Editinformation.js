import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    StatusBar,
    Image,
    TextInput,
    TouchableHighlight
} from 'react-native'


import {connect} from 'react-redux'
import {setSearchHistory} from '../store/Reducers'

import Picker from 'react-native-picker'
import ImagePicker from 'react-native-image-picker'
import photoOption from '../util/potoOption'

import area from '../util/area.json';
import Entypo from 'react-native-vector-icons/Entypo'

import Title from '../components/Pagetitle'
import Statusbar from '../components/Statusbar'

const {height, width} = Dimensions.get('window')

class Editinformation extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
          name:"",
          signtxt:"",          //签名
          gender:{             //性别
              title:"男",
              value:0
          },        
          date:["2010年","1月","1日"],
          areaVal:['北京', '北京', '东城区'],  //默认选择地区
          zzTuff:false
      }
    }


    _showGenderPicker(){                 //性别选择
        let _this=this
        _this.setState({
            zzTuff:true
        })
        Picker.init({
            pickerData:["男","女"],
            selectedValue: [_this.state.gender.title],
            pickerTitleText:"性别",
            pickerFontColor: [0, 0 ,0, 1],
            pickerBg:[255,255,255,1],
            pickerCancelBtnText:"取消",
            pickerConfirmBtnText:"选择",
            onPickerConfirm: (pickedValue, pickedIndex) => {     //选择
                _this.setState({
                    zzTuff:false,
                    gender:{
                        title:pickedValue.toString(),
                        value:pickedIndex.toString()
                    }
                })
            },
            onPickerCancel: (pickedValue, pickedIndex) => {     //取消
                console.log("关闭")
                _this.setState({
                    zzTuff:false
                })
            }
        })
        Picker.show()
    }

    _createDateData() {
        let date = [];
        for(let i=1950;i<2050;i++){
            let month = [];
            for(let j = 1;j<13;j++){
                let day = [];
                if(j === 2){
                    for(let k=1;k<29;k++){
                        day.push(k+"日");
                    }
                    if(i%4 === 0){
                        day.push(29+"日");
                    }
                }
                else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                    for(let k=1;k<32;k++){
                        day.push(k+"日");
                    }
                }
                else{
                    for(let k=1;k<31;k++){
                        day.push(k+"日");
                    }
                }
                let _month = {};
                _month[j+'月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i+'年'] = month;
            date.push(_date);
        }
        return date;
    }

    _createAreaData(){               //地点数据设置
        let data = [];
        let len = area.length;
        for(let i=0;i<len;i++){
            let city = [];
            for(let j=0,cityLen=area[i]['city'].length;j<cityLen;j++){
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }
            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    }
    _showAreaPicker(){                   //地区选择
        let _this=this
        _this.setState({
            zzTuff:true
        })
        Picker.init({
            pickerData: _this._createAreaData(),
            selectedValue: _this.state.areaVal,
            pickerTitleText:"地区选择",
            pickerFontColor: [0, 0 ,0, 1],
            pickerBg:[255,255,255,1],
            pickerCancelBtnText:"取消",
            pickerConfirmBtnText:"选择",
            onPickerConfirm:(pickedValue, pickedIndex)=> {
                _this.setState({
                    zzTuff:false,
                    areaVal:pickedValue
                })
            },
            onPickerCancel:(pickedValue, pickedIndex) => {
                console.log("关闭")
                _this.setState({
                    zzTuff:false
                })
            }
        })
        Picker.show()
    }

    _showDatePicker(){      //日期选择
        let _this=this
        _this.setState({
            zzTuff:true
        })
        Picker.init({
            pickerData: _this._createDateData(),
            pickerTitleText:"日期选择",
            pickerBg:[255,255,255,1],
            pickerFontColor: [0, 0 ,0, 1],
            pickerCancelBtnText:"取消",
            pickerConfirmBtnText:"选择",
            selectedValue:_this.state.date,
            onPickerConfirm: (pickedValue, pickedIndex) => {
                console.log(pickedValue)
                _this.setState({
                    zzTuff:false,
                    date:pickedValue
                })
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                console.log("关闭")
                _this.setState({
                    zzTuff:false
                })
            }
        })
        Picker.show()
    }

    _zzClickFun(){
       
        this.setState({
            zzTuff:false
        })
        Picker.hide()
    }

    _setNumFun(num){
        let n=parseInt(num)
        if(n<10){
            n="0"+n
        }
        return n
    }

    _chooseImageFun(){       //选择图片
        ImagePicker.showImagePicker(photoOption,(response)=>{
            if(response.didCancel) {
                console.log('用户取消了选择！');
            } else if (response.error) {
                alert("ImagePicker发生错误：" + response.error);
            } else if (response.customButton){
                alert("自定义按钮点击：" + response.customButton)
            } else {
                let source = {uri:response.uri};
                console.log(source)
            }
        })

    }


  render() {
	let {state}=this.props
    return (
        <View style={styles.container}>
            <Statusbar />
            <Title  {...this.props} tit={"编辑个人信息"} />
            

            <ScrollView>
                    <View style={styles.txWarpBox}>
                        <TouchableHighlight 
                        onPress={ ()=>{ this._chooseImageFun()  } }
                        activeOpacity={1} 
                        underlayColor="transparent">
                            <View style={styles.txImgBox}>
                                <Image source={require("../assets/img/123.jpg")} style={styles.txImg} />
                                <View style={styles.txBg}>
                                    <Image source={require("../assets/icon/photo.png")} style={styles.photoIcon} />
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.contentBox}>
                        <View style={styles.iputBox}>
                            <Text style={styles.inputTit}>姓名</Text>
                            <View style={styles.inputWarp}>
                                <TextInput
                                    style={styles.txtInpSty}
                                    onChangeText={(name) => this.setState({name})}
                                    placeholder={"请输入姓名"}
                                    autoCorrect={false}
                                />
                            </View>
                        </View>
                        <View style={styles.iputBox}>
                            <Text style={styles.inputTit}>签名</Text>
                            <View style={styles.inputWarp}>
                                <TextInput
                                    style={styles.txtInpSty}
                                    onChangeText={(signtxt) => this.setState({signtxt})}
                                    placeholder={"请输入签名"}
                                    autoCorrect={false}
                                />
                            </View>
                        </View>
                        <View style={styles.iputBox}>
                            <Text style={styles.inputTit}>性别</Text>
                            <TouchableHighlight 
                            onPress={ ()=>{ this._showGenderPicker()  } }
                            activeOpacity={1} 
                            underlayColor="transparent">
                                <View style={[styles.inputWarp,styles.inpSetSty]}>
                                    <Text style={styles.inpTxt}>{this.state.gender.title}</Text>
                                    <Image source={require("../assets/icon/Arrow_Small_Down.png")} style={styles.inpIcon} />
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.iputBox}>
                            <Text style={styles.inputTit}>生日</Text>
                            <TouchableHighlight 
                            onPress={ ()=>{ this._showDatePicker()  } }
                            activeOpacity={1} 
                            underlayColor="transparent">
                                <View style={[styles.inputWarp,styles.inpSetSty]}>
                                    <Text style={styles.inpTxt}>{this.state.date[0]+"-"+this._setNumFun(this.state.date[1])+"月-"+this._setNumFun(this.state.date[2])+"日"}</Text>
                                    <Image source={require("../assets/icon/Arrow_Small_Down.png")} style={styles.inpIcon} />
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.iputBox}>
                            <Text style={styles.inputTit}>所在地</Text>
                            <TouchableHighlight 
                            onPress={ ()=>{ this._showAreaPicker()  } }
                            activeOpacity={1} 
                            underlayColor="transparent">
                                <View style={[styles.inputWarp,styles.inpSetSty]}>
                                    <Text style={styles.inpTxt}>{this.state.areaVal[0]+"-"+this.state.areaVal[1]+"-"+this.state.areaVal[2]}</Text>
                                    <Image source={require("../assets/icon/Arrow_Small_Down.png")} style={styles.inpIcon} />
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>



            </ScrollView>
            {
                this.state.zzTuff?<View  style={styles.zzBox}></View>:""
            }
            

        </View>
    )
  }
}

export default connect(state=>({state}),{setSearchHistory})(Editinformation)

  const styles = StyleSheet.create({
   		container:{
			flex: 1,
			justifyContent:'center',
			alignItems: 'center',
            backgroundColor: '#ffffff'
        },
        txWarpBox:{
            justifyContent:'center',
            alignItems: 'center',
            width:width
        },
        txImgBox:{
            width:140,
            height:140,
            marginVertical: 25
        },
        txImg:{
            width:140,
            height:140,
            borderRadius: 70
        },
        txBg:{
            width:140,
            height:140,
            borderRadius: 70,
            backgroundColor:"rgba(175,0,255,0.8)",
            position:"absolute",
            top:0,
            left:0,
            justifyContent:"center",
            alignItems:"center"
        },
        photoIcon:{
            width:34,
            height:31
        },
        contentBox:{
            marginHorizontal: 56
        },
        iputBox:{
            marginBottom: 26
        },
        inputTit:{
            lineHeight:20,
            color:"#768196",
            fontSize: 12
        },
        inputWarp:{
            width:width-112,
            height:40,
            borderBottomColor: "#0D0E15",
            borderBottomWidth: 0.5
        },
        inpSetSty:{
            flexDirection: 'row',
            justifyContent:"space-between",
            alignItems:"center"
        },
        inpTxt:{
            lineHeight:20,
            color:"#0D0E15",
            fontSize:14
        },
        inpIcon:{
            width:22,
            height:22
        },
        txtInpSty:{
            height:40,
            lineHeight:40
        },
        pickSty:{
            backgroundColor:'red',
            height:40,
            lineHeight:40
        },
        zzBox:{
            width:width,
            height:height,
            backgroundColor:"rgba(0,0,0,0.5)",
            position:"absolute",
            top:0,
            left:0
        }
  })
  