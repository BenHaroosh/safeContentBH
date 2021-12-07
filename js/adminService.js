'use strict'

var gSortBy = 'NAME'
var gViewBy = 'TABLE'

function getUsersForDisplay() {
    var users = loadFromStorage('usersDB')

    if (gSortBy === 'NAME') {
        users.sort(function (user1, user2) {
            if (user1.username.toLowerCase() < user2.username.toLowerCase()) { return -1; }
            if (user2.username.toLowerCase() > user1.username.toLowerCase()) { return 1; }
            return 0;
        })
    }

    if (gSortBy === 'LOGIN') {
        // console.log('sorting...');
        users.sort(function (user1, user2) {
            return user2.lastLoginTime - user1.lastLoginTime
        })
    }

    return users
}


function setSort(sortBy) {
    gSortBy = sortBy
    // console.log(gSortBy);
}
