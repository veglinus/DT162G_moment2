var express = require('express');
var router = express.Router();

const fs = require("fs");

function getData() {
    var data = fs.readFileSync("courses.json");
    var jsondata = JSON.parse(data);
    return jsondata;
}


/* GET everything listing. */
/*
router.get('/', function(req, res, next) {
  res.send(getData());
});
*/

// visa alla kurser i årskursen (GET - http://localhost:3000/courses)


// visa enskild kurs i årskursen med angivet id (verb GET - http://localhost:3000/courses/2)



// radera en enskild kurs från listan med angivet id (verb DELETE - http://localhost:3000/courses/2)




module.exports = router;
