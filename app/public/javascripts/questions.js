var quiz = [
    {
        question: "Sander is cool!",
        questionNr:1,
        answers: [
            {
                answer: "Sander",
                punten: false
            },
            {
                answer: "Amsterdamfsdfsdfsdfdsff",
                punten: false
            },
            {
                answer: "Parijs",
                punten: false
            },
            {
            answer: "<h2>Berlijn</h2>",
            uitleg: 'Elf atleten en officials van de Israëlische ploeg werden in de nacht van 4 op 5 september gegijzeld in hun appartement in het olympisch dorp door leden van de Palestijnse terreurbeweging Zwarte September.'+
                    'Uiteindelijk vonden alle elf de Israëliërs en een Duitse politieman de dood. Tijdens de pogingen de atleten te redden vonden vijf van de acht gijzelnemers eveneens de dood.',
            punten: true
            }
        ],
        picture: "<img src='../images/test.jpg' width='100%'/>",
        enabled:true
    },
    {
        question: "Jacco is cool!",
        questionNr:2,
        answers: [
            {
                answer: "Jacco",
                punten: false
            },
            {
                answer: "antw2",
                punten: false
            },
            {
                answer: "antw3",
                punten: false
            },
            {
                answer: "<h2>antw4</h2>",
                uitleg: 'Elf atleten en officials van de Israëlische ploeg werden in de nacht van 4 op 5 september gegijzeld in hun appartement in het olympisch dorp door leden van de Palestijnse terreurbeweging Zwarte September.'+
                        'Uiteindelijk vonden alle elf de Israëliërs en een Duitse politieman de dood. Tijdens de pogingen de atleten te redden vonden vijf van de acht gijzelnemers eveneens de dood.',
                punten: true
            }
        ],
        picture: "<img src='../images/test.jpg' width='100%'/>",
        enabled:true
    },
    {
        question: "Nico is cool!",
        questionNr:3,
        answers: [
            {
                answer: "Nico",
                punten: false
            },
            {
                answer: "ANSWR2",
                punten: false
            },
            {
                answer: "ANSWR3",
                punten: false
            },
            {
                answer: "<h2>ANSWR4</h2>",
                uitleg: 'Elf atleten en officials van de Israëlische ploeg werden in de nacht van 4 op 5 september gegijzeld in hun appartement in het olympisch dorp door leden van de Palestijnse terreurbeweging Zwarte September.'+
                'Uiteindelijk vonden alle elf de Israëliërs en een Duitse politieman de dood. Tijdens de pogingen de atleten te redden vonden vijf van de acht gijzelnemers eveneens de dood.',
                punten: true
            }
        ],
        picture: "<img src='../images/test.jpg' width='100%'/>",
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

    angular.element(document).find('#vraag-intro').addClass('hidden');
    angular.element(document).find('#antwoord-uitleg').addClass('hidden');
    angular.element(document).find('#antwoord-uitleg').removeClass('show');

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
                bar.setText("");
                angular.element(document).find('#antwoord-uitleg').addClass('show');
            }
        }
    });
    line.animate(1);
}