// Sets

const myset = new Set();

myset.add(100);
myset.add(3, 14);
myset.add("Amat");
myset.add(true);
myset.add([1, 2, 3]);
myset.add({ a: 1, b: 2 });


const myset2 = new Set([100, 3, 14, "Amat"]);
// console.log(myset);
// console.log(myset2);

// Size
// console.log(myset.size);

// Delete Method
// myset.delete("Amat");

// console.log(myset);
// console.log(myset.size);

// Has Method

// console.log(myset.has("Amat"));
// console.log(myset.has(3, 14));
// console.log(myset.has(2000));
// console.log(myset.has([1, 2, 3]));

// For Each

// myset.forEach(function (value) {
//     console.log(value);
// })


// For Of

// for (let value of myset) {
//     console.log(value);
// }

// Set to Array

const array = Array.from(myset);

console.log(array);
