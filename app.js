var express = require('express');
var app = express();

app.use(express.static(__dirname + '/script'));
app.use(express.static(__dirname + '/view'));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/view/index.html')
});

app.listen('4000');
console.log('Running on port 4000')
