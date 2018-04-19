var util = require('util');

let { httpQueryRequest, httpInvokeRequest } = require('../http')

const getListNum = async(ctx, next)=>{
  ctx.body = {code:1, msg:'请求成功', resultList: {order:[11,21], contract:[22,24]}}
}

const queryAll = async(ctx, next) => {
    // create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
    await httpQueryRequest({
        //targets : --- letting this default to the peers assigned to the channel
        chaincodeId: 'baoli',
        fcn: 'queryAll',
        args: ['', '']
    }).then((query_responses) => {
        console.log("Query has completed, checking results");
        // query_responses could have more than one  results if there multiple peers were used as targets
        if (query_responses && query_responses.length == 1) {
            if (query_responses[0] instanceof Error) {
                console.error("error from query = ", query_responses[0]);
                var res = {
                  code:'9999',
                  msg:'failed',
                  data:query_responses[0]
                }
                ctx.body = res;
            } else {
                console.log("Response is ", query_responses[0].toString());
                var res = {
                  code:'0000',
                  msg: 'success',
                  data:query_responses[0].toString()
                }
                ctx.body = res;
            }
        } else {
            console.log("No payloads were returned from query");
        }
    }).catch((err) => {
        console.error('Failed to query successfully :: ' + err);
        var res = {
                  code:'9999',
                  msg: 'failed',
                  data:''
                }
                ctx.body = res;
    });
}

module.exports = {
  getListNum,
  queryAll
}