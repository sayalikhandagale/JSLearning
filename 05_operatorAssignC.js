console.log(`-------------------------------------Step 1-------------------------------------------------`)
var number=function(gradScore,hscScore,sscScore,candidateName){

 var res = gradScore >=70 || hscScore >=80 || sscScore >=90 ? "You are Egilible for TCS  Interview" :"Unfortunately You are Not Egilible for TCS Interview"
 console.log(`${candidateName} ${res}`);
}
number(80,86,90,"Sayli");
number(70,65,55,"Renuka");
number(60,79,88,"Akshada");