<template>
  <swiper ref="swiper" v-if="banners.length" @click="toDetail">
    <swiper-item v-for="(item, index) in banners" :key="index" >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        required: true
      }
    },
    data() {
    	return {
    		isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad(){
        if(!this.isLoad)
        this.$emit("swiperImageLoad")
        this.isLoad = true
      },

      toDetail(){
        
      }
    }
  }
</script>

<style scoped>

</style>