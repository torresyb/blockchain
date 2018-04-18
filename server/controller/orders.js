const getOrderList = async(ctx, next)=>{
  ctx.body = {code:1, msg:'请求成功', resultList: {noOrders: [{title: '这里是标题', money: '222'}], yesOrders: [{title: '这里是标题', money: '222'}]}}
}

module.exports = {
  getOrderList
}

