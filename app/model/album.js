var express = require('express');
var app = express();
var fs =requires('fs');

Album = function() {
  this.albums =[];
}

Album.prototype.get =function(id) {
  if (!id) {return false;}
  return this.albums[id];
}

Album.prototype.loadAll = function(callback) {
  console.log("Reading files...")
  fs.readFile('db/ablums.json', 'utf8', function (err, data){
    if (err) {
      return console.log(err);
    }
    if (data && typeof callback == 'function'){
      callback(data);
    }
  })
};

module.exports = Album;
