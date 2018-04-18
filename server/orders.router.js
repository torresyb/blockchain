const Router = require('koa-router')
const router = new Router()
const orderCtr = require('./controller/orders')

// 获取工单列表
router.get('/getlist', orderCtr.getOrderList)

// 获取订单列表和合同列表 数量
// router.get('/getlist', orderCtr.getOrderList)

module.exports = router