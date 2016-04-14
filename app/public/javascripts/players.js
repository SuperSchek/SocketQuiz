var playersArray = [];
var clientObject;
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

function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
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

findWithAttr('playerNumbers', 'gebruikersnaam', socket.username);

socket.on('you are', function(user) {
    clientObject = user;
});