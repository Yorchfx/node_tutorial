var express = require("express");
var app = express();

//route
app.get('/', function(req,res){
    res.send('Hello!');

});

app.get('/usuarios',function (req,res) {
    res.send('usuarioTemp');
});

app.listen(3000);