const Router = require('koa-router')
const router = new Router()
const initCtr = require('./controller/init')

//query all
router.get('/queryall', initCtr.queryAll)
// 获取列表数量
router.get('/getlistnumber', initCtr.getListNum)

module.exports = router