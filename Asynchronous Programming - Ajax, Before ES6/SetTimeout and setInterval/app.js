//  Set Timeout

// setTimeout(function () {
//     console.log("Hello");
// }, 2000);


// Set Interval
let i = 0;
let value = setInterval(function () {
    i++;
    console.log("Hello : ", i)
}, 1000);

document.getElementById("btn").addEventListener("click", function () {
    clearInterval(value);
})

// Clear Interval
