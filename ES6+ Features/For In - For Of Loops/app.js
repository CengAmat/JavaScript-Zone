const person = {
    name: "Ahmet Zurnacı",
    age: 30,
    salary: 5000
};

const langs = ["Pyhon", "Java", "C++", "Php"];

const name = "Ahmet";

// For In
// Object
// for (let prop in person) {
//     console.log(prop, person[prop]);
// }

// Array
// for (let index in langs) {
//     console.log(index, langs[index]);
// }

// String

// for (let index in name) {
//     console.log(index, name[index]);
// }


// For Of
// Object

// for (let value of person) {
//     console.log(value);
// }

// Array

// for (let value of langs) {
//     console.log(value);
// }

// String

for (let character of name) {
    console.log(character)
}