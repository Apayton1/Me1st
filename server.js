
require('dotenv').config();
var mongoose = require("mongoose");
var express = require("express");
var request = require("request");
var mongojs = require("mongojs");
var path = require("path");
// const bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

var routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));

app.use(routes)

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_ls8sjjhx:tgju5ck8vs9mo9vs0j5cjbbc07@ds229068.mlab.com:29068/heroku_ls8sjjhx";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function(){
    console.log(
        "listening on" + PORT
    )
});
