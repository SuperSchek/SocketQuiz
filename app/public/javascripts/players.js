var playersArray = [];
var playerNumber;

function send() {
    var username = $('#welkom-btn-mob-text-veld').val();

    playerNumber = playersArray.length;

    socket.emit('new user', playerNumber, username = {
        gebruikersnaam : username,
        host : false,
        score : 0,
        id : playersArray.length
    });

    $(element).submit(function() {
        console.log('form was submitted');
        textFields.blur();
    });
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