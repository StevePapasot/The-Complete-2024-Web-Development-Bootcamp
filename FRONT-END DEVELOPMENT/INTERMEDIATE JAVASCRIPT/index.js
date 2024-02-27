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

//Leap Year
function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
    if(year % 4 === 0){
        return "Leap year.";
    }else{
        return "Not leap year.";
    }
    if(year % 100 === 0){
        return "Leap year.";
    }else{
        return "Not leap year.";
    }
    if(year % 400 === 0){
        return "Leap year.";
    }else{
        return "Not leap year.";
    }
        
    
    /**************Don't change the code below****************/    
    
    }

// Working With JavaScript ARRAYS
var guestName = ["John", "Angela", "Steve", "Julia", "Romeo", "Nick"];
var included = prompt("What is your name?");
if (guestName.includes(included)){


    alert("Welcome!");
}else{
    alert("Sorry, maybe next time!");
}

//FizzBuzz Exercise.
var output = [];
var count = 1;
function fizzBuzz(){
    while(count <= 100){
    if (count % 3 === 0 && count % 5 === 0){
    output.push("FizzBuzz");
    }else if(count % 3 === 0){
        output.push("Fizz");
    }
    else if(count % 5 === 0){
        output.push("Buzz");
    }else{
        output.push(count);
    }
}
count++
}

//You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.
var names = ["John", "Maria", "Steve", "Angela", "Kate", "Katia"];
function whosPaying(names){
    var randomNamePosition = Math.floor(Math.random()*names.length);
    var selectedName  = names[randomNamePosition];
    return `${selectedName} is going to buy lunch today!`;
}
var output = whosPaying(names);
console.log(output);

//Control Statement: While
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
