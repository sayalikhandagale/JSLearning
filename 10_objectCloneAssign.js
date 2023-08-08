let personalDetails = {
   fullname : "Sayli Khandagale",
   emailID : "sayalikhandagale@gmail.com",
   state : "Maharashtra",
   country : "India",
   city : "Mumbai",
   qualification : "Bsc IT",
}

let collegeDetails = {
    name : "Kirti College",
    year : 1974,
    city : "Mumbai",
    founderName : "A.R.Mehta",
}
let mergedObject = Object.assign({} , personalDetails, collegeDetails );
console.log(mergedObject);

console.log(`....................................................................................................................................`);
let array = ["Renuka", "Shweta", "Tabu", "Chirag", "Atharva", "Akshada", "Rutik"];
Object.freeze(array);
for (const element of array) {
    console.log(`My Friend ${element}`);
    
}

console.log(`....................................................................................................................................`);
const str = "Technology";
let reversedstr = " ";
for (let index = str.length-1; index >=0 ; index--) {
    reversedstr += str[index];
    
}
console.log(`Reverse String :"${reversedstr}"`);
