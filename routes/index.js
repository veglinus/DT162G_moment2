var express = require('express');
var router = express.Router();
const fs = require("fs");

/* INDEX */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* All data, consume API */
function getData() {
  var data = fs.readFileSync("courses.json");
  var jsondata = JSON.parse(data);
  return jsondata;
}
router.get('/data', function(req, res, next) {
res.json(getData());
});


module.exports = router;
