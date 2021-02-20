for (var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}
//Prints 5 5 5 5 5
//variable's value trapped in the setTimeout

//Using IIFE to tackle Issue

for (var i=0;i<5;i++){
    (function(j){
        setTimeout(()=>{
            console.log(j);
        },1000);
    })(i);
}
//Prints 0 1 2 3 4