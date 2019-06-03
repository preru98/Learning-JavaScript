let Var1=document.querySelector('#C1');
let Var2=document.querySelector('#C2');
let Var3=document.querySelector('#C3');
let Var4=document.querySelector('#C4');
let Var5=document.querySelector('#C5');
let Var6=document.querySelector('#C6');
let Var7=document.querySelector('#C7');
let Var8=document.querySelector('#C8');
let Var9=document.querySelector('#C9');
var myArray=['C1','C2','C3','C4','C5','C6','C7','C8','C9'];
var myObj={C1:1,C2:1,C3:1,C4:1,C5:1,C6:1,C7:1,C8:1,C9:1};
let V,H,D;
// C1
Var1.addEventListener('click',function()
{
    Var1.textContent='X';
    Var1.style.color='red';
    myObj.C1='X';
    console.log(myObj.C1);
    CheckStatus('Var1');
})
Var1.addEventListener('dblclick',function()
{
    Var1.textContent='O';
    Var1.style.color='blue';

})
// C2
Var2.addEventListener('click',function()
{
    Var2.textContent='X';
    Var2.style.color='red';
    myObj['C2']='X';
    CheckStatus('C2');
})
Var2.addEventListener('dblclick',function()
{
    Var2.textContent='O';
    Var2.style.color='blue';
})
//C3
Var3.addEventListener('click',function()
{
    Var3.textContent='X';
    Var3.style.color='red';
    myObj['C3']='X';
    CheckStatus('C3');
})
Var3.addEventListener('dblclick',function()
{
    Var3.textContent='O';
    Var3.style.color='blue';
})
//C4
Var4.addEventListener('click',function()
{
    Var4.textContent='X';
    Var4.style.color='red';
    myObj['C4']='X';
    CheckStatus('C4');
})
Var4.addEventListener('dblclick',function()
{
    Var4.textContent='O';
    Var4.style.color='blue';
})
//C5
Var5.addEventListener('click',function()
{
    Var5.textContent='X';
    Var5.style.color='red';
    myObj['C5']='X';
    CheckStatus('C5');
})
Var5.addEventListener('dblclick',function()
{
    Var5.textContent='O';
    Var5.style.color='blue';
})
//C6
Var6.addEventListener('click',function()
{
    Var6.textContent='X';
    Var6.style.color='red';
    myObj['C6']='X';
    CheckStatus('C6');
})
Var6.addEventListener('dblclick',function()
{
    Var6.textContent='O';
    Var6.style.color='blue';
})
//C7
Var7.addEventListener('click',function()
{
    Var7.textContent='X';
    Var7.style.color='red';
    myObj['C7']='X';
    CheckStatus('C7');
})
Var7.addEventListener('dblclick',function()
{
    Var7.textContent='O';
    Var7.style.color='blue';
})
//C8
Var8.addEventListener('click',function()
{
    Var8.textContent='X';
    Var8.style.color='red';
    myObj['C8']='X';
    CheckStatus('C8');
})<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TIC-TAC-TOE</title>
</head>
<body>
    <table id ="table1" border="1" cellpadding="10" cellspacing="10">
        <tr>
            <td id='C1'> </td>
            <td id='C2'>b</td>
            <td id='C3'>c</td>
        </tr>
        <tr>
                <td id='C4'>d</td>
                <td id='C5'>e</td>
                <td id='C6'>f</td>
        </tr>
        <tr>
                    <td id='C7'>g</td>
                    <td id='C8'>h</td>
                    <td id='C9'>i</td>
        </tr>
    </table>
    <button id='button1'>Click me! for results</button>
  <script src='tic-tae-toe-simple.js'></script>
  
</body>
</html>
Var8.addEventListener('dblclick',function()
{
    Var8.textContent='O';
    Var8.style.color='blue';
})
//C9
Var9.addEventListener('click',function()
{
    Var9.textContent='X';
    Var9.style.color='red';
    myObj['C9']='X';
    CheckStatus('C9');
})
Var9.addEventListener('dblclick',function()
{
    Var9.textContent='O';
    Var9.style.color='blue';
})
function CheckStatus(Variable)
{
   if(myObj.Variable=='X')
     { let ans=Var1.textContent;
        if((myObj.C2==ans)&&(myObj.C3==ans))
        {
            H=true;
        }
        if((myObj.C4==ans)&&(myObj.C7==ans))
        {
            V=true;
        }
        if((myObj.C5==ans)&&(myObj.C9==ans))
        {
            D=true;
        }
        if((H)&&(V)&&(D))
      alert('WIN win WIN');
      else alert('No');
     }