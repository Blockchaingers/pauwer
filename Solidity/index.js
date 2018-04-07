var Web3 = require('web3')
// Step 1: Get a contract into my application
var json = require("./build/contracts/Recorder.json");

// Step 2: Turn that contract into an abstraction I can use
var contract = require("truffle-contract");
var MyContract = contract(json);

// Step 3: Provision the contract with a web3 provider
MyContract.setProvider(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

// Step 4: Use the contract!
MyContract.deployed().then(function(deployed) {
return deployed.createRecord(1,2,500);
}).catch(function(err){
  console.log(err)
});