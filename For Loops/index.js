//Different For Loops

let myCollection = ['abc', ['a','b','c'], 'a', 'b','c', ['abc']];

// For Loop | I
for(let i=0; i<myCollection.length; i++){
    console.log(myCollection[i]);
}
console.log('');

// For Loop | II
for(let item of myCollection){
    console.log(item);
}
console.log('');

// For Loop | III
for(let itemIndex in myCollection){
    console.log(myCollection[itemIndex]);
}