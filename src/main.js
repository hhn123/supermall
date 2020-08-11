import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 图片懒加载的引入
import vueLazyLoad from 'vue-lazyload'
// 引入要封装的弹框js 文件
import toast from 'components/common/toast/index'
Vue.config.productionTip = false
// Vue 实例是可以当作事件总线的
Vue.prototype.$bus=new Vue();
// 注册 使用 弹框toast 一旦use使用 就会调用install 函数
Vue.use(toast);
Vue.use(vueLazyLoad,{
  // 加载的图片未能显示时 显示的图片
  loading:require('./assets/img/common/placeholder.png')
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
