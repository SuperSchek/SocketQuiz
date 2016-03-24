var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
}).listen(app.get('port'), function() {
    console.log('SocketQuiz draait nu op local op poort', app.get('port'));
});