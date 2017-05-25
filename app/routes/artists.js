// /index

var express = require('express'), router = express.Router();

module.exports = function (artist, album, song) {
  router.get('/', function(req, res) {
    var wait = setInterval(function() {
      if (artist.isLoaded && album.isLoaded && song.isLoaded)
      {
        clearInterval(wait);
        var artistWithCount = artist.getArtists().map(function(singleArtist) {
          singleArtist.albumCount = album.getAlbumCount(singleArtist.id);
          return singleArtist;
        });
        res.render('index', {artists: artistWithCount});
      }
    }, 100);

  });
  return router;
}
