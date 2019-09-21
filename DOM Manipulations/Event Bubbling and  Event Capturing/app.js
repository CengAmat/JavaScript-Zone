// Event Bubbling

// document.querySelector(".container").addEventListener("click", function () {
//     console.log("Div Container");
// });

// document.querySelector(".card.row").addEventListener("click", function () {
//     console.log("Card Row");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click", function () {
//     console.log("Card Body");
// });

// Event Capturing or Delegation

const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click", run);

function run(e) {
    if (e.target.className === "fa fa-remove") {
        console.log("Delete");
    }
    if (e.target.id === "filter") {
        console.log("Filter");
    }
    if (e.target.id === "clear-todos") {
        console.log("Clear all tasks");
    }
    // console.log(e.target);
}