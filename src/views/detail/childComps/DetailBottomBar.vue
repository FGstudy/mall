<template>
<div class="botbar">
  <div class="item-left">
    <i class="botbar-icon service"></i>
    <span class="botbar-text">客服</span>
  </div>
  <div class="item-left">
    <i class="botbar-icon shop"></i>
    <span class="botbar-text">店铺</span>
  </div>
  <div class="item-left">
    <i class="botbar-icon col"></i>
    <span class="botbar-text">收藏</span>
  </div>
  <div class="item-right car" @click="carClick" >加入购物车</div>
  <div class="item-right buy">购买</div>
</div>
</template>

<script>
export default {
  name:'DetailBottomBar',
  data(){
   return {

   }
  },
  methods: {
    carClick(){
      this.$emit("addCart")
    }
  }
}
</script>

<style scoped>
.botbar {
height: 49px;
position: fixed;
left: 0;
right: 0;
bottom: 0;
display:flex;
padding: 0 10px;
text-align: center;
background-color: #fff;
font-size: 14px;
}

.item-left {
  flex: 0.7;
}

.item-right {
  flex: 1;
  line-height: 49px;
}


.botbar-icon {
  display: block;
  width: 22px;
  height: 22px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0 ;
  background-size: cover;
  margin: 5px 20px;
}

.service {
  background-position: 0 -54px;
}

.shop {
  background-position: 0 -100px;
}

.car {
  background-color: yellow;
}

.buy {
  background-color: var(--color-high-text);
  color: #fff;
}
</style>
