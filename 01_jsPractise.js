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

console.log(`-----------------------------Write a program to print numbers from 1 to 10 by incrementing 1-------------------------------`);
// for loop
var result = " ";
for (let index = 1; index <= 10; index++) {
    result = result.concat(index).concat(" ");   
}
console.log(result);

console.log(`-----------------------------Write a program to print numbers from 20 to 10 by decrementing 1-------------------------------`);
// while loop 
var res = " "
var i = 20;
while (i>=10) {
    res = res.concat(i).concat(" ");
    i--;
}
console.log(res);

console.log(`...............................................Array..............................................................`);
var array = [10, 20, 30, 40, 50, 60];
console.log(`Array is [ ${array}]`);
var element = array[0];
var arrayLength = array.length-1;
var elementLast = array[array.length-1];
console.log(`First Position is : [${element}] and Last Position is : [${elementLast}]`);

var res = " ";
for (let index = 0; index < array.length; index=index+2) {
    const element = array[index];
    res = res.concat(element).concat(" ");
    
}
console.log(`Even Numbers are [${res}]`);

var a = " ";
for (let index = 1; index < array.length; index=index+2) {
    const element = array[index];
    a = a.concat(element).concat(" ");
}
console.log(`Odd Numbers are [${a}]`);

var count = 0;
for (let index = 1; index < array.length; index=index+2) {
    const element = array[index];
    count = count+element
}
console.log(`Even Positioned are ${count}`);

var count = 0;
for (let index = 0; index < array.length; index=index+2) {
    const element = array[index];
    count = count+element
}
console.log(`odd Positioned are ${count}`);

for (let index = 0; index < array.length; index++)
     {
        const element = array[index];
        var count=count+element    
        
    }
    console.log(`Sum of total Number count: ${count}`);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element%5==0) {
        
        console.log(`All multiply by 5 ${element}`);
    }
}

console.log(`...............................................Set..............................................................`);
let set = new Set();
set.add(4);
set.add(5);
set.add(9);
set.add(8);
console.log(set);

set.add(7); // add element in the element
console.log(set);

let isAvailable = set.has(8); // whether that number is available or not
console.log(isAvailable);

set.delete(5); // delete element
console.log(set);

var array = [10, 20, 30, 40, 50, 60];
let setOfNumbers = new Set();
for (const value of array) {
    setOfNumbers.add(value);
}
console.log(array);
console.log(setOfNumbers);

console.log(`Removing duplicate elements from array using spread operator`);
let arrayNew = [10, 20, 30, 40, 50, 60, 70, 80, 90, 40, 50];
arrayNew = [...new Set(arrayNew)];
console.log(arrayNew);

console.log(`...............................................Map..............................................................`);
let map = new Map();
map.set("name", "sayli");
map.set("State", "maharashtra");
map.set("country", "India");
map.set("isMarried", false);
map.set("height", "5ft");
map.set("skills", ["C", "python"]);
console.log(map);
console.log(`map sizing is ${map.size}`);

map.set("qualification" , "Bsc IT"); // add qualification in keys and values
console.log(map);

map.set("height", "4ft"); // once it update it will show that only not past value

let skills = map.get("skills"); // get skills
console.log(skills);

map.delete("isMarried"); // delete element
console.log(map); 

console.log(map.keys()); // show all keys
console.log(map.values()); // show all values

console.log(`----------------------------------Traversing map------------------------------------------------------------`);
let keys = map.keys(); // it will show keys and values
for (const key of keys) {
    console.log(`${key} ==> ${map.get(key)}`);
}
console.log(`................................................Object...............................................................`);
let person = {
    name : "sayli",
    age : 21,
    state : "Maharashtra",
    country : "India",
    city : "Mumbai",
    address : {
      pincode : 400078,
      street : "Bhandup",
      landmark : "Near school",
      getAddress : function(){
        console.log(`${this.pincode}, ${this.street}, ${this.landmark}`);
      }
    },
    list : ["Chirag", "Akshada", "Rutik", "Sayli", "Atharva"]
}
console.log(person);

person.address.getAddress();
person.list.push("Vishal")
console.log(person.list);

let keysperson = Object.keys(person);
console.log(keysperson);
let valuesperson = Object.values(person);
console.log(valuesperson);

console.log(`----------Traversing an object ------------ `);
for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(`Key: ${key}, value : ${element}`); 
    }
}


let isAvailable1= "state" in person;