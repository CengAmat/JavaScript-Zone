function Translate(word, language) {
    this.apikey = "trnsl.1.1.20191009T195202Z.b9fc2f323bde1e52.afe5559fc533cd77d1cd43747b9e9061a73b5953";
    this.word = word;
    this.language = language;
    // HXR Object
    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function (callback) {
    // Ajax Operations
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`
    this.xhr.open("GET", endpoint);
    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null, text);
        }
        else {
            callback("Error occured..", null);
        }
    }
    this.xhr.send();
}

Translate.prototype.changeParameters = function (newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}