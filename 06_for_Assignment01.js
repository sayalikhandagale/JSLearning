console.log(`-----------------------------Write a program to print numbers from 5 to 15 by incrementing 1-------------------------------`);
// Write a program to print numbers from 1 to 15 by incrementing 1
for (let index = 5; index <=15; index++) {
    console.log(index);
}

console.log(`----------------------------Write a program to print numbers from 50 to 40 by decrementing by 1----------------------------`);
// Write a program to print numbers from 50 to 40 by decrementing by 1
for (let index = 50; index >=40; index--) {
    console.log(index);
    
}

console.log(`----------------------------------Write a program to find first 15 odd numbers---------------------------------------------`);
// Write a program to find first 15 odd numbers
for (let index = 1; index <30 ; index=index+2) {
    console.log(index);
    
}

console.log(`----------------------------------Write a program to find first 10 even numbers---------------------------------------------`);
// Write a program to find first 10 even numbers
for (let index = 0; index <20 ; index=index+2) {
    console.log(index);
    
}

console.log(`----------------------------------Write a program to print table of 5-------------------------------------------------------`);
//Write a program to print table of 5
var result = " ";
for (let index = 5; index <=50; index=index+5) {
    result = result.concat(index).concat(" ");
    
}
console.log(result);

console.log(`----------------------------------Write a program to print table of 10-------------------------------------------------------`);
//Write a program to print table of 10
var result = " ";
for (let index = 10; index <=100; index=index+10) {
    result = result.concat(index).concat(" ");
    
}
console.log(result);

console.log(`------------------------------Write a program to print table of 10 in reverse order------------------------------------------`);
//Write a program to print table of 10 in reverse order
var result = " ";
for (let index = 100; index >=10; index=index-10) {
    result = result.concat(index).concat(" ");
    
}
console.log(result);