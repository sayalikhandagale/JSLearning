console.log(`============================Step 1============================================`);
var res=`     Good Night Sweet Dreams     `;
console.log(`string is :-  ${res}`);

console.log(`============================Step 2=============================================`);
var lengthres=res.length;
console.log(`Length of String is:- ${lengthres}`);

var charAt10=res.charAt(10);
console.log(`String of Index 10 :- ${charAt10}`);

console.log(`============================Step 3=============================================`);
var result=res.split('  ');
var words=result.length;
console.log(`Total Number of words are :- ${words}`);

console.log(`============================Step 4=============================================`);
var charAtLastIndex=res.charAt(lengthres-1);
console.log(`String of Last Index is :- ${lengthres}`);

console.log(`============================Step 5=============================================`);
var result=res.indexOf('S');
console.log(`Index Of 'S' char :- ${result}`);

console.log(`============================Step 6=============================================`);
var result=res.indexOf('Dreams');
console.log(`Index of SubString is:- ${result}`);

console.log(`============================Step 7=============================================`);
var result=res.slice(10,29);
console.log(`Slicing is :- ${result}`);

console.log(`============================Step 8=============================================`);
var result=res.indexOf('Sweet');
console.log(`Index Of "Sweet" is :- ${result}`);

console.log(`============================Step 9=============================================`);
var result=res.trim();
console.log(`Before Trim :- ${res.length}, After Trim :- ${res.length}`);

console.log(`============================Step 10=============================================`);
var result=res.trim();
var resultTrimStart=res.trimStart();
var trimStartLength= resultTrimStart.length;
var startspaces=res.length-trimStartLength;
console.log(`Remove Start Spaces From String :- ${startspaces}`);

console.log(`============================Step 11=============================================`);
var result=res.trim();
var resultTrimEnd=res.trimEnd();
var trimEndLength=resultTrimEnd.length;
var EndSpaces = res.length-trimEndLength;
console.log(`Remove End Spaces From String :- ${EndSpaces}`);

console.log(`============================Step 12=============================================`);
var result=res.includes("Dreams");
console.log(`String is "Dreams" are :- ${result}`);