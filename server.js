var history = require('connect-history-api-fallback');
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var app = express();
app.use(history());
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;

var courselocation = require('./node-functions/course')

//retrieve course from database
app.get('/getcontent', courselocation.getcontent)

app.listen(port);
console.log('server started at'+ port);
