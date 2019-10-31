<template>
<div class="params">
  <table>
    <tr v-for="item in detailParams.paramsRule">
      <td v-for="value in item">{{value}}</td>
    </tr>
  </table>
  
  <table class="params-info">
    <tr v-for="item in detailParams.paramsInfo">
    <td class="params-key">{{item.key}}</td>
    <td class="params-value">{{item.value}}</td>
  </tr>
  </table>
</div>
</template>

<script>
export default {
  name:'DetailParams',
  props: {
    detailParams: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
   return {

   }
  }
}
</script>

<style scoped>
.params {
  padding: 10px;
  border-bottom: 5px solid #ccc;
}
table{
  width: 100%;
}
tr{
  height: 40px;
  border-bottom: 1px solid #ccc;
}

.params-key {
width: 95px;
}

.params-value{
  color: var(--color-high-text);
}
</style>
