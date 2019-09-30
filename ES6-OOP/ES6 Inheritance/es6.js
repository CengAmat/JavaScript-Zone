// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.showInfos = function () {
//     console.log("Name: " + this.name + " Age: " + this.age);
// }

// function Employee(name, age, salary) {
//     // this.name = name;
//     // this.age = age;
//     Person.call(this, name, age);
//     this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function () {
//     console.log("Employee");
// }

// Employee.prototype.showInfos = function () {
//     console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
// }

// const emp = new Employee("Amat", 30, 5000);

class Person { // Superclass, BaseClass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfos() {
        console.log("Name: " + this.name + " Age: " + this.age);
    }

}

class Employee extends Person { // DerivedClass, Subclass, ChildClass
    constructor(name, age, salary) {
        // this.name = name;
        // this.age = age;
        super(name, age); // Üst sınıfın constructorını kullanmak istiyoruz demektir. Üst satırlara eşit.
        // super.showInfos();
        this.salary = salary;
    }
    showInfos() { // Overriding
        console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
    }
    toString() { // Overriding
        console.log("Employee..");
    }
    raiseSalary(amount) { // Ekstra
        this.salary += amount;

    }
}

const emp = new Employee("Amat", 30, 5000);
console.log(emp);
emp.raiseSalary(1000);
emp.showInfos();
emp.toString();