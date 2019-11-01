<template>
<div class="message">
<div class="message-item">
  <img src="~assets/img/profile/message.svg" alt="">
  <span>我的消息</span>
</div>
<div class="message-item">
  <img src="~assets/img/profile/pointer.svg" alt="">
  <span>积分商城</span>
</div>
<div class="message-item">
  <img src="~assets/img/profile/vip.svg" alt="">
  <span>会员卡</span>
</div>
</div>
</template>

<script>
export default {
  name:'ProfileMessage',
  data(){
   return {

   }
  }
}
</script>

<style scoped>
.message {
  display: flex;
  flex-flow: column;
  padding: 0 10px;
  border-bottom: 15px solid #eee;
}

.message-item{
  height: 50px;
  border-bottom: 1px solid #eee;
}
.message-item img {
  width: 25px;
  margin-right: 10px;
  vertical-align: middle;
}

.message-item span {
  line-height: 50px;
}
</style>
