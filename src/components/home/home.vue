<template>
  <div id="appWrap">
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
    <el-dialog title="新建合同" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="form" :rules="rules" ref="contractForm" label-width="120px">
        <el-form-item label="项目名称" prop="proName">
          <el-input v-model="form.proName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目编号" prop="proNum">
          <el-input v-model="form.proNum"></el-input>
        </el-form-item>
        <el-form-item label="招标编号" prop="bidNum">
          <el-input v-model="form.bidNum"></el-input>
        </el-form-item>
        <el-form-item label="甲方信息" prop="aInfo">
          <el-input v-model="form.aInfo"></el-input>
        </el-form-item>
        <el-form-item label="乙方信息" prop="bInfo">
          <el-input v-model="form.bInfo"></el-input>
        </el-form-item>
        <el-form-item label="项目时间" prop="proTime">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.proTime" :editable="false" :clearable="false" style="width: 140px;"></el-date-picker>
        </el-form-item>
        <el-form-item label="项目金额" prop="proMoney">
          <el-input v-model="form.proMoney" type="number" style="width: 218px;"></el-input>
        </el-form-item>
        <el-form-item label="订货方式" prop="orderMethod">
          <el-select v-model="form.orderMethod" placeholder="请选择订货方式">
            <el-option label="网付" value="1"></el-option>
            <el-option label="汇款" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
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

  export default {
    name: 'home',
    components: {
      HeaderComponent,
      NavigatorComponent,
      SubmenuComponent
    },
    data() {
      return {
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
          proName: '',
          proNum: '',
          bidNum: '',
          aInfo: '',
          bInfo: '',
          proTime: '',
          proMoney: '',
          orderMethod: ''
        },
        rules: {
          proName: [{
            required: true,message: '请填写项目名称', trigger: 'blur'
          },{
            max:50, message: '项目名称长度不得超过50字符', trigger: 'blur'
          }],
          proNum: [{
            required: true,message: '请填写项目编号', trigger: 'blur'
          },{
            max:50, message: '项目编号长度不得超过50字符', trigger: 'blur'
          }],
          bidNum: [{
            required: true,message: '请填写招标编号', trigger: 'blur'
          },{
            max:50, message: '招标编号长度不得超过50字符', trigger: 'blur'
          }],
          aInfo: [{
            required: true,message: '请填写甲方信息', trigger: 'blur'
          },{
            max:50, message: '甲方信息长度不得超过50字符', trigger: 'blur'
          }],
          bInfo: [{
            required: true,message: '请填写乙方信息', trigger: 'blur'
          },{
            max:50, message: '乙方信息长度不得超过50字符', trigger: 'blur'
          }],
          proTime: [{
            required: true,message: '请选择项目时间', trigger: 'blur'
          }],
          proMoney: [{
            required: true,message: '请填写项目金额', trigger: 'blur'
          }],
          orderMethod: [{
            required: true,message: '请选择付款方式', trigger: 'change'
          }],
        }
      }
    },
    mounted() {
      this.getNumberHandle()
    },
    methods: {
      ...mapActions(['getNumberHandle']),
      // 弹框显隐
      dialogContractHandle() {
        this.dialogFormVisible = !this.dialogFormVisible
      },
      // 提交表单
      contractSubmitHandle() {
        this.$refs['contractForm'].validate((valid) => {
          this.dialogFormVisible = false
          if (valid) {
            console.log('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        })
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