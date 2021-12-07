'use strict'

function onInit() {
    changeHeadline()
}


function onLogOut() {
    clearStorage()
    window.location.href = "index.html";
}

function onCheckIfAdmin() {
    if (checkIfAdmin()) {
        window.location.href = "admin.html"
    } else {
        clearStorage()
        window.location.href = "index.html"
    }
}


