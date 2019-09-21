// Set variables for scores
var randomScore = 0;
var yourScore = 0;

//Set variables for crytals
var crystalValues = [];
var redCrystal = 0;
var yellowCrystal = 0;
var greenCrystal = 0;
var blueCrystal = 0;


//Set variables for wins and losses
var wins = 0;
var losses = 0;

//Function to start game
function startGame(){

    //Establish beginning values for Random Score and Your Score
    randomScore = Math.floor(Math.random() * (120 - 19 + 1 )) + 19;
        console.log("Random Score: " + randomScore);
        $(".random-score").text(randomScore);

    yourScore = 0;
        console.log("Your Score: " + yourScore);
        $(".your-score").text(yourScore);


    //Assign Values for the Crystals from 1- 12
    redCrystal = Math.floor(Math.random() * (12 - 1 + 1 )) + 1;
    yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1 )) + 1;
    greenCrystal = Math.floor(Math.random() * (12 - 1 + 1 )) + 1;
    blueCrystal = Math.floor(Math.random() * (12 - 1 + 1 )) + 1;

    
    
    $(".red-crystal").on("click", function(){
        yourScore = yourScore + redCrystal;
        $(".your-score").text(yourScore);
    });
    $(".yellow-crystal").on("click", function(){
        yourScore = yourScore + yellowCrystal;
        $(".your-score").text(yourScore);
    });
    $(".green-crystal").on("click", function(){
        yourScore = yourScore + greenCrystal;
        $(".your-score").text(yourScore);
    });
    $(".blue-crystal").on("click", function(){
        yourScore = yourScore + blueCrystal;
        $(".your-score").text(yourScore);
    });


        console.log("Red Value: " + redCrystal);
        console.log("Red Value: " + yellowCrystal);
        console.log("Red Value: " + greenCrystal);
        console.log("Red Value: " + blueCrystal);

};
startGame();

//Function for win/loss verification
function endGame(){

    if(yourScore === randomScore){
        alert("You Win!");
        wins++;
        $(".win-count").text(wins);
        startGame();
    }
    else if (yourScore > randomScore){
        alert("Game Over!");
        losses++;
        $(".loss-count").text(losses);
        startGame();
    }
};


