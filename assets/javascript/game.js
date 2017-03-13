var wins = 0;
var losses = 0;
var randomNumber = 0;
var yourScore = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var gemVal;


function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min) + min);

}
startGame();


function displayScore() {
    $("#score").html(yourScore);

}

function startGame() {
    resetGame();

    $(".gems>img").on("click", function(e) {
        var target = $(e.target);

        // yourScore += gems[target.index()];

        if (target.is("#gem1")) {
            yourScore += gem1;

        }
        if (target.is("#gem2")) {
            yourScore += gem2;


        }
        if (target.is("#gem3")) {
            yourScore += gem3;

        }
        if (target.is("#gem4")) {
            yourScore += gem4;


        }
        displayScore();
        console.log("your_score_is: ", yourScore);
        checkScore();

    })

    function checkScore() {

        if (randomNumber === yourScore) {
            wins++;
            $(".wins").html(wins);
            resetGame();

        }

        if (yourScore > randomNumber) {
            losses++;
            $(".losses").html(losses);
            resetGame();
        }
    }

    function resetGame() {
        randomNumber = getRandom(19, 121);
        yourScore = 0;
        displayScore();

        console.log("random_number: ", randomNumber);
        // gemVal = [];

        gem1 = getRandom(1, 13);
        gem2 = getRandom(1, 13);
        gem3 = getRandom(1, 13);
        gem4 = getRandom(1, 13);

        console.log("gem_values: ", gem1, gem2, gem3, gem4);

        $("#randomNumber").html(randomNumber);
    }
}
