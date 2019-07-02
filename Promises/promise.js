let myPromiseVar=new Promise(function(resolve,reject){

    //completing my promise
    let isPromiseComplete=true;

    if(isPromiseComplete){
        resolve("Yey!  I am free now :)");
    }
    else{
        reject("OW! I am so sorry :(");
    }
});

myPromiseVar.then(function(getResolve){
    console.log(getResolve);
}).catch(function(getReject){
    console.log(getReject);
})
