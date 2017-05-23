var express = require('express');
var app = express();

// load models
require('./model/artist');

// set view engine
app.set('view engine', 'ejs');

// Use res.render to load up an ejs view file

// index
/*
app.get('/', function(req, res) {
  res.render('pages/index');
});
*/

// define routes
var about = require('./routes/about');
app.use('/about', about);

var artist = require('./routes/artist');
app.use('/', artist);

// setup static files
app.use(express.static('public'))

app.listen('8080')
console.log('8080 is listen port');