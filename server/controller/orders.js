
let httpRequest = require('../http')
// console.log('httpRequest:', httpRequest)

const getOrderList = async(ctx, next) => {
// create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
  await httpRequest({
    //targets : --- letting this default to the peers assigned to the channel
    chaincodeId: 'fabcar',
    fcn: 'queryAllCars',
    args: ['']
  }).then((query_responses) => {
    console.log("Query has completed, checking results");
    // query_responses could have more than one  results if there multiple peers were used as targets
    if (query_responses && query_responses.length == 1) {
      if (query_responses[0] instanceof Error) {
        console.error("error from query = ", query_responses[0]);
      } else {
        console.log("Response is ", query_responses[0].toString());
        ctx.body = query_responses[0].toString();
      }
    } else {
      console.log("No payloads were returned from query");
    }
  }).catch((err) => {
    console.error('Failed to query successfully :: ' + err);
  });
}

module.exports = {
  getOrderList
}

