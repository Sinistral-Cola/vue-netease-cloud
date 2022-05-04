import axios from "axios";

const baseUrl=' http://localhost:3000'//base基础的，根的
//获取轮播图的api，type资源类型，对应以下类型，默认为0，为pc personal computer
//1：android 2.iPhone 3.ipad

//获取轮播图
export function getBanner(type=0) {//    type:指定参数默认值的第四种方法

//    1
    /*if(!type){
    type=0
    }
    * */
//    2 :  type=type?type:0
//    3:   type=type||0
// return axios.get(baseUrl+'/banner?type='+type)
return axios.get(`${baseUrl}/banner?type=${type}`)//字符串拼接用模板字符串
}
//获取歌单列表
export function getMusicList(limit=10) {
return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}
//获取歌单对应歌词
export function getPlayListDetail(id) {
return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}
//获取某歌歌词
export function getLyric(id) {
return axios.get(`${baseUrl}/lyric?id=${id}`)
}
//搜索歌曲
export function searchMusic(keyword) {
return axios.get(`${baseUrl}/search?keywords=${keyword}`)
}
//手机号登录
export function phoneLogin(phone,password) {
return axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`)
}
//我的界面  获取用户详情
export function userDetail(uid) {//代表uid
    return axios.get(`${baseUrl}/user/detail?uid=${uid}`)

}
// export function getData(type=0) {
// return axios.get(baseUrl+'/data')
// }

//export default 只能导出一个值
//export可以导出多个值