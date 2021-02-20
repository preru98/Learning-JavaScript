//Advantage of IIFE
//User and declare variables inside the IIFE, without polluting the global scope

(function(){
    var user = "Pi Sharma";
    console.log("Hello," + user + " This is IIFE sample Function!");
})();

//console.log(user);  //Error

//This variable "user" is used and defined in IIFE, hence it is unavailable as global variable
// and thus not polluting the global scope of application.