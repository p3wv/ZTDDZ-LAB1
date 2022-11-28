//utworzenie elementów na bazie id z login.html

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

//nasłuchiwanie kliknięcia na elementy username i password

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

//warunek sprawdzający poprawność danych
    
    if (username === "" && password === "") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert("Wrong credentials!");
        location.reload();
    }
})
