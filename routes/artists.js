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
        var yellow = Math.floor((Math.random() * 5) + 1);
        var grey = 5 - yellow;
        res.render('index', {artists: artistWithCount, yellow: yellow, grey: grey});
      }
    }, 100);

  });
  return router;
}
