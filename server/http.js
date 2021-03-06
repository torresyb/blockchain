/**
 * @author yangbin
 * @date 18/4/17
 * @Description: go 接口对接
 */
let Fabric_Client = require('fabric-client')
let path = require('path')
let util = require('util')
let os = require('os')

let fabric_client = new Fabric_Client()

let channel = fabric_client.newChannel('mychannel')
let peer = fabric_client.newPeer('grpc://localhost:7051')
channel.addPeer(peer)
let order = fabric_client.newOrderer('grpc://localhost:7050')
channel.addOrderer(order);

let member_user = null
let store_path = path.join(__dirname, 'hfc-key-store')
let tx_id = null

function httpQueryRequest (params) {
  return Fabric_Client.newDefaultKeyValueStore({ path: store_path}).then(state_store => {
    fabric_client.setStateStore(state_store)
    let crypto_suite = Fabric_Client.newCryptoSuite()
    // use the same location for the state store (where the users' certificate are kept)
    // and the crypto store (where the users' keys are kept)
    let crypto_store = Fabric_Client.newCryptoKeyStore({path: store_path})
    crypto_suite.setCryptoKeyStore(crypto_store)
    fabric_client.setCryptoSuite(crypto_suite)
    // get the enrolled user from persistence, this user will sign all requests
    return fabric_client.getUserContext('user1', true);
  }).then(user_from_store => {
    if (user_from_store && user_from_store.isEnrolled()) {
      console.log('Successfully loaded user1 from persistence');
      member_user = user_from_store;
    } else {
      // throw new Error('Failed to get user1.... run registerUser.js');
      console.log('Running in non-register mode')
    }

    // console.log(params)

    return channel.queryByChaincode(params);
  })
}

function httpInvokeRequest (params) {
  return Fabric_Client.newDefaultKeyValueStore({ path: store_path}).then(state_store => {
    fabric_client.setStateStore(state_store)
    let crypto_suite = Fabric_Client.newCryptoSuite()
    // use the same location for the state store (where the users' certificate are kept)
    // and the crypto store (where the users' keys are kept)
    let crypto_store = Fabric_Client.newCryptoKeyStore({path: store_path})
    crypto_suite.setCryptoKeyStore(crypto_store)
    fabric_client.setCryptoSuite(crypto_suite)
    // get the enrolled user from persistence, this user will sign all requests
    return fabric_client.getUserContext('user1', true);
  }).then(user_from_store => {
    if (user_from_store && user_from_store.isEnrolled()) {
      console.log('Successfully loaded user1 from persistence');
      member_user = user_from_store;
    } else {
      // throw new Error('Failed to get user1.... run registerUser.js');
      console.log('Running in non-register mode')
    }
    console.log(params)
    // get a transaction id object based on the current user assigned to fabric client
    tx_id = fabric_client.newTransactionID();
    params.txId=tx_id

    return channel.sendTransactionProposal(params);
  }).then((results) => {
        let proposalResponses = results[0];
        let proposal = results[1];
        let isProposalGood = false;
        if (proposalResponses && proposalResponses[0].response &&
            proposalResponses[0].response.status === 200) {
            isProposalGood = true;
            console.log('Transaction proposal was good');
        } else {
            console.error('Transaction proposal was bad');
        }
        if (isProposalGood) {
            console.log(util.format(
                'Successfully sent Proposal and received ProposalResponse: Status - %s, message - "%s"',
                proposalResponses[0].response.status, proposalResponses[0].response.message));

            // build up the request for the orderer to have the transaction committed
            let request = {
                proposalResponses: proposalResponses,
                proposal: proposal
            };

            // set the transaction listener and set a timeout of 30 sec
            // if the transaction did not get committed within the timeout period,
            // report a TIMEOUT status
            let transaction_id_string = tx_id.getTransactionID(); //Get the transaction ID string to be used by the event processing
            let promises = [];

            let sendPromise = channel.sendTransaction(request);
            promises.push(sendPromise); //we want the send transaction first, so that we know where to check status

            // get an eventhub once the fabric client has a user assigned. The user
            // is required bacause the event registration must be signed
            let event_hub = fabric_client.newEventHub();
            event_hub.setPeerAddr('grpc://localhost:7053');

            // using resolve the promise so that result status may be processed
            // under the then clause rather than having the catch clause process
            // the status
            let txPromise = new Promise((resolve, reject) => {
                let handle = setTimeout(() => {
                    event_hub.disconnect();
                    resolve({ event_status: 'TIMEOUT' }); //we could use reject(new Error('Trnasaction did not complete within 30 seconds'));
                }, 3000);
                event_hub.connect();
                event_hub.registerTxEvent(transaction_id_string, (tx, code) => {
                    clearTimeout(handle);
                    event_hub.unregisterTxEvent(transaction_id_string);
                    event_hub.disconnect();

                    // now let the application know what happened
                    let return_status = { event_status: code, tx_id: transaction_id_string };
                    if (code !== 'VALID') {
                        console.error('The transaction was invalid, code = ' + code);
                        resolve(return_status); // we could use reject(new Error('Problem with the tranaction, event status ::'+code));
                    } else {
                        console.log('The transaction has been committed on peer ' + event_hub._ep._endpoint.addr);
                        resolve(return_status);
                    }
                }, (err) => {
                    //this is the callback if something goes wrong with the event registration or processing
                    reject(new Error('There was a problem with the eventhub ::' + err));
                });
            });
            promises.push(txPromise);

            return Promise.all(promises);
        } else {
            console.error('Failed to send Proposal or receive valid response. Response null or status is not 200. exiting...');
            throw new Error('Failed to send Proposal or receive valid response. Response null or status is not 200. exiting...');
        }
    });
}

module.exports = {httpQueryRequest,httpInvokeRequest}


