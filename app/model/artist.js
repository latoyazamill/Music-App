var express = require('express');
var app = express();
var fs = require('fs');

class Artist  {

  constructor() {
    this.constructor.artists = [];
    this.constructor.loaded = false;
  }

  get isLoaded() {
    return this.constructor.loaded;
  }

  get getAll() {
    return this.constructor.artists;
  }

  getOne() {
    if (!id) {return false;}
    return this.constructor.artists[id];
  }

  saveArtists(artists)
  {
    try {
      this.constructor.artists = JSON.parse(artists);
    } catch (e) {
      this.constructor.artists = [];
    }
    this.constructor.loaded = true;
  }

  loadAll(callback) {
    var _this = this;
    fs.readFile('db/artists.json', 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      _this.saveArtists(data);
    })
  };
}

module.exports = Artist;