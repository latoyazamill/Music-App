var express = require('express');
var app = express();
var fs =requires('fs');

Song = function() {
  this.songs =[];
}

Song.prototype.get =function(id) {
  if (!id) {return false;}
  return this.songs[id];
}

Song.prototype.loadAll = function(callback) {
  console.log("Reading files...")
  fs.readFile('db/songs.json', 'utf8', function (err, data){
    if (err) {
      return console.log(err);
    }
    if (data && typeof callback == 'function'){
      callback(data);
    }
  })
};

module.exports = Song;
