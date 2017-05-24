var express = require('express');
var app = express();
var fs =require('fs');

class Song {

  constructor() {
    this.constructor.songs = [];
    this.constructor.loaded = false;
  }

  get isLoaded(){
    return this.constructor.loaded;
  }

  getOne(id) {
    if (!id) {return false;}
    return this.songs[id];
  }

  setSongCount(albumId)
  {
    var count = 0;
    this.constructor.songs.map(function(song) {
      if (song.album_id == albumId)
      {
        count++;
      }
    })
    return count;
  }

  getSongs(albumId) {
    var songList = [];
    this.constructor.songs.map(function(song) {
      if (song.album_id == albumId)
      {
        songList.push(album)
      }
    })
    return songList;
  }

  saveSongs(songs) {
    try {
      this.constructor.songs = JSON.parse(songs);
    } catch (e) {
      this.constructor.songs = [];
    }
    this.constructor.loaded = true;
  }

  loadAll() {
    var _this = this;
    fs.readFile('db/songs.json', 'utf8', function (err, songs){
      if (err) {
        return console.log(err);
      }
      _this.saveSongs(songs);
    })
  };
}

module.exports = Song;
