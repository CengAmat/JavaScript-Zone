class Request {

    async get(url) {
        const response = await fetch(url); //Response Object
        const data = await response.json(); // Json Object
        return data;
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); // Response Object
        const data2 = await response.json(); // Json Object
        return data2;
    }

    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data2 = await response.json();
        return data2;
    }

    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE'
        }); // Response Object
        return "Deleting Process Succesfull...";
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