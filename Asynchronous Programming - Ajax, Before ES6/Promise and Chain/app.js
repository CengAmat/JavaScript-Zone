// function getData(data) { // Returns Promise Object
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (typeof data === "string") {
//                 // Positive
//                 resolve(data);
//             }
//             else {
//                 // Negative
//                 reject(new Error("Please enter string value..."));

//             }
//         }, 5000)
//     })
// }

// getData("Hello").then(function (response) {
//     console.log(response);
// })

// getData(24)
//     .then(response => console.log("Incoming : " + response))
//     .catch(err => console.error(err));

function addTwo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number === "number") {
                resolve(number + 2);
            }
            else {
                reject(new Error("Please enter number..."));
            }
        }, 3000)
    })
}

addTwo(10)
    .then(response => {
        console.log(response);
        return response + 2;
    })
    .then(response2 => console.log(response2))
    .catch(err => console.error(err));
    // Just 1 "catch" and more than one "then" - Promise Chain