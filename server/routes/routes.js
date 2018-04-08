const actions = require('../controller/contractController')

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.send('Thanks for visiting this API. This page has no functionality. Why are you even here.');
  })

  app.get('/api/:socketId/:userId/getState', actions.getState);

  app.get('/api/:socketId/:userId/start', actions.start);

  app.get('/api/:socketId/:userId/stop', actions.stop);
}
