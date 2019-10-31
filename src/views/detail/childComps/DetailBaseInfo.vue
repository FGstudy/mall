<template>
  <div class="basegoods-info" v-if="Object.keys(basegoods).length !== 0">
    <div class="basegoods-title">{{basegoods.title}}</div>
    <div class="basegoods-price">
      <span class="newprice">{{basegoods.newPrice}}</span>
      <span class="oldprice">{{basegoods.oldPrice}}</span>
      <span class="discount">{{basegoods.discountDesc}}</span>
    </div>
    <div class="basegoods-column">
      <span>{{basegoods.columns[0]}}</span>
      <span>{{basegoods.columns[1]}}</span>
      <span>{{basegoods.services[basegoods.services.length-1].name}}</span>
    </div>
    <div class="basegoods-service">
      <span class="info-service-item" v-for="index in basegoods.services.length-1" :key="index">
        <img :src="basegoods.services[index-1].icon" />
        <span>{{basegoods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props: {
    basegoods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted(){
    console.log(this.basegoods);
    
  }
};
</script>

<style scoped>
.basegoods-info {
  margin-top: 15px;
  padding: 5px;
  border-bottom: 5px solid #f2f5f8;
}
.basegoods-title {
  font-size: 20px;
  color: #000;
  margin-bottom: 20px;
}

.basegoods-price {
  height: 60px;
}
.newprice {
  color: var(--color-high-text);
  font-size: 28px;
}

.oldprice {
  text-decoration: line-through;
  font-size: 18px;
  margin-left: 15px;
}

.discount {
  background-color: var(--color-high-text);
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  padding: 3px;
  margin-left: 5px;
  position: relative;
  top: -8px;
}

.basegoods-column {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}

.basegoods-service {
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  font-size: 13px;
}

.basegoods-service img {
  width: 13px;
  height: 13px;
  vertical-align: middle;
}
</style>
