//npm is a location where we can find complete node codes. It is a community library. In there we can find tools and documentation that other people have created. https://www.npmjs.com/
//The magic starts when we want to install an npm package and use it -> $ npm install <Something>

var generateName = require('sillyname');
var sillyName = generateName();

console.log(`My name is ${sillyName}`);