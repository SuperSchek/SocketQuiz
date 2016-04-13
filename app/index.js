// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('../')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

var players = [];
var serverQuiz;

var inGame = [];

io.on('connection', function (socket) {

  socket.on('disconnect', function() {
    if (socket.username != undefined) {
      console.log(socket.username + ' left the array!');

      var newArray = [];

      for (var b = 0; b < players.length; b++) {
        if (players[b].gebruikersnaam == socket.username) {
          console.log('I\'m gonna remove ' + players[b].gebruikersnaam + ' from the game!');
        } else {
          newArray.push(players[b]);
        }
      }

      console.log(newArray);
    }
  });

  //Sends the array of current player to any client that wants to join.
  socket.emit('update playerArray', players);

  // io.on('disconnect', function() {
  //   socket.broadcast.emit('who is leaving');
  // });
  //
  // socket.on('still here', function(playerNumber) {
  //   if (playerNumber != null && playerNumber != undefined) {
  //     inGame.push(players[playerNumber]);
  //     console.log(inGame);
  //   }
  // });

  socket.on('new user', function(playerNumber, user) {

    // Check of naam al bestaat. For loop herhaald zich zoveel als er spelers zijn. als ingevulde 'uname' gelijk is aan
    // naam in objecten dan krijg je +1 achter de naam (jan1, jan2, jan3, enz.)
    for (i = 0; i < players.length; i++) {
      if (players[i].gebruikersnaam == user.gebruikersnaam) {
        user.gebruikersnaam = user.gebruikersnaam + Math.floor((Math.random() * 1000) + 1);

        //resetten zodat zoeken door arrays opnieuw gebeurt
        i = i-i;
      }
    }

    console.log(user.gebruikersnaam + ' joined the game and is player ' + playerNumber);

    players.push(user);

    socket.username = user.gebruikersnaam;

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

  socket.on('send score', function(playersArray) {
    players = playersArray;
    // Emit new scores and update leaderboard
    io.sockets.emit('update scores', players);
  });
});