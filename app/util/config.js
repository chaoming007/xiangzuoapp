export default{
    homeUrl:"http://111.231.193.35/thor-api/app/page/home",     //首页

    //频道列表  (size:请求数量,type:数据类型、0为资讯、1为音频、2为视频，opusId为基准id, size=1&type=1&opusId=0)
    listUrl:"http://111.231.193.35/thor-api/opuses",

    contentUrl:"http://111.231.193.35/thor-api/opuses/{0}/content",  //详情页地址
    
    
    videoUri:"http://1251180858.vod2.myqcloud.com/4180480evodtransgzp1251180858/e56f49315285890781637511664/v.f20.mp4", //视频默认地址


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