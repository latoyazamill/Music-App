// index/artists
var express = require('express');
var router = express.Router();

console.log("Artists")
router.get('/', function(req, res) {

  var album = new Album();

  var callback = function()
  {
    var artistWithCount = artist.artists.map(function(singleArtist) {
      singleArtist.albumCount = album.countAlbums(singleArtist.id);
      return singleArtist;
    });

    console.log("artistWithCount", artistWithCount)

    res.render('pages/artist', {artists: artistWithCount});
  }
  var artist = new Artist(callback);

});

module.exports = router;