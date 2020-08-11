import axios from 'axios'
// 创建首页多个信息数据实例
export function request(config) {
  // 1、创建axios的实例
  const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
      })
  // 2、axios的拦截器
  // 2.1请求拦截
  instance.interceptors.request.use(config=>{
     //拦截后要把数据返回出去 不然后边访问不到数据
     return config
  },err=>{

  })
  // 2.2响应拦截
  instance.interceptors.response.use(res=>{
    //最主要用的就是返回结果中的data
    return res.data //同样还要将结果返出去
  },err=>{

  })
  return instance(config)
}

// 创建首页商品分类的数据实例
export function getHomeGoods(config) {
  const getHomeGoodsList = axios.create({
    // baseURL:'http://152.136.185.210:8000/api/n3',
    baseURL:'http://152.136.185.210:8000/api/z8',
    timeout:5000
  })
   return  getHomeGoodsList(config)
}








