'use strict'


function changeHeadline() {
    var loggedInUser = loadFromStorage('loggedInUser')
    var elHeadline = document.querySelector('.user')
    elHeadline.innerText = `${loggedInUser.username}`
}


function clearStorage() {
    localStorage.clear();
}


function checkIfAdmin() {
    var loggedInUser = loadFromStorage('loggedInUser')
    if (loggedInUser.isAdmin) return true
    return false
}