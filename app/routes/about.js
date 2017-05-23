// about
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var authors = [
    {'name' : 'Latoya Williams', 'github' :  'https://github.com/NoCodingGenius/Music-App', 'githubPhoto' : 'https://avatars1.githubusercontent.com/u/25614756' },
    {'name' : 'Steve McDonald', 'github' : 'https://github.com/eastnorthwest', 'githubPhoto' : 'https://avatars3.githubusercontent.com/u/26018365'}
  ];
  res.render('pages/about', {authors: authors});
});

module.exports = router;