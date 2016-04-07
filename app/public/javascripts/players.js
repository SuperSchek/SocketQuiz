var playersArray = [];
var playerNumber;

function send() {
    var username = $('#uname').val();

    socket.emit('new user', username = {
        gebruikersnaam : username,
        host : false,
        score : 0,
        id : playersArray.length
    });

    playerNumber = playersArray.length;
}

socket.on('send array', function(players) {
    playersArray = [];
    playersArray = players;
});