const Router = require('koa-router')
const router = new Router()
const orderCtr = require('./controller/orders')

// 获取工单列表
router.get('/getlist', orderCtr.getOrderList)
// 获取订单
router.get('/get',orderCtr.getOrderById)
// 查询合同下的所有订单
router.get('/getobyc',orderCtr.getOrdersByContractCode)
// 新建订单
router.post('/new', orderCtr.initOrder)
// 确认订单
router.post('/confirm', orderCtr.confirmOrder)
// 修改订单
router.post('/modify', orderCtr.modifyOrder)
// 删除订单
router.post('/delete', orderCtr.deleteOrderById)


module.exports = router