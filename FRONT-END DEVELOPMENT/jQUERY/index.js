//Manipulate Attributes
// $("a").attr("href","http://www.yahoo.com");

//Add Event Listener
// $("h1").click(function(){
//     $("h1").css("color","purple");
// });

// $("button").click(function(){
//     $("h1").css("color","purple");
// });

// $("input").keypress(function(event){
//     console.log(event.key);
// });

$("input").keypress(function(event){
    $("h1").text(event.key);
});