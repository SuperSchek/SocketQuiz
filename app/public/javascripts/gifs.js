var winnerGifs = ["https://m.popkey.co/0b1935/qrOQG.gif", "https://m.popkey.co/6d9ceb/wrkk.gif"];
var loserGifs = ["https://m.popkey.co/0b1935/qrOQG.gif", "https://m.popkey.co/6d9ceb/wrkk.gif"];

function printGifSucces() {
    var randomnumber = Math.floor(Math.random() * 2);
    if (randomnumber == 0) {
        angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[randomnumber] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-mob').css("background-position", "0");
    } else if (randomnumber == 1) {
        angular.element(document).find('#vraag-uitslag-mob').css("background", "url(" + winnerGifs[randomnumber] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-mob').css("background-position-x", "-340px");
    }
}

function printGifLoser() {
    var randomnumber = Math.floor(Math.random() * 2);
    if (randomnumber == 0) {
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background", "url(" + loserGifs[randomnumber] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background-position", "0");
    } else if (randomnumber == 1) {
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background", "url(" + loserGifs[randomnumber] + ")no-repeat right");
        angular.element(document).find('#vraag-uitslag-fout-mob').css("background-position-x", "-340px");
    }
}