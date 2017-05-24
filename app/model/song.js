var express = require('express');
var app = express();
var fs =require('fs');

Song = function() {
 this.songs = [];
 this.loadAll();
}

Song.prototype.get =function(id) {
  if (!id) {return false;}
  return this.songs[id];
}

Song.prototype.loadAll = function(callback) {
  var _this = this;
  console.log("Reading song files...")
  fs.readFile('db/songs.json', 'utf8', function (err, data){
    if (err) {
      return console.log(err);
    }
    try {
      _this.songs = JSON.parse(data);
    } catch (e) {
      _this.songs = [];
    }
  })
};

module.exports = Song;
