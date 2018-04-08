let Web3 = require('web3')
let provider = new Web3.providers.HttpProvider("http://localhost:7545")

let contract = require("truffle-contract");
let json = require("./build/contracts/Recorder.json");

let MyContract = contract(json);
MyContract.setProvider(provider);

console.log(MyContract.web3.eth.accounts[0])
var deployed;
MyContract.deployed().then(function(v) {
  deployed = v;
  return deployed.createRecord(1,8,500,{from: MyContract.web3.eth.accounts[0]})
}).catch(function(err){
  console.log(err)
}).then(v=>{
  return deployed.getRecords(1,2)
}).then(v=>{
  console.log(v[1])
});
