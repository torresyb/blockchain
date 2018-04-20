<template>
  <div id="menus" class="slideInLeft">
    <div id="logo">Jennifer Garner</div>
    <div id="sideMenus">
      <el-menu
        :router=true
        default-active="/order/0"
        class="el-menu-vertical-demo"
        background-color="#292d30"
        text-color="#7fa0a9"
        active-text-color="#7fa0a9">
        <el-submenu index="/order">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>订单列表</span>
          </template>
          <el-menu-item index="/order/0">
            <span slot="title">未确认订单 <i class="badge">{{getOrders[0]}}</i></span>
          </el-menu-item>
          <el-menu-item index="/order/1">
            <span slot="title">已确认订单 <i class="badge">{{getOrders[1]}}</i></span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="/contract">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>合同列表</span>
          </template>
          <el-menu-item index="/contract/0">
            <span slot="title">未确认合同 <i class="badge">{{getContracts[0]}}</i></span>
          </el-menu-item>
          <el-menu-item index="/contract/1">
            <span slot="title">已确认合同 <i class="badge">{{getContracts[1]}}</i></span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'menus',
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters(['getOrders', 'getContracts'])
    }
  }
</script>

<style scoped>
  #menus {
    width: 193px;
    background-color: #292d30;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    height: 100%;
    transform: translate3d(-193px, 0, 0);
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
  }
  #menus.slideInLeft {
    transform: translate3d(0, 0, 0);
  }
  #logo {
    position: absolute;
    width: 100%;
    height: 60px;
    line-height: 60px;
    z-index: 1001;
    background-color: #23272b;
    color: #999;
    text-align: center;
  }
  #sideMenus{
    box-sizing: border-box;
    height: 100%;
    padding-top: 65px;
  }
  #sideMenus .el-menu-item.is-active, #sideMenus .el-menu-item.is-active:hover{
    background-color: #409EFF!important;
    color: #fff!important;
  }
  i.badge{
    position: absolute;
    color: #fff;
    display: inline-block;
    padding: 0px 5px;
    border-radius: 10px;
    background-color: #067df7;
    line-height: 18px;
    font-style: normal;
    margin: 0;
    right: 15px;
    top: 11px;
    min-width: 15px;
    font-size: 12px;
    text-align: center;
  }
</style>