var sockets = io();

var quiz = [
    {
        question: "Wie wordt koning/koningin op het moment dat Willem-Alexander komt te overlijden?",
        answers: [
            {
                answer: "Prinses Amalia",
                punten: false,
                rendered: false
            },
            {
                answer: "Iemand anders",
                punten: false,
                rendered: false
            },
            {
                answer: "Prins Constantijn",
                punten: false,
                rendered: false
            },
            {
                answer: "Koningin Maxima",
                uitleg: 'Als prinses Amalia door erfopvolging koningin wordt en zij is nog geen achttien jaar, dan wordt haar moeder, koningin Máxima, benoemd tot regent van het koninkrijk. Dat heeft de Rijksvoorlichtingsdienst in 2013 bepaald.',
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/willem.png' width='100%' height='100%' />",
        enabled:true
    },
    {
        question: "Wat is de vijfde planeet in ons zonnestelsel gemeten vanaf de zon?",
        answers: [
            {
                answer: "Venus",
                punten: false,
                rendered: false
            },
            {
                answer: "Mars",
                punten: false,
                rendered: false
            },
            {
                answer: "Saturnus",
                punten: false,
                rendered: false
            },
            {
                answer: "Jupiter",
                uitleg: '<img src="../images/zonnestelsel.png" width="100%"/>',
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/stars.png' width='100%'/>",
        enabled:true
    },
    {
        question: "Welke club speelt er in onderstaand stadion?",
        answers: [
            {
                answer: "Vfl Wolfsburg",
                punten: false,
                rendered: false
            },
            {
                answer: "Olympique Marseille",
                punten: false,
                rendered: false
            },
            {
                answer: "PSV",
                punten: false,
                rendered: false
            },
            {
                answer: "Seattle Sounders FC",
                uitleg: 'CenturyLink Field (vroeger Seahawks Stadium en Qwest Field) is een multifunctioneel stadion, waarin 67.000 zitplaatsen zijn, dit kan worden uitgebreid naar 72.000 bij speciale evenementen. Het stadion wordt gebruikt door twee sportteams uit de stad Seattle. Seattle Sounders FC dat uitkomt in de Major League Soccer en Seattle Seahawks dat speelt in de NFL.',
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/stadium.png' width='100%'/>",
        enabled:true
    },
    {
        question: "Wie is deze basketballer?",
        answers: [
            {
                answer: "Shaquille O'Neal",
                punten: false,
                rendered: false
            },
            {
                answer: "Stephen Curry",
                punten: false,
                rendered: false
            },
            {
                answer: "Lebron James",
                punten: false,
                rendered: false
            },
            {
                answer: "Kobe Bryant",
                uitleg: 'Kobe Bean Bryant (Philadelphia (Pennsylvania), 23 augustus 1978) is een Amerikaans voormalig basketballer. Hij speelde zijn hele twintigjarige loopbaan bij de Los Angeles Lakers, waarmee hij vijf keer kampioen werd van de National Basketball Association (NBA).',
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/basketball.png' width='100%'/>",
        enabled:true
    },
    {
        question: "Wie is deze filosoof?",
        answers: [
            {
                answer: "Hadrianus",
                punten: false,
                rendered: false
            },
            {
                answer: "Aristoteles",
                punten: false,
                rendered: false
            },
            {
                answer: "Plato",
                punten: false,
                rendered: false
            },
            {
                answer: "Socrates",
                uitleg: 'Hij wordt beschouwd als een van de stichters van de westerse filosofie, al liet hij zelf geen geschriften na. Hij is bekend geworden door de verslagen van zijn studenten, met name die van Plato en Xenophon, en door de toneelstukken van zijn tijdgenoot, Aristophanes.',
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/filosoof.png' width='100%'/>",
        enabled:true
    },
    {
        question: "Welk land is aangegeven op de kaart?",
        answers: [
            {
                answer: "Colombia",
                punten: false,
                rendered: false
            },
            {
                answer: "Ecuador",
                punten: false,
                rendered: false
            },
            {
                answer: "Paraguay",
                punten: false,
                rendered: false
            },
            {
                answer: "Bolivia",
                uitleg: 'Bolivia, volledig de Plurinationale Staat Bolivia (Spaans: Estado Plurinacional de Bolivia) is een republiek in Zuid-Amerika die grenst aan Peru, Brazilië, Paraguay, Argentinië en Chili.',
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/land.png' width='100%'/>",
        enabled:true
    },
    {
        question: "Welk film is de best verdienende film ooit?",
        answers: [
            {
                answer: "The Avengers",
                punten: false,
                rendered: false
            },
            {
                answer: "Gone with the wind",
                punten: false,
                rendered: false
            },
            {
                answer: "Titanic",
                punten: false,
                rendered: false
            },
            {
                answer: "Avatar",
                uitleg: '<img src="../images/avatar.png" width="100%"/><br><br>Met $2,787,965,087 is Avatar de best verdienende film ooit.',
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/cinema.png' width='100%'/>",
        enabled:true
    },
    {
        question: "Welk nummer is NIET van Michael Jackson?",
        answers: [
            {
                answer: "Bad",
                punten: false,
                rendered: false
            },
            {
                answer: "Black or White",
                punten: false,
                rendered: false
            },
            {
                answer: "Speed Demon",
                punten: false,
                rendered: false
            },
            {
                answer: "Earth, Wind & Fire",
                uitleg: 'Earth, Wind & Fire is een Amerikaanse band die soul, funk, jazz- en discomuziek maakt – en ook verschillende muziekstijlen combineert – met prominente rollen voor percussie, blazers, kalimba, bas en zang. De band was vooral in de jaren zeventig populair.',
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/michael.png' width='100%'/>",
        enabled:true
    },
    {
        question: "Van welk automerk is dit het logo?",
        answers: [
            {
                answer: "Chevrolet",
                punten: false,
                rendered: false
            },
            {
                answer: "Buick",
                punten: false,
                rendered: false
            },
            {
                answer: "Rolls Royce",
                punten: false,
                rendered: false
            },
            {
                answer: "Cadillac",
                uitleg: "Cadillac is een Amerikaans merk van luxeauto's. Sinds 1909 behoort het merk tot het General Motors-concern. Cadillacs worden wereldwijd verkocht. De belangrijkste afzetgebieden zijn de Verenigde Staten, Canada en China. <br><br>Cadillac is het oudste Amerikaanse automerk na Buick, en ook wereldwijd is het een van de oudste. Cadillac staat bekend om zijn innovatie, hoge kwaliteit en veel luxe. In België en Nederland zijn respectievelijk zes en vier dealers actief.",
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/logoquiz.png' width='100%'/>",
        enabled:true
    },
    {
        question: "Welke vergeten groente is dit?",
        answers: [
            {
                answer: "Witte raapjes",
                punten: false,
                rendered: false
            },
            {
                answer: "Suikerwortel",
                punten: false,
                rendered: false
            },
            {
                answer: "Wortel",
                punten: false,
                rendered: false
            },
            {
                answer: "Pastinaak",
                uitleg: 'De pastinaak is een circa 20 cm lang wortelgewas met een zoete anijsachtige smaak en een crème-witte kleur. Door de lengte van de penwortel is de groente niet geschikt voor teelt op kleigronden. De pastinaak wordt doorgaans in de tweede helft van april gezaaid.',
                punten: true,
                rendered: false
            }
        ],
        picture: "<img src='../images/groente.png' width='100%'/>",
        enabled:true
    }
];

var selectedAnswer;
var randomNr;
var selectedId;
var correct;
var vraagNr = 1;
var timeScore;
var scored;

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

    if (playersArray != undefined) {
        var myScore;
        if (playersArray[playerNumber] != undefined && playersArray[playerNumber].score == 1) {
            myScore = "Je hebt " + playersArray[playerNumber].score + " punt";
        } else {
            myScore = "Je hebt " + playersArray[playerNumber].score + " punten";
        }
        angular.element(document).find('#points').html(myScore);
    }
});

socket.on('show endscreen mobile', function(){
    printGifLoser();
    if (playersArray[playerNumber].position == 1) {
        angular.element(document).find('#mijnscore-eerste-mob').removeClass('hidden');
        angular.element(document).find('#mijnscore-eerste-mob').addClass('show');
    } else if (playersArray[playerNumber].position == 2) {
        angular.element(document).find('#mijnscore-tweede-mob').removeClass('hidden');
        angular.element(document).find('#mijnscore-tweede-mob').addClass('show');
    } else if (playersArray[playerNumber].position == 3) {
        angular.element(document).find('#mijnscore-derde-mob').removeClass('hidden');
        angular.element(document).find('#mijnscore-derde-mob').addClass('show');
    } else if (playersArray[playerNumber].position > 3) {
        angular.element(document).find('#mijnscore-mob').removeClass('hidden');
        angular.element(document).find('#mijnscore-mob').addClass('show');
        loserPositions();
    }
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
        socket.emit('this is my new score', playersArray, playerNumber);
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
