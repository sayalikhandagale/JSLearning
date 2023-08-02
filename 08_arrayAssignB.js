console.log(`....................................................................................................................`);
var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
let element1 = arrayNumbers[0];
var arrayNumbersLength = arrayNumbers.length;
var elementLast = arrayNumbers[arrayNumbersLength-1];

console.log(`Total elements is : ${arrayNumbersLength}`);
console.log(`First Position is ${element1} and Last Position is ${elementLast}`);

console.log(`....................................................................................................................`);
var arrayNumbersLength = arrayNumbers.length;
var elementLast = arrayNumbers[arrayNumbersLength-3];
console.log(`3rd last numbers is ${elementLast}`);

console.log(`....................................................................................................................`);
for (let index = 0; index < arrayNumbers.length; index=index+2) {
    const element = arrayNumbers[index];

    console.log(`Even numbers is ${element}`);
    }
console.log(`....................................................................................................................`); 
for (let index = 1; index <=10 ; index=index+2) {
    const element = arrayNumbers[index];
     console.log(`Odd Numbers is ${element}`);
    }

    console.log(`....................................................................................................................`);
    var count=0;
    for (let index = 1; index < arrayNumbers.length; index=index+2)
     {
        const element = arrayNumbers[index];
        var count=count+element
        
    }
    console.log(`Even Positioned is : ${count}`);

    var count=0;
    for (let index = 0; index < arrayNumbers.length; index=index+2)
     {
        const element = arrayNumbers[index];
        var count=count+element 
    }
    console.log(`Odd Positioned is : ${count}`);

    for (let index = 0; index < arrayNumbers.length; index++)
     {
        const element = arrayNumbers[index];
        var count=count+element    
        
    }
    console.log(`Sum of total Number count: ${count}`);
   
    console.log(`....................................................................................................................`);
    for (let index = 0; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];
        if (element%5==0) {
            console.log(`All number which is multiply by 5 : ${element}`);
        }
        
    }
    
    console.log(`....................................................................................................................`);
     let isAvailable = arrayNumbers.includes(115);
     console.log(`Is 115 available : ${isAvailable}`);

     let isshow = arrayNumbers.includes(23);
     console.log(`Is 23 available : ${isshow}`);
    
     console.log(`....................................................................................................................`);
     arrayNumbers.splice(3,0,55,66);
     console.log(`Insert number 55,66 before index 3 is [${arrayNumbers}]`);

     arrayNumbers.splice(4,3);
     console.log(`Delete 3 elements starting from index 4 is [${arrayNumbers}]`);