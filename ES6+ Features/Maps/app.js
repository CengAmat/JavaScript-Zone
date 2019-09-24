// Maps - Key - Value

// let myMap = new Map();
// console.log(myMap);

// const key1 = "Amat";
// const key2 = { a: 10, b: 20 };
// const key3 = () => 2;

// // Set
// myMap.set(key1, "String");
// myMap.set(key2, "Object Literal");
// myMap.set(key3, "Function");

// Get
// console.log(myMap.get(key3));
// console.log(myMap);

// Map Size

// console.log(myMap.size);

// const cities = new Map();
// cities.set("Ankara", 5);
// cities.set("Istanbul", 15);
// cities.set("Izmır", 4);

// For Each

// cities.forEach(function (value, key) {
//     console.log(key, value);
// })

// For Of

// for (let [key, value] of cities) { //Destructing
//     console.log(key, value);
// }

// Map Keys
// for (let key of cities.keys()) {
//     console.log(key);
// }

// Map Values

// for (let value of cities.values()) {
//     console.log(value);
// }

// Array to Map
// const array = [["key1", "value1"], ["key2", "value2"]];

// const lastMap = new Map(array);

// console.log(lastMap);

// Maps to Array

const cities = new Map();
cities.set("Ankara", 5);
cities.set("Istanbul", 15);
cities.set("Izmır", 4);

const array = Array.from(cities);
// [["Ankara",5]["Istanbul",15]["Izmir",4]]
console.log(array);

