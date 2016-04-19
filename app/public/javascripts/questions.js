var sockets = io();

var quiz = [
    {
        question: "Wat doet de volgende code:",
        answers: [
            {
                answer: "De app schalen",
                punten: false,
                rendered: false
            },
            {
                answer: "Afbeelding opschuiven",
                punten: false,
                rendered: false
            },
            {
                answer: "Afbeelding roteren",
                punten: false,
                rendered: false
            },
            {
                answer: "Oriëntatie checken",
                uitleg: 'Jürgen Klopp werd bekend door zijn successen met Borussia Dortmund (2x de Bundesliga en een finaleplaats in de Champions League) en zijn opmerkelijke uitspraken.'+
                    '<br><br>Klopp is sinds een jaar trainer bij Liverpool FC in Engeland en heeft er de bijnaam: "the normal one". Niet te verwarren met "the special one", José Mourinho.',
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/code1.png' width='100%' height='100%' />",
        enabled:true
    },
    {
        question: "Van welk framework is dit het logo?",
        answers: [
            {
                answer: "Applescript",
                punten: false,
                rendered: false
            },
            {
                answer: "Actionscript",
                punten: false,
                rendered: false
            },
            {
                answer: "API",
                punten: false,
                rendered: false
            },
            {
                answer: "AngularJS",
                uitleg: 'Angular',
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/alogo.png' width='100%'/>",
        enabled:true
    },
    {
        question: "Waarvan is API de afkorting?",
        answers: [
            {
                answer: "Application Protocol Interface",
                punten: false,
                rendered: false
            },
            {
                answer: "Application Program Interaction",
                punten: false,
                rendered: false
            },
            {
                answer: "Application Protocol Interaction",
                punten: false,
                rendered: false
            },
            {
                answer: "Juist Application Program Interface",
                uitleg: 'Hier de uitleg',
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/api.png' width='100%'/>",
        enabled:true
    },
    {
        question: "--",
        answers: [
            {
                answer: "Application Protocol Interface",
                punten: false,
                rendered: false
            },
            {
                answer: "Application Program Interaction",
                punten: false,
                rendered: false
            },
            {
                answer: "Application Protocol Interaction",
                punten: false,
                rendered: false
            },
            {
                answer: "Application Program Interface",
                uitleg: 'Hier de uitleg',
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/api.png' width='100%'/>",
        enabled:true
    }
];

var selectedAnswer;
var randomNr;
var selectedId;
var correct;
var vraagNr = 1;

socket.on('render question', function(randomNum) {
    randomNr = randomNum;

    //Desktop
    angular.element(document).find('#question').html(quiz[randomNum].question);
    angular.element(document).find('#question-nr').html("vraag " + vraagNr + "/" + quiz.length);
    angular.element(document).find('#image').html(quiz[randomNum].picture);
    angular.element(document).find('#antwoord-titel').html(quiz[randomNum].answers[3].answer);
    angular.element(document).find('#antwoord-text').html(quiz[randomNum].answers[3].uitleg);

    //Mobile
    angular.element(document).find('#question-nr-mob').html("vraag " + vraagNr + "/" + quiz.length);

    var arr = [];

    while(arr.length < 4){
        var randomnumber = Math.floor(Math.random() * 4);
        var found = false;
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] == randomnumber) {
                found=true;break
            }
        }
        if(!found) {
            arr[arr.length] = randomnumber;
        }
    }
    angular.element(document).find('#qstn1').html(quiz[randomNum].answers[arr[0]].answer);
    angular.element(document).find('#qstn2').html(quiz[randomNum].answers[arr[1]].answer);
    angular.element(document).find('#qstn3').html(quiz[randomNum].answers[arr[2]].answer);
    angular.element(document).find('#qstn4').html(quiz[randomNum].answers[arr[3]].answer);


    angular.element(document).find('#end-question').addClass('hidden');
    angular.element(document).find('#vraag-intro').addClass('animate');
    angular.element(document).find('#vraag-intro-mob').addClass('animate');
    angular.element(document).find('#vraag-intro-mob').addClass('hidden');
    angular.element(document).find('#antwoord-uitleg').addClass('hidden');
    angular.element(document).find('#vraag-uitslag-mob').addClass('hidden');
    angular.element(document).find('#vraag-uitslag-fout-mob').addClass('hidden');
    angular.element(document).find('#antwoord-uitleg').removeClass('show');
    angular.element(document).find('#vraag-uitslag-mob').removeClass('show');
    angular.element(document).find('#vraag-uitslag-fout-mob').removeClass('show');
    selectedId = undefined;
    $("#mobile-cont #answers-mob-cont[role='group'] button").removeClass('on');

    startTimer();

    var myScore;
    if (playersArray[playerNumber].score == 1) {
        myScore = "Je hebt " + playersArray[playerNumber].score + " punt";
    } else {
        myScore = "Je hebt " + playersArray[playerNumber].score + " punten";
    }
    angular.element(document).find('#points').html(myScore);
});

socket.on('show endscreen mobile', function(){
    printGifLoser();
    angular.element(document).find('#mijnscore-mob').removeClass('hidden');
    angular.element(document).find('#mijnscore-mob').addClass('show');
});

socket.on('update quiz', function(serverQuiz) {
    quiz = serverQuiz;
    vraagNr++;
});

function loadQuestion() {
    socket.emit('question request', quiz);
    socket.emit('request score update');
}

function startTimer() {
    // Iedere keer als er een vraag geladen wordt eerst #question leeg gooien.
    // Hiermee voorkomen we dat de laadbalk vol is bij de start van het aftellen.
    angular.element(document).find('#progress').html('');
    var line = new ProgressBar.Line('#progress', {
        color: '#F6325A',
        duration: 15000,
        text: {
            value: 20
        },
        step: function(state, bar) {
            var nummer = Math.abs(((15 * bar.value())-15).toFixed(0));
            bar.setText( nummer + " seconden");
            if (bar.value() == 1){
                bar.setText("De tijd is om!");
                angular.element(document).find('#antwoord-uitleg').addClass('show');

                if(vraagNr == quiz.length + 1){
                    angular.element(document).find('#end-question').addClass('show');
                    angular.element(document).find('#end-question').removeClass('hidden');
                    angular.element(document).find('#antwoord-btn').addClass('hidden');
                }
                checkAnswer();
                selectedAnswer = undefined;
            }
        }
    });
    line.animate(1);
}

var timeScore;
var scored;

function onoff(id) {

    if (angular.element(document).find('#' + id).val() != selectedAnswer) {
        selectedAnswer = angular.element(document).find('#' + id).val();
        selectedId = id;
        timeScore = angular.element(document).find('.progressbar-text').html().substr(0, 2);
        scored = parseInt(timeScore);
        angular.element(document).find('#antwoord-juist-punten-mob').html("+" + scored + " punten");
    }
}

function endQuiz(){
    socket.emit('end quiz');
    angular.element(document).find('.score-mob').html('TEST');
}

function checkAnswer() {
    if (angular.element(document).find('#' + selectedId).html() == quiz[randomNr].answers[3].answer) {
        angular.element(document).find('#vraag-uitslag-mob').addClass('show');
        correct = true;
        printGifSucces();
        playersArray[playerNumber].score += scored;
        socket.emit('this is my new score', playersArray, playerNumber);

    } else {
        correct = false;
        printGifLoser();
        angular.element(document).find('#vraag-uitslag-fout-mob').addClass('show');
    }
}

function doOnOrientationChange()
{
    switch(window.orientation)
    {
        case -90:
            document.getElementById("landscape").style.display="block";
            break;
        case 90:
            document.getElementById("landscape").style.display="block";
            break;
        default:
            document.getElementById("landscape").style.display="none";
            break;
    }
}

window.addEventListener('orientationchange', doOnOrientationChange);
