/**JACCO'S CODE START**/
//TIMER
window.onload = function onLoad() {
  var lineMobile = new ProgressBar.Line('#progress-mob', {
    color: '#ffffff',
    duration: 20000,
    text: {
      value: 20
    },
    step: function(state, bar) {
      var nummer = Math.abs(((20 * bar.value())-20).toFixed(0));
      bar.setText( nummer + " seconden");
      if (bar.value() == 1){
        bar.setText("De tijd is om!")
      }
    }
  });
  var line = new ProgressBar.Line('#progress', {
    color: '#f6325a',
    duration: 20000,
    text: {
      value: 20
    },
    step: function(state, bar) {
      var nummer = Math.abs(((20 * bar.value())-20).toFixed(0));
      bar.setText( nummer + " seconden");
      if (bar.value() == 1){
        bar.setText("De tijd is om!")
      }
    }
  });
  line.animate(1);
  lineMobile.animate(1);
};
/**JACCO'S CODE EINDE**/

var FADE_TIME = 150; // ms
var TYPING_TIMER_LENGTH = 400; // ms
var COLORS = [
  '#e21400', '#91580f', '#f8a700', '#f78b00',
  '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
  '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
];

// Initialize variables
var $window = $(window);
var usernameInput = $('.usernameInput'); // Input for username
var $messages = $('.messages'); // Messages area
var $inputMessage = $('.inputMessage'); // Input message input box

var loginPage = document.getElementById('loginPage'); // The login page
var $chatPage = $('.chat.page'); // The chatroom page

// Prompt for setting a username
var username;
var connected = false;
var typing = false;
var lastTypingTime;
var currentInput = usernameInput.focus();

var socket = io();

var roomsAmount = 0;

var rooms = [];

function generateRoomCode() {
    roomsAmount++;
    rooms.push(roomsAmount);
    roomSession(roomsAmount);
}

function roomSession(roomNumber) {
    console.log('Room session started in room' + roomNumber + '!');
}

function endSession(roomNumber) {
    rooms.splice(roomNumber);
}

function makeRoom() {
  console.log('Ik wil een nieuwe quiz starten!');
  socket.emit('start quiz');
}

socket.on('quiz started', function () {
  document.getElementById('leaderboard').style.cssText = "display:none;";
});