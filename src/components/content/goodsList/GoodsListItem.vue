<template>
  <div class="goods-item" @click="clickItem">
<!--    <img :src="goodsItem.show.img" @load="imgOnload"/>-->
<!--    用图片懒加载的方式-->
    <img v-lazy="goodsItem.show.img" @load="imgOnload"/>
    <div class="goodsinfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props:{
          goodsItem:{
            type:Object,
            default(){
              return {}
            }
          }
        },
        data(){
          return{
            iid:''
          }
        },
        methods:{
          imgOnload(){
            // $bus事件总线用法 将图片加载的事件发送给首页 在home 首页进行接收
            //路由监听 在不同页面调用goodsListItem 组件时，都需要发送不同的页面 进行事件的监听
            if(this.$route.path.indexOf('/home')){
              this.$bus.$emit('HomeImgItemOnload')
            }
            // else if(this.$route.path.indexOf('/')){
            //
            // }

          },
          clickItem(){
             this.$router.push('/detail/'+this.goodsItem.iid);
          }
       }
    }
</script>

<style scoped>
  .goods-item{
    width: 48%;
   }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goodsinfo {
     font-size: 12px;
     overflow: hidden;
     text-align: center;
    padding-bottom: 8px;
  }
  .goodsinfo p{
    line-height: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
    margin-top: 3px;
  }
  .goodsinfo .price{
    color: var(--color-height-text);
    margin-right: 20px;
  }
  .goodsinfo .collect{
    position: relative;

  }
  .goodsinfo .collect::before{
    content: '';
    width: 14px;
    height: 14px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
    position: absolute;
    left: -14px;
    top:-1px;
  }
</style>
