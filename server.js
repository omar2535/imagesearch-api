var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));

var PORT = (process.env.PORT || 3000);

app.listen(PORT, function(){
    console.log("App is running on port: " + PORT);
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'));
});