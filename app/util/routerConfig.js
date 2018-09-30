import Tabbar from '../tabbar/Tabbar'
import Lookhistory from '../page/Lookhistory'
import Videodetail from '../video/Videodetail'
import Newsdetail from '../news/Newsdetail'
import Audiodetail from '../audio/Audiodetail'
import Membercenter from '../user/Membercenter'
import Setuppage  from '../user/Setuppage'
import Editinformation  from '../user/Editinformation'
import Addressbook  from '../user/Addressbook'
import Myfocus  from '../user/Myfocus'
import Usercollect  from '../user/Usercollect'
import Userregister  from '../login/Userregister'
import Login  from '../login/Login'
import Historysearch  from '../page/Historypagemodel'
import CardStackStyleInterpolator from "react-navigation/src/views/StackView/StackViewStyleInterpolator"

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

export default[
        {
            Tabbar: {  
                screen: Tabbar,
                navigationOptions:{             
                headerTitle:"首页"
                }
            },
            Lookhistory:{  
                screen: Lookhistory,
                navigationOptions:{         
                    headerTitle:"浏览历史"
                }
            },
            Videodetail:{
                screen:Videodetail,
                navigationOptions:{             
                    headerTitle:"视频详情",
                }
            },
            Newsdetail:{
                screen:Newsdetail,
                navigationOptions:{             
                    headerTitle:"资讯详情"
                }
            },
            Audiodetail:{
                screen:Audiodetail,
                navigationOptions:{             
                    headerTitle:"音频详情"
                }
            },
            Membercenter:{
                screen:Membercenter,        //会员中心
                navigationOptions:{             
                    headerTitle:"会员中心"
                }
            },
            Setuppage:{
                screen:Setuppage,        //设置
                navigationOptions:{             
                    headerTitle:"设置"
                }
            },
            Editinformation:{
                screen:Editinformation,        //编辑个人信息
                navigationOptions:{             
                    headerTitle:"编辑个人信息"
                }
            },
            Addressbook:{
                screen:Addressbook,        //关注通讯录
                navigationOptions:{             
                    headerTitle:"关注通讯录"
                }
            },
            Myfocus:{
                screen:Myfocus,        //我的关注
                navigationOptions:{             
                    headerTitle:"我的关注"
                }
            },
            Usercollect:{
                screen:Usercollect,        //用户收藏
                navigationOptions:{             
                    headerTitle:"收藏"
                }
            },
            Userregister:{
                screen:Userregister,        //用户注册
                navigationOptions:{             
                    headerTitle:"用户注册"
                }
            },
            Login:{
                screen:Login,        // 用户登录
                navigationOptions:{             
                    headerTitle:"用户登录"
                }
            },
            Historysearch:{
                screen:Historysearch,        // 搜索历史
                navigationOptions:{             
                    headerTitle:"搜索历史"
                }
            }
        },
        {
            transitionConfig:TransitionConfiguration,
            headerMode: 'none',       
            navigationOptions:{             
                // title:"标题",
                headerStyle:{backgroundColor:"#cc0000"},    //标题样式
                headerTitleStyle:{color:"#ffffff"}          
            }   
        }   
]