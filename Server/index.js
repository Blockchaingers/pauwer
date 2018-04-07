const express = require('express')
const app = express()
const router = express.Router();
const machineId = require('node-machine-id')
const price = 0.3

async function getMachineId() {
    let id = await machineId();
}

const uniqueMachineId = machineId.machineIdSync({original: true})

require('./routes/routes.js')(app)

app.listen(3000, () => console.log('This app runs on port 3000.'))
