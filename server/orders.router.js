const Router = require('koa-router')
const router = new Router()
const orderCtr = require('./controller/orders')

// 获取工单列表
router.get('/getlist', orderCtr.getOrderList)

module.exports = router