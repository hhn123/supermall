import Vue from 'vue'
import VueRouter from 'vue-router'
// 用懒加载的方式引入文件
// const Home = ()=>import('views/home/Home');
// vuex配合webpack 实现按需加载实现方法
const Home = r => require.ensure([],() => r(require('views/home/Home')))
// 用懒加载的方式引入文件
const Category = ()=>import( 'views/category/Category');
const Cart = () =>import('views/cart/Cart');
const Profile = ()=>import('views/profile/Profile');
const Detail = ()=>import('views/detail/Detail');


// const home = r => require.ensure([],() => r(require('views/home/Home')))
Vue.use(VueRouter)

  const routes =  [
      // // 默认路径
      {
        path: '/',
        name: '',
        redirect:'/home'
      },
      // 首页
      {
        path:'/home',
        name:'home',
        component:Home
      },
      // 购物车
      {
        path:'/cart',
        name:'cart',
        component:Cart
      },
      // 我的
      {
        path:'/profile',
        name:'profile',
        component:Profile
      },
      // 分类
      {
        path:'/category',
        name:'category',
        component:Category
      },
       // 详情
      {
        path:'/detail/:iid',
        name:'detail',
        component:Detail
      }
    ]


const router = new VueRouter({
  mode: 'history', //去掉页面连接中的#
  base: process.env.BASE_URL,
  routes,
})

//解决路由重复问题 导航栏重复点菜单报错问题

const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
