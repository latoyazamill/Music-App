var express = require('express');
var app = express();
var fs =require('fs');

class Album {
  constructor () {
    this.constructor.albums = [];
    this.constructor.loaded = false;
  }

  get isLoaded() {
    return this.constructor.loaded;
  }

  getAlbum(id) {
    if (!id) {return false;}
    return this.constructor.albums[id];
  }

  getAlbumCount(artistId)
  {
    var count = 0;
    console.log(this.constructor.albums)
    this.constructor.albums.map(function(album) {
      if (album.artist_id == artistId)
      {
        count++;
      }
    })
    return count;
  }

  getAlbums(artistId) {
    var albumList = [];
    this.constructor.albums.map(function(album) {
      if (album.artist_id == artistId)
      {
        albumList.push(album)
      }
    })
    return albumList;
  }

  saveAlbums(albums) {
    try {
      this.constructor.albums = JSON.parse(albums);
    } catch (e) {
      this.constructor.albums = [];
    }
    this.constructor.loaded = true;
  }

  loadAll(callback) {
    var _this = this;
    fs.readFile('db/albums.json', 'utf8', function (err, albums){
      if (err) {
        return console.log(err);
      }
      _this.saveAlbums(albums);
    })
  };
}

module.exports = Album;
