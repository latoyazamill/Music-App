// index/artists
var express = require('express');
var router = express.Router();

console.log("Artists")
router.get('/', function(req, res) {

  var artist = new Artist();

  var callback = function(data)
  {
    console.log("Artist data in callback", data, typeof data);
    res.render('pages/index', {artists: JSON.parse(data)});
  }
  artist.loadAll(callback);


});

module.exports = router;