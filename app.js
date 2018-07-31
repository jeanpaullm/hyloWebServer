var express = require("express");
var path    = require("path");
var bodyParser = require("body-parser");

var app = express();

app.use("/public",express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res) {
  res.redirect('/public/ejemplo.html');
});

app.get('/public',function(req,res) {
  //res.writeHead(200,{"Content-Type":"application/json"});
  //res.sendFile(path.join(__dirname +  '/ejemplo.html'));
  res.render("public/ejemplo");
});

app.post('/',function(req,res) {
  res.send("informacion publicada... \n" +
           "texto 1: " + req.body.texto_1 + " " +
           "texto 2: " + req.body.texto_2 + " " +
           "texto 3: " + req.body.texto_3 + " " +
           "texto 4: " + req.body.texto_4);
});

app.listen(8080);
