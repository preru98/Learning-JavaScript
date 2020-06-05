let buttonVar=document.querySelector('#test-button');

//Anonymous function (no-arrow)
buttonVar.addEventListener('click',function(){
    noArrow();
    arrow();
    shortArrow();
});

//Anonymous function (arrow)
// buttonVar.addEventListener('click',()=>{
//     noArrow();
//     arrow();
//     shortArrow();
// });

var noArrow=function (){
    alert("noArrow");
}

var arrow=()=>{
    alert("Arrow");
}

//It gets shorter! 
//If the function has only one statement, 
//and the statement returns a value, you can remove the 
//brackets and return keyword:

var shortArrow=()=>alert("Short Arrow");




