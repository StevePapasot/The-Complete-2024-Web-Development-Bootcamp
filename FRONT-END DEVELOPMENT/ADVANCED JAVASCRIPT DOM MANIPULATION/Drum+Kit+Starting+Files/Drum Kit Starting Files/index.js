var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButtons; i++){
document.querySelector("button").addEventListener("click", function handleClick(){
    alert("I got clicked!");
});
}
