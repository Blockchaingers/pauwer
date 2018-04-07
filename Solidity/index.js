var Web3 = require('web3');
var provider = new Web3.providers.HttpProvider("http://localhost:7545");
const truffleContract = require("truffle-contract");

var Contract = truffleContract(require("./build/contracts/Recorder.json"));
Contract.setProvider(provider);

//console.log(provider.eth.accounts;)

// Web3.eth.getAccounts((err, acc) => {
//   console.log(acc);
// });
// var deployed;
// Contract.deployed().then(function(instance) {
//   var deployed = instance;
//   return instance.createRecord(1,2,500);
// }).then(function(result){
//   console.log(result[2])
// })