<template>
  <div id="submenu">
    <ul>
      <li v-for="item in getLists">
        <a :href="'#/detail/order/'+item.Key" :class="$route.path === '/detail/order/'+item.Key ? 'active' : ''">
          <p class="title">{{item.Record.name}}</p>
          <el-row type="flex" class="item-flex" justify="space-between">
            <el-col :span="12"><div class="grid-content">项目编号：{{item.Record.code}}</div></el-col>
            <el-col :span="12"><div class="grid-content">招标编号：{{item.Record.bidcode}}</div></el-col>
          </el-row>
          <el-row type="flex" class="item-flex item-gray" justify="space-between">
            <el-col :span="12"><div class="grid-content">供货方式：{{item.Record.ordermode}}</div></el-col>
            <el-col :span="12"><div class="grid-content">日期：2017-03-11 12:37</div></el-col>
          </el-row>
        </a>
      </li>

    </ul>
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
</style>