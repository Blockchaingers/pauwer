const usage = 100
const Web3 = require('web3')
const contract = require("truffle-contract")

let provider = new Web3.providers.HttpProvider("http://localhost:7545")
let contracts = require("../../solidity/build/contracts/Recorder.json")
let MyContract = contract(contracts)

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.send('Thanks for visiting this API. This page has no functionality. Why are you even here.');
  })

  app.get('/api/:socketId/:userId/start', function (req, res) {

    MyContract.setProvider(provider)

    MyContract.deployed().then(function(instance) {
        return instance.createRecord(req.params.userId, req.params.socketId, usage,{from: '0x7E42bd617215512d021A2c6b9076BA0c080E8530'}) // wtf address
      })
      .catch(function(err){
        console.log(err)
    });

    res.json(
      '{"message": "You started the power consumption", "socketId": "' + req.params.socketId + '"}'
    );
  })

  app.get('/api/:socketId/:userId/stop', function (req, res) {
    res.json(
      '{"message": "You stopped the power consumption", "socketId": "' + req.params.socketId + '"}'
    );
  })
}
