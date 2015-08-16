var express = require('express'),
    app = new express(),
    path = require('path');

app.use(express.static(__dirname + "/public"));

app.get("*",function(req,res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8081);

console.log("visit me at http://localhost:8081");
