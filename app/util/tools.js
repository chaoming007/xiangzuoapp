/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-08-08 16:06:17 
 * @Last Modified by:   chaoming007@163.com 
 * @Last Modified time: 2018-08-08 16:06:17 
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
