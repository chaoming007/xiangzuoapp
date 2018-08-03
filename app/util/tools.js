import {PixelRatio} from 'react-native'

export const dp2px=(dp)=>{                      //dp转px
    return PixelRatio.getPixelSizeForLayoutSize(dp)
}
export const px2dp=(px)=>{                      //px转dp
    return PixelRatio.roundToNearestPixel(px)
}
