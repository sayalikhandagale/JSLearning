console.log(`...........................................Step 1 (With no args and no return value)...........................................`);
let arrowFun = () => {
    console.log(`Good Morning, Today is Tuesday`);
}
arrowFun();

console.log(`...........................................Step 2 (With 3 args and no return value)............................................`);
let multiply = (num1, num2, num3=1) => {
    console.log(`Multiplication of given numbers is : ${num1*num2*num3}`);
}
multiply(5, 5, 2);
multiply(10, 4);

console.log(`...........................................Step 3 (With 5 args and return value)..............................................`);
let add = (num1, num2, num3, num4, num5) => {
    console.log(`Addition is : ${num1 + num2 + num3 + num4 + num5}`);
}
add(100, 100, 200, 349, 756);
add("I am", " learning", " ES6", " features", " in depth");
