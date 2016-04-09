var playersArray = [];
var playerNumber;

function send() {
    var username = $('#welkom-btn-mob-text-veld').val();

    if (username == undefined) {
        username = "Naam a.u.b.";
    } else {
        playerNumber = playersArray.length;

        socket.emit('new user', playerNumber, username = {
            gebruikersnaam : username,
            host : false,
            score : 0,
            id : playersArray.length
        });
    }
}

socket.on('send array', function(players) {
    playersArray = [];
    playersArray = players;
});

// When a new client connects, this makes sure they'll receive the latest array of players.
socket.on('update playerArray', function(players) {
    playersArray = [];
    playersArray = players;
});

socket.on('who is leaving', function() {
    socket.emit('still here', playerNumber);
});

function whosHere() {
    socket.emit('still here', playerNumber);
}