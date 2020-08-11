<template>
  <div id="detail-nav-bar">
    <nav-bar>
      <div class="detail-nav-left" slot="left" @click="clickBack"><img src="~assets/img/common/back.svg" /></div>
      <div class="detail-nav-center" slot="center">
          <div class="detail-center-list" v-for="(item,index) in list"  @click="clickTitle(index)"  :class="{active:activeList===index}" >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
    import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: "DetailNavBar",
        components:{
          NavBar,
        },
        data(){
          return{
            list:['商品','参数','评论','推荐'],
            activeList:0
          }
        },
        methods:{
          clickBack(){
            // 第一种写法
            // history.back()
            // 第二种写法
            this.$router.back()
          },
          clickTitle(index){
            this.activeList = index;
             this.$emit('listenClick', index);
          }
        }
    }
</script>

<style scoped>
  .detail-nav-left{
    text-align: center;
  }
  .detail-nav-left img{
    vertical-align: middle;
  }
  .detail-nav-center{
    display: flex;
  }
  .detail-nav-center .detail-center-list{
    flex: 1;
    padding: 0 10px;
    font-size: 15px;
  }
  .active{
    color: var(--color-height-text);
  }
</style>
