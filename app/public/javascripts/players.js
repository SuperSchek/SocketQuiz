var playersArray = [];
var clientUsername;
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

    clientUsername = username.gebruikersnaam;
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
socket.on('update playerArray', function(data) {
    playersArray = data;

    playerNumber = findWithAttr(playersArray, 'gebruikersnaam', clientUsername);

    socket.emit('player shifted', playerNumber);
});

socket.on('please send me your scores', function() {
    socket.emit('this is my new score', playersArray, playerNumber);
});