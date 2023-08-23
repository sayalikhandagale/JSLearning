console.log(`......................................Step 1 (Array element and Index Using For Each).........................`);
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNumbers.forEach((currentValue,index)=>{
       console.log(`Element : ${currentValue} , Index : ${index}`);
});

console.log(`......................................Step 2 (Positive numbers)...............................................`);
arrayNumbers.forEach((currentValue)=>{
    if (currentValue>0) {
        console.log(`The Positive Number in array is ${currentValue}`);   
    }
});

console.log(`......................................Step 3 (Negative numbers)...............................................`);
let arrayFun = ()=>{
    let newArray = [];
    for (let index = 0; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];
        if (element < 0) {
            newArray.push(element)
            
        }      
    }
    console.log(`The Negative Number in Array is `);
    console.log(newArray);
}
arrayFun();

console.log(`......................................Step 4 (Even numbers)...................................................`);
arrayNumbers.forEach( (currentValue)=>{
    if (currentValue%2==0) {
        console.log(`Even Numbers : ${currentValue}`);
    }
} );

console.log(`....................................Step 5 (Sum of all elements from arrayNumbers).............................`);
let sum = 0;
arrayNumbers.forEach(function(currentValue){
    sum = sum + currentValue;

    }
);
console.log(`Addition of array element : ${sum}`);

console.log(`...................................Step 6 (Even Indexed array on For Each)......................................`);
arrayNumbers.forEach((currentValue, index)=>{
    if (currentValue && index%2==0) {
        console.log(`Even Indexed numbers value : ${currentValue}`);
        
    }
});