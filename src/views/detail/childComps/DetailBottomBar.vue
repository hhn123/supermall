<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div class="customer-service">
        <i class="icon service"></i>
        <span class="service-text">客服</span>
      </div>
      <div class="store">
        <i class="icon store-i"></i>
        <span class="store-text">店铺</span>
      </div>
      <div class="collection">
        <i class="icon collection-i"></i>
        <div class="collection-text">收藏</div>
      </div>
    </div>
    <div class="bar-right">
      <div class="shopping-cart" @click="addCar">
        <div class="add-shopping-cart" >加入购物车</div>
      </div>
      <div class="shop">
        <div class="shop-text">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
        methods:{
          addCar(){
            this.$emit('addCarThing');
          }
        }
    }
</script>

<style scoped>
.bottom-bar{
  display: flex;
  width: 100%;
  height: 58px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
}
.bar-left,.bar-right{
  flex: 1;
}
.bar-left , .bar-right{
 display: flex;
}
.bar-left>div {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service{
  background-position: 0px -54px;
}
.bar-left .store-i{
  background-position: 0px -100px;
}
.bar-left .collection-i{
  background-position: 0px -150px;
}
.bar-right .shopping-cart{
  width: 60%;
  background: yellow;
  text-align: center;
  line-height: 58px;
}
.bar-right .shop{
  width: 40%;
  text-align: center;
  line-height: 58px;
  background: var(--color-height-text);
  color: #fff;
}
</style>
