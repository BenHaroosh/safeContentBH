'use strict'


function onInit() {
    renderTable()
}



function renderTable() {
    const users = getUsersForDisplay()
    // console.log(users);


    const strHTMLS = users.map(function (user) {
        var strHTML = '</tr>'
        strHTML += `<td> ${user.username}</td> 
                        <td> ${user.password}</td>
                        <td> ${new Date(user.lastLoginTime)}</td>
                        <td> ${user.isAdmin}</td>`
        strHTML += `</tr>`
        return strHTML
    })
    document.querySelector('.container').innerHTML = strHTMLS.join('')
}


function onSetSort(sortBy) {
    setSort(sortBy)
    renderTable()
}

function onGoBack() {
    window.location.href = 'secret.html'
}


function onSetView(viewBy) {
    setView(viewBy)
}