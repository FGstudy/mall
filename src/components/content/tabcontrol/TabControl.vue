<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" :key="index" :class="{active:currentIndex == index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return ["流行", "新款", "精选"];
      }
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      
      this.currentIndex = index;
      this.$emit("tabClick",index)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  width: 100%;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;

}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
}

.tab-control-item.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>