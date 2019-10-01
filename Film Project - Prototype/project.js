const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// Initialize UI Object
const ui = new UI();

// Create Storage Object
const storage = new Storage();

// Load all events
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title == "" || director == "" || url == "") {
        ui.displayMessages("Fill empty fields..", "danger");
    }
    else {
        // New Film
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm); // Add Film to UI
        storage.addFilmToStorage(newFilm); // Add Film to Storage
        ui.displayMessages("Film Added Succesfully", "success")
    }
    ui.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Deleted Succesfully", "success");
    }
}

function clearAllFilms() {
    if (confirm("Are you sure you want to delete all?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
}