class Request {

    get(url) { // Get Request
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }
}

const request = new Request();
let albums;

request.get("http://jsonplaceholder.typicode.com/albums")
    .then(data => {
        albums = data;
        console.log(albums);
    })
    .catch(err => console.err(err));

    // console.log(albums); // Asenkron