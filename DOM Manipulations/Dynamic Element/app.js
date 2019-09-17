// Create New Element

//<a id="clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1];

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "https://www.google.com.tr";
// newLink.target = "_blank";

// Text Content

// newLink.textContent = "Go another page"; // Unsafe

// cardbody.textContent = "dadsaddadad"

// Text Node

// const text = document.createTextNode("Whats'up?");
// cardbody.appendChild(text);
// console.log(cardbody);

// newLink.appendChild(document.createTextNode("Go next page"));

// cardbody.appendChild(newLink);

//console.log(cardbody);
// console.log(newLink);

//-------------------------------------------------------------------------------------------------------

//Delete Dynamic Element

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item")


// Remove Method

// todos[1].remove();


// Remove Child

// todoList.removeChild(todoList.lastElementChild);

// todoList.removeChild(todos[3]);

console.log(todos);
console.log(todoList);
