var express = require('express'), router = express.Router();

require("../../model/artist");

router.get('/', function(req, res) {

  // instantiate model
  var artist = new Artist();

  artist.getArtists().then(function(data) {
    res.json(data);
  })

});

module.exports = router;
