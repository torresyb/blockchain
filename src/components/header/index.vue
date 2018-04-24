<template>
  <div id="header" class="clearfix">
    <div class="hd-left fl">
      <el-button type="primary"  @click="addContractHandle">新建贸易合同</el-button>
    </div>
    <div class="hd-right fr">
      <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="searchHandle"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { getListObj } from '../../api/controller/init'
  export default {
    name: 'headers',
    data() {
      return {
        isRouterChange: false,
        dialogFormVisible: false,
        searchText: ''
      }
    },
    computed: {
      ...mapGetters(['getLists'])
    },
    mounted () {
      document.onkeydown = e => {
        e = e || window.event;
        if (e.keyCode == 13) {
          this.searchHandle()
          return false;
        }
      }
    },
    methods: {
      // 新建合同
      addContractHandle() {
        this.dialogFormVisible = !this.dialogFormVisible
        this.$emit('dialogContractHandle', this.dialogFormVisible)
      },
      // 查询
      searchHandle() {
        getListObj({type:this.$route.params.oc === 'o' ? 'o' : 'c', state: Number(this.$route.params.type)+1}).then(rst => {
          let arr = JSON.parse(rst.data.data)
          let lists = arr.filter(item => {
            return item.Record.name.indexOf(this.searchText)>-1
          })
          if(lists.length>0){
            let id = lists[0].Key
            this.$router.push({name:'detail', params: {oc: this.$route.params.oc, type: this.$route.params.type, id:id}})
          }else{
            this.$router.push({name:'empty', params: {oc: this.$route.params.oc, type: this.$route.params.type}})
          }
          this.$store.commit('GET_LIST', JSON.stringify(lists))
          this.searchText = ''
        })
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