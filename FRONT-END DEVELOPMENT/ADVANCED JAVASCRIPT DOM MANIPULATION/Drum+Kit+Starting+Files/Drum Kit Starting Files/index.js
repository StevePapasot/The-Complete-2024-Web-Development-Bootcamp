var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick(){
   var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML){
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "a":
            var kick = new Audio('sounds/kick.mp3');
            audio.play();
        break;
        case "s":
            var snare= new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case "d":
            var tom1= new Audio('sounds/tom1.mp3');
            audio.play();
        break;
        case "j":
            var tom2= new Audio('sounds/tom2.mp3');
            audio.play();
        break;
        case "k":
            var tom3= new Audio('sounds/tom3.mp3');
            audio.play();
        break;
        case "l":
            var tom4= new Audio('sounds/tom4.mp3');
            audio.play();
        break;

        default:
    }
});
}


