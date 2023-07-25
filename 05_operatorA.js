console.log(`-------------------------------STEP 1---------------------------------`);
var squareOfWordLength=function(str){
    var result=str.length;
    var result2=result*result;
    console.log(`Square of the string ${str} is ${result2}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`-------------------------------STEP 2---------------------------------`);
var display=function(a){
   var res=a.length;
   var res2=a.split(" ");
   var res3=res2.length;
   var divide=res/res3;
   var Multiplication=res*res3;
   console.log(`Total words Division is  ${divide}`);
   console.log(`Total words Multiplication is ${Multiplication}`);
}
display("I am Angular Developer");