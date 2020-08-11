<template>
  <div class="cart-list-item">
    <div class="check-list-button" >
      <check-button class="check"  @click.native="clickCheck" :is-checked ="product.isChecked"></check-button>
    </div>
    <div class="cart-list-images">
       <img :src="product.image" />
    </div>
    <div class="cart-info-list">
      <div class="cart-title-top">{{product.title}}</div>
      <div class="describe">{{product.desc}}</div>
      <div class="list-info-list">
        <span class="money">¥{{product.price}}</span>
        <span>×{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    import CheckButton from 'components/content/checkButton/CheckButton'
    export default {
        name: "CartListItem",
        components:{
          CheckButton
        },
        props:{
          product:{
            type:Object,
            default(){
              return []
            }
          }
       },
       methods:{
         clickCheck(){
           console.log(this.product);
           this.product.isChecked=!this.product.isChecked
         }
       }
    }
</script>

<style scoped>
.cart-list-item{
  padding: 5px;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.check-list-button{
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-list-images {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.cart-list-images img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px
}
.cart-info-list {
  font-size: 16px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.cart-info-list .cart-title-top,.describe{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  }
.cart-info-list .describe{
  font-size: 14px;
  color: #666;
  margin-top: 14px;
}
  .list-info-list{
    display: flex;
    font-size: 16px;
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    justify-content: space-between;
  }
  .money{
    color: orangered;
  }

</style>
