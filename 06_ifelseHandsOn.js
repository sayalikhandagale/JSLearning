function value(num){
    if(num%2==0){
        console.log(`${num} is even`);
    } else{
        console.log(`${num} is odd`);
    }
}
value(45);
value(70);
value(67);
value(98);

console.log(`...............................................................................`);

function a(str){
    var result = str.length;
    if(result>10){
        console.log(`${str} String is greater than 10 character`);
    }else{
        console.log(`${str} String is Less than 10 character`);
    }
}
a("JavaScript-ES6");

console.log(`...............................................................................`);
function checkStringStart(a){
    var word= a.startsWith("Java");
    if(word){
        console.log(`String Start With Java`);
    }else{
        console.log(`String Not Start With Java`);
    }
}
checkStringStart("JavaScript Language");

