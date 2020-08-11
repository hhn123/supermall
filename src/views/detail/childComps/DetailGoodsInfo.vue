<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div v-for="item in detailInfo.detailImage">
      <div class="goods-effect">{{item.key}}</div>
      <div class="image-list" v-for="(itemImg, index) in item.list">
         <img :src="itemImg" @load="imgLoad"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
        props:{
          detailInfo:{
            type:Object,
            default(){
              return{}
            }
          }
        },
        data(){
          return{
            imgLenght:0,
            counter:0
          }
        },
        methods:{
          imgLoad(){
            this.counter+=1;
            if(this.counter === this.imgLenght){
               this.$emit('imgLoad');
            }
          }
        },
        // 监听属性的改变
        watch:{
          detailInfo(){
            //获取图片的个数
            for(let i in this.detailInfo.detailImage ){
              // console.log(this.detailInfo.detailImage[i].list);
              this.imgLenght=this.detailInfo.detailImage[i].list.length;
            }
          }
        }
    }
</script>

<style scoped>
  .goods-info{
    border-bottom: 5px solid #f2f5f8;
  }
  .info-desc{
    padding: 20px 15px;
  }
 .start{
   width: 90px;
   height: 1px;
   background: #ccc;
   position: relative;
 }
 .desc{
   padding: 20px 0px;
 }
  .end{
    width: 90px;
    height: 1px;
    background: #ccc;
    right: 0;
    float: right;
    position: relative;
  }
  .info-desc .end::after ,.info-desc .start::before{
    content: '';
    width: 5px;
    height: 5px;
    background-color: #222;
    position: absolute;
    bottom: 0;
  }
  .info-desc .end::after{
    right: 0;
  }
  .goods-effect{
    padding: 10px 15px;
    font-size: 14px;
  }
  .image-list img{
    width: 100%;
  }
</style>
