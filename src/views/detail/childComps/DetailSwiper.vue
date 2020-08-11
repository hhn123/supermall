<template>
  <div id="detail-swiper">
    <swiper class="big-swiper">
      <swiper-item v-for="item in detailItem">
          <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
    import {Swiper,SwiperItem} from 'components/common/swiper/index'
    export default {
        name: "DetailSwiper",
        components:{
          Swiper,
          SwiperItem
        },
        props:{
          detailItem:{
            type:Array,
            default(){
              return[]
            }
          }
        }

    }
</script>

<style scoped>
.big-swiper{
  height: 260px;
  overflow: hidden;
}
</style>
