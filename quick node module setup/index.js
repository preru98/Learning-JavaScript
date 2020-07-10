var rect = require('./rectangle')

calculate = (l,b)=>{
    rect.ret(l,b, (err, rectangle)=>{
        if(err){
            console.log(err.message)
        }
        else{
            console.log(rectangle.area())
            console.log(rectangle.perimeter())
        }
    })
};

calculate(0, 9)
calculate(10, 19)
