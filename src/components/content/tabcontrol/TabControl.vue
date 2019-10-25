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
}

.tab-control-item {
  flex: 1;

}

.active {
  color: var(--color-high-text)
}

.active span {
  padding: 5px;
  border-bottom: 2px solid var(--color-high-text);
}


</style>