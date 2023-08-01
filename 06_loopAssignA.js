console.log(`..................................Total Number of Vowels ..............................................`);
function vowelCount(str){
    let a = " ";
    let count = 0; 
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
           
            a = a.concat(char).concat(" ");       
            count = count + 1;
            
        }
    }
    console.log(`Vowels are ${a}`);
    console.log(`Total number of vowels is: ${count}`);
        
    }

vowelCount("I am very good IT Developer");

console.log(`...................................Sum of Cube of numbers from 1 to 5 ................................................`); 
let sumOfCode = function(){
    let totalSum = 0;
     for (let index = 1; index <= 5; index++) {
        let cube = index * index * index;
        totalSum = totalSum + cube;
     }
     console.log(`Sum of cube of numbers is : ${totalSum}`);
 }
 sumOfCode();

 console.log(`...................................odd Position character................................................`); 
 function oddPositionedChars(str) {
    let merge = " ";
    for (let index = 0; index < str.length; index++) {
        const char = str.charAt(index);
        
        // Log only odd positioned chars on console and do not consider empty spaces
        if (index%2!=0 && char!=" ") {
           merge = merge.concat(char).concat(" ");

        }
    }
    console.log(`Odd position is "${str}" : ${merge}`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");

console.log(`...........................................................................................................`);
function reverseString(a){
    let reverse = " ";
    for (let index = a.length-1; index >=0; index--) {
        const char = a.charAt(index);
        if (char != ' ') {
            reverse = reverse.concat(char).concat(" ");
        }
        
    }
    console.log(`Reverse the string "${a}" : ${reverse}`);
    
}
reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");