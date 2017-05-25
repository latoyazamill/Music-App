// /index

var express = require('express'), router = express.Router();

module.exports = function (artist, album, song) {
  console.log(artist);
  router.get('/', function(req, res) {
    console.log(artist);
    var wait = setInterval(function() {
      console.log(artist);
      if (artist.isLoaded && album.isLoaded && song.isLoaded)
      {
        clearInterval(wait);
        console.log("artists.js router", artist, album, song);
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
