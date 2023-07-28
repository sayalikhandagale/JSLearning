var voteEligibile=function(age){
    var ageValue= -age;
    if (age<=0 || isNaN(ageValue) || age>130){
    console.log(`Invalid age is ${age}`);

   }else {
    // if block to handle all valid scenarios
    if (age>=18) {
        console.log(`your age is ${age} eligible for vote`);
    } else {
        console.log(`your age is ${age} not eligible for vote`);
    }
}
}
voteEligibile(45);
voteEligibile(17);
voteEligibile(8);
voteEligibile(20);
voteEligibile(-10);
voteEligibile(200);
voteEligibile(0);
voteEligibile(undefined);
voteEligibile(null);

