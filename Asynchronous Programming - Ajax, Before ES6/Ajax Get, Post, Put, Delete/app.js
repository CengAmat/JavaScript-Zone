// Ajax, callback, http requests

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    // Get Request
    get(url, callback) {
        this.xhr.open("GET", url); // Connection open

        // this.xhr.onload = function () {
        //     console.log(this);
        //     if (this.xhr.status === 200) {
        //         console.log(this.xhr.responseText)
        //     }
        // }.bind(this);

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                // Exception
                callback("Get Request : An Error Occured..", null);
            }
        }

        this.xhr.send();
    }
    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON Data 
        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                // Success
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Post Request : Error occured...", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Put Request : Error occured...", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums/50", function (err, response) {
//     if (err === null) {
//         // Success
//         console.log(response);
//     }
//     else {
//         // Error
//         console.log(err);
//     }
// });

// request.post("https://jsonplaceholder.typicode.com/albums", { userid: 2, title: "Thriller" }, function (err, album) {
//     if (err === null) {
//         console.log(album);
//     }
//     else {
//         console.log(err);
//     }
// });

request.put("https://jsonplaceholder.typicode.com/albums/10", { userid: 143, title: "Queens" }, function (err, album) {
    if (err === null) {
        console.log(album);
    }
    else {
        console.log(err);
    }
});