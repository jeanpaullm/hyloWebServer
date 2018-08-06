var express = require("express");
var path    = require("path");
var bodyParser = require("body-parser");

var app = express();

app.use("/public",express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res) {
  res.redirect('/public/graficos_tarea.html');
});

app.get('/public/ejemplo.html',function(req,res) {
  res.render("public/ejemplo");
});

app.post('/public/ejemplo.html',function(req,res) {
  var data = req.body;
  res.send("informacion publicada... \n" +
           "texto 1: " + data.texto1 + " " +
           "texto 2: " + data.texto2.slice(4,12) + " " +
           "texto 3: " + data.texto3.toUpperCase() + " " +
           "texto 4: " + data.texto4.charAt(3));
});

app.get('/public/graph.html',function(req,res) {
  console.log("get graph regisrted");
  res.render("public/graph");
});

const PORT = Number(process.env.PORT || 8080);
app.listen(PORT);
