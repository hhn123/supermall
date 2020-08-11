<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        data(){
          return{
            scroll:null,
          }
        },
        props:{
          probeType:{
            type:Number,
            default:0
          },
          pullUpLoad:{
            type: Boolean,
            default: false
          }
        },
        mounted(){
          // 1、创建scroll对象
          // 第一种写法 不同页面也可能有class为wrapper 找到对应对内的div
          // this.scroll = new BScroll(document.querySelector('.wrapper'),{})
          // 第二种写法 使用
          this.scroll = new BScroll(this.$refs.wrapper,{
              // 要添加click属性等于true属性 否则 组件内的点击事件不可用
              click:true,
              // 设置 probeType属性值 当值为0时，不可监听，当值为1时 可以监听位置 但手指离开屏幕后惯性滚动位置不能监听，当等于3时，都可以监听
              probeType:this.probeType,
              // 上拉加载更多功能操作，当值为true 时，有该功能，false时没有
              pullUpLoad:this.pullUpLoad
          });
          // 2、监听滚动位置 固定写法 需要传递position参数
          if ( this.probeType === 2 || this.probeType===3){
            this.scroll.on('scroll',(position)=>{
              this.$emit('scroll',position);
            })
          };

          // 3、上拉加载更多 固定写法 pullingUp 参数
          if(this.pullUpLoad){
            this.scroll.on('pullingUp',()=>{
              this.$emit('loadUp')
            })
          }

        },
       methods:{
          // 回到顶部函数 体现封装思想
          scrollTo( x,y ,time=300 ){
            this.scroll && this.scroll.scrollTo( x,y,time);

          },
         //加载更多正常只可以执行一次所以每次需要重新加载数据的时候 需要重新执行 finishPullUp 方法
         finishPullUp(){
           this.scroll.finishPullUp()
         },
         // 解决scroll 页面滑动bug 需要每次加载完图片后 重新刷新一下页面高度
         refresh(){
           this.scroll &&  this.scroll.refresh();
         },
         // 获取滚动的高度
         getScrollHeight(){
            return this.scroll ? this.scroll.y : 0;
         }
       }
    }
</script>

<style scoped>

</style>
