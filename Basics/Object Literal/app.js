let value;

const programmer = {
    name: "Ahmet Zurnaci",
    age: 30,
    email: "cengamat@gmail.com",
    langs: ["Python", "Java", "Javascript"],

    adress: {
        city: "London",
        street: "Victoria"
    },

    work: function () {
        console.log("Programmer is working...");
    }
}

value = programmer;

value = programmer.email; // Common use
value = programmer["email"];

value = programmer.langs;

value = programmer.adress.city;

programmer.work();

const programmers = [
    { name: "Ahmet Zurnaci", age: 30 },
    { name: "Peter Parker", age: 28 }
]

value = programmers[0].name;

console.log(value);