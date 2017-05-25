// /songs

var express = require('express'), router = express.Router(), moment = require('moment');

module.exports = function(artist, album, song) {

  router.get('/', function(req, res) {

    var wait = setInterval(function() {
      if (artist.isLoaded && album.isLoaded && song.isLoaded) {
        clearInterval(wait);
        var modSongs = song.getSongs().map(function(song) {
          var thisAlbum = album.getAlbum(song.album_id);
          var thisArtist = artist.getArtist(thisAlbum.artist_id);
          song.artistName = thisArtist.name;
          song.albumName = thisAlbum.title;
          song.trackTime = moment.utc(song.length * 1000).format("mm:ss");
          return song;
        })
        res.render('songs', {songs: modSongs});
      }
    }, 100);

  });
  return router;
};
