
function checkPassord(motpass) {
    var pass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){9,}/
    return pass.test(motpass)
}
function validates() {
    var a = document.getElementById("motpass").value
    if (!checkPassord(a)) {
        alert('Password non valide')
    }
    return false
}

function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}
document.getElementById('envoyer').addEventListener('click', validate)

function validate() {
    var inputs = document.getElementsByTagName("input")
    var email = document.getElementById("email").value
    var a = document.getElementById("motpass").value
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value)
            return alert('One of the inputs is empty')
    }
    if (!checkEmail(email)) { alert('Adresse e-mail non valide') }
    else if (!checkPassord(a)) { alert('Password non valide') }
    else alert('Thank You!')
}
document.getElementById('reset').addEventListener('click', reset)
function reset() {
    var inputs = document.getElementsByClassName("fields")
    console.log(inputs)
    for (let i = 0; i < inputs.length; i++) {
        (inputs[i].value) = ''

    }
}


