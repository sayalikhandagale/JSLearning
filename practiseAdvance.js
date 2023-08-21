console.log(`..............................................merge Object...........................................................`);
//In object we have merge object means separate object we can merge 
let myDetails = {   //Object 1
      Fullname : "Sayli Khandagale",
      Age : 21,
      College : "Kirti College",     
}
let  myAddress = {   //Object 2
    City : "Mumbai",
    state : "Maharashtra",
}
let mergedObject = Object.assign ({} , myDetails, myAddress); // merged object with object.assign
console.log(mergedObject);

console.log(`..............................................Nested Object...........................................................`);
//Object inside Object We can write this with the help of JSON Parse and JSON Stringify

let Details = {   // We can convert Object inside object With The help JSON Stringify (Object to JSON)
    Fullname : "Sayli Khandagale",
    Age : 21,
    College : "Kirti College",
    Marks : {
        BscIT : 71,
        HSC  : 52,
        SSC  : 77,
    }
}
let details = JSON.stringify(Details);
console.log(`Converted Object to JSON : - ${details}`);


