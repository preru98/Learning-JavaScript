//Array Extend & Shrinks

let myCollection = ['a', 'b', 'c'];
console.log(myCollection);

//Push at End
myCollection.push('d', 'e');
console.log(myCollection);

//Pop from End
myCollection.pop();
console.log(myCollection);

//Pop at Beginning
myCollection.shift();
console.log(myCollection);

//Push from Beginning
myCollection.unshift('d', 'e');
console.log(myCollection);

//Output
// [ 'a', 'b', 'c' ]
// [ 'a', 'b', 'c', 'd', 'e' ]
// [ 'a', 'b', 'c', 'd' ]
// [ 'b', 'c', 'd' ]
// [ 'd', 'e', 'b', 'c', 'd' ]