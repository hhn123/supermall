<template>
  <div class="goods">
    <GoodsListItem class="goods-list" v-for="item in goodsList" :goods-item="item" />
  </div>
</template>

<script>
   import GoodsListItem from './GoodsListItem'
    export default {
        name: "GoodsList",
        components:{
          GoodsListItem
        },
        props:{
          goodsList:{
            type:Array,
            default(){
              return []
            }
          }
        }
    }
</script>

<style scoped>
 .goods{
   display: flex;
   /*根据宽度 决定到底一行显示多少个*/
   flex-wrap: wrap;
   /*将一横行均等分*/
   justify-content:space-around ;
   padding: 1%;
 }

</style>
