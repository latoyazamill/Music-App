// index/artists
var express = require('express'), router = express.Router();

module.exports = function (artist, album, song) {

  router.get('/', function(req, res) {

    var wait = setInterval(function() {
      if (artist.isLoaded && album.isLoaded && song.isLoaded)
      {
        clearInterval(wait);
        var artistWithCount = artist.getAll.map(function(singleArtist) {
          singleArtist.albumCount = album.getAlbumCount(singleArtist.id);
          return singleArtist;
        });
        res.render('pages/artist', {artists: artistWithCount});
      }
    }, 100)
    console.log("got")

  });
  return router;
}
