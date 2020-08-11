import {request,getHomeGoods} from "./request";
// 请求多个数据
export function getHomeMultdata(){
  return  request({
    url:'/home/multidata'
  })
}
// 请求商品列表数据getHomeGoods
export function HgetHomeGoodsList(type,page) {
   return getHomeGoods({
     url:'/home/data',
     params:{
       type,
       page
     }
   })
}
