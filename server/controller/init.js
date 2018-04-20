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

const query = async(ctx, next) => {
    // create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
    await httpQueryRequest({
        //targets : --- letting this default to the peers assigned to the channel
        chaincodeId: 'baoli',
        fcn: 'richQuery',
        args: [ctx.query.type,ctx.query.state]
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

const querySize = async(ctx, next) => {
    // create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
    await httpQueryRequest({
        //targets : --- letting this default to the peers assigned to the channel
        chaincodeId: 'baoli',
        fcn: 'richQueryForSize',
        args: [ctx.query.type,ctx.query.state]
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

const qsFunc = function(params){
  return httpQueryRequest({
        //targets : --- letting this default to the peers assigned to the channel
        chaincodeId: 'baoli',
        fcn: 'richQueryForSize',
        args: [params.type,params.state]
    }).then((query_responses) => {
        console.log("Query has completed, checking results");
        // query_responses could have more than one  results if there multiple peers were used as targets
        if (query_responses && query_responses.length == 1) {
            if (query_responses[0] instanceof Error) {
                console.error("error from query = ", query_responses[0]);
            }else{
                console.log("Response is ", query_responses[0].toString());
                return query_responses
            }
        } else {
            console.log("No payloads were returned from query");
        }
    }).catch((err) => {
        console.error('Failed to query successfully :: ' + err);
    });
}

const querySizes = async(ctx,next) => {
    var sz = {
      c1:'0',
      c2:'0',
      o1:'0',
      o2:'0'
    }
    await qsFunc({type:'c',state:'1'}).then((res)=>{
      sz.c1=res.toString()
    })
    await qsFunc({type:'c',state:'2'}).then((res)=>{
      sz.c2=res.toString()
    })
    await qsFunc({type:'o',state:'1'}).then((res)=>{
      sz.o1=res.toString()
    })
    await qsFunc({type:'o',state:'2'}).then((res)=>{
      sz.o2=res.toString()
    })
     var res = {
                  code:'0000',
                  msg: 'success',
                  data:sz
                }
     ctx.body = res;

}

module.exports = {
  getListNum,
  queryAll,
  query,
  querySize,
  querySizes
}