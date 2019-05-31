/*alert('Goodluck');
let string1='My name is ';
let string2='Prerna Sharma';
let string3=string1+string2;
console.log(string3);
console.log(string3.length);
console.log("Say hello to escape sequences \n New Line! Yey\t with spaace");
console.log("Say hello to \"Quotes\"");
//console.clear();
let age =prompt("Hey! How old are you??");
console.log(age);
console.log('Exercise time');
console.log('Input a number in pounds and covert it into kilograms');
let a=prompt('Enter your weight in pounds');
alert('Your weight is '+a*0.454+'Kg');
console.log('Conversion completed');
console.log('Difference between == and ===');
let varx=2;
let vary='2';
console.log(varx==vary);
console.log(varx===vary);
console.log(1==true);
console.log(1===true);
console.log('There are three flavors in for loop in Javascript');
console.log('for, for-in, for-of');
let i=1,num=5;
for(i=1;i<=10;i++)
{
    console.log(num+'*'+i+'='+num*i);
}*/
let myObject={ A:'Hello',
               B:'Bye'};
 let x=0;
 console.log('here');
 let y=0;
for(x in myObject)
{
    console.log(myObject[x]); //Dot notation not working idk why?
}
let myArray=['HELL','YEAH'];
for(y of myArray)
{
    console.log(y); // Just using iterator name
}
console.log('Document Object Model');
console.log('Document Object Model allows us to use its properties and help javsacript to interact with html');
console.log('We can actually check that using console.dir(document)');
console.log('Some important document attributes- URL,body,head,links');
console.log('DOM is so fun.');