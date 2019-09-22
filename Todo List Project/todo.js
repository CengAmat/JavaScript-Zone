// Select all elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { //All eventListeners
    form.addEventListener("submit", addTodo);
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();

    addTodoToUI(newTodo);


    e.preventDefault();
}

function addTodoToUI(newTodo) { // Change string to listItem and add UI
    /*
    <li class="list-group-item d-flex justify-content-between">
        Todo 1
    <a href="#" class="delete-item">
            <i class="fa fa-remove"></i>
        </a>

    </li>
    */

    // Create ListItem
    const listItem = document.createElement("li");
    // Create Link
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";

    // Add Text Note
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // Add ListItem to TodoList

    todoList.appendChild(listItem);
    todoInput.value = ""
        ;
}