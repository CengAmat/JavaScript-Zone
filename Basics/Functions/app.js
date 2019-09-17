// Function

// function hello(name, age) {
//     if (typeof name === "undefined") name = "No Info";
//     if (typeof age === "undefined") age = "No Info";
//     console.log(`Hello Name : ${name} Age : ${age}`);
// }

// function hello(name = "No Info", age = "No Info") {
//     console.log(`Hello Name : ${name} Age : ${age}`);
// }

// hello("Ahmet", 30);
// hello("Peter", 25);
// hello(26);

// function square(x) {
//     return x * x;
// }

// function cube(x) {
//     return x * x * x;
// }

// let a = cube(square(12));

// console.log(a);

// function hello() {
//     return "Hello";
// }

// console.log(hello());

// Function Expression

// const hello = function (name) {
//     console.log("Hello " + name);
// };

// hello("Ahmet");


// Immediately Invoked Function Expression (IIFE)


// (function (name) {
//     console.log("Merhaba: " + name);
// })("Ahmet");

const database = {
    host: "localhost",
    add: function () {
        console.log("Added");
    },
    get: function () {
        console.log("Selected");
    },
    update: function (id) {
        console.log(`Id: ${id} Updated`);
    },
    delete: function (id) {
        console.log(`Id: ${id} Deleted`);
    }
}

console.log(database.host);

database.add();
database.delete(10);