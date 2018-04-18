/**
 * @author yangbin
 * @date 2018/4/17
 * @Description: server端
 */
const koa = require('koa')
const cors = require('koa2-cors')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
// 订单路由
const orderApi = require('./orders.router')
const contractApi = require('./contract.router')

const app = new koa()
const router = new Router()

app.use(bodyParser())
app.use(cors())
//  ****************  装载所有子路由
// 订单
router.use('/order', orderApi.routes(), orderApi.allowedMethods())
// 合同
router.use('/contract', contractApi.routes(), contractApi.allowedMethods())

// ****************  加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

// ***************  启动服务
app.listen(9093, function () {
  console.log('app server is ready!')
})