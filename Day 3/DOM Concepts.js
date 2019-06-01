//alert('Hey');
let changeMyStyle=document.querySelector('#Head1');
randomColor();
setInterval("randomColor()",200);
function randomColor()
{
    let hexCode='0123456789ABCDEF';
    let Ccolor='#';
    for(let i=0;i<6;i++)
    {
        Ccolor+=hexCode[Math.floor(Math.random()*16)];
    }
    //return color;
    changeMyStyle.style.color=Ccolor;
}
let changePara=document.querySelector('#Para1');
changePara.textContent='Hey! Look I am changed now.We will be learning document object model today.';
changePara.innerHTML='<strong>Hey! Look I am changed now.We will be learning document object model today.</strong>';
changePara.setAttribute('align','left');
let Heading2=document.querySelector('#Head2');
Heading2.addEventListener('mouseover',function(){
    Heading2.textContent='Look I am under mouse effect';
    Heading2.style.color='red';
});Heading2.addEventListener('mouseout',function(){
    Heading2.textContent='Second Heading';
    Heading2.style.color='black';
});



