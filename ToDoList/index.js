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
    let newListObject = document.createElement('li');
    newListObject.innerText = newItem;
    
    let crossButton =  document.createElement('button');
    crossButton.innerText="x";
    
    let moveUp =  document.createElement('button');
    moveUp.innerText="^";

    let moveDown =  document.createElement('button');
    moveDown.innerText="V";
    
    newListObject.appendChild(crossButton);
    newListObject.appendChild(moveUp);
    newListObject.appendChild(moveDown);
    
    let todoList =  document.getElementById('todo-list');
    todoList.appendChild(newListObject);
    
    document.getElementById('item-value').value="";
    
    crossButton.addEventListener('click',(event) => {
        event.target.parentElement.remove();
    });

    moveUp.addEventListener('click',(event) => {
        event.target.parentElement.parentElement.insertBefore(newListObject, newListObject.previousElementSibling);
    });
    
    moveDown.addEventListener('click',(event) => {
        event.target.parentElement.parentElement.insertBefore(newListObject.nextElementSibling, newListObject);
    });
}

