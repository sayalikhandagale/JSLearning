let isPrime = function(number){
    let count = 0;
    for(let i = 1;i<=number;i++)    {
       if(number%i == 0){
          count = count + 1;
       }
    }
    if(count == 2){
       return true;
    }
    else{
       return false;
    }
 }
 // checking if 11 and 21 are prime numbers or not 
 if(isPrime(11)){
    console.log("11 is the Prime number");
 }
 else{    
    console.log("11 is not a Prime number")
 }
 
 if(isPrime(14)){
    console.log("21 is the Prime number");
 }
 else{
    console.log("21 is not a Prime number")
 }