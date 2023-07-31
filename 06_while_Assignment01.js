console.log(`-----------------------------Write a program to print numbers from 5 to 15 by incrementing 1-------------------------------`);
// Write a program to print numbers from 1 to 15 by incrementing 1
var i = 5;
while (i<=15) {
    console.log(i);
    i++;
}

console.log(`----------------------------Write a program to print numbers from 50 to 40 by decrementing by 1----------------------------`);
// Write a program to print numbers from 50 to 40 by decrementing by 1
var i = 50;
while (i>=40) {
    console.log(i);
    i--;
}
console.log(`----------------------------------Write a program to find first 15 odd numbers---------------------------------------------`);
// Write a program to find first 15 odd numbers
var i = 1;
while (i<30) {
    console.log(i);
    i=i+2;  
}
console.log(`----------------------------------Write a program to find first 10 even numbers---------------------------------------------`);
// Write a program to find first 10 even numbers
var i = 0;
while (i<20) {
    console.log(i);
    i=i+2;
}
console.log(`----------------------------------Write a program to print table of 5-------------------------------------------------------`);
//Write a program to print table of 5
var result = " ";
var i = 5;
while (i<=50) {
    result = result.concat(i).concat(" ");
    i=i+5;
    
}
console.log(result);
console.log(`----------------------------------Write a program to print table of 10-------------------------------------------------------`);
//Write a program to print table of 10
var result = " ";
var i = 10;
while (i<=100) {
    result = result.concat(i).concat(" ");
    i=i+10;
    
}
console.log(result);

console.log(`------------------------------Write a program to print table of 10 in reverse order------------------------------------------`);
//Write a program to print table of 10 in reverse order
var result = " ";
var i =100;
while (i>=10) {
    result = result.concat(i).concat(" ");
    i=i-10;
}
console.log(result);