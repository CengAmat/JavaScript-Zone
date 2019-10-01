const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// Load all events
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title == "" || director == "" || url == "") {
        UI.displayMessages("Fill empty fields..", "danger");
    }
    else {
        // New Film
        const newFilm = new Film(title, director, url);
        if (Storage.checkExistance(newFilm) === true) {
            UI.displayMessages("Already added..", "danger");
        }
        else {
            UI.addFilmToUI(newFilm); // Add Film to UI
            Storage.addFilmToStorage(newFilm); // Add Film to Storage
            UI.displayMessages("Film Added Succesfully", "success")
        }

    }
    UI.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Deleted Succesfully", "success");
    }
}

function clearAllFilms() {
    if (confirm("Are you sure you want to delete all?")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
        UI.displayMessages("Deleted Succesfully", "success");
    }
}