console.log(`...........................................Assignment.......................................................`);
function add(num1, num2, ...num){
    var res = num1 + num2;
    for (let index = 0; index < num.length; index++) {
         res = res + num[index];
        
        
    }
    console.log(`num1 : ${num1},  num2 : ${num2} and array of rest Parameter num is :- [${num}] ==> total sum is :- ${res}`);
    // console.log(num);
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45, 78, 90, 51, 68);


