var express = require("express");
var path    = require("path");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res) {
  //res.writeHead(200,{"Content-Type":"application/json"});
  //res.sendFile(path.join(__dirname +  '/ejemplo.html'));
  res.render("ejemplo");
});

app.post('/',function(req,res) {
  console.log("texto1 " + req.body.texto_1);
  console.log("texto2 " + req.body.texto_2);
  console.log("texto3 " + req.body.texto_3);
  console.log("texto4 " + req.body.texto_4);
  res.send("informacion publicada");
});

app.listen(8080);
