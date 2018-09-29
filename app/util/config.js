export default{
    homeUrl:"http://111.231.193.35/thor-api/app/page/home",     //首页

    //频道和搜索列表  (size:请求数量,type:数据类型、0为资讯、1为音频、2为视频，opusId为基准id, size=1&type=1&opusId=0)
    listUrl:"http://111.231.193.35/thor-api/opuses",

    contentUrl:"http://111.231.193.35/thor-api/opuses/{0}/content",  //详情页地址

    userInfoUrl:"http://111.231.193.35/thor-api/user/my/info/detail",//用户个人信息接口（需登录）
    


    pageSize:5,    //每页显示数据条数
    dataType:[        //(0为资讯、1为音频、2为视频）
        {   
            typename:"资讯",
            typenum:0
        },
        {   
            typename:"音频",
            typenum:1
        },
        {   
            typename:"视频",
            typenum:2
        }
    ]  
}        