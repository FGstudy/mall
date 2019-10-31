<template>
  <div class="bottom-bar">
    <div class="all-check">
      <check-button class="btn" @click.native="btnClick" :is-checked="isAll"></check-button>
      <span>全选</span>
    </div>

    <div class="sum">合计：￥{{sum}}</div>
    <div class="calc">去计算({{amount}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";

import {mapGetters} from "vuex"

export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartListChecked","cartList"]),
    sum(){
      return this.cartListChecked.reduce((pre,item) => {
        return pre + item.price * item.count
      },0).toFixed(2)
    },

    amount(){
      return  this.cartListChecked.length
    },
     isAll(){
      return Boolean(this.cartList.length) && !(this.cartList.filter(item => 
        !item.checked 
      ).length)
    }
  },
  methods: {
    btnClick(){
      if(this.isAll){
        this.cartList.forEach(item => {
          item.checked = false
        })
      }else{
         this.cartList.forEach(item => {
          item.checked = true
        })
      }
    },

   
  }
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 44px;
  background-color: #eeeeee;
  align-items: center;
  padding: 0 10px;
}

.all-check {
  display: flex;
  width: 80px;
}

.btn {
  margin: 0 5px;
}
.sum {
  flex: 1;
}

.calc {
  width: 100px;
  background-color: pink;
  text-align: center;
  line-height: 44px;
}
</style>
