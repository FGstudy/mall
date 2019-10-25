<template>
     <div class="tabbar-item" @click="itemClick">
<!-- 担心slot被替换掉后，v-if也被替换不起作用，所以在外面包一层div，在外层加v-if -->
       <div v-if="!isActive" >
       <slot name="item-icon"></slot>
       </div>
       <div v-else >
       <slot name="item-icon-active"></slot>
       </div>
       <div :style="activeStyle">
          <slot name="item-text"></slot>
       </div>
      
    </div>
</template>

<script>
export default {
name: "tabbaritem",
props:{
  path: String,
  activeColor:{
    type: String,
    default: "red"
  }
},
data(){
  return{
    // isActive: false,
    
}
},
computed:{
isActive(){
  return this.$route.path.indexOf(this.path) != -1
},
activeStyle(){
  return this.isActive?{color: this.activeColor}:{};
}
},
methods: {
  itemClick(){
    this.$router.replace(this.path)
  }
}
}
</script>

<style>
.tabbar-item {
  flex: 1;
  text-align: center;
 height: 49px;
 font-size: 14px;
 vertical-align: middle;
}

.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 3px;
  vertical-align: middle
}

</style>
