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