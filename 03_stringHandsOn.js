console.log(`---------------------------------------Step 1-------------------------------------------------------`);
var greet="     Hey you are doing good, keep it up      ";
console.log(`Given String is :- ${greet}`);

console.log(`---------------------------------------Step 2--------------------------------------------------------`);
var greet="     Hey you are doing good, keep it up      ";
var lengthGreet= greet.length;
console.log('Length of String is:-', lengthGreet);

console.log(`---------------------------------------Step 3-------------------------------------------------------`);
var result = greet.trim();
console.log(` After Triming string is :- ${result}`);
console.log(` After Triming Length is :- ${result.length}`);

console.log(`---------------------------------------Step 4-------------------------------------------------------`);
var result = greet.trim();
var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length;
var endSpaces = greet.length- trimEndLength; 
console.log(`Removed Extra Spaces is : ${endSpaces} `);

console.log(`---------------------------------------Step 5-------------------------------------------------------`);
var charAt5 = greet.charAt(5);
var charAt38 = greet.charAt(38);
console.log(`The First Character of string is :- ${charAt5} `,  `The Last Character of string is :- ${charAt38}`);

console.log(`---------------------------------------Step 6-------------------------------------------------------`);
var result = greet.split('  ');
var words = result.length;
console.log(`Total number of words are :- ${words}`);

console.log(`---------------------------------------Step 7-------------------------------------------------------`);
var result = greet.indexOf('good');
console.log(`Index of "good" word from string :- ${result}`);

console.log(`---------------------------------------Step 8-------------------------------------------------------`);
var result = greet.substring(22, 38);
console.log(`Using Substring :- ${result}`);

var result = greet.slice(22, 38);
console.log(`Using Slicing :- ${result}`);

console.log(`---------------------------------------Step 9-------------------------------------------------------`);
var result = greet.includes('up');
console.log(`String End with "up" character:- ${result}`);

console.log(`---------------------------------------Step 10-------------------------------------------------------`);
var result = greet.includes('Hey');
console.log(`String Start with "Hey" character:- ${result}`);