<template>
<div class="comment">
  <div v-if="Object.keys(commentInfo).length !== 0" ></div>
  <div class="title">
    <div>用户评价</div>
    <div>更多</div>
  </div>
  <div class="user">
    <img :src="avatar" alt="" class="avatar">
    <span class="uname">{{uname}}</span>
  </div>
  <p class="content">
    {{commentInfo.content}}
  </p>
  <div class="extro-info">
    <span>{{commentInfo.created | showDate}}</span>
    <span>{{commentInfo.style}}</span>
  </div>
  <div class="comment-img">
    <img v-for="item in commentInfo.images" :src="item" alt="">
  </div>
</div>
</template>

<script>
import {formatDate} from "common/utils"
 
export default {
  name:'DetailComment',
  props:{
    commentInfo: {
      type: Object,
      dfault(){
        return {}
      }
    }
  },
  data(){
   return {

   }
  },
  filters: {
    showDate(value){
      let date = new Date(value*1000)
      return formatDate(date,"yyyy-MM-dd")
    }
  },
  computed: {
    avatar(){
      return this.commentInfo.user?this.commentInfo.user.avatar:" "
    },
    uname(){
      return this.commentInfo.user?this.commentInfo.user.uname:" "
    }
  },
  mounted(){
    console.log(this.commentInfo);
    
  }
}
</script>

<style scoped>
.comment{ 
  padding: 15px;
  border-bottom: 5px solid #ccc;

}
.title {
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}

.user {
  height: 70px;
}

.user .avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;

}

.uname {
  line-height: 70px;
  margin-left: 10px;
}

.content {
  font-size: 14px;
  line-height: 1.5;
}

.extro-info {
  font-size: 13px;
}

.extro-info span {
  margin-right: 10px;
}

.comment-img img{
  width: 18%;
  margin-right: 2%;
}
</style>
