// /albums

var express = require('express'), router = express.Router();

module.exports = function (artist, album, song) {

  router.get('/', function(req, res) {

    var wait = setInterval(function() {
      if (artist.isLoaded && album.isLoaded && song.isLoaded)
      {
        clearInterval(wait);
        var modAlbums = album.getAlbums().map(function(singleAlbum) {
            var singleArtist = artist.getArtist(singleAlbum.artist_id);
            singleAlbum.artistName = singleArtist.name;
            singleAlbum.songCount = song.getSongCount(singleAlbum.id);
            return singleAlbum;
          });
        var yellow = Math.floor((Math.random() * 5) + 1);
        var grey = 5 - yellow;
        res.render('albums', {albums: modAlbums, yellow: yellow, grey: grey});
      }
    }, 100)

  });
  return router;
}
