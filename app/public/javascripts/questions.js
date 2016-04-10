var quiz = [
    {
        question: "Wie is de coach op deze foto?",
        questionNr:1,
        answers: [
            {
                answer: "Joachim Löw",
                punten: false
            },
            {
                answer: "Louis van Gaal",
                punten: false
            },
            {
                answer: "José Mourinho",
                punten: false
            },
            {
            answer: "Jürgen Klopp",
            uitleg: 'Jürgen Klopp werd bekend door zijn successen met Borussia Dortmund (2x de Bundesliga en een finaleplaats in de Champions League) en zijn opmerkelijke uitspraken.'+
                    '<br><br>Klopp is sinds een jaar trainer bij Liverpool FC in Engeland en heeft er de bijnaam: "the normal one". Niet te verwarren met "the special one", José Mourinho.',
            punten: true
            }
        ],
        picture: "<img src='http://e1.365dm.com/16/02/16-9/20/jurgen-klopp-liverpool-thumbs-up_3412823.jpg?20160208152020' height='100%' width='100%'/>",
        enabled:true
    },
    {
        question: "Wat is de naam van de eerstvolgende Star Wars film?",
        questionNr:2,
        answers: [
            {
                answer: "Star Wars: The Two Towers",
                punten: false
            },
            {
                answer: "Star Wars: The Deathly Hallows",
                punten: false
            },
            {
                answer: "Star Wars: The Force Awakens",
                punten: false
            },
            {
                answer: "Star Wars: Rogue One",
                uitleg: '<iframe src="https://www.youtube.com/embed/Wji-BZ0oCwg" frameborder="0" allowfullscreen></iframe>',
                punten: true
            }
        ],
        picture: "<img src='http://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/24/10/star-wars-rogue-one-cast.jpg' width='100%'/>",
        enabled:true
    },
    {
        question: "Wie is deze DJ?",
        questionNr:3,
        answers: [
            {
                answer: "Paul Elstak",
                punten: false
            },
            {
                answer: "DJ Jean",
                punten: false
            },
            {
                answer: "Charly Lownoise",
                punten: false
            },
            {
                answer: "Mental Theo",
                uitleg: "Theo Nabuurs ('s-Hertogenbosch, 14 februari 1965) is een Nederlandse videojockey en presentator die vooral bekend is als Mental Theo. Dit pseudoniem zou een bijnaam zijn die hij had gekregen vanwege zijn aparte manier van dansen in discotheken.",
                punten: true
            }
        ],
        picture: "<img src='http://www.janvis.nl/wp-content/uploads/2013/03/mental-theo.jpg' width='100%'/>",
        enabled:true
    }
];

socket.on('render question', function(randomNum) {
    //Desktop
    angular.element(document).find('#question').html(quiz[randomNum].question);
    angular.element(document).find('#question-nr').html("vraag " + quiz[randomNum].questionNr + "/" + quiz.length);
    angular.element(document).find('#image').html(quiz[randomNum].picture);
    angular.element(document).find('#antwoord-titel').html(quiz[randomNum].answers[3].answer);
    angular.element(document).find('#antwoord-text').html(quiz[randomNum].answers[3].uitleg);

    //Mobile
    angular.element(document).find('#question-nr-mob').html("vraag " + quiz[randomNum].questionNr + "/" + quiz.length);
    angular.element(document).find('#qstn1').html(quiz[randomNum].answers[0].answer);
    angular.element(document).find('#qstn2').html(quiz[randomNum].answers[1].answer);
    angular.element(document).find('#qstn3').html(quiz[randomNum].answers[2].answer);
    angular.element(document).find('#qstn4').html(quiz[randomNum].answers[3].answer);

    angular.element(document).find('#vraag-intro').addClass('animate');
    angular.element(document).find('#vraag-intro-mob').addClass('animate');
    angular.element(document).find('#vraag-intro-mob').addClass('hidden');
    angular.element(document).find('#antwoord-uitleg').addClass('hidden');
    angular.element(document).find('#vraag-uitslag-mob').addClass('hidden');
    angular.element(document).find('#antwoord-uitleg').removeClass('show');
    angular.element(document).find('#vraag-uitslag-mob').removeClass('show');
    startTimer();
});

socket.on('update quiz', function(serverQuiz) {
    quiz = serverQuiz;
});

function loadQuestion() {
    socket.emit('question request', quiz);
}

function startTimer() {
    // Iedere keer als er een vraag geladen wordt eerst #question leeg gooien.
    // Hiermee voorkomen we dat de laadbalk vol is bij de start van het aftellen.
    angular.element(document).find('#progress').html('');
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
                bar.setText("De tijd is om!");
                angular.element(document).find('#antwoord-uitleg').addClass('show');
                angular.element(document).find('#vraag-uitslag-mob').addClass('show');
            }
        }
    });
    line.animate(1);
}