console.log(`............................Write a Program to find factorial Number..............................`);
var FactorialFunction =function(num) {
    let number = 1;
    for (let index = 1; index <= num; index++) {
       number = number * index; 
        
    }
    console.log(`The Factorial of ${num} is ${number}`);
}
FactorialFunction(5);
console.log(`...................................................................................................`);
FactorialFunction(9);
console.log(`...................................................................................................`);
FactorialFunction(11);
console.log(`...................................................................................................`);
FactorialFunction(7);
console.log(`...................................................................................................`);