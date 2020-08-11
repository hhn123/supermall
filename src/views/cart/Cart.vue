<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLenght}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './cartComps/CartList'
  import CartBottomBar from './cartComps/CartBottomBar'
  import { mapGetters } from 'vuex'
    export default {
        name: "Cart",
        components:{
          NavBar,
          CartList,
          CartBottomBar
        },
        computed:{
          ...mapGetters(['cartLenght'])
        },


    }
</script>

<style scoped>
  #cart{
    height: 100vh;
  }
.cart-nav{
  background: var(--color-tint);
  color: #fff;
  font-size: 16px;
}
</style>
