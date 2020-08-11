<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img :src="shopInfo.logo" />
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-info-list">
      <div class="shop-middle-item shop-info-left">
        <div class="info-sells">
           <div class="sells-count">{{shopInfo.sells | sellCountFilter}}</div>
           <div class="sells-text">总销量</div>
          </div>
          <div>
           <div class="sells-count">{{shopInfo.goodsCount}}</div>
           <div class="sells-text">全部宝贝</div>
         </div>
      </div>
      <div class="shop-middle-item shop-info-right">
        <table>
          <tr v-for="(item,index) in shopInfo.score" :key="index">
            <td width="60%" class="score-name">{{item.name}}</td>
            <td width="30%" class="reasonable" :class="{qualified:item.isBetter}">{{item.score}}</td>
            <td  class="satisfaction" :class="{right:item.isBetter}">{{item.isBetter ? '高' :'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="into-shop">进店逛逛</div>
  </div>
</template>

<script>
    export default {
        name: "DetailShopInfo",
        props:{
          shopInfo:{
            type:Object,
            default(){
              return {}
             }
          }
        },
        filters:{
          sellCountFilter(value){
            if(value<10000) {
              return value
            }
            return (value/10000).toFixed(1)+'万'
          }
        }
    }
</script>

<style scoped>
  .shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-logo{
    line-height: 45px;
    display: flex;
    align-items: center;
  }
.shop-logo img{
  width: 45px;
  height: 45px;
  border-radius: 100%;
  border: 1px solid rgba(0,0,0,.1);
}
.shop-logo span{
  margin-left: 4px;
  vertical-align: center;
}
  .shop-info-list{
    display: flex;
  }
  .shop-middle-item{
    flex: 1;
   margin-top: 20px;
  }
  .shop-info-left{
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .sells-count{
    font-size: 16px;
    font-weight: bold;
    line-height: 40px;
  }
  .sells-text{
    font-size: 14px;
  }
  .shop-info-right{
    width: 120px;
    margin-left: 20px;
  }
  .shop-info-right table tr td{
    font-size: 13px;
    padding: 2px 0;
  }
  .satisfaction{
    color: #fff;
    background-color:#42b983 ;
    padding: 0;
  }
  .reasonable{
    color: #42b983;
  }
  .right{
    color: #fff;
    background-color: red;
    padding: 0;
  }
  .qualified{
    color: red;
  }
  .score-name{
    font-weight: bold;
  }
 .into-shop{
   padding:6px 15px;
   background-color: #e2e2e2;
   color: #222;
   text-align: center;
   width: 30%;
   margin: 0px auto;
   border-radius: 12px;
   font-size: 14px;
   margin-top: 30px;
 }
</style>
