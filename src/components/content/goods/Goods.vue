<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods" :goods-item="item" class="item" :key="index"/> 
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem"
export default {
name: "Goods",
components: {
  GoodsItem
},
props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  padding: 5px;
  justify-content: space-around;
}

.goods .item {
  width: 46%;
}
</style>