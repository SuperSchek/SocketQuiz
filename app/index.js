// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('../')(server);
var port = process.env.PORT || 3000;

var players = [];

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {

  // console.log('A client connected');
  // socket.on('disconnect', function () {
  //   console.log('A client disconnected.');
  // });

  socket.on('new user', function(user) {

    // Check of naam al bestaat. For loop herhaald zich zoveel als er spelers zijn. als ingevulde 'uname' gelijk is aan
    // naam in objecten dan krijg je +1 achter de naam (jan1, jan2, jan3, enz.)
    for (i = 0; i < players.length; i++) {
      if (players[i].name == user.gebruikersnaam) {
        user.gebruikersnaam = user.gebruikersnaam + Math.floor((Math.random() * 1000) + 1);

        //resetten zodat zoeken door arrays opnieuw gebeurt
        i = i-i;
      }
    }
    console.log('new user with username: ' + user.gebruikersnaam);

    players.push(user);

    console.log(user);

    io.sockets.emit('send array', players);

    // Start functie wanneeer die door de forloop komt (dus naam uniek is in players array), nog geen idee of dit werkt.
    // moet in elk geval het object vullen. ID van gebruiker is zijn objectnummer. Deze returnen we ook naar de
    // gebruiker zodat we met de juiste gebruikers kunnen communiceren.
    // players.push(uname);
    // var n = players.length;
    // players[n].push({id : n});
    // players[n].push({name : uname});
    // players[n].push({host : false});
    // players[n].push({score : 0});
    // return players[n].id; // nu een harde return, dit moet een socket worden;


  });

});
