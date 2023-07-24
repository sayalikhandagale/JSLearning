//function with no argument and no return type
console.log(`*******************Function With no argument and no return type*****************************`);
function show(){
    console.log(`MY NAME IS SAYLI KHANDAGALE`);
    console.log(`I LOVE ONLY JAVASCRIPT`);
}
show();

console.log(`********************Function With argument and no return type*******************************`);
function display(Argument1,Argument2){
     console.log('Before Swaping=====> Argument1 :-', Argument1, 'Argument2 :-' , Argument2);
     var temp=Argument1;
     Argument1=Argument2;
     Argument2=temp;
     console.log('After Swaping======> Argument1 :-', Argument1, 'Argument2 :-', Argument2);
}
var name1="Sayli";
var name2="Khandagale";
display(name1,name2);

console.log(`********************Function With argument and return type*******************************`);
function addition(arg1,arg2){
    console.log('values are :-', arg1, arg2);
    var result = arg1+arg2;
    return result;
}
var res= addition(10,20);
console.log('Result is :-', res );
