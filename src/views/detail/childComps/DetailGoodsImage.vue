<template>
  <div>
    <div class="desc-info">
      <div class="start"></div>
      <div class="desc">{{goodsImage.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="desc-img">
      <h4>{{goodsImage.key}}</h4>
      <div v-for="item in goodsImage.detailImage">
        <img :src="item" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsImage",
  props: {
    goodsImage: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    imageLoad(){
      this.$emit("imageLoad")
    }
  }
};
</script>

<style scoped>
.desc-info {
  margin: 10px 0;
}

.start,
.end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  float: left;
  position: relative;
}
.end {
  float: right;
}

.start::before,
.end::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.end::before {
  right: 0;
}

.desc {
  padding: 15px 0;
}

.desc-img  img{
width: 100%;
}
</style>
