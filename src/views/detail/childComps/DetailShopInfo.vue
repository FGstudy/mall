<template>
  <div class="shop">
    <div class="shop-top">
      <span class="shop-logo">
        <img :src="shopInfo.logo" alt />
      </span>
      <span class="shop-name">{{shopInfo.name}}</span>
    </div>
    <div class="shop-info">
      <div class="shop-data">
        <div class="data-item">
          <span>{{shopInfo.fans}}</span> <br>
          <span>收藏</span>
        </div>
        <div class="data-item">
          <span>{{dataFormat}}万</span> <br>
          <span>总销量</span>
        </div>
        <div class="data-item">
          <span>{{shopInfo.goodsCount}}</span> <br>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="shop-score">
        <div>
           <div v-for="item in shopInfo.score" >
          <span>{{item.name}}</span>
        </div>
        </div>
       <div>
          <div v-for="item in shopInfo.score" >
          <span :class="{isGood: item.isBetter}" class="decolor">{{item.score}}</span>
        </div>
       </div>
       <div>
         <div v-for="item in shopInfo.score" >
          <span v-if="!item.isBetter" class="low">低</span>
          <span v-else class="high">高</span>
        </div>
       </div>

      </div>
    </div>
    <div class="btn">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {};
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    dataFormat() {
      return (this.shopInfo.sells / 10000).toFixed(1);
    }
  }
};
</script>

<style scoped>
.shop {
  padding: 20px;
  border-bottom: 5px solid #f2f5f8;
}

.shop-logo {
  display: inline-block;
  width: 55px;
  height: 55px;
  border: 1px solid #ccc;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
  margin-left: 30px;
}
.shop-top img {
  position: relative;
  width: 50px;
  height: 50px;
  z-index: -1;
}

.shop-name {
  font-size: 20px;
  margin-left: 10px;
}

.shop-info {
  display: flex;
  margin: 20px 0;
  font-size: 14px;
}

.shop-data {
  display: flex;
  flex: 1;
  justify-content:space-around;
  border-right: 1px solid #f2f5f8;
  line-height: 25px;
}

.data-item {
  text-align: center;
}

.shop-score {
  display: flex;
  justify-content: space-around;
  line-height: 25px;
  width: 40%;
  margin-left: 15px;
}

.decolor {
  color: green;
}

.isGood {
  color: var(--color-high-text);
}

.low {
  background-color: green;
  color: #fff
}

.high {
  background-color:var(--color-high-text);
  color: #fff
}

.btn {
  width: 150px;
  height: 30px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #f2f5f8;
  line-height: 30px;
  text-align: center;
}
</style>
