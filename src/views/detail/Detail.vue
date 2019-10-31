<template>
  <div id="detail">
    <detail-nav class="nav" @itemClick="itemClick" ref="nav"></detail-nav>
    <scroll ref="scroll" class="content" :probeType="3" @scroll="contentScroll">
      <detail-swiper :swiper-images="swiperImages"></detail-swiper>
      <detail-base-info :basegoods="basegoods"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
      <detail-goods-image :goods-image="goodsImage" @imageLoad="imageLoad"></detail-goods-image>
      <detail-params ref="params" :detail-params="detailParams"></detail-params>
      <detail-comment ref="comment" :comment-info="commentInfo"></detail-comment>
      <goods-list ref="recommend" :goods="goodsList"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNav from "./childComps/DetailNav";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsImage from "./childComps/DetailGoodsImage";
import DetailParams from "./childComps/DetailParams";
import DetailComment from "./childComps/DetailComment";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/Goods";


import {backTopMixin} from "common/mixin"

import {
  getDetail,
  Goods,
  ShopInfo,
  GoodsImage,
  Params,
  getRecommend
} from "network/detail";
import { log } from 'util';

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      swiperImages: [],
      basegoods: {},
      shopInfo: {},
      goodsImage: {},
      detailParams: {},
      commentInfo: {},
      goodsList: [],
      navTitle: [],
      bavIndex: 0,
    };
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsImage,
    DetailParams,
    DetailComment,
    GoodsList,
    DetailBottomBar,
  },
  mixins: [backTopMixin],
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      console.log(res);
      //获取轮播图数据
      let data = res.result;
      this.swiperImages = data.itemInfo.topImages;

      this.basegoods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      
      this.shopInfo = new ShopInfo(data.shopInfo);

      this.goodsImage = new GoodsImage(
        data.detailInfo.desc,
        data.detailInfo.detailImage[0].key,
        data.detailInfo.detailImage[0].list
      );

      this.detailParams = new Params(data.itemParams);

      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
        
      }
    });

    getRecommend().then(res => {
      this.goodsList = res.data.list;
      
    });
    
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
       this.navTitle = [];
      this.navTitle.push(0);
    this.navTitle.push(this.$refs.params.$el.offsetTop);
    this.navTitle.push(this.$refs.comment.$el.offsetTop);
    this.navTitle.push(this.$refs.recommend.$el.offsetTop);
    this.navTitle.push(Number.MAX_VALUE);
    },

    itemClick(index){
      this.$refs.scroll.scrollTo(0,-this.navTitle[index]+44,100)
    },

    contentScroll(position){
       this.isShowBackTop = -position.y > 1000;
      const positionY = -position.y
      let len = this.navTitle.length
     for(let i = 0; i < len -1; i++ ){
       if( this.navIndex !== i &&( positionY >= (this.navTitle[i] - 44) && positionY < (this.navTitle[i+1] - 44))  ){
         this.navIndex = i
         this.$refs.nav.currentIndex = this.navIndex
         
       }
     }
    },

   addCart(){
        //获取购物车所需的数据
        let product = {}
        product.iid = this.iid;
        product.img = this.swiperImages[0]
        product.title = this.basegoods.title
        product.desc = this.basegoods.desc
        product.price = this.basegoods.price

        // this.$store.commit("addCart",product)
        this.$store.dispatch("addCart",product)
        this.$toast.show("成功加入购物车",1000)
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.nav {
  position: relative;
  background-color: #fff;
  z-index: 10;
}
.content {
  height: calc(100% - 44px - 49px);
  background-color: #fff;
}
</style>