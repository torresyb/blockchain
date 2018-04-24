<template>
  <div id="appWrap" v-loading.fullscreen.lock="fullscreenLoading">
    <!--头部-->
    <header-component @dialogContractHandle="dialogContractHandle"/>
    <!--菜单栏-->
    <navigator-component/>
    <!--路由-->
    <div id="contentWrap" class="clearfix">
      <!--列表栏目-->
      <submenu-component/>
      <!--路由-->
      <transition name="fade" mode="out-in">
        <keep-alive v-if="$route.meta.keepAlive">
          <router-view id="content" :key="$route.fullPath"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" id="content" :key="$route.fullPath"></router-view>
      </transition>
    </div>

    <!--新建合同-->
    <el-dialog title="新建合同" :visible.sync="dialogFormVisible" width="40%" :before-close="closeHandle">
      <el-form :model="form" :rules="rules" ref="contractForm" label-width="120px">
        <el-form-item label="项目名称" prop="name">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目编号" prop="code">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="招标编号" prop="bidcode">
          <el-input v-model="form.bidcode"></el-input>
        </el-form-item>
        <el-form-item label="甲方信息" prop="fpinfo">
          <el-input v-model="form.fpinfo"></el-input>
        </el-form-item>
        <el-form-item label="乙方信息" prop="spinfo">
          <el-input v-model="form.spinfo"></el-input>
        </el-form-item>
        <el-form-item label="项目时间" prop="time">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.time" :editable="false" :clearable="false" style="width: 140px;"></el-date-picker>
        </el-form-item>
        <el-form-item label="项目金额" prop="money">
          <el-input v-model="form.money" type="number" style="width: 218px;"></el-input>
        </el-form-item>
        <el-form-item label="订货方式" prop="ordermode">
          <el-select v-model="form.ordermode" placeholder="请选择订货方式">
            <el-option label="临供" value="临供"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeRstHandle">取 消</el-button>
        <el-button type="primary" @click="contractSubmitHandle">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import HeaderComponent from '../header/index.vue'
  import NavigatorComponent from '../navigator/index.vue'
  import SubmenuComponent from '../home/submenu.vue'
  import {createContract} from '../../api/controller/contract'

  export default {
    name: 'home',
    components: {
      HeaderComponent,
      NavigatorComponent,
      SubmenuComponent
    },
    data() {
      return {
        fullscreenLoading: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
          name: '',
          code: '',
          bidcode: '',
          fpinfo: '',
          spinfo: '',
          time: '',
          money: '',
          ordermode: ''
        },
        rules: {
          name: [{
            required: true,message: '请填写项目名称', trigger: 'blur'
          },{
            max:50, message: '项目名称长度不得超过50字符', trigger: 'blur'
          }],
          code: [{
            required: true,message: '请填写项目编号', trigger: 'blur'
          },{
            max:50, message: '项目编号长度不得超过50字符', trigger: 'blur'
          }],
          bidcode: [{
            required: true,message: '请填写招标编号', trigger: 'blur'
          },{
            max:50, message: '招标编号长度不得超过50字符', trigger: 'blur'
          }],
          fpinfo: [{
            required: true,message: '请填写甲方信息', trigger: 'blur'
          },{
            max:50, message: '甲方信息长度不得超过50字符', trigger: 'blur'
          }],
          spinfo: [{
            required: true,message: '请填写乙方信息', trigger: 'blur'
          },{
            max:50, message: '乙方信息长度不得超过50字符', trigger: 'blur'
          }],
          time: [{
            required: true,message: '请选择项目时间', trigger: 'blur'
          }],
          money: [{
            required: true,message: '请填写项目金额', trigger: 'blur'
          }],
          ordermode: [{
            required: true,message: '请选择订货方式', trigger: 'change'
          }],
        }
      }
    },
    beforeRouteUpdate(to, from, next) {
      if(to.name === 'contract' || to.name === 'order'){
        this.getNumberHandle()
        this.getListObjHandle({type:to.params.oc === 'o' ? 'o' : 'c', state: Number(to.params.type)+1})
      }
      next()
    },
    mounted() {
      this.getNumberHandle()
      let params = {type:this.$route.params.oc === 'o' ? 'o' : 'c', state: Number(this.$route.params.type)+1}
      this.getListObjHandle(params)
    },
    methods: {
      // 获取导航栏数目
      ...mapActions(['getNumberHandle', 'getListObjHandle']),
      // 弹框显隐
      dialogContractHandle() {
        this.dialogFormVisible = !this.dialogFormVisible
      },
      // 提交表单
      contractSubmitHandle() {
        this.$refs['contractForm'].validate((valid) => {
          this.dialogFormVisible = false
          if (valid) {
            this.fullscreenLoading = true
            createContract(this.form).then(rst => {
              if(rst.data.code === '0000') {
                this.fullscreenLoading = false
                this.getNumberHandle()
                this.getListObjHandle({type: 'c', state: 1})
                this.$message.success("新建合同成功！")
                this.$router.push({name: 'contract', params:{oc:'c', type:0}})
                this.$refs['contractForm'].resetFields()
              }
            }).catch(err => {
              console.log(err)
              this.fullscreenLoading = false
            })
          } else {
            return false;
          }
        })
      },
      // 关闭新建弹框
      closeHandle(done) {
        this.$refs['contractForm'].resetFields()
        done()
      },
      closeRstHandle() {
        this.dialogFormVisible = false
        this.$refs['contractForm'].resetFields()
      }
    }
  }
</script>

<style scoped>
  #appWrap{
    height: 100%;
  }
  #contentWrap {
    margin: 60px 0px 0px 193px;
    background-color: #fff;
    height: 100%;
    text-align: left;
    overflow: hidden;
  }
  #submenu{
    width: 364px;
    float: left;
    border-right: 1px solid #DDDDDD;
    height: 92%;
    overflow: auto;
  }
  #content{
    margin-left: 365px;
    height: 92%;
    overflow: auto;
  }
  .el-dialog .el-form{
    padding-right: 20px;
  }
  .el-dialog .el-dialog__footer .dialog-footer{
    text-align: center;
  }
</style>
<style>
  .el-dialog .el-dialog__header{
    text-align: center;
  }
</style>