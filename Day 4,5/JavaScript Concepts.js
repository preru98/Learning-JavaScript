//COMMENT ANY ONE
//************************************************************
//Altering text through DOM
let ch=0;
let hideVar=document.querySelector('#button1');
let hideText=document.querySelector('#Para1')
//hideText.textContent=' ';
hideVar.addEventListener('click',function(){
    if(ch%2==0)
   hideText.textContent=' ';
   else
   hideText.textContent=' Hello! I am good text.Please dont press button IT WILL HIDE ME- F O R E V E R ';
    ch++;

});

//**********************************************************
//Self Hiding
let ch=0;
let hideVar=document.querySelector('#button1');
let buttonTwo=document.querySelector('#button2');
//let hideText=document.querySelector('#Para1')
//hideText.textContent=' ';
buttonTwo.addEventListener('click',function(){
    if(ch%2==0)
   hideVar.style.visibility='hidden';
   else
   hideVar.style.visibility='visible';
    ch++;

});
hideVar.addEventListener('click',function(){
   hideVar.style.visibility='hidden';

});



