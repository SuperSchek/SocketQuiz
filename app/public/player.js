/**
 * Created by Nico Ender on 31-3-2016.
 */
var player1 = {
    name: "Lola Ferrari",
    score: "60",
    room: "4820"
}

var players = [player1];

var question1 = {
    question: "Wat is deze?",
    answers: [{
        answer1: "Klap die ding",
        punten: false
    },{
        answer2: "Deze!",
        punten: false
    },{
        answer3: "Weetnie man",
        punten: false
    },{
        answer4: "diepe shit",
        punten: true
    }],
    picture: "<img src='dikkeBMW.jpg' alt='bmw' />"
}


var questions = [question1]


var quastionNumber;
function getRandomQuestion() {
    var htmlStr = "";
    questionNumber = Math.floor((Math.random() * questions.length) + 1);
    if (this.picture) {
        htmlStr += "<div class='picture'>" + questions[questionNumber].picture + "</div>";
    }
    htmlStr += "<div class='question'>" + questions[questionNumber].question + "</div>";
    for (var q = 0; q < 3; q++) {
        htmlStr += "<div class='answer" + q + "'>" + questions[questionNumber].answers[q] + "</div>";
    }
    return htmlStr;
}