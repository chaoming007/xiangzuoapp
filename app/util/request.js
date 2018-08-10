/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-08-08 16:06:29 
 * @Last Modified by: chaoming007@163.com
 * @Last Modified time: 2018-08-10 10:14:49
 */
import queryString from 'query-string'
export default{
    get(url,params){
        let requestUrl=""
        let datType={
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        if(params){
            requestUrl=url+"?"+queryString.stringify(params)
        }else{
            requestUrl=url
        }
        return fetch(requestUrl,datType)
        .then((response) => response.json())
        .then((data) =>data)
    },
    post(url,params){
        let datType={
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            } 
        }
        let obj=Object.assign({},datType,{body:JSON.stringify(params)})
        return fetch(url,obj)
        .then((response) => response.json())
        .then((data) =>data)       
    }
}