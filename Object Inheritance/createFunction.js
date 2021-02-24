const game = {
    name: 'Prerna',
    place: 'Paris',
    animal: 'Panda',
    thing: 'Pencil'
};

const LetterP = Object.create(game);

console.log(LetterP);
console.log(LetterP.name);
console.log(LetterP.thing);
LetterP.thing = 'Pen';
console.log(LetterP);
console.log(LetterP.thing);

// OUTPUT
// {}
// Prerna
// Pencil
// { thing: 'Pen' }
// Pen

const LetterQ = Object.create(LetterP);

console.log(LetterQ);
console.log(LetterQ.name);
console.log(LetterQ.place);
LetterQ.place = 'Quebec';
console.log(LetterQ);
console.log(LetterQ.thing);
console.log(LetterQ.place);

//OUTPUT
// {}
// Prerna
// Paris
// { place: 'Quebec' }
// Pen
// Quebec


const LetterM = Object.create(LetterQ, { name: { value: 'Micheal' } });

console.log(LetterM);
console.log(LetterM.name);