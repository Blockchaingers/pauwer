const express = require('express')
const app = express()
const router = express.Router();
const machineId = require('node-machine-id')
const usage = 100
const Web3 = require('web3')
const contract = require("truffle-contract")

let provider = new Web3.providers.HttpProvider("http://localhost:7545")
let contracts = require("../solidity/build/contracts/Recorder.json")
let MyContract = contract(contracts)

async function getMachineId() {
    let id = await machineId();
}

const uniqueMachineId = machineId.machineIdSync({original: true})

require('./routes/routes.js')(app)

app.listen(3000, () => console.log('This app runs on port 3000.'))
