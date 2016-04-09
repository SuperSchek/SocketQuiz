// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('../')(server);
var port = process.env.PORT || 3000;

var players = [];
var serverQuiz;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {

  //Sends the array of current player to any client that wants to join.
  socket.emit('update playerArray', players);

  socket.on('new user', function(playerNumber, user) {

    // Check of naam al bestaat. For loop herhaald zich zoveel als er spelers zijn. als ingevulde 'uname' gelijk is aan
    // naam in objecten dan krijg je +1 achter de naam (jan1, jan2, jan3, enz.)
    for (i = 0; i < players.length; i++) {
      if (players[i].name == user.gebruikersnaam) {
        user.gebruikersnaam = user.gebruikersnaam + Math.floor((Math.random() * 1000) + 1);

        //resetten zodat zoeken door arrays opnieuw gebeurt
        i = i-i;
      }
    }

    console.log(user.gebruikersnaam + ' joined the game and is player ' + playerNumber);

    players.push(user);

    io.sockets.emit('send array', players);
  });

  socket.on('question request', function(quiz) {
    // Empty the serverQuiz array so we're ready to receive the next round.
    serverQuiz = [];
    serverQuiz = quiz;

    // Initialize numEnabled to 0.
    var numEnabled = 0;
    // Set numEnabled to the total amount of questions left.
    // (questions with enabled set to true)
    for (var i = 0; i < serverQuiz.length; i++) {
      if (serverQuiz[i].enabled == true) {
        numEnabled++;
      }
    }

    for (var j = 0; j < numEnabled; j++) {
      do { var randomNum = Math.floor(Math.random() * serverQuiz.length); }
      while (serverQuiz[randomNum].enabled == false);

      io.sockets.emit('render question', randomNum);
    }

    serverQuiz[randomNum].enabled = false;

    io.sockets.emit('update quiz', serverQuiz);
  });
});
