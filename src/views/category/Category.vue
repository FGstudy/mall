<template>
  <div id="category">
    <nav-bar class="nav">
      <div slot="center">商品分类</div>
    </nav-bar>

    <div class="center">
      <scroll id="cate-scroll1">
        <tab-control :titles="titleList" id="tab-control1" @tabClick="tabClick"></tab-control>
      </scroll>

      <scroll class="content" id="cate-scroll2" ref="scroll">
        <sub-category :sub-list="subList" class="sub-category"></sub-category>
        <tab-control :titles="tabTitles" id="tab-control2" @tabClick="tabGoodsClick"></tab-control>
        <goods :goods="cateGoodsList"></goods>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import Scroll from "components/common/scroll/Scroll";
import SubCategory from "./childCate/SubCategory";
import Goods from "components/content/goods/Goods";

import {
  getCategory,
  getSubCategory,
  getCategoryDetail
} from "network/category";
import { log } from "util";

export default {
  name: "Category",
  data() {
    return {
      cateList: [],
      titleList: [],
      subList: [],
      currentIndex: 0,
      tabTitles: ["综合", "新品", "销量"],
      cateGoodsList: [],
      currentType: "pop"
    };
  },
  components: {
    NavBar,
    TabControl,
    Scroll,
    SubCategory,
    Goods
  },
  created() {
    this._getCategory();

    this.$bus.$on("imgLoad", () => {
      this.$refs.scroll.refresh();
    });
  },
  mounted() {},
  methods: {
    /* 获取数据 */
    _getCategory() {
      getCategory().then(res => {

        this.cateList = res.data.category.list;
        this.titleList = this.cateList.map(item => {
          return item.title;
        });

        this._getSubCategory(0);
        this._getCategoryDetail(0, this.currentType);
      });
    },

    _getSubCategory(index) {
      getSubCategory(this.cateList[index].maitKey).then(res => {
        this.subList = res.data.list;
      });
    },

    _getCategoryDetail(index, type) {
      getCategoryDetail(this.cateList[index].miniWallkey, type).then(res => {
        this.cateGoodsList = res;
      });
    },

    /* 监听事件 */
    tabClick(index) {
      this._getSubCategory(index);
      this._getCategoryDetail(index, this.currentType);
    },

    tabGoodsClick(index) {
      console.log(index);
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

      this._getCategoryDetail(index, this.currentType);
    }
  }
};
</script>

<style scoped>
#category {
  width: 100%;
  height: 100vh;
}
.nav {
  background-color: var(--color-tint);
  color: #fff;
  height: 44px;
  position: relative;
  z-index: 10;
}

.center {
  display: flex;
  height: calc(100% - 49px - 44px);
}

#cate-scroll1 {
  height: 100%;
  overflow: hidden;
}
#tab-control1 {
  flex: 1;
  flex-flow: column;
  background-color: #eee;
}

.content {
  flex: 3.5;
  height: 100%;
  overflow: hidden;
}
</style>

<style>
#tab-control1 .active {
  background-color: #fff;
  border-left: 2px solid var(--color-high-text);
}

#tab-control1 .tab-control-item.active span {
  border: none;
}
</style>