<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeColorStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
          path:String,
          activeColor:{
            type:String,
            default:'red '
          }
        },
        computed:{
          isActive(){
             return this.$route.path.indexOf(this.path)!=-1
          },
          activeColorStyle(){
            return this.isActive ? { color:this.activeColor} : {}
          }
        },
        data(){
          return{
            // isActive:true
          }
        },
      methods:{
        itemClick(){
          // this.$router.replace(this.path)
          this.$router.push(this.path)
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  /*.active{*/
  /*  color: red;*/
  /*}*/
</style>
