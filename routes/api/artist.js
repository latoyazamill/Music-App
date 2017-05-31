var express = require('express'), router = express.Router();

module.exports = function (artist) {
  var a = new artist();

  router.get('/:id', function(req, res) {
    a.getArtist(req.params.id).then(function(data) {
      console.log("getArtist", data);
      res.json(data);
    }).catch(function(err){
      res.send(err);
      console.log("getArtist error", err);
    })
  });

  return router;
};
