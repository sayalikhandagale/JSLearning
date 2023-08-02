var arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
let element1 = arrayFruits[0];
let arrayFruitsLength = arrayFruits.length;
let elementLast = arrayFruits[arrayFruitsLength-1];
console.log(`In given array first position is: "${element1}" and Last position is : "${elementLast}"`);

var arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
arrayFruits.unshift("Papaya");
console.log(`Add element "Papaya" before the element "Banana"------------[${arrayFruits}]`);

let removedElement = arrayFruits.splice(4,1);
console.log(`Remove 'Mango' in given array ${removedElement} -------------[${arrayFruits}]`);

arrayFruits.push("Pineapple");
console.log(`Add element "Pineapple" at last position --------------------[${arrayFruits}]`);

arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`Insert an element "Dragon Fruit" before "water Melon"-------[${arrayFruits}]`);

arrayFruits[2] = "Kiwi";
console.log(`Replace an element "Orange" with "Kiwi" ---------------------[${arrayFruits}]`);

for (let index = 1; index <= 4; index++) {
    const element = arrayFruits[index];
    console.log(`Elements Starting from 1 to 4 ---------------------------[${element}]`);
}


let element1Last = arrayFruits[arrayFruitsLength-3];
let element2= arrayFruits[arrayFruitsLength-2]
let element3= arrayFruits[arrayFruitsLength-1]
console.log(`Select last 3 elements ----------------------------[${element1Last},${element2},${element3}]`);



