<template>
  <div class="recommend">
    <div class="recommend-list" v-for="(item , index) in getRecommend" :key="index+1">
      <div class="recommend-img"><img :src="item.image" @load="itemImagLoad"/></div>
      <div class="recommend-title">{{item.title }}</div>
      <div class="recommend-info">
        <span class="recommend-price">￥{{item.price}}</span>
        <span class="recommend-sale"><img src='~assets/img/common/collect.svg' />{{item.itemSale}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailRecommendInfo",
        props:{
          getRecommend:{
            type:Array,
            default() {
              return[]
            }
          }
        },
        methods:{
          itemImagLoad(){
            this.$emit('imagesLoad');
          }
        }
    }
</script>

<style scoped>
  .recommend{
    display: flex;
    /*根据宽度 决定到底一行显示多少个*/
    flex-wrap: wrap;
    /*将一横行均等分*/
    justify-content:space-around ;
    padding:8px 1%;
  }
  .recommend-list{
    width: 48%;
  }
  .recommend-img img{
    width: 100%;
  }
 .recommend-title{
   margin-top: 5px;
   font-size: 12px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
 }
 .recommend-info{
   text-align: center;
   margin-bottom: 5px;
 }
  .recommend-price{
    color: var(--color-height-text);
    font-size: 12px;
    margin-right: 10px;
  }
  .recommend-sale{
    font-size: 12px;
  }
  .recommend-sale img{
    width: 14px;
    height: 14px;
    position: relative;
    top:1.5px;
  }
</style>
