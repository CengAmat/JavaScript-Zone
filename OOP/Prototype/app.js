// const object = new Object(); // Object Literal
// const object2 = new Object();
// object.name = "Amat";
// console.log(object);

function Employee(name, age) {
    this.name = name;
    this.age = age;
    // this.showInfos = function () {
    //     console.log("Name: " + this.name + "Age: " + this.age);
    // }
    // this.toString = function () {
    //     console.log("This is Employee Object..");
    // }
}

Employee.prototype.showInfos = function () {
    console.log("This is Employee Object..");
}

const emp1 = new Employee("Amat", 30);
const emp2 = new Employee("Peter", 25);
emp2.showInfos();
console.log(emp1);
console.log(emp2);