<template>
  <div id="home">
      <nav-bar class="home-nav">
        <div class="top-nav" slot="center">购物街</div>
      </nav-bar>
      <TabControl class="tab-control"
                  :titles="['流行','新款','精选']"
                  @tabclick="tabClickList"
                  ref="tabControl2" v-show="isShowControl">
      </TabControl>
      <scroll class="content"
              ref="scroll"
              @scroll="contentScroll"
              :probe-type="3"
              :pull-up-load="true" @loadUp="loadmore">
        <home-swiper :banners="banners"  @imageLoad="showImageLoad"/>
        <HomeRecommendView :recommends="recommends" />
        <fature-view></fature-view>
        <TabControl class="tab-control"
                    :titles="['流行','新款','精选']"
                    @tabclick="tabClickList" ref="tabControl1">
        </TabControl>
        <goods-list :goods-list="tabList" />
      </scroll>
      <BackTop @click.native="clickBack" v-show="isShowBackTop"/>
  </div>
</template>
<script>
    import HomeSwiper from './childComps/HomeSwiper'
    import HomeRecommendView from './childComps/HomeRecommendView'
    import FatureView from './childComps/FeatureView'

    import NavBar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodsList from 'components/content/goodsList/GoodsList'
    import Scroll from  'components/common/scroll/Scroll'
    import BackTop from 'components/common/backTop/BackTop'

    import {getHomeMultdata,HgetHomeGoodsList} from  'network/home.js'
    import {debounce} from 'common/utils'

    export default {
        name: "Home",
        components:{
          NavBar,
          HomeSwiper,
          HomeRecommendView,
          FatureView,
          TabControl,
          GoodsList,
          Scroll,
          BackTop
        },
        data(){
           return{
             banners:[],
             recommends:[],
             goods:{
               'pop':{page:0,list:[]},
               'new':{page:0,list:[]},
               'sell':{page:0,list:[]},
             },
             currenType:'pop',
             isShowBackTop:false,
             topHeight:0,
             isShowControl:false,
             scrollY:0,
             BACKTOP_DISTANCE:1500
           }
        },
        computed:{
          tabList(){
           return  this.goods[this.currenType].list
          }
        },
        created() {
          // 请求多个数据
          this.getHomeMultdata(),
          // 请求商品数据
          this.HomegetHomeGoodsList('pop'),
          this.HomegetHomeGoodsList('new'),
          this.HomegetHomeGoodsList('sell')

        },
        // 组件离开时将组件进行销毁 点击回来时进行重新创建 组件上用<keep-alive> 就不会将组件进行销毁
        destroyed(){
          console.log(11111)
        },
        // 处于活跃状态的路由
        activated(){
           this.$refs.scroll.scrollTo(0,this.scrollY,0);
           this.$refs.scroll.refresh();
           console.log(this.scrollY)
        },
       // 离开 的路由
        deactivated(){
           this.scrollY =this.$refs.scroll.getScrollHeight();
           console.log(this.scrollY);

        },
        mounted(){
          // 监听图片加载完成执行 GoodsListItem中传递过来的 imgOnload 重新改变scroll 的高度 解决滑动卡顿问题
          const refresh=debounce(this.$refs.scroll.refresh,200)
          this.$bus.$on('HomeImgItemOnload',()=>{
            refresh()
          })
        },
        methods:{
          // tabcontrol点击数据切换方法
          tabClickList(index){
              switch (index) {
                case 0:
                    this.currenType='pop'
                    break;
                case 1:
                    this.currenType='new';
                    break;
                case 2:
                   this.currenType='sell';
                   break;
              };
              this.$refs.tabControl2.tabindex=index;
              this.$refs.tabControl1.tabindex=index;
          },
          // 请求多个数据调用方法
          getHomeMultdata(){
            getHomeMultdata().then(res=>{
              this.banners = res.data.banner.list;
              this.recommends = res.data.recommend.list;
            })
          },
          // 请求商品列表数据
          HomegetHomeGoodsList(type){
            const page = this.goods[type].page + 1
            HgetHomeGoodsList(type,page).then(res=>{
              this.goods[type].list.push(...res.data.data.list);
              this.goods[type].page+=1;
              // 每次加载完数据需要重新调用 scroll 的 finishPullUp方法
              this.$refs.scroll.finishPullUp();
            })
          },
          // 返回顶部点击事件方法
          clickBack(){
            this.$refs.scroll.scrollTo(0,0,500);
          },
          // 返回顶部按钮显示与隐藏方法
          contentScroll(position){
            // 返回头部突标显示隐藏
            this.isShowBackTop = (-position.y) > this.BACKTOP_DISTANCE;
            // tab-control吸顶位置
            this.isShowControl =(-position.y) > this.topHeight
          },
          // 上拉加载更多方法
          loadmore(){
            console.log('加载更多');
            this.HomegetHomeGoodsList(this.currenType)
          },
          // tab-control 吸顶方法 $el 获取组件内元素
          showImageLoad(){
             this.topHeight = this.$refs.tabControl1.$el.offsetTop;
             console.log(this.topHeight);
          }
        }

    }
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
.home-nav{
   color: #fff;
   background-color: var(--color-tint);
   /*position: fixed;*/
   /*top:0;*/
   /*left:0;*/
   /*right:0;*/
   z-index: 9;
 }
  .tab-control{
    position: relative;
    top:0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .content{
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right:0;
    overflow: hidden;
  }
</style>
