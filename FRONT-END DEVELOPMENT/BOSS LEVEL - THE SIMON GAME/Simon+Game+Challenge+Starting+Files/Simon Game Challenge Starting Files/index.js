let buttonColors = ["red","blue","green","yellow"];
let gamePattern = [];
function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);

    $("#randomChosenColor").animate({opacity: '1'},{duration: 2650});
    let audio = new Audio("sounds/" + randomNumber + ".mp3");
    audio.play();


}
nextSequence()

