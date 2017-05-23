var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    // var json = require('./emotions/emotions.json');
    var json = JSON.parse(require('fs').readFileSync('public/emotions/emotions.json', 'utf8'));
    res.json(json);
    // res.send('respond with a resource');
});


module.exports = router;