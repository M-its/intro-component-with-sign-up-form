const form = document.querySelector("form#form")
const fristName = document.querySelector("input#login-fname")
const lastName = document.querySelector("input#login-lname")
const email = document.querySelector("input#email")
const password = document.querySelector("input#password")
const inputControls = document.querySelectorAll("#form .input-control")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    checkInputs()
})

inputControls.forEach((inputControl) => {
    inputControl.addEventListener("keydown", () => {
        inputControl.classList.remove("error")
    })
})

function checkInputs() {
    const fristNameValue = fristName.value
    const lastNameValue = lastName.value
    const emailValue = email.value
    const passwordValue = password.value

    if (fristNameValue === "") {
        setErrorFor(fristName, "Frist Name cannot be empty.")
    } else {
        setSuccessFor(fristName)
    }

    if (lastNameValue === "") {
        setErrorFor(lastName, "Last Name cannot be empty.")
    } else {
        setSuccessFor(lastName)
    }

    if (emailValue === "") {
        setErrorFor(email, "email cannot be empty")
        email.placeholder = "email@example/com"
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Looks like this is not an email.")
        email.value = "email@example/com"
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === "") {
        setErrorFor(password, "password cannot be empty.")
    } else {
        setSuccessFor(password)
    }
}

function setErrorFor(input, error) {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    // adicionar mensagem de erro
    small.innerText = error

    // adicionar a classe de erro
    formControl.className = "input-control error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement

    // adicionar a classe de sucesso
    formControl.className = "input-control success"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    )
}
