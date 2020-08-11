<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav" @listenClick="listenClick" ref="nav"></detail-nav-bar>
      <scroll class="content" ref="scroll" :probe-type="3" @scroll="scrollPosition">
        <detail-swiper :detail-item="this.infoBannerList"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shopInfo="shop"></detail-shop-info>
        <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
        <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
        <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
        <detail-recommend-info :getRecommend="getRecommend" @imagesLoad="imgLoad" ref="recommend"></detail-recommend-info>
      </scroll>
    <detail-bottom-bar @addCarThing="addCarThing"></detail-bottom-bar>
    <back-top @click.native="clickBack" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailGoodsInfo from './childComps/DetailGoodsInfo'
    import DetailParamInfo from './childComps/DetailParamInfo'
    import DetailCommentInfo from './childComps/DetailCommentInfo'
    import DetailRecommendInfo from './childComps/DetailRecommendInfo'
    import DetailBottomBar from './childComps/DetailBottomBar'

    import Scroll from 'components/common/scroll/Scroll'

    import {getDetail,Goods,Shop,GoodsParam,_getRecommend} from  'network/detail'
    import {BackTopMixin} from '@/common/mixin.js'
    import {mapActions} from 'vuex'

    export default {
        name: "Detail",
        components:{
          DetailNavBar,
          DetailSwiper,
          DetailBaseInfo,
          DetailShopInfo,
          Scroll,
          DetailGoodsInfo,
          DetailParamInfo,
          DetailCommentInfo,
          DetailRecommendInfo,
          DetailBottomBar,

        },
        //混入
        mixins:[BackTopMixin],
        data(){
          return{
            iid:null,
            infoBannerList:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            getRecommend:[],
            getScrolly:[],
            debounceScrolly:null,
            currentIndex:0
          }
        },
        created() {
          // 第一步保存传过来的iid
          this.iid = this.$route.params.iid;
          // 第二步根据iid 请求数据
          this.dataDetailPage(this.iid);
          this._getRecommend();

        },
         methods:{
          ...mapActions(['addCart']),
          // 数据获取
           dataDetailPage (id){
             getDetail(id).then(res =>{
               // 2.1.获取结果
               const data = res.data.result;
               // 2.2获取顶部轮播图片
               this.infoBannerList=data.itemInfo.topImages;
               // 2.3.获取商品信息
               this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
               // 2.4.获取店铺信息
               this.shop = new Shop(data.shopInfo);
               // 2.5 获取商品详细信息
               this.detailInfo=data.detailInfo;
               //2.6 获取商品参数信息
               this.paramInfo=new GoodsParam(data.itemParams.info, data.itemParams.rule);
               // 2.7 用户评价
               if(data.rate.list){
                 this.commentInfo=data.rate.list[0];
               }
             },err=>{
               console.log(err);
             });
           },
           _getRecommend(){
             _getRecommend().then(res => {
               this.getRecommend=res.data.data.list
               // console.log(this.getRecommend);
             },err =>{
                console.log(err)
             })
           },
           // 图片加载 刷新高度
           imgLoad(){
             this.$refs.scroll.refresh();
             //获取头部导航的点击位置的高度
             this.getScrolly=[];
             this.getScrolly.push(0);
             this.getScrolly.push(this.$refs.param.$el.offsetTop);
             this.getScrolly.push(this.$refs.comment.$el.offsetTop);
             this.getScrolly.push(this.$refs.recommend.$el.offsetTop);
             // this.getScrolly.push(Number.MAX_VALUE)
           },
           // 头部导航点击跳转到详细位置
           listenClick(index){
             this.$refs.scroll.scrollTo(0,-this.getScrolly[index],500)
           },
           scrollPosition(position){
            let length = this.getScrolly.length;
             for(var i = 0; i < length;i++){
               if(this.currentIndex != i && ((i < length -1 &&  -position.y >= this.getScrolly[i] && -position.y <= this.getScrolly[i+1] ) || (i===length-1 && -position.y >=this.getScrolly[i] ))){
                 this.currentIndex=i;
                 this.$refs.nav.activeList= this.currentIndex;
               }
             };
             this.fromBackTop(position);
           },
           addCarThing(){
             const product ={};
             product.image=this.infoBannerList[0];
             product.title=this.goods.title;
             product.desc=this.goods.desc;
             product.price=this.goods.nowPriceL;
             product.desc = this.goods.desc;
             product.iid=this.iid;
             // console.log(product);
             // this.$store.commit('addCart',product);
             this.addCart(product).then(res=>{
               console.log(res);
               this.$toast.show(res);
             },err=>{})
             //不用mapActions 的写法
             // this.$store.dispatch('addCart',product).then(res=>{
             //   console.log(res);
             // },err=>{
             //
             // })

           }
         }
    }
</script>

<style scoped>
  #detail{
    height: 100vh;
    position: relative;
    z-index: 99;
    background-color: #fff;
  }
  .detail-nav{
    position: relative;
    top:0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: #fff;
  }
.content{
  position: absolute;
  top:44px;
  bottom: 58px;
  right: 0;
  left: 0;
  overflow: hidden;
}
  {
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);

  }
</style>
