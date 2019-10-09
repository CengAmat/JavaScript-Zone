// async function test(data) {
//     // Promise - return new Promise
//     // return data;

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("This is a value");
//         }, 5000);
//     });

//     let response = await promise; // wait 5 sec

//     return response;
// }

// test("Hello").then(response => console.log(response));



// async function testData(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof data === "string") {
//                 resolve(data);

//             }
//             else {
//                 reject(new Error("Please enter a string value"));
//             }

//         }, 5000);
//     });

//     const response = await promise;
//     return response;
// }

// testData(10)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

async function getCurrency(url) {
    const response = await fetch(url); // Response Object
    console.log(response);

    const data = await response.json(); // Json Object

    return data;
}

getCurrency("https://api.exchangeratesapi.io/latest")
    .then(response => console.log(response))
    .catch(err => console.log(err));