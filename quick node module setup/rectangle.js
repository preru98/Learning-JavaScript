module.exports.ret=(l, b, callback)=>{
    if(l<=0 || b<=0){
        setTimeout(()=>
            callback(new Error("Dimensions should be >= 0"),null),
            2000
        );
    }
    else{
        setTimeout(()=>
            callback(null,{
                area :() => (l*b), 
                perimeter :() => 2*(l+b)
            }),
            2000
        );
    }
}