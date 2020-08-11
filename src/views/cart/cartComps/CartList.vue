<template>
  <div class="cart-list">
    <scorll class="content" ref="scroll">
       <cart-list-item v-for="(item ,index) in getCartList" :key="index" :product="item" ></cart-list-item>
    </scorll>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Scorll from 'components/common/scroll/Scroll'
    import  CartListItem from './CartListItem'
    export default {
        name: "cartList",
        components:{
          CartListItem,
          Scorll
        },
        computed:{
          ...mapGetters(['getCartList'])
        },
        activated(){
           this.$refs.scroll.refresh();
        }

    }
</script>

<style scoped>
.cart-list{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
.content{
 height: 100%;
}
</style>
