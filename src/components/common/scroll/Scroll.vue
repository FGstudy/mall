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
        pullUpLoad: this.pullUpLoad,
        click: true,
        tap:true,
        mouseWheel: true
      });
      /*监听事件滚动的位置 */
      if(this.probeType ==2 || this.probeType == 3){
         this.scroll.on("scroll", position => {
        this.$emit("scroll", position)
      });
      }
     
      /* 实现上拉加载*/
      if(this.pullUpLoad){
         this.scroll.on("pullingUp", () => {

        this.$emit("pullingUp")
      });
      }
     
    },
      // 先判断scroll存不存在再调用它的方法
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },

    finishPullUp(){
       this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll?this.scroll.y:0;
    }
  }
};
</script>

<style>
</style>