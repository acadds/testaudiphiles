var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var path = require('path');

var app = express();

app.listen(3000,function(){
  console.log('Server started on Port 3000');
})
