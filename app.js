var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/***** Setup van server en sockets *****/
app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(app.get('port'), function(){
    console.log('SocketQuiz draait nu op poort ' + app.get('port'));
});

/***** Socket functie *****/
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});