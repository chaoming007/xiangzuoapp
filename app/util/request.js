/*
 * @Author: chaoming007@163.com 
 * @Date: 2018-08-08 16:06:29 
 * @Last Modified by:   chaoming007@163.com 
 * @Last Modified time: 2018-08-08 16:06:29 
 */
import queryString from 'query-string'
export default{
    get(url,params){
        let requestUrl=url+"?"+queryString.stringify(params);
        return fetch(requestUrl)
        .then((response) => response.json())
        .then((data) =>data)
    },
    post(url,params){
        let dat={
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            } 
        }
        let obj=Object.assign({},dat,{body:JSON.stringify(params)});
        return fetch(url,obj)
        .then((response) => response.json())
        .then((data) =>data)       
    }
}