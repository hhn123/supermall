<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.href">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommendView",
        props:{
          recommends:{
            type:Array,
            default(){
              return []
            }
          }
        }
    }
</script>

<style scoped>
  .recommend{
    display: flex;
    font-size: 12px;
    padding: 10px 0 15px;
    border-bottom:8px solid #eee;
  }
  .recommend .recommend-item{
    flex: 1;
    text-align: center;
  }
  .recommend .recommend-item img{
    width: 70px;
    height: 70px;
  }
</style>
