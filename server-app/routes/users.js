var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
    {name: 'Adsad', age: 23},
    {name: 'ssdsfdsf', age: 24},
    {name: 'sfdfsd', age: 25},
    {name: 'erewr', age: 26}
  ]);
});

module.exports = router;
