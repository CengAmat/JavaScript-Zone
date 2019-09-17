// Get Element by Id

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");


// Get Element by Class

element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");


// Get Element by Tag

element = document.getElementsByTagName("div");


// Query Selector - Css Selector - Return one element

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");

element = document.querySelector("li");
element = document.querySelector("div");


// QuerySelectorAll - Return All elements

element = document.querySelectorAll(".list-group-item"); // Node List

element.forEach(function (el) {
    console.log(el);
});



// console.log(element);