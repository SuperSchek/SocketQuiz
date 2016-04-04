var quiz = [{
    question: "EEN",
    questionNr:1,
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
    picture: "<img src='images/test.jpg' width='100%'/>",
    enabled:true
},{
    question: "TWEE",
    questionNr:2,
    answers: [{
        answer1: "antw1",
        punten: false
    },{
        answer2: "antw2",
        punten: false
    },{
        answer3: "antw3",
        punten: false
    },{
        answer4: "antw4",
        punten: true
    }],
    picture: "<img src='images/test.jpg' width='100%'/>",
    enabled:true
},{
    question: "DRIE",
    questionNr:3,
    answers: [{
        answer1: "ANSWR1",
        punten: false
    },{
        answer2: "ANSWR2",
        punten: false
    },{
        answer3: "ANSWR3",
        punten: false
    },{
        answer4: "ANSWR4",
        punten: true
    }],
    picture: "<img src='images/test.jpg' width='100%'/>",
    enabled:true
}];

function askQuestion() {
    var numEnabled = 0;
    for (var i = 0; i < quiz.length; i++) {
        if (quiz[i].enabled == true) {
            numEnabled++;
        }
    }
    // Ask all enabled questions in random order
    for (var j = 0; j < numEnabled; j++) {
        // Find random question that hasn't been asked yet
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
        answer1.innerHTML = quiz[randomNum].answers[0].answer1;
        var answer2 = document.getElementById("qstn2");
        answer2.innerHTML = quiz[randomNum].answers[1].answer2;
        var answer3 = document.getElementById("qstn3");
        answer3.innerHTML = quiz[randomNum].answers[2].answer3;
        var answer4 = document.getElementById("qstn4");
        answer4.innerHTML = quiz[randomNum].answers[3].answer4;
    }
    quiz[randomNum].enabled = false;
};
//de eerste keer uitvoeren:
askQuestion();
//hierna zelf klikken om een volgende vraag te renderen
document.getElementById("next-question").onclick = askQuestion;