<template>
  <div id="app">
<!--    exclude="Detail" 将某个组件排除在外-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar class="tab-nav"/>
  </div>
</template>
<script>

   import MainTabBar from  'components/content/mainTabbar/MainTabBar';
   export default {
     name:'App',
     components:{
       MainTabBar
     }
   }
</script>
<style scoped lang="scss">
@import "assets/css/base.css";
.tab-nav{
  z-index: 9;
}
</style>
