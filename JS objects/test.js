let a ={
    first:"Prerna",
    second : "Sanjana"
}
console.log(a);
//Creating object
//Using New keyword
let b = new Object();
b.first = "Prerna";
b.second = "Sanjana";
console.log(b);

//Objects
let c={
    first : "Prerna"
}
console.log(c);
//Shallow copy by default
let d = c; //Since refre. d is c now. every change is reflected
d.second = "Sanjana";
console.log(d);
console.log(c);

let use = { "down" : "use" };

//More ways of shallow copying + deep copying 
let sc={
    ...a
}

console.log("Shallow copy (spread) ",sc); // kinda works like deep copy
sc.middle="Extra name";
console.log(sc);
console.log(a);

//another  way of shallow copy

new_obj = Object.assign({}, b, use);
console.log(" Assign", new_obj);


//dep copy
newObj2 = JSON.parse(JSON.stringify(new_obj));
console.log("Deep Copying ", new_obj);