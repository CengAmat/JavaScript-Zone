const filterInput = document.getElementById("filter");

const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", submitForm);

function submitForm(e) {
  console.log("Submit Event");

  e.preventDefault();
}

filterInput.addEventListener("focus", function (e) {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.target.placeholder);
  console.log(e.target.className);
  // console.log("Naber");
});

// filterInput.onfocus = function () {
//     console.log("Naber");
// }

// console.log(filterInput);

const person = {
  name: "Amat",
};

const obj1 = {
  number1: 10,
  number2: 20,
};

function come(callback) {
  const name = this.name;
  setTimeout(function (name) {
    console.log(name + " Came");
    callback();
  }, 3000);
}

function go() {
  setTimeout(function () {
    console.log("Went");
  }, 2000);
}

come.call(person, go);
