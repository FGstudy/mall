<template>
<nav-bar>
  <div slot="left" class="back" @click="backClick">
    <img src="~assets/img/common/back.svg" alt="">
  </div>
  <div slot="center" class="nav-title">
    <div v-for="(item,index) in titles" class="nav-item" :class="{active:currentIndex == index}" @click="itemClick(index)" :key="index">{{item}}</div>
  </div>
</nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

export default {
  name:'DetailNav',
  data(){
   return {
     titles: ["商品","参数","评论","推荐"],
     currentIndex: 0
   }
  },
  components:{
    NavBar
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit("itemClick",index)
    },

    backClick(){
      this.$router.go(-1)
    }

  }
}
</script>

<style scoped>
.back {
  margin-top: 5px;
}

.nav-title {
  display: flex;
  font-size: 16px;
  padding: 0 20px;
}

.nav-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
</style>
