//Array 

let myCollection = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(myCollection);

//Slice Array | Subarray Extraction | Change not reflected in parent collection
let extractedStuff = myCollection.slice(2,5);
console.log(extractedStuff);
console.log(myCollection);                      // no change


//Splice Array | Subarray Extraction | Change reflected in parent collection
let extractedStuffLater = myCollection.splice(2,2);
console.log(extractedStuffLater);
console.log(myCollection);                      // change


//Splice Array | Replace Data | Change reflected in parent collection
let replacedStuff = myCollection.splice(2,2, 'edited', 'edited too');
console.log(replacedStuff);
console.log(myCollection);                       // change


//Concat Array | Change not reflected in parent collection
let extraArray = ['I','am','extra'];
let addedStuff = myCollection.concat('added');
//let addedStuff = myCollection.concat(extraArray);
console.log(addedStuff);
console.log(myCollection);                 // no change


//Output
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// [ 'c', 'd', 'e' ]
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// [ 'c', 'd' ]
// [ 'a', 'b', 'e', 'f' ]
// [ 'e', 'f' ]
// [ 'a', 'b', 'edited', 'edited too' ]
// [ 'a', 'b', 'edited', 'edited too', 'added' ]
// [ 'a', 'b', 'edited', 'edited too' ]

