//selectors
const todoInput = document.querySelector('.todoPablo');
const todoButton = document.querySelector('.adbtn');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
document.getElementById('clearall').addEventListener('click', handleClearAll);
//functions

function addTodo(event) {
    event.preventDefault();
    //todo DIV
    console.log(event)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value === ""){
        return null
    }
    //check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.classList.add('complete_btn');
    completedButton.innerHTML = "<i  class='fas fa-check-square'></i>";
    todoDiv.appendChild(completedButton);
    console.log(todoDiv)
    //delete BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
    deleteButton.classList.add('delete_btn');
    todoDiv.appendChild(deleteButton);
    //Append to Actual LIST
    todoList.appendChild(todoDiv);
    console.log(todoList);

    //Clear todo input VALUE
    todoInput.value = ""
}
// console.log(addTodo());

//DELETE & CHECK
function deleteCheck(event) {
    const item = event.target.parentElement;
    console.log(event);
    //DELETE ITEM
    if (item.classList[0] === "delete_btn") {
        let todo = item.parentElement;
        console.log(todo);
        //ANIMATION TRANSITION
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    //COMPLETE ITEM
    if (item.classList[0] === "complete_btn") {
        console.log(item.classList[0])
        const todo = item.parentElement;
        console.log(todo)
        todo.classList.toggle("completedItem")
    }
}

function handleClearAll(event) {
    document.querySelector('.todo-list').innerHTML = '';
    
}

let checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',  () => {
    document.body.classList.toggle('white');
});


console.log(checkbox)