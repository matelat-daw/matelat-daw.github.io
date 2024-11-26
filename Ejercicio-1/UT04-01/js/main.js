const DOM = {
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    login: document.getElementById("login")
};

function login()
{
    DOM.login.innerHTML = "Te has Logueado Correctamente " + DOM.email.value + " Ahora te llamo al: " + DOM.phone.value
}