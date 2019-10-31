<template>
<div class="cart-item">
  <check-button @click.native="checkedChange" :is-checked="product.checked"></check-button>
  <div class="item-img">
    <img :src="product.img" alt="">
  </div>
  <div class="item-info">
    <h3>{{product.title}}</h3>
    <p>{{product.desc}}</p>
    <div class="extro-info">
      <span class="price">￥{{product.price}}</span>
      <span class="count">X{{product.count}}</span>
    </div>
  </div>
</div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton"
export default {
  name:'CartListItem',
  data(){
   return {

   }
  },
  props:{
    product:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkedChange(){
      this.product.checked = !this.product.checked
    }
  }
  
}
</script>

<style scoped>
.cart-item {
  display: flex;
  padding: 10px 5px;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.item-img {
  margin: 0 10px;
}
.item-img img {
  width: 80px;
  border-radius: 5px;
}

.item-info {
  width: 65%;
}

.item-info h3, .item-info p {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 30px;
}

.extro-info{
  display: flex;
  justify-content:space-between;
  margin-top: 40px;
}
</style>
