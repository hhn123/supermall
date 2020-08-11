<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :class="{active:tabindex===index}" @click="clickTab(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabControl",
        data(){
          return{
            tabindex:0
          }
        },
        props:{
           titles:{
             type:Array,
             default(){
               return []
             }
           }
        },
        methods:{
          clickTab(index){
            this.tabindex = index
            this.$emit('tabclick',index);
          }
        }
    }
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}
  .tab-control-item{
    flex: 1;
  }
  .active span{
    color: var(--color-height-text);
    border-bottom: 1px solid red;
    padding: 3px;
  }
</style>
