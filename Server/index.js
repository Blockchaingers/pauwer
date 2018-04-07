const express = require('express')
const app = express()
const router = express.Router();
const machineId = require('node-machine-id')
const price = 0.3

async function getMachineId() {
    let id = await machineId();
}

const uniqueMachineId = machineId.machineIdSync({original: true})

app.get('/', function(req, res) {
    res.send('Thanks for visiting this API. This page has no functionality. Why are you even here.');
});

app.get('/connect/:userId', function (req, res) {
   //recorder.createRecord(req.userId, machineId, price);
   res.send('You reached this page with id: ' + req.params.userId)
})

app.listen(3000, () => console.log('This app runs on port 3000.'))
