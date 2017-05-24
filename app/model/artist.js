var express = require('express');
var app = express();
var fs = require('fs');

Artist = function(callback) {
  this.artists = [];
  this.loadAll(callback);
}

Artist.prototype.get = function(id)
{
  if (!id) {return false;}
  return this.artists[id];
}

Artist.prototype.saveData = function(data)
{
  if (data)
  {
    this.artists = data;
  }
}

Artist.prototype.loadAll = function(callback)
{
  var _this = this;

  console.log("Reading artist files...")
  fs.readFile('db/artists.json', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    try {
      _this.artists = JSON.parse(data);
    } catch (e) {
      _this.artists = [];
    }
    callback();
  })
};

module.exports = Artist;
