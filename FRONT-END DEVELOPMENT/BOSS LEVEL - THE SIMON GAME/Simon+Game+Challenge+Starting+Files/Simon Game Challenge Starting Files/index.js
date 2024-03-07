let buttonColors = ["red","blue","green","yellow"];
let gamePattern = [];
let userClickedPattern = []; 

$(".btn").click(function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
});

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(randomChosenColor);

    $("#" + randomChosenColor).animate({opacity: '1'},{duration: 2650});
}
nextSequence()

function playSound(name){
    let audio = new Audio("sounds/" + randomNumber + ".mp3");
    audio.play();
}