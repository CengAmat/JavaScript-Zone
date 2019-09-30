const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// Initialize UI Object
const ui = new UI();

// Create Storage Object
const storage = new Storage();

// Load all events
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
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