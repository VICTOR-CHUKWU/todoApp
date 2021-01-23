
// write a function to add todo
let AddTodo = (value) =>{
    //retrieve ul
    let ul = document.querySelector('ul');

    // create a list element
    let li = document.createElement('li');

    //to create child elements for li
    li.innerHTML = `<span class='todoitem'>${value}</span>
    <button class='checked'><i class='fas fa-check-square'></i></button>
    <button class='delete'><i class='fas fa-trash'></i></button>`;

    //add class to d li element
    li.classList.add('todo-list-item');

    ul.appendChild(li);
}

// event listener function
let formSubmit = (e) =>{
    //to avoid browser to not submit by default behaviour
    e.preventDefault();
    //retrieve input from text input field

    let input = document.querySelector('input')
    // check if there is a value in an input field and add the value to todo list
    if(input.value != ''){
        AddTodo(input.value);
        input.value = '';
    }

};
document.querySelector('form').addEventListener('submit', formSubmit);


//write the checke function
function checke(e) {
    //im stuck here
    let item = e.target.parentNode;
    
    if(item.style.textDecoration == 'line-through'){
        item.style.textDecoration = 'none';
    }else {
        item.style.textDecoration = 'line-through';
    }
};
// console.log(checke())
let deleted = (e) =>{

}


//write a delete or check function to handle the click event
let checkedOrDelete = (e) =>{
    //since the buttons have names we checke through their names
    if(e.target.name === 'checked'){
        //pass the check function
        checke();
    }

    if(e.target.name === 'delete'){
        //pass a delete function
        deleted();
    }
    // console.log(target.name)

};






//add an event listener to check if its delete or check button
document.querySelector('ul').addEventListener('click', checkedOrDelete);




