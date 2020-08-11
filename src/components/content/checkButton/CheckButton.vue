<template>
  <div class="check-button"  :class="{ checked:isChecked }" >
     <img src="~assets/img/cart/tick.svg"/>
  </div>
</template>

<script>
    export default {
        name: "CheckButton",
        props:{
          isChecked:{
            type:Boolean,
            default:false
          }

        }
    }
</script>

<style scoped>
.check-button{
   width: 15px;
   height: 15px;
   border: 2px solid #ccc;
   background: #fff;
   position: relative;
   border-radius: 100%;
}
.check-button img{
  width: 100%;
  border-radius: 100%;
}
  .checked{
    border: 2px solid red;
    background: red;
  }
</style>
