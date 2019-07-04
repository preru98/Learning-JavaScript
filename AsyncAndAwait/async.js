//async functions
async function myFunction(){
    return 1;
}
myFunction().then(alert);

//async functions, returning promises
async function myPromiseFunction(){
    return promiseVar=new Promise(function(resolve,reject){
        resolve("YEY");
    })
}
myPromiseFunction().then(alert);

async function myPromiseFunctionShort(){
    return Promise.resolve("YEY2");
}
myPromiseFunctionShort().then(alert);

//using await
async function myPromiseFunctionAwait(){
    let promiseVarAwait=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Yeye3");
        },9000);
        
    })
    let waitVar=await promiseVarAwait;
    alert(waitVar);
}
myPromiseFunctionAwait();