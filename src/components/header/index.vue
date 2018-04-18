<template>
  <div id="header" class="clearfix">
    <div class="hd-left fl">
      <el-button type="primary"  @click="addContractHandle">新建合同</el-button>
    </div>
    <div class="hd-right fr">
      <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headers',
    data() {
      return {
        dialogFormVisible: false,
        searchText: ''
      }
    },
    methods: {
      addContractHandle() {
        this.dialogFormVisible = !this.dialogFormVisible
        this.$emit('dialogContractHandle', this.dialogFormVisible)
      }
    }
  }
</script>

<style scoped>
  #header{
    height: 60px;
    line-height: 60px;
    width: 100%;
    background-color: #f9f9f9;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    box-shadow: 0 0 1px rgba(0,0,0,.55);
  }
  .hd-left{
    margin-left: 193px;
    padding-left: 20px;
  }
  .hd-right{
    padding-right: 50px;
  }
</style>