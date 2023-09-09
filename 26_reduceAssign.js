const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`..........................Find the sum of all number in traditional way..................`);
let sum = 0;
for (const element of array) {
    sum = sum + element;
}
console.log(`Sum of all number ${sum}`);

console.log(`..........................Find the Sum of all number by reduce ()........................`);
const totalSum = array.reduce((runningTotal, element) => {
    return runningTotal + element;
 });
 console.log(`Sum of all number ${totalSum}`);

 console.log(`...................Find the numbers Multiple of 5 and sum it.............................`);
 const arr = array.filter(currentValue => currentValue %5 == 0);

 const total = arr.reduce((runningTotal, element) => {
    return runningTotal + element;
 });
 console.log(`Total Sum ${total}`);
 
 