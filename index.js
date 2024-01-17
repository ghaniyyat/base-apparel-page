var email = document.getElementById("email");
var emailError = document.getElementById("email-error");
var inputWrapper = document.getElementById("input-wrapper");
var iconError = document.getElementById("icon-error");
var popup = document.getElementById("popup");


function validateEmail() {
    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Please provide a valid email!";
        inputWrapper.style.borderColor = "red";
        iconError.style.display = "inline";
        return false;
    }
    emailError.innerHTML = "";
    inputWrapper.style.borderColor = "";
    iconError.style.display = "";
    return true;

}