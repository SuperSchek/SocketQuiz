var socket = io();

var playersArray = [];
var clientUsername;
var playerNumber;
var sortedArray = [];
var myPosition;

function hostChecker() {
    socket.emit('looking for quizmaster');
}

socket.on('set quizmaster', function() {
    username = "host";
    playerNumber = playersArray.length;
    socket.emit('new user', playerNumber, username = {
        gebruikersnaam : username,
        host : true,
        score : 0,
        id : playersArray.length
    });
});

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
            position : "# ",
            id : playersArray.length
        });

    clientUsername = username.gebruikersnaam;
}

function leaderLoad() {
    var p = sortedArray.length;
    var cards = "";
    for (i = 0; i < p; i++) {
        if (i >= 0 && i < 10) {
            cards += "<div class='leaderboard-card'>" + sortedArray[i].position + sortedArray[i].gebruikersnaam + "<div class='leaderboard-card-score'>" + sortedArray[i].score + "</div></div>";
        }
    }
    angular.element(document).find('#leaderboard').html(cards);
}

setInterval(leaderLoad, 1000);

function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
}

socket.on('send array', function(players) {
    playersArray = players;
    sortedArray = [];
    for (var pa = 0; pa < playersArray.length; pa++) {
        if (playersArray[pa].gebruikersnaam != "host") {
            sortedArray.push(playersArray[pa])
        }
    }
});

// When a new client connects, this makes sure they'll receive the latest array of players.
socket.on('update playerArray', function(data) {
    playersArray = data;
    playerNumber = findWithAttr(playersArray, 'gebruikersnaam', clientUsername);

    socket.emit('player shifted', playerNumber);
});

socket.on('update positions', function(data) {
    sortedArray = data;
});

socket.on('please send me your scores', function() {
    socket.emit('this is my new score', playersArray, playerNumber);
});