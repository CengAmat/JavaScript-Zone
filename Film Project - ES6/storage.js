class Storage {
    static addFilmToStorage(newFilm) {
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    }

    static getFilmsFromStorage() {
        let films;

        if (localStorage.getItem("films") === null) {
            films = [];
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }

    static deleteFilmFromStorage(filmTitle) {
        let films = this.getFilmsFromStorage();
        // Splice
        films.forEach(function (film, index) {
            if (film.title === filmTitle) {
                films.splice(index, 1);
            }
        });

        localStorage.setItem("films", JSON.stringify(films));
    }

    static clearAllFilmsFromStorage() {
        localStorage.removeItem("films");
    }

    static checkExistance(newFilm) {
        const col = document.getElementsByTagName("tr");

        for (var i = 1; i < col.length; i++) {
            if (newFilm.title.toLowerCase == col[i].children[1].textContent.toLowerCase) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
