<template>
<div class="item" >
  <a :href="cateItem.link">
    <img :src="cateItem.image" alt="" class="item-img">
  </a>
<div class="title">{{cateItem.title}}</div>
</div>
</template>

<script>
export default {
  name:'SubCategoryItem',
  data(){
   return {
     subItem: {}
   }
  },
  props:{
    cateItem: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.item{
  width: 30%;
  padding: 10px;
  text-align: center;
}
.item-img{
  width: 65px;
}

.title{
  margin-top: 10px;
  font-size: 14px;
}
</style>
