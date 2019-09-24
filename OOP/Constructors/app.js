// console.log(window); //Global Scope

// const emp1 = { // Object Literal
//     name: "Amat",
//     age: 30,
//     showInfos: function () { console.log("Infos..."); }
// }

// const emp2 = {
//     name: "Peter",
//     age: 28
// }
// emp1.salary = 4000;
// emp1.showInfos();
// console.log(emp1)


function Employee(name, age, salary) { // Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.showInfos = function () {
        console.log(this.name, this.age, this.salary);
    }

}

const emp1 = new Employee("Amat", 30, 5000);
const emp2 = new Employee("Peter", 28, 4000);

emp1.showInfos();
emp2.showInfos();

