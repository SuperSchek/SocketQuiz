var socket = io();
var quiz = [{
    question: "EEN",
    questionNr:1,
    answers: [{
        answer: "München",
        punten: false
    },{
        answer: "Amsterdamfsdfsdfsdfdsff",
        punten: false
    },{
        answer: "Parijs",
        punten: false
    },{
        answer: "Berlijn",
        punten: true
    }],
    picture: "<img src='../images/test.jpg' width='100%'/>",
    enabled:true
},{
    question: "TWEE",
    questionNr:2,
    answers: [{
        answer: "antw1",
        punten: false
    },{
        answer: "antw2",
        punten: false
    },{
        answer: "antw3",
        punten: false
    },{
        answer: "antw4",
        punten: true
    }],
    picture: "<img src='../images/test.jpg' width='100%'/>",
    enabled:true
},{
    question: "DRIE",
    questionNr:3,
    answers: [{
        answer: "ANSWR1",
        punten: false
    },{
        answer: "ANSWR2",
        punten: false
    },{
        answer: "ANSWR3",
        punten: false
    },{
        answer: "ANSWR4",
        punten: true
    }],
    picture: "<img src='../images/test.jpg' width='100%'/>",
    enabled:true
}];

function nextQuestion() {
    socket.emit('next question');
    console.log('next question emit');
}

function renderSockQes() {
    askQuestion();
}

var lel = document.getElementById('question');

function askQuestion() {
    var numEnabled = 0;
    for (var i = 0; i < quiz.length; i++) {
        if (quiz[i].enabled == true) {
            numEnabled++;
        }
    }

    for (var j = 0; j < numEnabled; j++) {
        do {
            var randomNum = Math.floor(Math.random() * quiz.length);
        } while (quiz[randomNum].enabled == false);

        //Desktop
        angular.element(document).find('#question').html(quiz[randomNum].question);
        angular.element(document).find('#question-nr').html("vraag " + quiz[randomNum].questionNr + "/" + quiz.length);
        angular.element(document).find('#image').html(quiz[randomNum].picture);

        //Mobile
        angular.element(document).find('#question-nr-mob').html("vraag " + quiz[randomNum].questionNr + "/" + quiz.length);
        angular.element(document).find('#qstn1').html(quiz[randomNum].answers[0].answer);
        angular.element(document).find('#qstn2').html(quiz[randomNum].answers[1].answer);
        angular.element(document).find('#qstn3').html(quiz[randomNum].answers[2].answer);
        angular.element(document).find('#qstn4').html(quiz[randomNum].answers[3].answer);

    }
    quiz[randomNum].enabled = false;
}