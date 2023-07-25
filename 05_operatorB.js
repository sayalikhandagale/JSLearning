console.log(`-------------------------------STEP 1---------------------------------`);
var greaterNumber=function(num1,num2){
    var result = num1 > num2 ? num1 : num2;
    console.log(`The Greater Number is := ${result}`);    
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`-------------------------------STEP 2---------------------------------`);
var display=function(num1){
    var num = num1;
    var result = num%2==0 ? "Even" : "Odd" ;
    console.log(`${num1} is ${result}`);
 }
 display(29);
 display(0);
 display(44);
 display(101);
 
 console.log(`-------------------------------STEP 3---------------------------------`);
 var wordLength=function(str){
    var result= str.length;
    var result2=result%2==0 ? "Even" : "Odd";
    console.log(`${str} Length is ${result2}` );
 }
 wordLength("JavaScript");
 wordLength("Developer");
 wordLength("Google");
 