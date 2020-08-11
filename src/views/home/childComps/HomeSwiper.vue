<template>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
           <img :src="item.image" @load="imageLoad"/>
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
    import { Swiper, SwiperItem} from 'components/common/swiper/index'
    export default {
        name: "HomeSwiper",
        props:{
           banners:{
             type:Array,
             default (){
                return []
             }
           }
        },
        data(){
          return{
            isLoad:true
          }
        },
        methods:{
          imageLoad(){
            if(this.isLoad){
              this.$emit('imageLoad');
              this.isLoad = false;
            }
          }
        },
        components:{
          Swiper,
          SwiperItem
        }
    }
</script>

<style scoped>

</style>
