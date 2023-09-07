const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`........................Step 1 Number greater than  50...............................`);
const array = arrayNumbers.filter((currentValue) => {
      return currentValue > 50
});
console.log(array);

console.log(`..............................Step 2 Even Number.....................................`);
const array1 = arrayNumbers.filter((currentValue) => {
    return currentValue %2 == 0
});
console.log(array1);

console.log(`..............................Step 3 Odd Number......................................`);
const array2 = arrayNumbers.filter((currentValue) => {
    return currentValue %2 == 1
});
console.log(array2);

console.log(`.............................Step 4 Multiple of 5....................................`);
const array3 = arrayNumbers.filter((currentValue) => {
    return currentValue %5 == 0
});
console.log(array3);

console.log(`.......................Step 5 Number Between 20 and 50 ..............................`); 
const array4 = arrayNumbers.filter((currentValue) => {
    return currentValue > 20 && currentValue < 50
});
console.log(array4);
