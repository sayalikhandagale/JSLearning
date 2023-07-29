console.log(`.............................Assignment no 2................................`);
function marriageEligibility(gender,age){ 
    if(gender == "Male" && (age>=21)){
        console.log(`Gender - ${gender} , age - ${age} - you are eligibile for marriage`);
   } 
    else if(gender == "Female" &&  (age>=18)){
         console.log(`Gender - ${gender} , age - ${age} - you are eligibile for marriage`);
   } 
   else  if(gender == "Others"){
    console.log(`Gender - ${gender} , age - ${age} - you are Not eligibile for marriage`);
   } else{
    console.log(`Gender - ${gender} , age - ${age} - you are Not eligibile for marriage`);
   }
}

marriageEligibility("Male",17);
marriageEligibility("Male",25);
marriageEligibility("Female",28);
marriageEligibility("Female",16);
marriageEligibility("Others",35);
marriageEligibility("Others",41);


console.log(`.............................Assignment no 3................................`);
var leapYear = function(year){
    var result = +year;
    if(year%4 == 0 && result%100!=0 || result%400==0 && result!==0){
        console.log(`'${year}' is Leap year`);
    } else if(isNaN(year)){
        console.log(`'${year}' Invalid input`);
    } else if(result==0){
         console.log(`'${year}' Invalid input`);
    }
    else{
        console.log(`'${year}' is Not Leap year`);
        }
    }
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);