let Fabric_Client = require('fabric-client')
let path = require('path')
let util = require('util')
let os = require('os')

let fabric_client = new Fabric_Client()

let channel = fabric_client.newChannel('mychannel')
let peer = fabric_client.newPeer('grpc://localhost:7051')
channel.addPeer(peer)

let member_user = null
let store_path = path.join(__dirname, 'hfc-key-store')
let tx_id = null

function httpRequest (params) {
  Fabric_Client.newDefaultKeyValueStore({ path: store_path}).then(state_store => {
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
    return channel.queryByChaincode(params);
  })
}

module.exports = httpRequest


