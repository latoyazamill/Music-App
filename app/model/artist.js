var express = require('express');
var app = express();
var fs = require('fs');

Artist = function() {
  this.artists = [];
}

Artist.prototype.get = function(id)
{
  if (!id) {return false;}
  return this.artists[id];
}

Artist.prototype.loadAll = function(callback)
{
  console.log("Reading files...")
  fs.readFile('db/artists.json', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    if (data && typeof callback == 'function')
    {
      callback(data);
    }
  })
};

module.exports = Artist;
