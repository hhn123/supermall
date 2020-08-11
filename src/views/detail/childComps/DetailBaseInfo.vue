<template>
  <div v-if="Object.keys(goods).length!==0" class="detail-base-info">
    <div class="goodsTitle">{{goods.title}}</div>
    <div class="all-price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="activity" v-if="goods.discount" :style="{background:goods.background}">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span v-for="item in goods.columns">{{item}}</span>
    </div>
    <div class="info-service">
      <div class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo",
        props:{
          goods:{
            type:Object,
            default(){
              return{}
            }
          }
        }
    }
</script>

<style scoped>
  .detail-base-info{
    border-bottom: 5px solid #f2f5f8;
  }
  .goodsTitle{
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    padding: 10px 8px;
    color: #222;
   }
  .all-price{
    padding: 0px 10px;
    position: relative;
  }
  .newPrice{
    font-size: 24px;
    color: var(--color-height-text);
  }
  .oldPrice{
    font-size: 15px;
    text-decoration:line-through;
    color: #ccc;
    margin-left: 10px;
  }
  .activity{
    border-radius: 8px;
    padding:2px 4px;
    color: #fff;
    font-size: 12px;
    margin-left: 5px;
    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -4px;
  }
  .info-other{
    width: 96%;
    display: flex;
    margin: 0 auto;
    font-size: 14px;
    padding: 10px 0;
    margin-top: 10px;
    border-bottom:1px solid rgba(100,100,100,0.2);
    justify-content: space-between;
  }
 .info-service{
   display: flex;
   font-size: 14px;
   font-weight: 800;
   justify-content: space-between;
   padding: 30px 8px;
 }
  .info-service img{
    width: 14px;
    height: 14px;
    position: relative;
    top:2px;
  }
  .info-service span{
    color: #333;
    margin-left: 3px;
  }
</style>
