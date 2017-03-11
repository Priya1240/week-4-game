
<script type="text/javascript">

var wins = 0;
var losses = 0;
var randomNumber = 0;
var yourScore = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var gemVal;
var targVal;

$(document).ready(function() {
    startGame();
    $("#gems").click(function() {
        var index = $(this).index();
        var rand = gemVal[index];
        console.log(gemVal);
        alert(index+'/'+rand);                   
    })
})

function startGame() {
    var gemVal = getRandom(19, 121);
    gemVal = [];
    for (var i = 0; i < 4; i++) {
        gemVal.push(getRandom(1, 13));
    }
     $("#randomNumber").html(randomNumber);
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
</script>