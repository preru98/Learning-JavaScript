// store=[2,4,6,7,8];
// document.writeln(store);
// var storey;
// let buttonVar=document.querySelector('#sqr');

// buttonVar.addEventListener('click',()=>{storey=store.map(power2)});

// power2=(ele)=>ele*ele;

// console.log(storey);

store=[2,4,6,7,8];
document.writeln(store);
names=[
    {
        first:'Prerna',
        middle:'',
        last:'Sharma'
    },
    {
        first:'Reynold',
        middle:'K',
        last:'Jackson'
    },
    {
        first:'Sanjana',
        middle:'',
        last:'Sharma'
    }
]
console.log(names);
let storey;
let buttonVar=document.querySelector('#sqr');
let buttonName=document.querySelector('#join');

buttonVar.addEventListener('click',function(){
    storey=store.map(power2);
    console.log(storey);
});

buttonName.addEventListener('click',function(){
    fullNames=names.map(joinNames);
    console.log(fullNames);
});
power2=function(ele){
    return ele*ele;
}
joinNames=function(name){
    return [name.middle,name.first,name.last].join(' ');
}
