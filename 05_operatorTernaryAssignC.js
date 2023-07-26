console.log(`-------------------------------------Step 1-------------------------------------------------`);

function maleMarriageEligibility(gender,age,boyName){
   var res = gender == "Male" && age>=21 ? "You are Eligibile for Marriage" : "You are not Eligibile for Marriage"
   console.log(`${boyName} ${res}`);


}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stwe Jobs");

console.log(`-------------------------------------Step 2-------------------------------------------------`);
function femaleMarriageEligibility(gender,age,girlName){
    var res = gender == "Female" && age>=18 ? "You are Eligibile for Marriage" : "You are not Eligibile for Marriage"
    console.log(`${girlName} ${res}`);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");