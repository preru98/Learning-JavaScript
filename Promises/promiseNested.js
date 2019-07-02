// function firstFunction(){
//     return new Promise(function(resolve,reject){
//         resolve("First Function called");
//     })
// }

// function secondFunction(){
//     return new Promise(function(resolve,reject){
//         resolve("Second Function called");
//     })
// }

// function thirdFunction(){
//     return new Promise(function(resolve,reject){
//         resolve("Third Function called");
//     })
// }

let firstFunction= function(){
        return new Promise(function(resolve,reject){
            resolve("First Function called");
        })
    };
    
    let secondFunction= function(p){
        return new Promise(function(resolve,reject){
            resolve("Second Function called");
        })
    };
    
    let thirdFunction= function(p){
        return new Promise(function(resolve,reject){
            resolve("Third Function called");
        })
    };
    firstFunction().then(function(result){
        return secondFunction(result);
    }).then(function(result){
        return thirdFunction(result);
    }).then(function(result){
        console.log("finished");
    })
    
