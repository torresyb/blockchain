<template>
  <div id="submenu">
    <ul>
      <li>
        <a href="#/detail/order/1" :class="$route.path === '/detail/order/1' ? 'active' : ''">
          <p class="title">中铁三局集团大瑞铁路物资采购合同书</p>
          <el-row type="flex" class="item-flex" justify="space-between">
            <el-col :span="12"><div class="grid-content">项目编号：SJDRWZ-2017-1</div></el-col>
            <el-col :span="12"><div class="grid-content">招标编号：SJDRWZ-2017-1</div></el-col>
          </el-row>
          <el-row type="flex" class="item-flex item-gray" justify="space-between">
            <el-col :span="12"><div class="grid-content">供货方式：零工</div></el-col>
            <el-col :span="12"><div class="grid-content">日期：2017-03-11 12:37</div></el-col>
          </el-row>
        </a>
      </li>
      <li>
        <a href="#/detail/order/2" :class="$route.path === '/detail/order/2' ? 'active' : ''">
          <p class="title">中铁三局集团大瑞铁路物资采购合同书</p>
          <el-row type="flex" class="item-flex" justify="space-between">
            <el-col :span="12"><div class="grid-content">项目编号：SJDRWZ-2017-1</div></el-col>
            <el-col :span="12"><div class="grid-content">招标编号：SJDRWZ-2017-1</div></el-col>
          </el-row>
          <el-row type="flex" class="item-flex item-gray" justify="space-between">
            <el-col :span="12"><div class="grid-content">供货方式：零工</div></el-col>
            <el-col :span="12"><div class="grid-content">日期：2017-03-11 12:37</div></el-col>
          </el-row>
        </a>
      </li>
      <li>
        <a href="#/detail/order/3">
          <p class="title">中铁三局集团大瑞铁路物资采购合同书</p>
          <el-row type="flex" class="item-flex" justify="space-between">
            <el-col :span="12"><div class="grid-content">项目编号：SJDRWZ-2017-1</div></el-col>
            <el-col :span="12"><div class="grid-content">招标编号：SJDRWZ-2017-1</div></el-col>
          </el-row>
          <el-row type="flex" class="item-flex item-gray" justify="space-between">
            <el-col :span="12"><div class="grid-content">供货方式：零工</div></el-col>
            <el-col :span="12"><div class="grid-content">日期：2017-03-11 12:37</div></el-col>
          </el-row>
        </a>
      </li>
      <li>
        <a href="#/detail/order/4">
          <p class="title">中铁三局集团大瑞铁路物资采购合同书</p>
          <el-row type="flex" class="item-flex" justify="space-between">
            <el-col :span="12"><div class="grid-content">项目编号：SJDRWZ-2017-1</div></el-col>
            <el-col :span="12"><div class="grid-content">招标编号：SJDRWZ-2017-1</div></el-col>
          </el-row>
          <el-row type="flex" class="item-flex item-gray" justify="space-between">
            <el-col :span="12"><div class="grid-content">供货方式：零工</div></el-col>
            <el-col :span="12"><div class="grid-content">日期：2017-03-11 12:37</div></el-col>
          </el-row>
        </a>
      </li>
      <li>
        <a href="#/detail/order/5">
          <p class="title">中铁三局集团大瑞铁路物资采购合同书</p>
          <el-row type="flex" class="item-flex" justify="space-between">
            <el-col :span="12"><div class="grid-content">项目编号：SJDRWZ-2017-1</div></el-col>
            <el-col :span="12"><div class="grid-content">招标编号：SJDRWZ-2017-1</div></el-col>
          </el-row>
          <el-row type="flex" class="item-flex item-gray" justify="space-between">
            <el-col :span="12"><div class="grid-content">供货方式：零工</div></el-col>
            <el-col :span="12"><div class="grid-content">日期：2017-03-11 12:37</div></el-col>
          </el-row>
        </a>
      </li>
      <li>
        <a href="#/detail/order/5">
          <p class="title">中铁三局集团大瑞铁路物资采购合同书</p>
          <el-row type="flex" class="item-flex" justify="space-between">
            <el-col :span="12"><div class="grid-content">项目编号：SJDRWZ-2017-1</div></el-col>
            <el-col :span="12"><div class="grid-content">招标编号：SJDRWZ-2017-1</div></el-col>
          </el-row>
          <el-row type="flex" class="item-flex item-gray" justify="space-between">
            <el-col :span="12"><div class="grid-content">供货方式：零工</div></el-col>
            <el-col :span="12"><div class="grid-content">日期：2017-03-11 12:37</div></el-col>
          </el-row>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'submenus',
    data(){
      return {

      }
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