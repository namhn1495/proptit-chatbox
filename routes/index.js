var express = require('express');
var router = express.Router();


var rooms = ['room0','room1','room2','room3'];
router.get('/', function (req, res) {
  res.render('index');
  
});


module.exports = router;