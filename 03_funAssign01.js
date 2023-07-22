// Function with no argument and no return value
console.log("---------------------------------------Step 1-------------------------------------------------------");
function show(){
    console.log('My Name is Sayli');
    console.log('I Love Only JavaScript');
}
show();

console.log("---------------------------------------Step 2--------------------------------------------------------");
var firstName = "Sayli";
var lastName = "Khandagale";
var collegeName= "Kirti college";
console.log("First Name:-", firstName, "Last Name:-", lastName,    "College Name:-", collegeName );

console.log("---------------------------------------Step 3-------------------------------------------------------");
function swapValues(Argument1, Argument2){ 
    console.log('Before Swap=> Argument1 :-', Argument1 , " Argument2 :-", Argument2 );
    var temp = Argument1;
    Argument1 = Argument2;
    Argument2 = temp;
    console.log('After Swap=> Argument1 :-', Argument1, " Argument2 :-", Argument2 );
}
var name1="Virat";
var name2="Anushka";
swapValues(name1,name2);
var num1 = 1000; 
var num2 = 2000;
swapValues(num1,num2);

console.log("---------------------------------------Step 4---------------------------------------------------------");
function addition( arg1, arg2, arg3)
{
    var result=arg1+arg2+arg3;
    console.log( 'Addition is :-', result);
}
addition(10.23,600,40)

function addition( arg1, arg2, arg3)
{
    var result=arg1+arg2+arg3;
    console.log( 'Addition is :-', result);
}
addition("Hello","Good","Morning")
console.log("******************************************************************************************************");

var bankName="CICI Bank";
var accountnum=3456782345;
var location="Pune";
var pincode=431202 ;
console.log("Bank Name:-", bankName, "Account Number:-", accountnum, "Location:-", location, "PinCode:-", pincode);

var bankName="Axis Bank";
var accountnum="7856782345";
var location="Mumbai";
var pincode=441202;
console.log("Bank Name:-", bankName, "Account Number:-", accountnum, "Location:-", location, "PinCode:-", pincode);

var bankName="HDFC Bank";
var accountnum=8956782345;
var location="Pune"
var pincode=631202;
console.log("Bank Name:-", bankName, "Account Number:-", accountnum, "Location:-", location, "PinCode:-", pincode);














    


