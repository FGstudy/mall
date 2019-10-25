<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/maintabbar/MainTabBar"
export default {
  name: "app",
  components: {
    MainTabBar,
  }
}
</script>
<style scope>
@import url("./assets/css/base.css"); /*导入css文件不能省后缀名 */
</style>
