var playersArray = [];
var playerNumber;


// Knop uit totdat waarde in zit
function send() {

    var username = $('#welkom-btn-mob-text-veld').val();

    if (username == "") {
        return;
    }
        playerNumber = playersArray.length;

        socket.emit('new user', playerNumber, username = {
            gebruikersnaam : username,
            host : false,
            score : 0,
            id : playersArray.length
        });
}

socket.on('send array', function(players) {
    playersArray = players;
});

// When a new client connects, this makes sure they'll receive the latest array of players.
socket.on('update playerArray', function(players) {
    playersArray = players;
});

socket.on('update scores', function(players) {
    playersArray = players;

    for (var p = 0; p < playersArray.length; p++) {
        angular.element(document).find('#leaderboard').html('<div class="lobby-card">' +
            playersArray[p].gebruikersnaam + playersArray[p].score + '</div>');
    }
});


// <div id="leaderboard">
//     <div class="leaderboard-card">Walter White<div class="leaderboard-card-score">22pnt</div></div>

socket.on('who is leaving', function() {
    socket.emit('still here', playerNumber);
});

function whosHere() {
    socket.emit('still here', playerNumber);
}