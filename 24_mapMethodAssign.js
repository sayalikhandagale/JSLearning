const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`..............................Step 1 Add 10 on Each Element...............................`);
const newArray = arrayNumbers.map((currentValue) => {
    return currentValue + 10;
});
console.log(newArray);

console.log(`.................................Step 2 Cube of Each Element.............................`);
const arrayOfCube = arrayNumbers.map((currentValue) => {
    return currentValue * currentValue * currentValue;
});
console.log(arrayOfCube);

console.log(`..............................Step 3 Add Index Value Into Each Element....................`);
const arrayOfIndex = arrayNumbers.map((currentValue, index) => {
    return currentValue + index;
});
console.log(arrayOfIndex);