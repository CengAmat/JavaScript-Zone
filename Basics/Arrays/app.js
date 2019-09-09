let value;

const numbers = [43, 56, 33, 23, 44, 35, 5];

// const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7);

const langs = ["Python", "Java", "C++", "Javascript"];

const a = ["Merhaba", 22, null, undefined, 3.14];

// Length
value = numbers.length;

// Index
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];

// Change the value of Index
numbers[2] = 1000;

value = numbers;

// Index Of

value = numbers.indexOf(1000);

// Add value to end of the array

numbers.push(2000);

// Add to begining

numbers.unshift(3000);

value = numbers;

// Delete from last

numbers.pop();

value = numbers;

// Delete from first
numbers.shift();

value = numbers;


// Delete part
numbers.splice(0, 3);

value = numbers;

// Reverse

numbers.reverse();

value = numbers;

// Sort

value = numbers.sort(); //İlk karaktere göre

value = numbers.sort(function (x, y) {
    //Küçükten büyüğe
    return x - y;
});

value = numbers.sort(function (x, y) {
    //Büyükten küçüğe
    return y - x;
});

console.log(value);