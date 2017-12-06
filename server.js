var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');
var dotenv = require('dotenv').config();
var imageSearch = require('node-google-image-search');

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

app.get('/:query', function(req, res){
    var query = req.params.query;
    imageSearch(query, function(results){
        res.send(results);
    }, 0, 5);
});