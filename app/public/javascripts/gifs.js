var winnerGifs = ["../images/gifs/success/obama.gif", "../images/gifs/success/kim-jung-un.gif", "../images/gifs/success/pleased_king.gif",
                    "../images/gifs/success/bb-8.gif", "../images/gifs/success/joker.gif", "http://i.giphy.com/3osxY8yHdijYBl6p2w.gif",
                    "https://m.popkey.co/60b44e/ovQ5J_f-maxage-0.gif", "https://m.popkey.co/60b44e/ovQ5J_f-maxage-0.gif"];
var loserGifs = ["../images/gifs/loser/ramsay.gif", "https://m.popkey.co/9305c4/bbGW.gif", "https://m.popkey.co/16ac19/eL4ZQ.gif",
                "https://m.popkey.co/018b66/orDj4.gif?c=popkey-web&p=popkey&i=donaldtrump-ent&l=direct&f=.gif", "https://m.popkey.co/7db455/oD1o8.gif"];

var gifNr;

function printGifSucces() {
    gifNr = 0;
    gifNr = Math.floor(Math.random() * 8);
    if (gifNr == 0) {
        angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[0] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-mob').css("background-position", "0");
    } else if (gifNr == 1) {
        angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[1] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-mob').css("background-position-x", "-180px");
    } else if (gifNr == 2) {
        angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[2] + ")no-repeat left");
        angular.element(document).find('#vraag-uitslag-mob').css("background-position-x", "-160px");
    } else if (gifNr == 3) {
         angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[3] + ")no-repeat left");
         angular.element(document).find('#vraag-uitslag-mob').css("background-position-x", "-750px");
    } else if (gifNr == 4) {
        angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[4] + ")no-repeat left");
        angular.element(document).find('#vraag-uitslag-mob').css("background-position-x", "-490px");
    } else if (gifNr == 5) {
        angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[5] + ")no-repeat left");
        angular.element(document).find('#vraag-uitslag-mob').css("background-position-x", "-550px");
    } else if (gifNr == 6) {
        angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[6] + ")no-repeat left");
        angular.element(document).find('#vraag-uitslag-mob').css("background-position-x", "-150px");
    }else if (gifNr == 7) {
        angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[7] + ")no-repeat left");
        angular.element(document).find('#vraag-uitslag-mob').css("background-position-x", "-150px");
    }
}

function printGifLoser() {
    gifNr = 0;
    gifNr = Math.floor(Math.random() * 5);
    if (gifNr == 0) {
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background", "url(" + loserGifs[0] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background-position-x", "-180px");
        angular.element(document).find('#mijnscore-mob').css("background", "url(" + loserGifs[0] + ")no-repeat right");
        angular.element(document).find('#mijnscore-mob').css("background-position-x", "-180px");
    } else if (gifNr == 1) {
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background", "url(" + loserGifs[1] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background-position-x", "-75px");
        angular.element(document).find('#mijnscore-mob').css("background", "url(" + loserGifs[1] + ")no-repeat right");
        angular.element(document).find('#mijnscore-mob').css("background-position-x", "-75px");
    } else if (gifNr == 2) {
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background", "url(" + loserGifs[2] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background-position-x", "-340px");
        angular.element(document).find('#mijnscore-mob').css("background", "url(" + loserGifs[2] + ")no-repeat right");
        angular.element(document).find('#mijnscore-mob').css("background-position-x", "-340px");
    } else if (gifNr == 3) {
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background", "url(" + loserGifs[3] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background-position-x", "-350px");
        angular.element(document).find('#mijnscore-mob').css("background", "url(" + loserGifs[3] + ")no-repeat right");
        angular.element(document).find('#mijnscore-mob').css("background-position-x", "-350px");
    } else if (gifNr == 4) {
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background", "url(" + loserGifs[4] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background-position-x", "-650px");
        angular.element(document).find('#mijnscore-mob').css("background", "url(" + loserGifs[4] + ")no-repeat right");
        angular.element(document).find('#mijnscore-mob').css("background-position-x", "-650px");
    }
}
