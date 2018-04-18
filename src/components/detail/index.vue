<template>
  <div class="detailWrap">
    <el-row type="flex" class="detialTitle" justify="space-between" align="middle">
      <el-col :span="14">
        <div class="title">中铁三局集团大瑞铁路物资采购合同书</div>
      </el-col>
      <el-col :span="5"><span>2018-03-22 12:32</span></el-col>
      <el-col :span="5"><el-button size="mini" type="primary" @click="addOrderHandle">新建订单</el-button></el-col>
    </el-row>
    <div class="detailContent">
      <el-row type="flex" class="detialNumber" justify="space-between" :gutter="20">
        <el-col :span="12">项目编号：SJDRWZ-2017-1</el-col>
        <el-col :span="12">招标编号：SJDRWZ-2017-1</el-col>
      </el-row>
      <div class="detialText">
        <el-row type="flex" justify="space-between">
          <el-col :span="12">项目名称：中铁三局集团大瑞铁路工程物资采购合同书</el-col>
        </el-row>
        <el-row type="flex" justify="space-between" :gutter="20">
          <el-col :span="12">甲方信息：中铁三局集团大瑞铁路工程项目部经理</el-col>
          <el-col :span="12">乙方信息：云南汇百金经贸有限公司</el-col>
        </el-row>
        <el-row type="flex" justify="space-between" :gutter="20">
          <el-col :span="12">项目时间：2017年2月15日至双方责任和义务履行完毕之日</el-col>
          <el-col :span="12">项目金额：28.143.500元</el-col>
        </el-row>
        <el-row type="flex" justify="space-between" :gutter="20">
          <el-col :span="12">订货方式：零工</el-col>
          <el-col :span="12">交货地点及验收方式：上海</el-col>
        </el-row>
        <el-row type="flex" justify="space-between" :gutter="20">
          <el-col :span="12">结算方式：网付</el-col>
          <el-col :span="12">结算时间：2018-12-22</el-col>
        </el-row>
        <el-row type="flex" justify="space-between" :gutter="20">
          <el-col :span="12">付款方式：银行卡</el-col>
          <el-col :span="12">账户信息：2323232988398989</el-col>
        </el-row>
      </div>
    </div>
    <!--新建订单-->
    <el-dialog title="新建订单" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="form" :rules="rules" ref="orderForm" label-width="120px">
        <el-form-item label="品名" prop="proName">
          <el-input v-model="form.proName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="规格" prop="proSize">
          <el-input v-model="form.proSize"></el-input>
        </el-form-item>
        <el-form-item label="单价" prop="proMoney">
          <el-input v-model="form.proMoney" type="number" style="width: 218px;"></el-input>
        </el-form-item>
        <el-form-item label="数量" prop="proNum">
          <el-input v-model="form.proNum" type="number" style="width: 218px;"></el-input>
        </el-form-item>
        <el-form-item label="合计" prop="proTotal">
          <el-input v-model="form.proTotal" type="number" style="width: 218px;"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="orderSubmitHandle">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          proName: '',
          proSize: '',
          proMoney: '',
          proNum: '',
          proTotal: ''
        },
        rules: {
          proName: [{
            required: true,message: '请填写品名', trigger: 'blur'
          },{
            max:50, message: '品名长度不得超过50字符', trigger: 'blur'
          }],
          proSize: [{
            required: true,message: '请填写规格', trigger: 'blur'
          },{
            max:50, message: '规格长度不得超过50字符', trigger: 'blur'
          }],
          proMoney: [{
            required: true,message: '请填写金额', trigger: 'blur'
          }],
          proNum: [{
            required: true,message: '请填写数量', trigger: 'blur'
          }],
          proTotal: [{
            required: true,message: '请填写合计', trigger: 'blur'
          }],
        }
      }
    },
    methods: {
      // 新建工单
      addOrderHandle() {
        this.dialogFormVisible = !this.dialogFormVisible
      },
      // 工单提交
      orderSubmitHandle() {
        this.$refs['orderForm'].validate((valid) => {
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
  .detailWrap .detialTitle {
    padding: 15px 20px;
    font-size: 16px;
    border-bottom: 1px solid #DDDDDD;
    color: #696969;
  }
  .detailWrap .detialTitle span{
    color: #898989;
    font-size: 14px;
  }
  .detailContent{
    padding: 15px 25px;
  }
  .detialNumber{
    border-bottom: 1px solid #DDDDDD;
    padding: 0px 0 15px;
  }
  .detialText .el-row{
    line-height: 24px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>