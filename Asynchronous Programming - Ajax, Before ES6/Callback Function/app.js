// Callback Functions

// const langs = ["Python", "Java", "C++"];

// langs.forEach(function (lang) {
//     console.log(lang);
// });

// document.getElementById("btn").addEventListener("click", function () {
//     console.log("Click");
// })

// function process1(Callback) {
//     setTimeout(function () {
//         console.log("Process 1");
//         Callback();
//     }, 3000)
// }

// function process2() {
//     setTimeout(function () {
//         console.log("Process 2");
//     }, 2000);
// }

// process1(process2);

const langs = ["Python", "Java", "C++"];

function addLang(lang, Callback) {
    setTimeout(function () {
        langs.push(lang);
        console.log("Added..");
        Callback();
    }, 2000);
}

function getAllLangs() {
    setTimeout(function () {
        langs.forEach(function (lang) {
            console.log(lang);
        });
    }, 1000)
}
addLang("Javascript", getAllLangs);
//Asynchronous State