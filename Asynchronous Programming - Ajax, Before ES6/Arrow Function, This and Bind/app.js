
const person = {
    age: 25,

    // tellAge: function () {

    //     // this - Person
    //     console.log(this.age);
    //     console.log(this);
    // }.bind(this)

    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }
    // this - Window Object

}

person.tellAge();