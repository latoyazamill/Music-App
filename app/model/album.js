var express = require('express');
var app = express();
var fs =require('fs');

Album = function() {
  this.albums = [];
  this.loadAll();
}

Album.prototype.get =function(id) {
  if (!id) {return false;}
  return this.albums[id];
}

Album.prototype.countAlbums = function(id)
{
  console.log(this.albums)
  var count = 0;
  this.albums.map(function(val) {
   if (val.artist_id == id)
   {
      count++;
   }
  })
  return count;
}

Album.prototype.loadAll = function(callback) {
  var _this = this;
  console.log("Reading album files...")
  fs.readFile('db/albums.json', 'utf8', function (err, data){
    if (err) {
      return console.log(err);
    }
    try {
      _this.albums = JSON.parse(data);
    } catch (e) {
      _this.albums = [];
    }
  })
};

module.exports = Album;
