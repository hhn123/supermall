<template>
  <div class="comment-info" >
    <div class="comment-name" >
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="comment-list" v-if="Object.keys(commentInfo).length !==0 ">
      <div class="comment-user">
        <div class="comment-user-img"><img :src="commentInfo.user.avatar"/></div>
        <div>{{commentInfo.user.uname}}</div>
      </div>
      <div class="comment-text">
        <div class="comment-text-box">{{commentInfo.content}}</div>
        <div class="comment-list-user">
          <div class="comment-time">{{commentInfo.created | showDate}}</div>
          <div>{{commentInfo.style}}</div>
        </div>
        <div class="user-box-view">
          <div class="user-back-img" v-for="img in commentInfo.images">
           <img :src="img" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="nullSpeak">
      暂时还未有评论哦！
    </div>
  </div>
</template>

<script>
    import {formatDate} from  '@/common/utils'
    export default {
        name: "DetailCommentInfo",
        props:{
          commentInfo:{
            type:Object,
            default(){
              return{}
            }
          }
        },
      filters:{
        showDate: function (value) {
          let date = new Date(value*1000);
          return formatDate(date, 'yyyy-MM-dd hh:mm')
        }
      }
    }
</script>

<style scoped>
  .comment-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }
  .comment-name{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f2f5f8;
  }
  .comment-name div{
    font-size: 15px;
  }
  .comment-user{
    display: flex;
    padding: 15px 0 8px 0px;
    /*//文字和图片 竖列居中*/
    align-items: center;
  }
  .comment-user .comment-user-img img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 4px;
  }
  .comment-text{
    width: 100%;
    line-height: 24px;
    margin-bottom: 10px;
  }
  .comment-text-box{
    /*多行文字超出显示省略号*/
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
  .comment-time{
    margin-right: 5px;
  }
  .comment-list-user{
    display: flex;
    color: #777;
    font-size: 14px;
    margin-top: 6px;
  }
  .user-box-view {
    overflow: hidden;
  }
  .user-back-img {
   float: left;
    margin-right: 5px;
    margin-top: 5px;
  }
  .user-back-img img{
    width: 60px;
    height: 60px;
  }
  .nullSpeak{
    height: 60px;
    line-height: 50px;
    font-size: 14px;
    color: #ccc;

  }
</style>
