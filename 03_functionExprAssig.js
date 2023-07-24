console.log(`**************************************Step 1**********************************************`);
var square= function(num){
  var result = num*num;
  console.log(`square of '5' is :- ${result}`);
}
square(5);

var square= function(num){
    var result = num*num;
    console.log(`square of '6' is :- ${result}`);
  }
square(6);

var square= function(num){
    var result = num*num;
    console.log(`square of '25' is :- ${result}`);
  }
square(25);

var square= function(num){
    var result = num*num;
    console.log(`square of '100' is :- ${result}`);
  }
square(100);

var square= function(num){
    var result = num*num;
    console.log(`square of '67.89' is :- ${result}`);
  }
square(67.89);

var square=function(num){
    var result=num*num;
    console.log(`Square of '59' is :- ${result}`);
}
square(59);

console.log(`**************************************Step 2**********************************************`);
console.log(`Type of Square is :- ${typeof square}`);

console.log(`**************************************Step 3**********************************************`);
var  rectangle=function(length,breadth){
    var result=length*breadth;
    console.log(`Area of Rectangle Plot is :- ${result}`);
}
rectangle(499,917);

console.log(`**************************************Step 4**********************************************`);
var display=function(nam1,nam2){
    console.log(`Before Swapping Value are ==> ${nam1} and ${nam2}`);
    var temp=nam1;
    nam1=nam2;
    nam2=temp;
    console.log(`After Swapping Value are ==> ${nam1} and ${nam2}`);
}
display("Mahi","Raina");

console.log(`*******************************************************************************************`);
display(55,77);

console.log(`**************************************Step 5 **********************************************`);
var strOperation = function(str){
    var length=str.length;
    console.log(`A] Total Number of Character in String is:- ${length}`);

    var charAt6=str.charAt(6);
    console.log(`B] Character at Index 6 is :- ${charAt6}`);

    var charAt11=str.charAt(11);
    console.log(`C] Character at Index 11 is :- ${charAt11}`);

    var charAtLastIndex=str.charAt(str.length-1);
    console.log(`D] Last Character is :- ${charAtLastIndex}`);

    var charAt0=str.charAt(0);
    console.log(`E] Very First Character is :- ${charAt0}`);

    var charAtLastIndex=str.charAt(str.length-3);
    console.log(`F] third Last Character is :- ${charAtLastIndex}`);
    
    var result=str.split(" ");
    var words=result.length;
    console.log(`G] Total Number of words are :- ${words}`);
    
    var square=words*words;
    console.log(`Square of total number of words are :- ${square}`);

    
}
 strOperation("JS the most popular language of internet");
 