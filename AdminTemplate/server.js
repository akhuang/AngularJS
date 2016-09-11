
var express = require('express'),
    app = new express(),
    config = require('./config'),
    path = require('path');

// APP CONFIGURATION---------------------------------------

app.use(express.static(__dirname + '/public'));

// log all the requests to console
app.use(morgan('dev'));

////basic route for the home page
//app.get('/', 'public/views/index.html');

var apiRouter = require('./app/routes/api.routes')(app, express);
// register routes
// all of our routes will be prefixed with /api
app.use('/api', apiRouter);

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// start the server
app.listen(port);

console.log("visit me at http://localhost:" + port);
