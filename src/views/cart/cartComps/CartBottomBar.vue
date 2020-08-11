<template>
  <div class="bottom-bar">
    <div class="bar-checked" @click="selectAllBtn">
      <check-button :class="{allSelect:allSelect}"
                    :is-checked="allSelect"
                     >
      </check-button>
      <span>全选</span>
    </div>
    <div class="all-price">
     合计:{{totolePrice}}
    </div>
    <div class="to-computed" @click="computeNum">
       去计算({{toComputed}})
    </div>
  </div>
</template>

<script>
    import CheckButton from 'components/content/checkButton/CheckButton'
    import { mapGetters } from 'vuex'
    export default {
        name: "CartBottomBar",
        components:{
          CheckButton
        },
        computed:{
          ...mapGetters(['getCartList']),
          totolePrice(){
             return '￥'+ this.getCartList.filter(item => {
               return item.isChecked
             }).reduce((preValue,item)=>{
               return preValue + item.price*item.count
             },0).toFixed(2);
          },
          toComputed(){
            return this.getCartList.filter(item =>{
              return item.isChecked
            }).length
          },
          allSelect(){
            if( this.getCartList.length === 0){
              return false;
            }
            return ! this.getCartList.find( item=>{
               return !item.isChecked
            })
          }
        },
        methods:{
          selectAllBtn(){
            if(this.allSelect){ //全部选中
               this.getCartList.forEach( item =>{
                item.isChecked = false;
               })
            }else {
              this.getCartList.forEach( item =>{
                 item.isChecked = true;
              })
            }
          },
          computeNum(){
            if(this.toComputed===0){
              this.$toast.show('请先选择商品');
            }
          }
        }
    }
</script>

<style scoped>
.bottom-bar{
  position: relative;
  display: flex;
  height: 40px;
  background: #eee;
  font-size: 14px;
  padding: 0 0px 0 8px;

}
  .bar-checked{
    display: flex;
    align-items: center;
    width: 60px;
  }
  .bar-checked span{
    line-height: 20px;
    margin-left: 3px;
  }
  .all-price{
    flex: 1;
    line-height: 40px;
    padding-left: 10px;
  }
  .to-computed{
    width: 100px;
    background: orangered;
    color: #fff;
    line-height: 40px;
    text-align: center;
  }

</style>
