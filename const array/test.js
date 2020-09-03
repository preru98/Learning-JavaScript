const c= [2, 4, 6,2,7,3,2,6,9,0];

let remOne = (array, val) =>{
    console.log(array);
    
    let loc = array.indexOf(val);
    if(loc>-1){
        array.splice(loc,1);
    }
    
    console.log(array);
}

let remAll = (array, val) =>{
    console.log(array);
    let loc = array.indexOf(val);
    while(loc>-1){
        console.log(loc);
        array.splice(loc,1);
        loc = array.indexOf(val);
    }
    console.log(array);
}
remAll(c, 2);

