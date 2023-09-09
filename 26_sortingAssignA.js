const arrayRollNumber = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`.......................Reverse the array.................`);
arrayRollNumber.reverse();
console.log(arrayRollNumber);

console.log(`......................Sort Method without any custom sorting logic....................`);
arrayRollNumber.sort();
 console.log(arrayRollNumber);

 console.log(`............................Sort the array in ascending order........................`);
 arrayRollNumber.sort((n1, n2) => {   
    return n1>n2 ? 1 : -1;
 });
 console.log(arrayRollNumber);

 console.log(`............................Greater Number from the array............................`);
const arr = arrayRollNumber[arrayRollNumber.length-1];
console.log(`Greater Number From the array : ${arr}`);

 console.log(`............................Smaller Number from the array............................`);
 const smallNum = arrayRollNumber[0];
 console.log(`Smaller Number From the array : ${smallNum}`);

 console.log(`............................Remove Duplicates from the array.........................`);
 let newSet = [...new Set(arrayRollNumber)];
 console.log(newSet);



