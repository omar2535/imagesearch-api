var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');
//var dotenv = require('dotenv').config();
var imageSearch = require('node-google-image-search');
var MongoClient = require('mongodb').MongoClient;
var db = require('./config/db');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));

var PORT = (process.env.PORT || 3000);

MongoClient.connect(db.url, function(err, db){
    var dbase = db.db('imagesearchapi');
    if(err) return console.log("could not connect to server" + err);
    app.listen(PORT, function(){
        console.log("App is running on port: " + PORT);
    });
    
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '/views/index.html'));
    });
    
    app.get('/api/:query', function(req, res){
        var query = req.params.query;
        var offset = 5;
        if(req.query.offset != undefined){
            offset = req.query.offset;
        }

        dbase.collection('history').insert({
            query: query
        }, function(data){
            console.log("inserted history");
        });
        imageSearch(query, function(results){
            res.send(results);
        }, 0, offset);
    });

    app.get('/latest', function(req, res){
        dbase.collection('history').find({}).toArray(function(err, results){
            res.send(results);
        });
    });
});


var reqTimer = setTimeout(function wakeUp() {
    request("https://url-shortener-api-omar.herokuapp.com/", function() {
       console.log("WAKE UP DYNO");
    });
    return reqTimer = setTimeout(wakeUp, 1200000);
 }, 1200000);