//27 mins into 1h 15m youtube tutorial, continue and fix so it redirects to ejc instead of html



//step every time: npm install express/body-parser/mongojs then nodemon index.js
//require statements to node modules
var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var path = require('path');
//run app as express
var app = express();

//View Engine
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json()); //get request redirects with / to new page
app.use(bodyParser.urlencoded({extended: false}))  //var logger = function(req, res, next){
                        //console.log('Logging...');
                      //}//Middleware is CP, need to app.use to call it so it works
                      //Order of MW is important, var then app.use
                      //app.use(logger);
  //Set Static Path
app.use(express.static(path.join(__dirname,'public')));//HTML WILL ALWAYS OVERRIDE THE JS FOLDER (HELLO WORLD)


app.get('/',function (req, res){
  res.render('index');
});

//list the port after running app in CP
app.listen(8080, function(){
  console.log('Server Started on Port 8080...');
})
