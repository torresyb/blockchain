const Router = require('koa-router')
const router = new Router()
const initCtr = require('./controller/init')

//query all
router.get('/queryall', initCtr.queryAll)
// 获取列表数量
router.get('/getlistnumber', initCtr.getListNum)
// 根据type/state查询数据
router.get('/query', initCtr.query)
// 查询数字
router.get('/querysz', initCtr.querySize)
// 查询数字
router.get('/queryszs', initCtr.querySizes)

module.exports = router