let addButton = document.getElementById('add-item');
addButton.addEventListener('click',getItemFromUser);

function getItemFromUser(){
    let newItem = document.getElementById('item-value').value;
    if(newItem==""){
        alert("ToDo Item is empty!")
        return;
    }
    appendToList(newItem);
}

function appendToList(newItem){
    var newListObject = document.createElement('li');
    newListObject.innerText = newItem;
    let todoList =  document.getElementById('todo-list');
    todoList.appendChild(newListObject);
    document.getElementById('item-value').value="";
}

