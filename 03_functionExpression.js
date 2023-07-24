

var num=100;
console.log(num);
var display=function(){
    console.log(`I am Angular Developer`);
}
display();
console.log(`Type of :- ${typeof display}`);

var add= function(num1,num2){
    var result=num1+num2;
    console.log(`Addition is :- ${result}`);
}
add(40,20);


var wordCount = function(word){
    var words = word.split(" ");
    var wordCount  = word.length;
    console.log(`In Given String - ${word}`);
    return wordCount;
 }
 var result = wordCount("I am UI Developer");
 console.log(`Total word count is: ${result}`);


 var square = function(num){
    var result=num*num;
    console.log(`Square Of Number are :- ${result}`);
 }
 square(5);
 square(6);
 square(25);
 square(100);
 square(67.89);
 square(59);
 console.log(`Type of variable Name is :- ${typeof square}`);
