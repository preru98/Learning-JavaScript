//The constructor syntax for Promise
let myPromise=new Promise(function(resolve,reject){
    //executer the producing code

    setTimeout(function(){
        resolve("oopseee");

    },10000)
});
myPromise.then(alert);

//Using promise variable
myPromise.then(
    function(getResolve){    // null as first argument , if interested in errors only
        console.log(getResolve);
    },
    function(getError){
    console.log(getError);
    }
);

myPromise.catch(
    function(getError){
        console.log(getError);
    }
).finally(
    function(){
        console.log('Finally section executed');
    })