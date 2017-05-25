// /artist/:artist_id

var express = require('express'), router = express.Router();

module.exports = function(artist, album, song) {
  router.get('/:artist_id', function(req, res) {
    var wait = setInterval(function() {
      if (artist.isLoaded && album.isLoaded && song.isLoaded) {
        clearInterval(wait);
        var thisArtistId = req.params.artist_id;
        if (typeof thisArtistId == 'undefined') {
          location.href='/';
        }
        var thisArtist = artist.getArtist(thisArtistId);
        thisArtist.albumCount = album.getAlbumCount(thisArtistId);
        var modAlbums = album.getAlbums(thisArtistId).map(function(singleAlbum) {
          singleAlbum.songCount = song.getSongCount(singleAlbum.id);
          return singleAlbum;
        });
        var yellow = Math.floor((Math.random() * 5) + 1);
        var grey = 5 - yellow;
        res.render('artistInfo', {artist: thisArtist, artistAlbums: modAlbums,  yellow: yellow, grey: grey});
      }
    }, 100);

  });
  return router;
}
