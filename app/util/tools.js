/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-08-08 16:06:17 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-09-30 17:18:55
 */

import {PixelRatio} from 'react-native'

export const dp2px=(dp)=>{                      //dp转px
    return PixelRatio.getPixelSizeForLayoutSize(dp)
}
export const px2dp=(px)=>{                      //px转dp
    return PixelRatio.roundToNearestPixel(px)
}
export const filterHTMLTag=(msg)=>{       
    var msg = msg.replace(/<\/?[^>]*>/g, '')
    msg = msg.replace(/[|]*\n/, '') 
    msg = msg.replace(/&npsp;/ig, '')
    return msg;
}
export const filetTime=(tim)=>{
    return tim.replace(/T[^T]+/gi,"");
}

export const timeFormat=(tim)=>{       //视频时间格式化
    let timNum=parseInt(tim)
    let minuteNum=timNum/60<1 ? parseInt(timNum/60) : 0
    let secondNum=timNum%60==0 ? 0 : timNum%60
    minuteNum=minuteNum<10 ? "0"+minuteNum : minuteNum
    secondNum=secondNum<10 ? "0"+secondNum : secondNum
    return minuteNum + ":" + secondNum
}

export const trimStr=(str)=>{
    return str.replace(/(^\s*)|(\s*$)/gi,"")
}
