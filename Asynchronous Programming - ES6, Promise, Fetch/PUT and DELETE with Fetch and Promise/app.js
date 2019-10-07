class Request {

    get(url) { // Get Request
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE'
            }).then(response => resolve("Delete Processing Succesfull.."))
                .catch(err => reject(err));
        });
    }
}


const request = new Request();


// request.get("http://jsonplaceholder.typicode.com/albums")
//     .then(data => {
//         albums = data;
//         console.log(albums);
//     })
//     .catch(err => console.err(err));

// console.log(albums); // Asenkron

// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Thriller" })
//     .then(newAlbum => console.log(newAlbum))
//     .catch(err => console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 10, title: "Tarkan" })
//     .then(album => console.log(album))
//     .catch(err => cons.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
    .then(message => console.log(message))
    .catch(err => console.log(err));