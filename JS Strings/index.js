//JS Strings

//Using backticks for string formatting
let sampleStoryTitle = 'The Frog & Nightingale';
let statement = `The story's title was ${sampleStoryTitle}.`;
console.log(statement);                          //The story's title was The Frog & Nightingale.

//indexOf & lastIndexOf Function for substring search
let sampleTest = 'The Frog & Nightingale with Waterfall Nights';
let searchItem = 'Night';
console.log(sampleTest.indexOf(searchItem));       //11
console.log(sampleTest.lastIndexOf(searchItem));   //38
console.log(sampleTest.lastIndexOf('Birdie'));     //-1

//indexOf & lastIndexOf Function arguments for conditional substring search
console.log(sampleTest.indexOf(searchItem, 12));       //38
console.log(sampleTest.lastIndexOf(searchItem, 37));   //11
console.log(sampleTest.lastIndexOf(searchItem, 1));    //-1
