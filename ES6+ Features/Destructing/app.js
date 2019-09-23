// let number1, number2;

// arr = [100, 200, 300, 400];

// number1 = arr[0];
// number2 = arr[1];


// Destructing

// [number1, number2] = arr;

// const [number1, number2] = arr;

// console.log(number1, number2);

// Object Destructing

// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50
// };


// const { a, c, e } = numbers;
// const { a: number1, c: number2, e: number3 } = numbers;

// console.log(number1, number2, number3);



// Function Destructing

// const getLangs = () => ["Python", "Java", "C++"];

// const [lang1, lang2, lang3] = getLangs();
// console.log(lang1, lang2, lang3);


// Object

const person = {
    name: "Amat",
    year: 1989,
    salary: 5000,
    showInfos: () => console.log("Infos...")
}

const { name: isim, year: yil, salary: maas, showInfos: bilgileriGoster } = person;

console.log(isim, yil, maas);

bilgileriGoster();