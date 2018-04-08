let contracts = require('../controllers/contractController')

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.send('Thanks for visiting this API. This page has no functionality. Why are you even here.');
  })

  app.get('/api/:socketId/:userId/getState', function(req, res) {
      contracts.get_state
  })

  app.get('/api/:socketId/:userId/start', function (req, res) {
      contracts.start_contract
  })

  app.get('/api/:socketId/:userId/stop', function (req, res) {
      contracts.stop_contract
  })
}
