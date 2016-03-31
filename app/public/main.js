/**JACCO'S CODE START**/
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

if (isMobile == true){
  var mobile = document.getElementById('mobile-cont')
  mobile.style.display = 'block';

}else{
  var desktop = document.getElementById('desktop-cont')
  desktop.style.display = 'block';
  document.body.style.cssText = 'background:#fff;';
};
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

function makeRoom() {
  console.log('Ik wil een nieuwe quiz starten!');
  socket.emit('start quiz');
}

socket.on('quiz started', function () {
  document.getElementById('leaderboard').style.cssText = "display:none;";
});

/*
function addParticipantsMessage (data) {
  var message = '';
  if (data.numUsers === 1) {
    message += "there's 1 participant";
  } else {
    message += "there are " + data.numUsers + " participants";
  }
  log(message);
}

// Sets the client's username
function setUsername () {
  if (fbLogin == true) {
    username = loggedInWithFb;
  } else {
    username = cleanInput(usernameInput.val());
  }

  // If the username is valid
  if (username) {
    loginPage.style.cssText = "display: none";
    $chatPage.show()  ;
    loginPage.off('click');
    currentInput = $inputMessage.focus();

    // Tell the server your username
    socket.emit('add user', username);
  }
}

// Sends a chat message
function sendMessage () {
  var message = $inputMessage.val();
  // Prevent markup from being injected into the message
  message = cleanInput(message);
  // if there is a non-empty message and a socket connection
  if (message && connected) {
    $inputMessage.val('');
    addChatMessage({
      username: username,
      message: message
    });
    // tell server to execute 'new message' and send along one parameter
    socket.emit('new message', message);
  }
}

// Log a message
function log (message, options) {
  var $el = $('<li>').addClass('log').text(message);
  addMessageElement($el, options);
}

// Adds the visual chat message to the message list
function addChatMessage (data, options) {
  // Don't fade the message in if there is an 'X was typing'
  var $typingMessages = getTypingMessages(data);
  options = options || {};
  if ($typingMessages.length !== 0) {
    options.fade = false;
    $typingMessages.remove();
  }

  var $usernameDiv = $('<span class="username"/>')
      .text(data.username)
      .css('color', getUsernameColor(data.username));
  var $messageBodyDiv = $('<span class="messageBody">')
      .text(data.message);

  var typingClass = data.typing ? 'typing' : '';
  var $messageDiv = $('<li class="message"/>')
      .data('username', data.username)
      .addClass(typingClass)
      .append($usernameDiv, $messageBodyDiv);

  addMessageElement($messageDiv, options);
}

// Adds the visual chat typing message
function addChatTyping (data) {
  data.typing = true;
  data.message = 'is typing';
  addChatMessage(data);
}

// Removes the visual chat typing message
function removeChatTyping (data) {
  getTypingMessages(data).fadeOut(function () {
    $(this).remove();
  });
}

// Adds a message element to the messages and scrolls to the bottom
// el - The element to add as a message
// options.fade - If the element should fade-in (default = true)
// options.prepend - If the element should prepend
//   all other messages (default = false)
function addMessageElement (el, options) {
  var $el = $(el);

  // Setup default options
  if (!options) {
    options = {};
  }
  if (typeof options.fade === 'undefined') {
    options.fade = true;
  }
  if (typeof options.prepend === 'undefined') {
    options.prepend = false;
  }

  // Apply options
  if (options.fade) {
    $el.hide().fadeIn(FADE_TIME);
  }
  if (options.prepend) {
    $messages.prepend($el);
  } else {
    $messages.append($el);
  }
  $messages[0].scrollTop = $messages[0].scrollHeight;
}

// Prevents input from having injected markup
function cleanInput (input) {
  return $('<div/>').text(input).text();
}

// Updates the typing event
function updateTyping () {
  if (connected) {
    if (!typing) {
      typing = true;
      socket.emit('typing');
    }
    lastTypingTime = (new Date()).getTime();

    setTimeout(function () {
      var typingTimer = (new Date()).getTime();
      var timeDiff = typingTimer - lastTypingTime;
      if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
        socket.emit('stop typing');
        typing = false;
      }
    }, TYPING_TIMER_LENGTH);
  }
}

// Gets the 'X is typing' messages of a user
function getTypingMessages (data) {
  return $('.typing.message').filter(function (i) {
    return $(this).data('username') === data.username;
  });
}

// Gets the color of a username through our hash function
function getUsernameColor (username) {
  // Compute hash code
  var hash = 7;
  for (var i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + (hash << 5) - hash;
  }
  // Calculate color
  var index = Math.abs(hash % COLORS.length);
  return COLORS[index];
}

// Keyboard events

$window.keydown(function (event) {
  // Auto-focus the current input when a key is typed
  if (!(event.ctrlKey || event.metaKey || event.altKey)) {
    currentInput.focus();
  }
  // When the client hits ENTER on their keyboard
  if (event.which === 13) {
    if (username) {
      sendMessage();
      socket.emit('stop typing');
      typing = false;
    } else {
      setUsername();
    }
  }
});

$inputMessage.on('input', function() {
  updateTyping();
});

// Click events

// Focus input when clicking anywhere on login page
loginPage.click(function () {
  currentInput.focus();
});

// Focus input when clicking on the message input's border
$inputMessage.click(function () {
  $inputMessage.focus();
});

// Socket events

// Whenever the server emits 'login', log the login message
socket.on('login', function (data) {
  connected = true;
  // Display the welcome message
  var message = "Welcome to Socket.IO Chat – ";
  log(message, {
    prepend: true
  });
  addParticipantsMessage(data);
});

// Whenever the server emits 'new message', update the chat body
socket.on('new message', function (data) {
  addChatMessage(data);
});

// Whenever the server emits 'user joined', log it in the chat body
socket.on('user joined', function (data) {
  log(data.username + ' joined');
  addParticipantsMessage(data);
});

// Whenever the server emits 'user left', log it in the chat body
socket.on('user left', function (data) {
  log(data.username + ' left');
  addParticipantsMessage(data);
  removeChatTyping(data);
});

// Whenever the server emits 'typing', show the typing message
socket.on('typing', function (data) {
  addChatTyping(data);
});

// Whenever the server emits 'stop typing', kill the typing message
socket.on('stop typing', function (data) {
  removeChatTyping(data);
});

*/

// $(function() {
//   var FADE_TIME = 150; // ms
//   var TYPING_TIMER_LENGTH = 400; // ms
//   var COLORS = [
//     '#e21400', '#91580f', '#f8a700', '#f78b00',
//     '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
//     '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
//   ];
//
//   // Initialize variables
//   var $window = $(window);
//   var $usernameInput = $('.usernameInput'); // Input for username
//   var $messages = $('.messages'); // Messages area
//   var $inputMessage = $('.inputMessage'); // Input message input box
//
//   var $loginPage = $('.login.page'); // The login page
//   var $chatPage = $('.chat.page'); // The chatroom page
//
//   // Prompt for setting a username
//   var username;
//   var connected = false;
//   var typing = false;
//   var lastTypingTime;
//   var $currentInput = $usernameInput.focus();
//
//   var socket = io();
//
//   function addParticipantsMessage (data) {
//     var message = '';
//     if (data.numUsers === 1) {
//       message += "there's 1 participant";
//     } else {
//       message += "there are " + data.numUsers + " participants";
//     }
//     log(message);
//   }
//
//   // Sets the client's username
//   function setUsername () {
//     if (fbLogin == true) {
//       username = loggedInWithFb;
//     } else {
//       username = cleanInput($usernameInput.val().trim());
//     }
//
//     // If the username is valid
//     if (username) {
//       $loginPage.fadeOut();
//       $chatPage.show();
//       $loginPage.off('click');
//       $currentInput = $inputMessage.focus();
//
//       // Tell the server your username
//       socket.emit('add user', username);
//     }
//   }
//
//   // Sends a chat message
//   function sendMessage () {
//     var message = $inputMessage.val();
//     // Prevent markup from being injected into the message
//     message = cleanInput(message);
//     // if there is a non-empty message and a socket connection
//     if (message && connected) {
//       $inputMessage.val('');
//       addChatMessage({
//         username: username,
//         message: message
//       });
//       // tell server to execute 'new message' and send along one parameter
//       socket.emit('new message', message);
//     }
//   }
//
//   // Log a message
//   function log (message, options) {
//     var $el = $('<li>').addClass('log').text(message);
//     addMessageElement($el, options);
//   }
//
//   // Adds the visual chat message to the message list
//   function addChatMessage (data, options) {
//     // Don't fade the message in if there is an 'X was typing'
//     var $typingMessages = getTypingMessages(data);
//     options = options || {};
//     if ($typingMessages.length !== 0) {
//       options.fade = false;
//       $typingMessages.remove();
//     }
//
//     var $usernameDiv = $('<span class="username"/>')
//       .text(data.username)
//       .css('color', getUsernameColor(data.username));
//     var $messageBodyDiv = $('<span class="messageBody">')
//       .text(data.message);
//
//     var typingClass = data.typing ? 'typing' : '';
//     var $messageDiv = $('<li class="message"/>')
//       .data('username', data.username)
//       .addClass(typingClass)
//       .append($usernameDiv, $messageBodyDiv);
//
//     addMessageElement($messageDiv, options);
//   }
//
//   // Adds the visual chat typing message
//   function addChatTyping (data) {
//     data.typing = true;
//     data.message = 'is typing';
//     addChatMessage(data);
//   }
//
//   // Removes the visual chat typing message
//   function removeChatTyping (data) {
//     getTypingMessages(data).fadeOut(function () {
//       $(this).remove();
//     });
//   }
//
//   // Adds a message element to the messages and scrolls to the bottom
//   // el - The element to add as a message
//   // options.fade - If the element should fade-in (default = true)
//   // options.prepend - If the element should prepend
//   //   all other messages (default = false)
//   function addMessageElement (el, options) {
//     var $el = $(el);
//
//     // Setup default options
//     if (!options) {
//       options = {};
//     }
//     if (typeof options.fade === 'undefined') {
//       options.fade = true;
//     }
//     if (typeof options.prepend === 'undefined') {
//       options.prepend = false;
//     }
//
//     // Apply options
//     if (options.fade) {
//       $el.hide().fadeIn(FADE_TIME);
//     }
//     if (options.prepend) {
//       $messages.prepend($el);
//     } else {
//       $messages.append($el);
//     }
//     $messages[0].scrollTop = $messages[0].scrollHeight;
//   }
//
//   // Prevents input from having injected markup
//   function cleanInput (input) {
//     return $('<div/>').text(input).text();
//   }
//
//   // Updates the typing event
//   function updateTyping () {
//     if (connected) {
//       if (!typing) {
//         typing = true;
//         socket.emit('typing');
//       }
//       lastTypingTime = (new Date()).getTime();
//
//       setTimeout(function () {
//         var typingTimer = (new Date()).getTime();
//         var timeDiff = typingTimer - lastTypingTime;
//         if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
//           socket.emit('stop typing');
//           typing = false;
//         }
//       }, TYPING_TIMER_LENGTH);
//     }
//   }
//
//   // Gets the 'X is typing' messages of a user
//   function getTypingMessages (data) {
//     return $('.typing.message').filter(function (i) {
//       return $(this).data('username') === data.username;
//     });
//   }
//
//   // Gets the color of a username through our hash function
//   function getUsernameColor (username) {
//     // Compute hash code
//     var hash = 7;
//     for (var i = 0; i < username.length; i++) {
//        hash = username.charCodeAt(i) + (hash << 5) - hash;
//     }
//     // Calculate color
//     var index = Math.abs(hash % COLORS.length);
//     return COLORS[index];
//   }
//
//   // Keyboard events
//
//   $window.keydown(function (event) {
//     // Auto-focus the current input when a key is typed
//     if (!(event.ctrlKey || event.metaKey || event.altKey)) {
//       $currentInput.focus();
//     }
//     // When the client hits ENTER on their keyboard
//     if (event.which === 13) {
//       if (username) {
//         sendMessage();
//         socket.emit('stop typing');
//         typing = false;
//       } else {
//         setUsername();
//       }
//     }
//   });
//
//   $inputMessage.on('input', function() {
//     updateTyping();
//   });
//
//   // Click events
//
//   // Focus input when clicking anywhere on login page
//   $loginPage.click(function () {
//     $currentInput.focus();
//   });
//
//   // Focus input when clicking on the message input's border
//   $inputMessage.click(function () {
//     $inputMessage.focus();
//   });
//
//   // Socket events
//
//   // Whenever the server emits 'login', log the login message
//   socket.on('login', function (data) {
//     connected = true;
//     // Display the welcome message
//     var message = "Welcome to Socket.IO Chat – ";
//     log(message, {
//       prepend: true
//     });
//     addParticipantsMessage(data);
//   });
//
//   // Whenever the server emits 'new message', update the chat body
//   socket.on('new message', function (data) {
//     addChatMessage(data);
//   });
//
//   // Whenever the server emits 'user joined', log it in the chat body
//   socket.on('user joined', function (data) {
//     log(data.username + ' joined');
//     addParticipantsMessage(data);
//   });
//
//   // Whenever the server emits 'user left', log it in the chat body
//   socket.on('user left', function (data) {
//     log(data.username + ' left');
//     addParticipantsMessage(data);
//     removeChatTyping(data);
//   });
//
//   // Whenever the server emits 'typing', show the typing message
//   socket.on('typing', function (data) {
//     addChatTyping(data);
//   });
//
//   // Whenever the server emits 'stop typing', kill the typing message
//   socket.on('stop typing', function (data) {
//     removeChatTyping(data);
//   });
// });