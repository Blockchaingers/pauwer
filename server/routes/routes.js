module.exports = function(app) {

  app.get('/', function(req, res) {
      res.send('Thanks for visiting this API. This page has no functionality. Why are you even here.');
  })

  app.get('/api/:socketId/:userId/start', function (req, res) {
     res.json(
       '{"message": "You started the power consumption", "socketId": ' + req.params.socketId + '}'
     );
  })

  app.get('/api/:socketId/:userId/stop', function (req, res) {
     res.json(
       '{"message": "You stopped the power consumption", "socketId": ' + req.params.socketId + '}'
     );
  })
}
