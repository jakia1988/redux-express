var express = require("express");
var data = require('./src/constants/claimData.json'); // your json file path
var staticHeader = require('./src/constants/claimDataHeader.json'); 
var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/claim", function(req, res, next) {
  res.send(data);
});
app.get("/header", function(req, res, next) {
  res.send(staticHeader);
});


app.listen(8080, () => console.log('Example app listening on port 8080!'))