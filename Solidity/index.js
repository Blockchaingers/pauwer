let Web3 = require('web3')
let provider = new Web3.providers.HttpProvider("http://localhost:7545")
//let web3 = new Web3(provider)

let contract = require("truffle-contract");
let json = require("./build/contracts/Recorder.json");

let MyContract = contract(json);
MyContract.setProvider(provider);

// console.log(web3.eth.accounts);
// var recorder = await MyContract.deployed();
// recorder.createRecord(1,2,500);
// MyContract.at(MyContract.address).then((v)=>{
//   return v.createRecord(1,2,500);
// })

// MyContract.currentProvider.sendAsync = function () {
//   return MyContract.currentProvider.send.apply(MyContract.currentProvider, arguments);
// };
console.log(MyContract.web3.eth.accounts[0])
MyContract.deployed().then(function(deployed) {
  deployed.createRecord(1,2,500,{from: MyContract.web3.eth.accounts[0]})
}).catch(function(err){
  console.log(err)
});