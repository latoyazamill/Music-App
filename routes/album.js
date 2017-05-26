// /artist/:artist_id

var express = require('express'), router = express.Router(), moment = require('moment');

module.exports = function(artist, album, song) {
  router.get('/:album_id', function(req, res) {
    var wait = setInterval(function() {
      if (artist.isLoaded && album.isLoaded && song.isLoaded) {
        clearInterval(wait);
        var thisAlbumId = req.params.album_id;
        if (typeof thisAlbumId == 'undefined') {
          location.href='/';
        }
        var thisAlbum = album.getAlbum(thisAlbumId);
        var thisArtist = artist.getArtist(thisAlbum.artist_id);
        var songCount = song.getSongCount(thisAlbumId);
        thisAlbum.songCount = songCount;

        var songs = song.getSongs(thisAlbumId);

        var modSongs = songs.map(function(singleSong) {
          singleSong.trackTime = moment.utc(singleSong.length * 1000).format('mm:ss');
          return singleSong;
        });
        res.render('album', {album: thisAlbum, songs: modSongs, artist: thisArtist});
      }
    }, 100);

  });
  return router;
}
