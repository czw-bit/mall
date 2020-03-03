<template>
  <div v-if="Object.keys(comment).length !== 0">
    <div class="comment-bar">
      <span class="comment-span-1">用户评价</span>
      <span class="comment-span-2">更多</span>
    </div>
    <div class="comment-user">
      <img :src="comment.user.avatar" alt="">
      <span>{{comment.user.uname}}</span>
    </div>
    <div class="comment-content-father">
      <div class="comment-content-1">
        <span class="comment-content">{{comment.content}}</span>
      </div>
      <div>
        <div v-if="Object.keys(comment.images).length !== 0" v-for="item in comment.images">
          <img :src="item" alt="">
        </div>
        <span class="comment-date">{{comment.created | showDate}}</span>
        <span>{{comment.style}}</span>
      </div>

    </div>


  </div>
</template>

<script>
  import {formatDate} from 'common/utils.js'

  export default{
    name:'comment',
    props:{
      comment:{
        type:Object,
        default:{}
      }
    },
    filters:{
      showDate(value){
        const showdate = new Date(value * 1000)
        return formatDate(showdate, 'yy-MM-dd')
      }
    }
  }
</script>

<style>
  .comment-bar {
    border-bottom: 1px solid #d3d3d3;
    position: relative;
    height: 50px;
    line-height: 50px;
  }
  .comment-span-1 {
    position: absolute;
    left: 10px;
  }
  .comment-span-2 {
    position: absolute;
    right: 10px;
  }
  .comment-user {
    position: relative;
    height: 65px;
  }
  .comment-user img {
    width: 47px;
    height: 47px;
    border-radius: 50%;
    position: absolute;
    left: 10px;
    top: 10px;
  }
  .comment-user span {
    font-size: 19px;
    color: #000000;
    font-weight: 400;
    position: absolute;
    top: 20px;
    left: 65px;
  }
  .comment-content-father {
    padding: 8px;
  }
  .comment-content {
    font-size: 18px;
  }
  .comment-date {
    margin-right: 15px;
  }
  .comment-content-1 {
    margin-bottom: 5px;
  }

</style>
