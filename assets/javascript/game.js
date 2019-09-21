// Set variables for scores
var randomScore = 0;
var yourScore = 0;

//Set variables for crytals
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
        $(".your-score").text(yourScore);


    //Assign Values for the Crystals from 1- 12
    redCrystal = Math.floor(Math.random() * (12 - 1 + 1 )) + 1;
    yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1 )) + 1;
    greenCrystal = Math.floor(Math.random() * (12 - 1 + 1 )) + 1;
    blueCrystal = Math.floor(Math.random() * (12 - 1 + 1 )) + 1;

    

        console.log("Red Value: " + redCrystal);
        console.log("Yellow Value: " + yellowCrystal);
        console.log("Green Value: " + greenCrystal);
        console.log("Blue Value: " + blueCrystal);
        

};
startGame();



function userClick(){

    yourScore += userClick.redCrystal || yellowCrystal || greenCrystal || blueCrystal;
    $(".your-score").text(yourScore);
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


//Function for win/loss verification
$(".red-crystal").click(function() {
    userClick(redCrystal);
});
  
$(".yellow-crystal").click(function() {
    userClick(yellowCrystal);
});
  
$(".green-crystal").click(function() {
    userClick(greenCrystal);
});
  
$(".blue-crystal").click(function() {
    userClick(blueCrystal);
});
  