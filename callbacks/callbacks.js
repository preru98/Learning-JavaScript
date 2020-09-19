getData=(callback)=>{
    setTimeout(()=>{
        callback (['JavaScript', 'Python', 'Java', 'C++', 'C']);
    }, 2000)
    console.log("After Timeout")
}
displayData=()=>{
    getData((data)=>{
        data.forEach(element => {
            console.log(element)
        });
    })  
}
displayData();