'use script'

var gUsers = [
    {
        id: 'u101',
        username: 'puki',
        password: 'secret',
        lastLoginTime: 1601891998864,
        isAdmin: true
    },
    {
        id: 'u102',
        username: 'muki',
        password: 'secret1',
        lastLoginTime: 1601891998864,
        isAdmin: false
    },
    {
        id: 'u103',
        username: 'shuki',
        password: 'secret2',
        lastLoginTime: 1601891998864,
        isAdmin: false
    },
    {
        id: 'u104',
        username: 'coopi',
        password: 'secret3',
        lastLoginTime: 1601891998864,
        isAdmin: false
    }
]



function checkInfo(elUserName, elPassword) {
    console.log('userName in CheckInfo', elUserName);
    console.log('password in CheckInfo', elPassword);
    var loggedInUser = gUsers.find(function (user) {
        return user.username === elUserName && user.password === elPassword
    })
    if (loggedInUser) {
        loggedInUser.lastLoginTime = Date.now()
        saveUsers()
        saveToStorage('loggedInUser', loggedInUser)
        window.location.href = "secret.html";
    }
}


function saveUsers() {
    saveToStorage('usersDB', gUsers)
}



function saveToStorage(key, val) {
    const json = JSON.stringify(val)
    localStorage.setItem(key, json)
}


function loadFromStorage(key) {
    const json = localStorage.getItem(key)
    const val = JSON.parse(json)
    return val
}



