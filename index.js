/******** OLD STUFF **********/

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var $ = require('jQuery');
var port = process.env.PORT || 2000;


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function(){
    console.log('SocketQuiz draait nu op poort ' + port);
});

/***** Socket functie *****/
io.sockets.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});