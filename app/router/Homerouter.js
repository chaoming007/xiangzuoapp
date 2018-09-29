import {
  Dimensions
} from 'react-native'

import { createStackNavigator} from 'react-navigation'
import CardStackStyleInterpolator from "react-navigation/src/views/StackView/StackViewStyleInterpolator"
import Router from '../util/routerConfig'

const TransitionConfiguration = () => ({
    screenInterpolator:(sceneProps) => {
        const { scene } = sceneProps;
        const { route } = scene;
        const params = route.params||{}
        const transition = params.transition || 'forHorizontal'
        return CardStackStyleInterpolator[transition](sceneProps)
        // forHorizontal,
        // forVertical,
        // forFadeFromBottomAndroid,
        // forFade,
    }
})

export default createStackNavigator(  
    Router,
    {
        transitionConfig:TransitionConfiguration,
        headerMode: 'none',       
        navigationOptions:{             
            // title:"标题",
            headerStyle:{backgroundColor:"#cc0000"},    //标题样式
            headerTitleStyle:{color:"#ffffff"}          
        }   
    }   
)

  