'use script'


function onInit() {
    // renderBoard()
}



function onCheckInfo() {
    var elUserInput = document.querySelector('.userName')
    var elUserName = elUserInput.value
    console.log(elUserName);
    var elInputPass = document.querySelector('.password')
    var elPassword = elInputPass.value

    checkInfo(elUserName, elPassword)
}