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
var myObj={'C1':1,'C2':1,'C3':1,'C4':1,'C5':1,'C6':1,'C7':1,'C8':1,'C9':1};
let V,H,D;
// C1
Var1.addEventListener('click',function()
{
    Var1.textContent='X';
    Var1.style.color='red';
    myObj['C1']=Var1.textContent;
    console.log( myObj['C1']);
    
})
Var1.addEventListener('dblclick',function()
{
    Var1.textContent='O';
    Var1.style.color='blue';
    myObj['C1']=Var1.textContent;
    console.log( myObj['C1']);

})
// C2
Var2.addEventListener('click',function()
{
    Var2.textContent='X';
    Var2.style.color='red';
    myObj['C2']=Var2.textContent;
    console.log( myObj['C2']);
})
Var2.addEventListener('dblclick',function()
{
    Var2.textContent='O';
    Var2.style.color='blue';
    myObj['C2']=Var2.textContent;
    console.log( myObj['C2']);
})
//C3
Var3.addEventListener('click',function()
{
    Var3.textContent='X';
    Var3.style.color='red';
    myObj['C3']=Var3.textContent;
    console.log( myObj['C3']);
})
Var3.addEventListener('dblclick',function()
{
    Var3.textContent='O';
    Var3.style.color='blue';
    myObj['C3']=Var3.textContent;
    console.log( myObj['C3']);
})
//C4
Var4.addEventListener('click',function()
{
    Var4.textContent='X';
    Var4.style.color='red';
    myObj['C4']=Var4.textContent;
    console.log( myObj['C4']);
})
Var4.addEventListener('dblclick',function()
{
    Var4.textContent='O';
    Var4.style.color='blue';
    myObj['C4']=Var4.textContent;
    console.log( myObj['C4']);
})
//C5
Var5.addEventListener('click',function()
{
    Var5.textContent='X';
    Var5.style.color='red';
    myObj['C5']=Var5.textContent;
    console.log( myObj['C5']);
})
Var5.addEventListener('dblclick',function()
{
    Var5.textContent='O';
    Var5.style.color='blue';
    myObj['C5']=Var5.textContent;
    console.log( myObj['C5']);
})
//C6
Var6.addEventListener('click',function()
{
    Var6.textContent='X';
    Var6.style.color='red';
    myObj['C6']=Var6.textContent;
    console.log( myObj['C6']);
})
Var6.addEventListener('dblclick',function()
{
    Var6.textContent='O';
    Var6.style.color='blue';
    myObj['C6']=Var6.textContent;
    console.log( myObj['C6']);
})
//C7
Var7.addEventListener('click',function()
{
    Var7.textContent='X';
    Var7.style.color='red';
    myObj['C7']=Var7.textContent;
    console.log( myObj['C7']);
})
Var7.addEventListener('dblclick',function()
{
    Var7.textContent='O';
    Var7.style.color='blue';
    myObj['C7']=Var7.textContent;
    console.log( myObj['C7']);
})
//C8
Var8.addEventListener('click',function()
{
    Var8.textContent='X';
    Var8.style.color='red';
    myObj['C8']=Var8.textContent;
    console.log( myObj['C8']);
})
Var8.addEventListener('dblclick',function()
{
    Var8.textContent='O';
    Var8.style.color='blue';
    myObj['C8']=Var8.textContent;
    console.log( myObj['C8']);
})
//C9
Var9.addEventListener('click',function()
{
    Var9.textContent='X';
    Var9.style.color='red';
    myObj['C9']=Var9.textContent;
    console.log( myObj['C9']);
})
Var9.addEventListener('dblclick',function()
{
    Var9.textContent='O';
    Var9.style.color='blue';
    myObj['C9']=Var9.textContent;
    console.log( myObj['C9']);

})
let cartoon=document.querySelector('#button1');
cartoon.addEventListener('click',function()
{
    {
        console.log(myObj);
        checkStatus();}
})
console.log(myObj);

function checkStatus()
{let ans =0;
  for(i=1;i<=9;i++)
  {  if(i==1)
     { ans=Var1.textContent;
      console.log('ans : '+ans);
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
        }}
        if((H)||(V)||(D))
       { alert('WIN win WIN '+ans);
break;}
        else if(i==2)
            {  ans=Var2.textContent;
             console.log('ans : '+ans);
               if((myObj.C1==ans)&&(myObj.C3==ans))
               {
                   H=true;
               }
               if((myObj.C5==ans)&&(myObj.C8==ans))
               {
                 V=true;
               }}
               if((H)||(V))
               {alert('WIN win WIN '+ans);
            break;}
           else if(i==3)
            { ans=Var3.textContent;
             console.log('ans : '+ans);
               if((myObj.C2==ans)&&(myObj.C1==ans))
               {
                   H=true;
               }
               if((myObj.C6==ans)&&(myObj.C9==ans))
               {
                   V=true;
               }
               if((myObj.C5==ans)&&(myObj.C7==ans))
               {
                   D=true;
               }}
               if((H)||(V)||(D))
               {alert('WIN win WIN '+ans);
               break;}
            else if(i==4)
           { ans=Var4.textContent;
      console.log('ans : '+ans);
        if((myObj.C5==ans)&&(myObj.C6==ans))
        {
            H=true;
        }
        if((myObj.C1==ans)&&(myObj.C7==ans))
        {
            V=true;
        }
        }
        if((H)||(V))
        {alert('WIN win WIN '+ans);break;}
        else if(i==5)
            { ans=Var5.textContent;
             console.log('ans : '+ans);
               if((myObj.C4==ans)&&(myObj.C6==ans))
               {
                   H=true;
               }
               if((myObj.C2==ans)&&(myObj.C8==ans))
               {
                   V=true;
               }
               if((myObj.C1=ans)&&(myObj.C9==ans)&&(myObj.C3=ans)&&(myObj.C7==ans))
               {
                   D=true;
               }}
               if((H)||(V)||(D))
              { alert('WIN win WIN '+ans);break;}

               if(i==6)
               { 
                   ans=Var6.textContent;
                console.log('ans : '+ans);
                  if((myObj.C4==ans)&&(myObj.C5==ans))
                  {
                      H=true;
                  }
                  if((myObj.C3==ans)&&(myObj.C9==ans))
                  {
                      V=true;
                  }
                  }
                  if((H)||(V))
                 { alert('WIN win WIN '+ans);break;}
                  else if(i==7)
     { 
          ans=Var7.textContent;
      console.log('ans : '+ans);
        if((myObj.C8==ans)&&(myObj.C9==ans))
        {
            H=true;
        }
        if((myObj.C4==ans)&&(myObj.C1==ans))
        {
            V=true;
        }
        if((myObj.C5==ans)&&(myObj.C3==ans))
        {
            D=true;
        }}
        if((H)||(V)||(D))
        {alert('WIN win WIN '+ans);break;}

        else if(i==8)
        { 
            ans=Var8.textContent;
         console.log('ans : '+ans);
           if((myObj.C7==ans)&&(myObj.C9==ans))
           {
               H=true;
           }
           if((myObj.C2==ans)&&(myObj.C5==ans))
           {
               V=true;
           }
           }
           if((H)||(V))
         { alert('WIN win WIN '+ans);break;}
         
           else if(i==9)
     {  ans=Var9.textContent;
      console.log('ans : '+ans);
        if((myObj.C7==ans)&&(myObj.C8==ans))
        {
            H=true;
        }
        if((myObj.C3==ans)&&(myObj.C6==ans))
        {
            V=true;
        }
        if((myObj.C5==ans)&&(myObj.C1==ans))
        {
            D=true;
        }}
        if((H)||(V)||(D))
       { alert('WIN win WIN '+ans);break;}
  } 
}

