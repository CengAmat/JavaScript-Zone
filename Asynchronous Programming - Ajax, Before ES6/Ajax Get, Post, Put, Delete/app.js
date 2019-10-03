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
                callback("An Error Occured..", null);
            }
        }

        this.xhr.send();
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums/50", function (err, response) {
    if (err === null) {
        console.log(response);
    }
    else {
        // Error
        console.log(err);
    }
});
