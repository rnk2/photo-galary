var dbUrl = "library";
var collections = ["books"];

var db = require("mongojs").connect(dbUrl, collections);

var db = require('mongoskin').db('localhost:27017/animals');
module.exports = db;
