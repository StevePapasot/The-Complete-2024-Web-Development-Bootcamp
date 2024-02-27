// Random Love Calculator
var myName = prompt("What is your name?");
var myCrush = prompt("What is your crush's name?");
var calcPers = Math.round((Math.random() * 100) + 1);
alert("Hello " + myName + " , the  calculator shows that you are " + calcPers + "% in love with " + myCrush);
console.log("Hello " + myName + " , the  calculator shows that you are " + calcPers + "% in love with " + myCrush);

//Add if-else statement on the above exercise
var myName = prompt("What is your name?");
var myCrush = prompt("What is your crush's name?");
var calcPers = Math.round((Math.random() * 100) + 1);
alert("Hello " + myName + " , the  calculator shows that you are " + calcPers + "% in love with " + myCrush);
console.log("Hello " + myName + " , the  calculator shows that you are " + calcPers + "% in love with " + myCrush);

if (calcPers > 70){
    alert("Your love score is " + calcPers + ". You love each other very much!");
}else{
    alert("Your love score is " + calcPers);
}

//Combining Comparators
var myName = prompt("What is your name?");
var myCrush = prompt("What is your crush's name?");
var calcPers = Math.round((Math.random() * 100) + 1);
alert("Hello " + myName + " , the  calculator shows that you are " + calcPers + "% in love with " + myCrush);
console.log("Hello " + myName + " , the  calculator shows that you are " + calcPers + "% in love with " + myCrush);

if (calcPers > 70){
    alert("Your love score is " + calcPers + ". You love each other very much!");
}else if (calcPers >30 && calcPers <= 70) {
    alert("Your love score is " + calcPers + "%");
}else{
    alert("Your love score is " + calcPers + "%. That's not very good at all!");
}


//BMI Calculator Exercise
function bmiCalculator (weight, height) {
    var bmi = weight/(height*height);
    if(bmi < 18.9){
    console.log("Your BMI is "+bmi+" ,so you are underweight");    
    } 
    if(bmi => 18.9 && bmi< 24.9){
    console.log("Your BMI is "+bmi+" ,so you have normal weight");    
    } 
     if(bmi=> 24.9){
    console.log("Your BMI is "+bmi+" ,so you are overweight");    
    } 
    return bmi;
}