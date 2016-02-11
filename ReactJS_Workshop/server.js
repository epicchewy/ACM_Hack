var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('views', __dirname);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname)));
app.set('port', (process.env.PORT || 8000));
app.engine('html', require('ejs').renderFile);
app.use(function (req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

// app.get("/", function (req, res){
// 	res.sendFile("index.html");
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});