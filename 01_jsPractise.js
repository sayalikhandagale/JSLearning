// In Function we can in this way(we take this in normal function)
console.log(`***************************************Function With no argument and no return***************************************`);
function display(){
console.log(`My Name is Sayli Bharat Khandagale`);
console.log(`I Love JavaScript Very Much`);
}
display();

console.log(`***************************************Function With argument and no return******************************************`);
function show(arg1,arg2){
    console.log(`Before Swapping values is :> ${arg1} :> ${arg2}`);
    var temp = arg1;
    arg1=arg2;
    arg2=temp;
    console.log(`After Swapping values is :> ${arg1} :> ${arg2}`);
}
var name1="Sayli";
var name2="Khandagale"
show(name1,name2);

console.log(`***************************************Function With argument and return value***************************************`);
function result(arg1,arg2,arg3,arg4){
    var add= arg1+arg2+arg3+arg4;
    return add;
}
var res=result("Hello","Sayli","Good","Morning");
console.log(`Values are :> ${res}`);

console.log(`*******************************Function Expression With no argument and no return value*********************************`);
var num=function(){
    console.log(`I am a angular developer`);
}
num();

console.log(`*******************************Function Expression With argument and no return value************************************`);
var show=function(num1,num2){
    console.log(`Before Swapping Values is :> ${num1} :> ${num2}`);
    var temp=num1;
    num1=num2;
    num2=temp;
    console.log(`After Swapping Values is :> ${num1} :> ${num2}`);
}
var num1=20000;
var num2=80000;
show(num1,num2);
var nam1="Sayli";
var nam2="Khandagale";
show(nam1,nam2);

console.log(`*******************************Function Expression With argument and return value***************************************`);
var display=function(arg1,arg2,arg3){
    var add=arg1+arg2+arg3;
    return add;
}
var res = display(10.23,60,80);
console.log(`Addition is :> ${res}`);

var b=function(arg1,arg2){
    var add=arg1+arg2;
    return add;
}
var res=b("Sayli","Khandagale");
console.log(`D is :> ${res}`);

console.log(`**********************************************************String*******************************************************`);
var s = "Hello Mumbai Good Morning";
console.log(`String is :)  ${s}`);

var lengths= s.length;
console.log(`Length is :) ${lengths}`);

var charAt1= s.charAt(1);
console.log(`Character at 1 is :) ${charAt1}`);

var charAtLastIndex = s.charAt(lengths-1);
console.log(`Character at last index :) ${charAtLastIndex}`);

var a = s.slice(5,18);
console.log(`Slice from index 5 till 18 is :) ${a}`);

var b = s.indexOf("M");
console.log(`Index is "M" :> ${b}`);

var c = s.indexOf("Good");
console.log(`Index of "Good" is :> ${c}`);

var d = s.split(" ");
var r = d.length;
console.log(`Total Number of Words are ${r}`);

var e = s.includes("Mumbai");
console.log(`Result is :)> ${e}`);

var h = s.trim();
console.log(`Before Trim ${s.length} , After Trim ${s.length}`);

var f = s.trim();
var fTrimStart=s.trimStart();
var trimStartLength=fTrimStart.length;
var startspaces=s.length-trimStartLength;
console.log(`Start trim from length :) ${startspaces}`);

var e = s.trim();
var eTrimEnd=s.trimEnd();
var trimEndLength=eTrimEnd.length;
var EndSpaces=s.length-trimEndLength;
console.log(`End trim from length :) ${EndSpaces}`);

console.log(`*************************************************Conversion***********************************************************`);
console.log(`---------------------------------------Implict Conversion to String------------------------------------------`);
var i = '3'+ 2;
console.log(`Result is :>>>> ${i}`);

var j = '4' + true;
console.log(`Result is :>>>> ${j}`);

console.log(`---------------------------------------Implict Conversion to boolean------------------------------------------`);
var k = 5 + true ;
console.log(`Result is :>>>> ${k}`);

var l = "5" + true;
console.log(`Result is :>>>> ${l}`);

var m = '6' - true;
console.log(`Result is :>>>> ${m}`);

console.log(`---------------------------------------Implicit String conversion to Number-----------------------------------`);
var n = '6' + '7';
console.log(`Result is :>>>> ${n}`);

var o = '6' - 7;
console.log(`Result is :>>>> ${o}`);

var p = '6' * 7;
console.log(`Result is :>>>> ${p}`);

var q = '6'/'7';
console.log(`Result is :>>>> ${q}`);

var r = 6 / 5 ;
console.log(`Result is :>>>> ${r}`);

console.log(`----------------------------------------------Explicit Function----------------------------------------------`);
var num = '44';
var a = +num;
console.log(`Result is :> ${num} and its type of ${typeof a}`);

var b = "50";
var c = Boolean(num);
console.log(`Result is :>> ${b} and its type of ${typeof c} `);

console.log(`--------------------------------------------Not A Number------------------------------------------------------`);
var num1=0;
var num2=0;
var res = num1*num2;
console.log(`Result is : ${res}`);

var num3 = "10";
console.log(`Type of num3 is: ${typeof num3}`);
var result = +num3;
console.log(`Type of result is: ${result}`);
console.log(`Type of result is: ${typeof result}`);

console.log(`----------------------------------------------Ternary Operator-------------------------------------------------`);
var SayligradScore = 87;
var SaylisscScore = 77;

var a = (SayligradScore >=60 || SaylisscScore>=60) ? "Your Eligible for Interview" : "Your Not Eligible for Interview" ;
console.log(`Result is : ${a}`);
 
var wordLength=function(str){
    var b = str.length;
    var c=b%2==0 ? "Even" : "Odd";
    console.log(`${c} Length is ${b}`);
}
wordLength("sayli Khandagale");
wordLength("saiKhandagale");