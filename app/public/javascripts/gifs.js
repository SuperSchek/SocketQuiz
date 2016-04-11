var winnerGifs = ["../images/gifs/success/obama.gif", "../images/gifs/success/kim-jung-un.gif", "../images/gifs/success/pleased_king.gif",
                    "../images/gifs/success/bb-8.gif", "../images/gifs/success/joker.gif"];
var loserGifs = ["../images/gifs/loser/ramsay.gif", "https://m.popkey.co/9305c4/bbGW.gif", "https://m.popkey.co/16ac19/eL4ZQ.gif"];

function printGifSucces() {
    var randomnumber = Math.floor(Math.random() * 5);
    if (randomnumber == 0) {
        angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[randomnumber] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-mob').css("background-position", "0");
    } else if (randomnumber == 1) {
        angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[randomnumber] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-mob').css("background-position-x", "-340px");
    } else if (randomnumber == 2) {
        angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[randomnumber] + ")no-repeat left");
        angular.element(document).find('#vraag-uitslag-mob').css("background-position-x", "-160px");
    } else if (randomNumber == 3) {
         angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[randomnumber] + ")no-repeat left");
         angular.element(document).find('#vraag-uitslag-mob').css("background-position-x", "-750px");
    } else if (randomnumber == 4) {
        angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[randomnumber] + ")no-repeat left");
        angular.element(document).find('#vraag-uitslag-mob').css("background-position-x", "-490px");
    }
}

function printGifLoser() {
    var randomnumber = Math.floor(Math.random() * 3);
    if (randomnumber == 0) {
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background", "url(" + loserGifs[randomnumber] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background-position-x", "-180px");
    } else if (randomnumber == 1) {
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background", "url(" + loserGifs[randomnumber] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background-position-x", "-75px");
    } else if (randomnumber == 2) {
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background", "url(" + loserGifs[randomnumber] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background-position-x", "-340px");
    }
}