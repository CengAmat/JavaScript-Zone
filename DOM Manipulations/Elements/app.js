// Get Element By ID

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Get Element By Class

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");

// Get Element By Tag

element = document.getElementsByTagName("div");


// Query Selector - CSS Selector - Return one element

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");
element = document.querySelector(".list-group-item");

element = document.querySelector("li");
element = document.querySelector("div");

// Query Selector - Return all elements

element = document.querySelectorAll(".list-group-item");

element.forEach(function (el) {
    console.log(el);
})

// console.log(element);