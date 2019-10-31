<template>
  <div class="cart-list">
    <scroll ref="scroll" class="content">
      <cart-list-item
        v-for="(item,index) in this.$store.getters.cartList"
        :key="index"
        :product="item"
      ></cart-list-item>
    </scroll>
    <cart-bottom-bar class="bot-bar"></cart-bottom-bar>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import CartBottomBar from "./CartBottomBar";


import Scroll from "components/common/scroll/Scroll";

export default {
  name: "CartList",
  data() {
    return {};
  },
  components: {
    CartListItem,
    Scroll,
    CartBottomBar
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 49px - 44px - 44px);
}
.content {
  height: 100%;
}
.bot-bar{
  position: relative;
  z-index: 10;
}
</style>
