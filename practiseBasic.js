console.log(`..............................How to decalare and initization variable............................`);
var myName ;//variable declaration
myName = "Sayli"; //variable Initialization
console.log(`My Name is :- ${myName}`);

var city = "Mumbai"; //variable declaration and variable Initialization
console.log(`My City is :- ${city}`);
console.log(`Type of City is :- ${typeof city}`);// typeOf operation will tell you what type of data will be there

console.log(`..............................Function With no argument and no return.............................`);
function display(){ //Function With no argument and no return
console.log("My Name is Sayli Khandagale");
}
display();

console.log(`..............................Function With argument and no return.................................`);
function show(str1,str2){
console.log(`Before Swapping the str are :- ${str1} :- ${str2}`);
var temp = str1 ;
str1 = str2;
str2 = temp;
console.log(`After Swapping the str are :- ${str1} :- ${str2}`);
}
var s1 = "Sayli";
var s2 = "Khandagale";
show(s1,s2);
// for example
function result(arg1,arg2){
    console.log(`Before Swapping is :- ${arg1} :- ${arg2}`);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(`After Swapping is :- ${arg1} :- ${arg2}`);
}
var a1 = "Bat";
var a2 = "Ball";
result(a1, a2);

console.log(`.............................Function With argument and return value...............................`);
function add(arg1, arg2, arg3){
    var res = arg1 + arg2 + arg3;
    return res
}
var res1 = add(10, 20, 40);
console.log(`Values are :- ${res1}`);
//for example
function res(arg1,arg2){
    var a = arg1 + arg2;
    return a
}
var b = res("Sayli","Khandagale");
console.log(`Values are :- ${b}`);

console.log(`..........................................String....................................................`);
var res = "  Hey Sayli, What's Up  ";
console.log(`My String is :- ${res}`);
//To find length we will .length property 
var a = res.length;
console.log(`Length of my String is :- ${a}`);

//To find character from the String We Use The CharAt Method
var charAt = res.charAt(4);
console.log(`Character at my String is :- ${charAt}`);

// To find The Last Character from the String we will use CharAtLastIndex
var charAtLastIndex = res.charAt(a-1);
console.log(`Character at My Last string is :- ${charAtLastIndex}`);

//To find the particular words index we will use Index Of Method
var b = res.indexOf("H");
console.log(`Index Of my string is "H" :- ${b}`);

// To find the string start and length we use the subString method
var c = res.substr(6);
console.log(`my SubString is :- ${c}`);

//To Remove the start and End Spaces we will be using trim method
var d = res.trim();
console.log(`Triming From start to End Spaces :- ${res.length}`);

//To Remove Only Start Spaces we will be using start Spaces method
var e = res.trim();
var trimStart = res.trimStart();
var trimStartLength = trimStart.length;
var startspaces = res.length-trimStartLength;
console.log(`My String starting space is :- ${startspaces}`);

//To Remove Only End Spaces we will be using End Spaces method
var f = res.trim();
var trimEnd = res.trimEnd();
var trimEndLength = trimEnd.length;
var endSpaces = res.length-trimEndLength;
console.log(`My String ending space is :- ${endSpaces}`);

//We used Slicing for find the word by index
var g = res.slice(5,12);
console.log(`Slicing My String is :- ${g}`);

//Spliting means we are separating string by comma
var h = res.split(" ");
console.log(`Spliting My String in :- ${h}`);

//To find total number of words in string we use the split and length
var i = res.split(" ");
var j = i.length;
console.log(`Total Number of Words in String are :- ${j}`);

//To find specific word is there or not we use includes method
var k = res.includes("Sayli");
console.log(`Specific Word "Sayli" is available or not :- ${k}`);

console.log(`...........................................Not a Number..................................................`);
//Not a Number we will not value must 
var num1 = 0;
var num2 = 0;
var div = num1/num2;
console.log(`Number is :- ${div}`);
console.log(`Type Of Number is :- ${typeof div}`);
console.log(`---------------------------------------------------------------------`);
var num3 = "Sayli";
var l = +num3;
console.log(`Value Must :- ${l}`);
console.log(`Type of "Sayli" is :- ${typeof num3}`);

console.log(`...........................................Ternary Operators.............................................`);
//We use this operator for condition is true then after ? will come and its false then after : will come
var m = 50;
var n = m%2==0 ? "Even" : "Odd";
console.log(`Number must be :- ${n}`);

var hsc = 60;
var ssc = 77;
var o = (hsc >=60 && ssc >=77) ? "Please Come For the Interview" : "Your Not Eligible For Interview";
console.log(`Sayli ${o}`);

console.log(`..........................................For Loop.......................................................`);
var p = " ";
for (let index = 2; index <= 20; index = index+2) {
    p = p.concat(index).concat(" ");  
}
console.log(p);

console.log(`..........................................While Loop......................................................`);
var q = " ";
var i = 4 ;
while (i <= 40) {
    q = q.concat(i).concat(" ");
    i = i+ 4;
}
console.log(q);

console.log(`..........................................Scope..........................................................`);
var myName ; // variable Declaration
let surname ;
const dob = "14/04/2002";

myName = "Sayli";
surname = "khandagale";
console.log(`My name is ${myName} and My surname is ${surname}`);

//const dob = "14/04/2002"; Not allowed or we cannot re declare to rewrite as const same value
//var myName ; It will allowed all
//let surname; we cannot write let (value) again it is not allowed or we cannot re declare

console.log(`..........................................Array..........................................................`);
var myArray = [10,20,30,40,50];
console.log(`My array is :- "${myArray}" and My Array type is :- "${typeof myArray}" and My array length is :- "${myArray.length}"`);//To find length in array we use length only

//To find the Particular number Position we will use the array[] and give index like 0,1,2,3,4,n
let r = myArray[1];
console.log(`Element at Positon "1" is :- ${r}`);
let s = myArray[4];
console.log(`Element at Positon "4" is :- ${s}`);

//To find first position and last position elements we will use length and length-1
let t = myArray[0]; //first position of array
let u = myArray.length; //length of the first position
let v = myArray[u-1]; //length of the last position
console.log(`First Position is "${t}" and Last position is "${v}"`);

//To add First or Begining element to the array we use the "Unshift" method
myArray.unshift(5);
console.log(`Added To My Array First Element " ${myArray}"`);

//To Remove First or Begining element to the array we use the "Shift" method
myArray.shift(5);
console.log(`Remove My First Element "${myArray}"`);

//To Add Element at the end of the array we use the "Push" method
myArray.push(60);
console.log(`Added to My Array last Element "${myArray}"`);

//To Remove Element at the end of the array we use the "Pop" method
myArray.pop(60);
console.log(`Remove to My Array last Element "${myArray}"`);

//To check The Numbers is available or not we use "Includes" method
let isAvailable = myArray.includes(40);
console.log(`In My Array "40" is available :- "${isAvailable}"`);

//Remove middle element while doing splicing method
myArray.splice(4);
console.log(`Remove Middle Element : "${myArray}"`);

//To join My Array we use Join method
myArray.join(",");
console.log(`Joined My array by , :- "${myArray}"`);

let x = myArray.join("|");
console.log(`Joined My array by | :- "${x}"`);

//In Array We For Of loop
let ab = " ";
for (const y of myArray) {
    ab=ab.concat(y).concat(" ");
}
console.log(`My array In For Loop :- "${ab}"`);

//We can use Spread Operator to remove repeat element in array 
console.log(...myArray);

console.log(`................................................Map............................................................`);
let map = new Map();
map.set("myName", "Sayli");
map.set("state" , "Maharashtra");
map.set("Country" , "India");
map.set("Skills", ["HTML","CSS", "JavaScript","Java"]);
console.log(map);

//map.size we can use to find the size
console.log(`Sizing is ${map.size}`);

//map.get we can get the value 
let stateValue = map.get("state");
console.log(`We can get value of state "${stateValue}"`);

//map.delete we can delete the value
map.delete("state");
console.log(map);

//To get all the keys from the map we use map.key method // we can for of loop in map 
let keys = map.keys();
for (const key of keys) {
    console.log(`${key} ==> ${map.get(key)}`);
}

console.log(`..............................................Set.........................................................`);
let set = new Set();
set.add(2);
set.add(4);
set.add(6);
set.add(8);
set.add(10);
console.log(set);
console.log(`Size of My set is "${set.size}"`);
//we can use add in the set method to get content
set.add(7);
console.log(set);

//We can has method whether that key is available or not
let y = set.has(8);
console.log(`Is Avilable or not If yes then ${y}`);

//we can delete element from set also
set.delete(10);
console.log(set);

//we can use for of loop for set
let de = " ";
for (const cd of set) {
    de = de.concat(cd).concat(" ");
}
console.log(`For Of Loop For Set ${de}`);

console.log(`..................................................................................................................`);
//Removing duplicate elements from array using spread operator in set 
let array = [10,10,20,20,30,40,40,50,50];
array = [...new Set(array)]
console.log(`Removing duplicate elements from array using spread operator :- ${array}`);

console.log(`...................................................Object.........................................................`);
let personalDetails = {
      Name : "sayli",
      Surname : "Khandagale",
      EmailID : "sayaliKhandagale@gmail.com",
      Education : "BSC IT",
      Address : {
        Street : "Konkon Nagar",
        Location : "Mumbai",
        LandMark : "Near School",
        State : "Maharashtra",
        Country : "India",
        getAddress : function(){ //function
             console.log(`My Details :- ${this.Street} ${this.Location} ${this.LandMark} ${this.State} ${this.Country}`);
        }
      },
      Hobbies : ["Drawing", "Painting", "Cooking", "writing"]

}
personalDetails.Education = "Msc IT" // We can Update the value and Updated Value will visible
personalDetails.Address.Location = "Pune" // We can Update the value and Updated Value will visible
let state = personalDetails.Address.State; 
//To add First or Begining element to the array we use the "Unshift" method
personalDetails.Hobbies.unshift("Reading");

//To Remove First or Begining element to the array we use the "Shift" method
personalDetails.Hobbies.shift("Reading");

//To Add Element at the end of the array we use the "Push" method
personalDetails.Hobbies.push("Spending Time With Family Member in my Free time");

//To Remove Element at the end of the array we use the "Pop" method
personalDetails.Hobbies.pop("Spending Time With Family Member in my Free time");
console.log(personalDetails);

let personalKey = Object.keys(personalDetails); //keys of object
console.log(personalKey);
let personalvalue = Object.values(personalDetails); //value of object
console.log(personalvalue);

// In object we Use For In loop
for (const key in personalDetails) {
    if (Object.hasOwnProperty.call(personalDetails, key)) {
        const element = personalDetails[key];
        console.log(`key :- ${key} Values :- ${element}`);
        
    }
}