import Toast from 'components/common/toast/Toast.vue'
const obj={}
obj.install = function(Vue){
   // 第一步 创建组件构造器
   const toastContrustor = Vue.extend(Toast);
   // 第二步 new的方式 根据组件构造器，可以创建出一个组件对象
   const toast = new toastContrustor();
   // 第三步 将组件对象手动挂载到某一个元素上
   toast.$mount(document.createElement('div'));
  // 第四步 toast.$el 对应的就是上面刚创建的div
   document.body.appendChild(toast.$el);
   Vue.prototype.$toast = toast
}
export default  obj
