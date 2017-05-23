var express = require('express');
var app = express();

// set view engine
app.set('view engine', 'ejs');

// Use res.render to load up an ejs view file

// index
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about
app.get('/about', function(req, res) {
  var authors = [
    {'name' : 'Latoya Williams'},
    {'name' : 'Steve McDonald'}
  ]
  res.render('pages/about', {authors: authors});
})

app.listen('8080')
console.log('8080 is listen port');