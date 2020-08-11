<template>
  <div v-if="Object.keys(paramInfo).length!==0" class="param-info">
    <table class="param-table" v-for="(table,index) in paramInfo.sizes" :key="index">
      <tr  v-for="(tr,index) in table" :key="index+1">
        <td v-for="(td,index) in tr" :key="index+2">{{td}}</td>
      </tr>
    </table>
    <table v-for="(tab, index) in paramInfo.infos" :key="index+3" class="param-info-table">
      <tr>
        <td class="info-param-key">{{tab.key}}</td>
        <td class="param-value">{{tab.value}}</td>
      </tr>
    </table>
    <div class="bottom-img" v-if="paramInfo.image.length !==0">
      <img  :src="paramInfo.image" />
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailParamInfo",
        props:{
          paramInfo:{
            type:Object,
            default(){
              return {}
            }
          }
        }

    }
</script>

<style scoped>
  .param-info {
    padding: 10px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .param-info table tr {
    height: 42px;
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info-param-key{
    width: 95px;
  }
  .param-value {
  color: #eb4868
}
  .bottom-img img{
    width: 100%;
  }
</style>
