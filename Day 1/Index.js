console.log("Declaring variables");
alert('Hello People');
let firstName;
firstName='Prerna';
let lastName='Sharma';
console.log(firstName+' '+ lastName);
let num1=5;
let num2=10+ num1;
console.log(num2);
console.log("Declaring constants");
const varFinal=10;

/*
varFinal=1; //this statement will result in error
console.log(varFinal); 
*/
console.log("Introduction to several datatypes");
let name='Prerna';         //string
let age=19;                //number(int)
let percentage=91.9;       //number(real)
let job=undefined;         //undefined
let backLogs=null;         //null
let isGraduate=true;       //boolean
let isPostGraduate=false;  // boolean
console.log(name);
console.log(age);
console.log(percentage);
console.log(job);
console.log(backLogs);
console.log(isGraduate);
console.log(isPostGraduate);


console.log("Using typeof operator to retrieve datatype of a variable");
console.log(typeof age);
console.log(typeof name);


console.log("Object declaration");

let myDetails={
    personName:'Prerna',
    personAge:19
};

console.log(myDetails);
console.log(myDetails.personAge);//Dot Notation
console.log(myDetails['personName']); //Bracket Notation


console.log("Array declaration");
console.log("All arrays are objects and are dynamic");

let myArray=['val1','val2'];
console.log(myArray);
console.log(myArray[1]);
console.log(myArray.length);   //To obtain array length

function justSayThanks()
{
    console.log('Thanks.It was fun.');
    return 0;
}
justSayThanks();
