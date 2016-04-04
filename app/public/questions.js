/**
 * Created by N76V on 31-3-2016.
 */

var socket = io();

var quiz = [{
    question: "EEN",
    questionNr:1,
    answers: [{
        answer: "Klap die ding",
        punten: false
    },{
        answer: "Deze!",
        punten: false
    },{
        answer: "Weetnie man",
        punten: false
    },{
        answer: "diepe shit",
        punten: true
    }],
    picture: "<img src='images/test.jpg' width='100%'/>",
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
    picture: "<img src='images/test.jpg' width='100%'/>",
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
    picture: "<img src='images/test.jpg' width='100%'/>",
    enabled:true
}];

function nextQuestion() {
    socket.emit('next question');
    console.log('next question emit');
}

function renderSockQes() {
    var stelVraag = document.getElementById("question");
    stelVraag.innerHTML = "Vraag via Sockets";

    var stelVraagMobile = document.getElementById("question-mob");
    stelVraagMobile.innerHTML = "Vraag via Sockets";

}

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

        // Ask question
        var stelVraag = document.getElementById("question");
        stelVraag.innerHTML = quiz[randomNum].question;
        var nummer = document.getElementById("question-nr");
        nummer.innerHTML = "vraag " + quiz[randomNum].questionNr + "/" + quiz.length;
        var image = document.getElementById("image");
        image.innerHTML = quiz[randomNum].picture;

        var answer1 = document.getElementById("qstn1");
        answer1.innerHTML = quiz[randomNum].answers[0].answer;
        var answer2 = document.getElementById("qstn2");
        answer2.innerHTML = quiz[randomNum].answers[1].answer;
        var answer3 = document.getElementById("qstn3");
        answer3.innerHTML = quiz[randomNum].answers[2].answer;
        var answer4 = document.getElementById("qstn4");
        answer4.innerHTML = quiz[randomNum].answers[3].answer;
    }
    quiz[randomNum].enabled = false;
};
askQuestion();
// document.getElementById("next-question-mob").onclick = askQuestion;
// document.getElementById("next-question").onclick = nextQuestion();