var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'www')));

var port =  process.env.PORT || '3000';
app.listen(port);

console.log('Server on: ' + port);