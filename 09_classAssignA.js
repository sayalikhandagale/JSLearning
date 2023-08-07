class Vehicle {
    constructor(name, model, color, company, prize){
        this.name = name;
        this.model = model;
        this.color = color;
        this.company = company;
        this.prize = prize;
  
    }
}
let result1 = new Vehicle("Motor Cycle", "vanQX54", "black", "tech Mahindra", "Rs 30000");

let result2 = new Vehicle("Bus", "vanQX67", "grey", "tata", "Rs 250000");

let result3 = new Vehicle("Maruti Zuzuki", "vanQX62", "white", "tata", "Rs 350000");

let result4 = new Vehicle("Hatch Back", "vanQX61", "blue", "Rs 400000");

let result5 = new Vehicle("Van", "vanQX60", "red", "tech Mahindra", "Rs 25000");

const arrayOfVechiles = [result1, result2, result3, result4, result5];

for (const vehicle of arrayOfVechiles) {
    console.log(`Name of the vehicle : ${vehicle.name}, Model is : ${vehicle.model}, Color : ${vehicle.color}, Company Name : ${vehicle.company}, Prize : ${vehicle.prize}`);
    
}

console.log(`.......................................................................................................................................................................`);
class College{
    constructor(name, year, city, founderName){
        this.name = name;
        this.year = year;
        this.city = city;
        this.founderName = founderName;
    } 
    display(){
        console.log(`Name of the College : ${this.name}, Established year : ${this.year}, City : ${this.city}, Founder of the College : ${this.founderName}`);
    }
}
let res1 = new College("Kirti College" , 1974, "Mumbai", "A.R.Mehta");
res1.display();

let res2 = new College("Somiya College", 1970, "Mumbai", "Satish Kadam");
res2.display();

let res3 = new College("COPE", 1975, "Pune", "Yogesh Muske");
res3.display();

let res4 = new College("MCC", 1980, "Pune", "S.M.Shetty");
res4.display();

console.log(`.......................................................................................................................................................................`);
transversObject = function (objectName) {
    for (const key in objectName) {
        if (objectName.hasOwnProperty.call(objectName, key)) {
            const element = objectName[key];
            console.log(`${key} : ${element}`);
        }
    }
}
transversObject(res1);
console.log('.........................................................');
transversObject(res2);
console.log('.........................................................');
transversObject(res3);
console.log('.........................................................');
transversObject(res4);
console.log('.........................................................');
