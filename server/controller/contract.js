var util = require('util');

let { httpQueryRequest, httpInvokeRequest } = require('../http')

const getContractList = async(ctx, next) => {
    // create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
    await httpQueryRequest({
        //targets : --- letting this default to the peers assigned to the channel
        chaincodeId: 'baoli',
        fcn: 'queryAllContract',
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

const getContractByCode = async(ctx, next) => {
	// console.log(ctx.query)
    // create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
    await httpQueryRequest({
        //targets : --- letting this default to the peers assigned to the channel
        chaincodeId: 'baoli',
        fcn: 'getContractByCode',
        args: ['c' + ctx.query.code]
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

const initContract = async(ctx, next) => {

    // console.log(ctx.request.body)
    let { name, code, bidcode, fpinfo, spinfo, time, money, ordermode} = ctx.request.body

    // create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
    await httpInvokeRequest({
        //targets : --- letting this default to the peers assigned to the channel
        chaincodeId: 'baoli',
        fcn: 'initContract',
        args: [name,code,bidcode,fpinfo,spinfo,time,money,ordermode],
        chainId: 'mychannel',
        txId: ''
    }).then((results) => {
        console.log('Send transaction promise and event listener promise have completed');
        // check the results in the order the promises were added to the promise all list
        if (results && results[0] && results[0].status === 'SUCCESS') {
            console.log('Successfully sent transaction to the orderer.');
        } else {
            console.error('Failed to order the transaction. Error code: ' + response.status);
        }

        if (results && results[1] && results[1].event_status === 'VALID') {
            console.log('Successfully committed the change to the ledger by the peer');
        } else {
            console.log('Transaction failed to be committed to the ledger due to ::' + results[1].event_status);
        }

        if(results && results[0] && results[0].status === 'SUCCESS' && results && results[1] && results[1].event_status === 'VALID'){
        	var res = {
                	code:'0000',
                	msg: 'success',
                	data:''
                }
                ctx.body = res;
        }else{
        	var res = {
                	code:'9999',
                	msg: 'failed',
                	data:''
                }
                ctx.body = res;
        }
    }).catch((err) => {
        console.error('Failed to invoke successfully :: ' + err);
        var res = {
                	code:'9999',
                	msg: 'failed',
                	data:''
                }
                ctx.body = res;
    });
}

const confirmContract = async(ctx, next) => {

    // console.log(ctx.request.body)
    let {code} = ctx.request.body
    //加"c"
    code = 'c'+code;

    // create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
    await httpInvokeRequest({
        //targets : --- letting this default to the peers assigned to the channel
        chaincodeId: 'baoli',
        fcn: 'confirmContract',
        args: [code],
        chainId: 'mychannel',
        txId: ''
    }).then((results) => {
        console.log('Send transaction promise and event listener promise have completed');
        // check the results in the order the promises were added to the promise all list
        if (results && results[0] && results[0].status === 'SUCCESS') {
            console.log('Successfully sent transaction to the orderer.');
        } else {
            console.error('Failed to order the transaction. Error code: ' + response.status);
        }

        if (results && results[1] && results[1].event_status === 'VALID') {
            console.log('Successfully committed the change to the ledger by the peer');
        } else {
            console.log('Transaction failed to be committed to the ledger due to ::' + results[1].event_status);
        }

        if(results && results[0] && results[0].status === 'SUCCESS' && results && results[1] && results[1].event_status === 'VALID'){
        	var res = {
                	code:'0000',
                	msg: 'success',
                	data:''
                }
                ctx.body = res;
        }else{
        	var res = {
                	code:'9999',
                	msg: 'failed',
                	data:''
                }
                ctx.body = res;
        }
    }).catch((err) => {
        console.error('Failed to invoke successfully :: ' + err);
        var res = {
                	code:'9999',
                	msg: 'failed',
                	data:''
                }
                ctx.body = res;
    });
}

const modifyContract = async(ctx, next) => {

    // console.log(ctx.request.body)
    let { name, code, bidcode, fpinfo, spinfo, time, money, ordermode} = ctx.request.body
    //加"c"
    code = 'c'+code;

    // create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
    await httpInvokeRequest({
        //targets : --- letting this default to the peers assigned to the channel
        chaincodeId: 'baoli',
        fcn: 'modifyContract',
        args: [name,code,bidcode,fpinfo,spinfo,time,money,ordermode],
        chainId: 'mychannel',
        txId: ''
    }).then((results) => {
        console.log('Send transaction promise and event listener promise have completed');
        // check the results in the order the promises were added to the promise all list
        if (results && results[0] && results[0].status === 'SUCCESS') {
            console.log('Successfully sent transaction to the orderer.');
        } else {
            console.error('Failed to order the transaction. Error code: ' + response.status);
        }

        if (results && results[1] && results[1].event_status === 'VALID') {
            console.log('Successfully committed the change to the ledger by the peer');
        } else {
            console.log('Transaction failed to be committed to the ledger due to ::' + results[1].event_status);
        }

        if(results && results[0] && results[0].status === 'SUCCESS' && results && results[1] && results[1].event_status === 'VALID'){
        	var res = {
                	code:'0000',
                	msg: 'success',
                	data:''
                }
                ctx.body = res;
        }else{
        	var res = {
                	code:'9999',
                	msg: 'failed',
                	data:''
                }
                ctx.body = res;
        }
    }).catch((err) => {
        console.error('Failed to invoke successfully :: ' + err);
        var res = {
                	code:'9999',
                	msg: 'failed',
                	data:''
                }
                ctx.body = res;
    });
}

const deleteContractByCode = async(ctx, next) => {

    // console.log(ctx.request.body)
    let {code} = ctx.request.body
    //加"c"
    code = 'c'+code;

    // create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
    await httpInvokeRequest({
        //targets : --- letting this default to the peers assigned to the channel
        chaincodeId: 'baoli',
        fcn: 'deleteContractByCode',
        args: [code],
        chainId: 'mychannel',
        txId: ''
    }).then((results) => {
        console.log('Send transaction promise and event listener promise have completed');
        // check the results in the order the promises were added to the promise all list
        if (results && results[0] && results[0].status === 'SUCCESS') {
            console.log('Successfully sent transaction to the orderer.');
        } else {
            console.error('Failed to order the transaction. Error code: ' + response.status);
        }

        if (results && results[1] && results[1].event_status === 'VALID') {
            console.log('Successfully committed the change to the ledger by the peer');
        } else {
            console.log('Transaction failed to be committed to the ledger due to ::' + results[1].event_status);
        }

        if(results && results[0] && results[0].status === 'SUCCESS' && results && results[1] && results[1].event_status === 'VALID'){
        	var res = {
                	code:'0000',
                	msg: 'success',
                	data:''
                }
                ctx.body = res;
        }else{
        	var res = {
                	code:'9999',
                	msg: 'failed',
                	data:''
                }
                ctx.body = res;
        }
    }).catch((err) => {
        console.error('Failed to invoke successfully :: ' + err);
        var res = {
                	code:'9999',
                	msg: 'failed',
                	data:''
                }
                ctx.body = res;
    });
}

module.exports = {
    getContractList,
    initContract,
    confirmContract,
    modifyContract,
    deleteContractByCode,
    getContractByCode
}