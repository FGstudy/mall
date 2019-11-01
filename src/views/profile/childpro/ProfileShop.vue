<template>
<div class="shop">
<div class="shop-item">
  <img src="~assets/img/profile/cart.svg" alt="">
  <span>我的购物车</span>
</div>
<div class="shop-item">
  <img src="~assets/img/profile/shopping.svg" alt="">
  <span>下载购物APP</span>
</div>
</div>
</template>
</template>

<script>
export default {
  name:'ProfileShop',
  data(){
   return {

   }
  }
}
</script>

<style scoped>
.shop {
  display: flex;
  flex-flow: column;
  padding: 0 10px;
}

.shop-item{
  height: 50px;
  border-bottom: 1px solid #eee;
}
.shop-item:last-child{
  border: none;
}

.shop-item img {
  width: 25px;
  margin-right: 10px;
  vertical-align: middle;
}

.shop-item span {
  line-height: 50px;
}
</style>
