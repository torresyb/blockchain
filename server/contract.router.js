const Router = require('koa-router')
const router = new Router()
const contractCtr = require('./controller/contract')

// 获取工单列表
router.get('/getlist', contractCtr.getContractList)

module.exports = router