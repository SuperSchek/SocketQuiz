var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

/*
server.listen(3000);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
*/


app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});