var express = require('express');
var app = express();

// load models and load data
var Artist = require('./model/artist');
var artist = new Artist();


var Album = require('./model/album');
var album = new Album();
album.loadAll();


var Song = require('./model/song');
var song = new Song();
song.loadAll();

// set view engine
app.set('view engine', 'ejs');

// define routes
var about = require('./routes/about');
app.use('/about', about);

var artists = require('./routes/artists')(artist, album, song);
app.use('/', artists);

var artists_api = require('./routes/api/artists')(Artist);
app.use('/api/artists', artists_api);

var artist_api = require('./routes/api/artist')(Artist);
app.use('/api/artist', artist_api);

var albums = require('./routes/albums')(artist, album, song);
app.use('/albums', albums);

var songs = require('./routes/songs')(artist, album, song);
app.use('/songs', songs);

var info = require('./routes/artist')(artist, album, song);
app.use('/artists', info);

var albumInfo = require('./routes/album')(artist, album, song);
app.use('/albums', albumInfo);

// setup static files
app.use(express.static('public'))

app.listen('8080')
console.log('8080 is listen port');