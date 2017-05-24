// index/artists
var express = require('express');
var router = express.Router();

var Album;
Album = require('../model/album');

var Artist;
Artist = require('../model/artist');

var Song;
Song = require('../model/song');

router.get('/', function(req, res) {

  var artist = new Artist();
  artist.loadAll();
  var album = new Album();
  album.loadAll();
  var song = new Song();
  song.loadAll();

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


});

module.exports = router;