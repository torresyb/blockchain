<template>
  <div class="detailWrap" v-loading.fullscreen.lock="fullscreenLoading">
    <el-row type="flex" class="detialTitle" justify="space-between" align="middle">
      <el-col :span="14">
        <div class="title" v-cloak>{{detailObj.name || contractObj.name}}</div>
      </el-col>
      <el-col :span="5"><span>2018-03-22 12:32</span></el-col>
      <el-col :span="5">
        <el-button v-if="contractObj.state == 2 &&  $route.params.oc == 'c'" size="mini" type="primary" @click="addOrderHandle">新建订单</el-button>
        <el-button v-if="detailObj.state == 1 && $route.params.oc == 'o'" size="mini" type="primary" @click = "confirmOrderHandle">确认订单</el-button>
        <el-button v-if="contractObj.state == 1 && $route.params.oc == 'c'" size="mini" type="primary" @click = "confirmContractHandle">确认合同</el-button>
      </el-col>
    </el-row>
    <div class="detailContent">
      <div v-if="$route.params.oc == 'o'">
        <el-row type="flex" class="detialNumber" justify="space-between" :gutter="20">
          <el-col :span="12" v-cloak>订单编号：{{detailObj.OrderId}}</el-col>
          <el-col :span="12" v-cloak>项目编号：{{detailObj.contractCode}}</el-col>
        </el-row>
        <div class="detialText">
          <el-row type="flex" justify="space-between" :gutter="20">
            <el-col :span="12" v-cloak>品名：{{detailObj.name}}</el-col>
            <el-col :span="12" v-cloak>规格：{{detailObj.spec}}</el-col>
          </el-row>
          <el-row type="flex" justify="space-between" :gutter="20">
            <el-col :span="12" v-cloak>单价：{{detailObj.price}}</el-col>
            <el-col :span="12" v-cloak>数量：{{detailObj.amount}}</el-col>
          </el-row>
          <el-row type="flex" justify="space-between">
            <el-col :span="12" v-cloak>总计：{{detailObj.total}}</el-col>
          </el-row>
        </div>
      </div>
      <h3 v-if="$route.params.oc == 'o'" class="title">所属合同</h3>
      <div :class="$route.params.oc == 'o' ? 'orderDetail': 'contractDetail'">
        <el-row type="flex" class="detialNumber" justify="space-between" :gutter="20">
          <el-col :span="12" v-cloak>招标编号：{{contractObj.bidcode}}</el-col>
          <el-col :span="12" v-cloak>项目编号：{{contractObj.code}}</el-col>
        </el-row>
        <div class="detialText">
          <el-row type="flex" justify="space-between">
            <el-col :span="12" v-cloak>项目名称：{{contractObj.name}}</el-col>
          </el-row>
          <el-row type="flex" justify="space-between" :gutter="20">
            <el-col :span="12" v-cloak>甲方信息：{{contractObj.fpinfo}}</el-col>
            <el-col :span="12" v-cloak>乙方信息：{{contractObj.spinfo}}</el-col>
          </el-row>
          <el-row type="flex" justify="space-between" :gutter="20">
            <el-col :span="12" v-cloak>项目时间：{{contractObj.time | timeFormat}}</el-col>
            <el-col :span="12" v-cloak>项目金额：{{contractObj.money}}元</el-col>
          </el-row>
          <el-row type="flex" justify="space-between" :gutter="20">
            <el-col :span="12" v-cloak>订货方式：{{contractObj.ordermode}}</el-col>
            <el-col :span="12" v-cloak>交货地点及验收方式：</el-col>
          </el-row>
          <el-row type="flex" justify="space-between" :gutter="20">
            <el-col :span="12" v-cloak>结算方式：</el-col>
            <el-col :span="12" v-cloak>结算时间：</el-col>
          </el-row>
          <el-row type="flex" justify="space-between" :gutter="20">
            <el-col :span="12" v-cloak>付款方式：</el-col>
            <el-col :span="12" v-cloak>账户信息：</el-col>
          </el-row>
        </div>
      </div>
      <h3 v-if="orderLists.length>0" class="title">订单列表</h3>
      <div v-if="orderLists.length>0" class="orderList" v-for="item in orderLists" :key="item.OrderId">
        <p class="tip"><span v-if="item.state == 1">未确认</span> <span v-else>已确认</span></p>
        <el-row type="flex" class="" justify="space-between" :gutter="20">
          <el-col :span="12">订单编号：{{item.OrderId}}</el-col>
          <el-col :span="12">项目编号：{{item.contractCode}}</el-col>
        </el-row>
        <div class="detialText">
          <el-row type="flex" justify="space-between" :gutter="20">
            <el-col :span="12">品名：{{item.name}}</el-col>
            <el-col :span="12">规格：{{item.spec}}</el-col>
          </el-row>
          <el-row type="flex" justify="space-between" :gutter="20">
            <el-col :span="12">单价：{{item.price}}</el-col>
            <el-col :span="12">数量：{{item.amount}}</el-col>
          </el-row>
          <el-row type="flex" justify="space-between">
            <el-col :span="12">总计：{{item.total}}</el-col>
          </el-row>
        </div>
      </div>
    </div>

    <!--新建订单-->
    <el-dialog title="新建订单" :visible.sync="dialogFormVisible" width="40%" :before-close="closeHandle">
      <el-form :model="form" :rules="rules" ref="orderForm" label-width="120px">
        <el-form-item label="品名" prop="name">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="规格" prop="spec">
          <el-input v-model="form.spec"></el-input>
        </el-form-item>
        <el-form-item label="单价" prop="price">
          <el-input v-model="form.price" type="number" style="width: 218px;"></el-input>
        </el-form-item>
        <el-form-item label="数量" prop="amount">
          <el-input v-model="form.amount" type="number" style="width: 218px;"></el-input>
        </el-form-item>
        <el-form-item label="合计" prop="total">
          <el-input v-model="form.total" disabled type="number" style="width: 218px;"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeRstHandle">取 消</el-button>
        <el-button type="primary" @click="orderSubmitHandle">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import {getOrderDetail, confirmOrder, createOrder} from '../../api/controller/order'
  import {getContractDetail, confirmContract} from '../../api/controller/contract'
  export default {
    data() {
      let isInteger = (rule, value, callback) =>{
        setTimeout(() => {
          if (!Number.isInteger(Number(value))) {
            callback(new Error('请输入数整数'));
          }else {
            callback();
          }
        }, 1000)
      }
      return {
        fullscreenLoading: false,
        dialogFormVisible: false,
        detailObj: {},
        orderLists: [],
        contractObj: {},
        form: {
          name: '',
          spec: '',
          price: '',
          amount: '',
          total: '0'
        },
        rules: {
          name: [{
            required: true,message: '请填写品名', trigger: 'blur'
          },{
            max:50, message: '品名长度不得超过50字符', trigger: 'blur'
          }],
          spec: [{
            required: true,message: '请填写规格', trigger: 'blur'
          },{
            max:50, message: '规格长度不得超过50字符', trigger: 'blur'
          }],
          price: [{
            required: true,message: '请填写金额', trigger: 'blur',
          },{
            validator: isInteger, trigger: 'blur'
          }],
          amount: [{
            required: true,message: '请填写数量', trigger: 'blur',
          },{
            validator: isInteger, trigger: 'blur'
          }],
          total: [{
            required: true,message: '请填写合计', trigger: 'blur'
          }],
        }
      }
    },
    watch: {
      'form.amount'(val) {
        this.form.total = val * this.form.price+''
      },
      'form.price'(val) {
        this.form.total = val * this.form.amount+''
      }
    },
    created() {
      if(this.$route.params.oc == 'o'){
        // 查询订单详情
        this.lookOrderDetailHandle()
      }else{
        // 查看合同详情
        this.lookContractDetailHandle()
      }
    },
    methods: {
      ...mapActions(['getNumberHandle', 'getListObjHandle']),
      // 查看订单详情
      lookOrderDetailHandle() {
        getOrderDetail({id:decodeURIComponent(this.$route.params.id)}).then(rst =>{
          this.detailObj = JSON.parse(rst.data.data)
          return this.detailObj.contractCode
        }).then(code => {
          return getContractDetail({code: code.substr(1)})
        }).then(rst => {
          this.contractObj = JSON.parse(rst.data.data)
        })
      },
      // 查看合同详情
      lookContractDetailHandle() {
        this.orderLists = []
        // 查询合同详情
        getContractDetail({code:decodeURIComponent(this.$route.params.id.substr(1))}).then(rst =>{
          this.contractObj = JSON.parse(rst.data.data)
          return this.contractObj
        }).then(obj => {
          Object.keys(obj.orders).map(item => {
            getOrderDetail({id: item}).then(rst => {
              this.orderLists.push(JSON.parse(rst.data.data))
            })
          })
        })
      },
      // 新建工单
      addOrderHandle() {
        this.dialogFormVisible = !this.dialogFormVisible
      },
      // 提交订单
      orderSubmitHandle() {
        this.$refs['orderForm'].validate((valid) => {
          this.dialogFormVisible = false
          if (valid) {
            this.fullscreenLoading = true
            let data = Object.assign({}, this.form, {contractCode: this.contractObj.code.substr(1)})
            createOrder(data).then(rst => {
              if(rst.data.code === '0000') {
                this.getNumberHandle()
                this.$message.success("新建订单成功！")
                this.$refs['orderForm'].resetFields()
                this.lookContractDetailHandle()
                this.fullscreenLoading = false
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
      // 确认订单
      confirmOrderHandle() {
        this.fullscreenLoading = true
        confirmOrder({id: this.$route.params.id}).then(rst => {
          if(rst.data.code === '0000') {
            this.fullscreenLoading = false
            this.getNumberHandle()
            this.getListObjHandle({type: 'o', state: 1})
            this.$message.success('确认订单操作成功！')
            this.$router.push({name: 'order', params: {oc: 'o', type: '0'}})
          }
        }).catch(err => {
          console.log(err)
          this.fullscreenLoading = false
        })
      },
      // 确认合同
      confirmContractHandle() {
        this.fullscreenLoading = true
        confirmContract({code: this.$route.params.id.substr(1)}).then(rst => {
          if(rst.data.code === '0000'){
            this.fullscreenLoading = false
            this.getNumberHandle()
            this.getListObjHandle({type:'c', state: 1})
            this.$message.success('确认合同操作成功！')
            this.$router.push({name:'contract',params:{oc:'c', type:'0'}})
          }
        }).catch(err => {
          console.log(err)
          this.fullscreenLoading = false
        })
      },
      // 关闭新建订单
      closeHandle(done) {
        this.$refs['orderForm'].resetFields()
        done()
      },
      closeRstHandle() {
        this.dialogFormVisible = false
        this.$refs['orderForm'].resetFields()
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
  hr{
    border-color: #ddd;
    border-top: 0;
  }
  .orderList{
    border-top: 1px solid #ddd;
    padding-top:15px;
  }
  h3.title{
    font-size: 16px;
    line-height: 30px;
    padding-top: 50px;
    margin-bottom: 15px;
    border-top: 1px solid #ddd;
  }
  .tip{
    text-align: right;
    color: #067df7;
  }
  .orderDetail .detialNumber{
    border-top: 1px solid #ddd;
    padding-top: 15px;
  }
</style>