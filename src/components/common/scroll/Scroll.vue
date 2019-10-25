<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.initScroll();
  },
  methods: {
    initScroll() {
      /*创建bscroll对象 */
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      /*监听事件滚动的位置 */
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position)
      });
      /* 实现上拉加载*/
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp")
      });
    },

    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    },

    finishPullUp(){
      this.scroll.finishPullUp()
    }
  }
};
</script>

<style>
</style>