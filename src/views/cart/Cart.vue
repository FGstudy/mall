<template>
  <div id="cart">
    <nav-bar class="nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CartList from "./childCart/CartList"

import {mapGetters } from "vuex"
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList
  },
  computed: {
    ...mapGetters(["cartLength"])
  }
};
</script>

<style scoped>
#cart {
  width: 100%;
  height: 100vh;
}
.nav {
  background-color: var(--color-tint);
  color:var(--color-high-text);
  height: 44px;
  position: relative;
  z-index: 10;
}
</style>