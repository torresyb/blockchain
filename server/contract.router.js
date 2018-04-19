const Router = require('koa-router')
const router = new Router()
const contractCtr = require('./controller/contract')

// 获取合同列表
router.get('/getlist', contractCtr.getContractList)
// 获取合同
router.get('/get',contractCtr.getContractByCode)
// 新建合同
router.post('/new',contractCtr.initContract)
// 确认合同
router.post('/confirm',contractCtr.confirmContract)
// 修改合同
router.post('/modify',contractCtr.modifyContract)
// 删除合同
router.post('/delete',contractCtr.deleteContractByCode)


module.exports = router