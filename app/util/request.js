/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-08-08 16:06:29 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-08-10 11:09:48
 */
import queryString from 'query-string'
import axios from 'axios'

axios.defaults.timeout = 5000

axios.interceptors.request.use((config)=>{
    return config;
},(error)=>{
    return Promise.reject(error);
})

axios.interceptors.response.use((response)=>{
    return response;
},(error)=>{
    return Promise.reject(error);
})

export default{
   get(url,params){
        let urlVal=""
        if(params && typeof params=="object"){
            urlVal=url+"?"+queryString.stringify(params)
        }else{
            urlVal=url
        }
        return axios.get(urlVal) 
   },
   post(url,params){
        if(url){
            return axios.post(url,params)
        }
   }
}
    // get(url,params){
    //     let requestUrl=""
    //     let datType={
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
	// 	        "mode":"cors"
    //         }
    //     }
    //     if(params && typeof params=="object"){
    //         requestUrl=url+"?"+queryString.stringify(params)
    //     }else{
    //         requestUrl=url
    //     }
    //     return fetch(requestUrl,datType)
    //     .then((response) => response.json())
    //     .then((data) =>data)
    // },
    // post(url,params){
    //     let datType={
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         } 
    //     }
    //     let obj=Object.assign({},datType,{body:JSON.stringify(params)})
    //     return fetch(url,obj)
    //     .then((response) => response.json())
    //     .then((data) =>data)       
    // }
