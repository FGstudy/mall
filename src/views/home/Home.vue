<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll :probe-type="3" 
            :pull-up-load="true"
            ref="scroll"
            class="content"
            @scroll="contentScroll">
      <home-swiper :banners="banners">{{banners}}</home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control @tabClick="tabClick"></tab-control>
      <goods :goods="goods[currentType].list"></goods>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import Goods from "components/content/goods/Goods";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";


import { getMultiData, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    Goods,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: "pop",
      isShowBackTop: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 1.请求轮播等数据
    this._getMultiData();
    this._getHomeGoods("pop");
    this._getHomeGoods("new");
    this._getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件监听
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },

    contentScroll(position){
      this.isShowBackTop = (-position.y) > 1000
    },

    /**
     * 网络请求
     */
    _getMultiData() {
      getMultiData()
        .then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch(err => {
          console.log(err);
        });
    },

    _getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}

.tab-control {
  position: relative;
  z-index: 9;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
