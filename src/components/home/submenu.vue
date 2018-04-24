<template>
  <div id="submenu">
    <ul v-if="getLists.length>0">
      <li v-for="item in getLists" :key="item.key">
        <a :href="'#/detail/'+ $route.params.oc +'/'+$route.params.type+'/'+encodeURIComponent(item.Key)" :class="$route.params.id == item.Key ? 'active' : ''">
          <p class="title">{{item.Record.name}}</p>
          <el-row type="flex" class="item-flex" justify="space-between">
            <template v-if="$route.params.oc == 'c'">
              <el-col :span="12"><div class="grid-content">项目编号：{{item.Record.code && item.Record.code.length>12 ? item.Record.code.substring(0,12)+'...' : item.Record.code}}</div></el-col>
              <el-col :span="12"><div class="grid-content">招标编号：{{item.Record.bidcode && item.Record.bidcode.length>12 ? item.Record.bidcode.substring(0,12)+'...' : item.Record.bidcode}}</div></el-col>
            </template>
            <template v-else>
              <el-col :span="12"><div class="grid-content">订单编号：{{item.Record.OrderId && item.Record.OrderId.length>12 ? item.Record.OrderId.substring(0,12)+'...' : item.Record.OrderId}}</div></el-col>
              <el-col :span="12"><div class="grid-content">项目编号：{{item.Record.contractCode && item.Record.contractCode.length>12 ? item.Record.contractCode.substring(0,12)+'...' : item.Record.contractCode}}</div></el-col>
            </template>
          </el-row>
          <el-row type="flex" class="item-flex item-gray" justify="space-between">
            <template v-if="$route.params.oc == 'c'">
              <el-col :span="12"><div class="grid-content">供货方式：{{item.Record.ordermode}}</div></el-col>
              <el-col :span="12"><div class="grid-content">日期：{{item.Record.time | timeFormat}}</div></el-col>
            </template>
            <template v-else>
              <el-col :span="12"><div class="grid-content">规格：{{item.Record.spec && item.Record.spec.length>12 ? item.Record.spec.substring(0,12)+'...' : item.Record.spec}}</div></el-col>
              <el-col :span="12"><div class="grid-content">总计：{{item.Record.total}}</div></el-col>
            </template>
          </el-row>
        </a>
      </li>
    </ul>
    <div v-else class="empty">:) 无相关信息 (:</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'submenus',
    data(){
      return {

      }
    },
    computed: {
      ...mapGetters(['getLists'])
    }
  }
</script>

<style scoped>
  .title{
    text-align: left;
    font-size: 16px;
  }
  .item-flex{
    margin-top: 10px;
  }
.item-flex .grid-content{
  white-space: nowrap;
  font-size: 12px;
}
  #submenu a{
    display: block;
    padding: 20px;
    border-bottom: 1px solid #DDDDDD;
  }
  #submenu a.active{
    background-color: #eef2fd;
  }
  .item-gray .grid-content{
    color: #969696;
  }
  .empty{
    text-align: center;
    height: 100px;
    line-height: 100px;
    font-size: 16px;
  }
</style>