var express = require('express'), router = express.Router();

function rating () {
  var yellow = Math.floor((Math.random() * 5) + 1);
  console.log(yellow)
  return yellow;
}

router.get('/ratings', function(req, res) {
  var yellow = rating()
  var grey = 5 - yellow;
  console.log(grey)
  res.render('shared/ratings', {"rating": yellow, "grey": grey});
});

module.exports = router;
