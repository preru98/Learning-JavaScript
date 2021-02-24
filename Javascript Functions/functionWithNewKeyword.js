function Mapper(name, place, animal, thing) {
    this.name = name,
        this.place = place,
        this.animal = animal,
        this.thing = thing
    return "Values Assigned"; //ignored with new keyword
}

// let mapObjectE = Mapper('Elina', 'England', 'Elephant', 'Eno');
// console.log(name); //Prints Elina
// console.log(mapObjectE); //Values Assigned


let mapObjectF = new Mapper('Frahan', 'Finland', 'Fox', 'Fan');
//console.log(name); //ReferenceError: name is not defined
console.log(mapObjectF); //Values Assigned