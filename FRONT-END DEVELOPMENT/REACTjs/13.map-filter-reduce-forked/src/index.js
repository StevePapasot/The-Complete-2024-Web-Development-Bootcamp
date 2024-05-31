var numbers = [3, 56, 2, 48, 5];
import emojipedia from "./emojipedia";
//Map -Create a new array by doing something with each item in an array.
// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

// //Make newNumber Map smaller:
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// // var newNumbers = [];
// // numbers.forEach(function (x) {
// //   mewNumbers.push(x * 2);
// // });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = 0;
// numbers.forEach(function (num) {
//   newNumber += num;
// });

// var newNumber = numbers.reduce(function (accumulator, cuurentNumber) {
//   return accumulator + cuurentNumber;
// });

// console.log(newNumber);

//Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(newNumber);

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmojipedia);
