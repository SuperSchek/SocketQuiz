var socket = io();

var playersArray = [];
var clientUsername;
var playerNumber;
var sortedArrayClient = [];
var myPosition;


socket.on('i ranked the players', function(sortedArrayServer) {
    sortedArrayClient = sortedArrayServer;
});

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
        position : "#",
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
            position : "#",
            id : playersArray.length
        });

    clientUsername = username.gebruikersnaam;
}

function leaderLoad() {
    sortServer();
    var p = sortedArrayClient.length;
    var cards = "";
    for (i = 0; i < p; i++) {
        if (i >= 0 && i < 10) {
            cards += "<div class='leaderboard-card'>" + sortedArrayClient[i].position + ". " + sortedArrayClient[i].gebruikersnaam + "<div class='leaderboard-card-score'>" + sortedArrayClient[i].score + "</div></div>";
        }
    }
    angular.element(document).find('#leaderboard').html(cards);

    if(playersArray.length == 1){
        angular.element(document).find("#btn-start-game").css("display", "none");
    }else{
        angular.element(document).find("#btn-start-game").css("display", "block");
    }
}

setInterval(leaderLoad, 1000);

function findMyPosition() {
    for (var w = 0; w < sortedArrayClient.length; w++) {
        if (sortedArrayClient[w].id == playersArray[playerNumber].id) {
            playersArray[playerNumber].position = sortedArrayClient[w].position;
        }
    }
    angular.element(document).find('#position').html(playersArray[playerNumber].position + "e");
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

socket.on('calculate positions', function() {



    
    
    socket.emit('this is my position', playersArray);
});

function sortServer() {
    socket.emit('sort scores server');
}