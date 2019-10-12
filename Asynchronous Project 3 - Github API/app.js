// Select Elements
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSeacrhed);
}

function getData(e) {
    let username = nameInput.value.trim();
    if (username === "") {
        alert("Please Enter Valid Name...");
    }
    else {
        github.getGithubData(username)
            .then(response => {
                if (response.user.message === "Not Found") {
                    ui.showError("User not Found..");
                }
                else {
                    ui.showUserInfo(response.user);
                }
            })
            .catch(err => ui.showError(err));

    }

    ui.clerInput();
    e.preventDefault();
}

function clearAllSearched() {
    // Clear all searched
}

function getAllSeacrhed() {
    // Get all searched from storge and add UI
}