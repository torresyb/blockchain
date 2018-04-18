const getListNum = async(ctx, next)=>{
  ctx.body = {code:1, msg:'请求成功', resultList: {order:[11,21], contract:[22,24]}}
}

module.exports = {
  getListNum
}