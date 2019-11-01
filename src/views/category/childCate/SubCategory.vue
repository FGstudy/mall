<template>
<div class="sub-category">
<sub-category-item v-for="item in subList" :cate-item="item"></sub-category-item>
</div>
</template>

<script>
import SubCategoryItem from "./SubCategoryItem"
export default {
  name:'SubCategory',
  data(){
   return {

   }
  },
  props: {
    subList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    SubCategoryItem
  }
}
</script>

<style scoped>
.sub-category {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 20px;
}
</style>
