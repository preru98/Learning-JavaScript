const toDoList = function(initialTasks){
    const addTasks = function (newTask){
        initialTasks = initialTasks+','+newTask;
        return initialTasks;
    }
    return addTasks;
}

console.dir(toDoList('sayHello,nod,sayBye'));
const routine = toDoList('sayHello,nod,sayBye');
console.dir(toDoList('sayHello,nod,sayBye'));
const sendGifts = routine('sendFlowers');
console.log(sendGifts);
const appreciate = routine('sayThanks');
console.log(appreciate);