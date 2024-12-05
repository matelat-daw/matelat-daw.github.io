// import * as modulo from "./main.js"; // Para usar el modificador Universal hay que crear un alias y acceder a las funciones importadas a través del alias ej: (Alias modulos) = modulos.curso.

const DOM = {
    year : document.getElementById("year"),
    document : document.getElementById("document"),
    dni : document.getElementById("dni"),
    check : document.getElementById("check"),
    pass : document.getElementById("pass"),
    title : document.getElementById("title"), // Elemento small.
    desc : document.getElementById("desc"), // Elemeto small.
    tit : document.getElementById("tit"), // Elemento input.
    des : document.getElementById("des"), // Elemento textarea.
    music : document.getElementById("music"),
    handmade : document.getElementById("handmade"),
    sport : document.getElementById("sport"),
    art : document.getElementById("art"),
    games : document.getElementById("games"),
    lecture : document.getElementById("lecture"),
    aficiones : document.getElementById("aficiones"),
    checkboxes : document.querySelectorAll("input[type='checkbox']"),
    form : document.getElementById("form"),
    hobby : document.getElementById("hobby_required")
};

DOM.tit.addEventListener("input", function()
{
    DOM.title.innerHTML = DOM.tit.value.length;
});

DOM.des.addEventListener("input", function()
{
    DOM.desc.innerHTML = DOM.des.value.length;
});

DOM.check.addEventListener("click", function()
{
    togglePass(DOM.pass, DOM.check)
});
DOM.document.addEventListener("change", () =>
{
    enableDNI(DOM.document, DOM.dni)
});
DOM.form.addEventListener("submit", (e) =>
{
    let result = verify(DOM.dni.value)
    if (!result) // Verifica si el DNI es Correcto.
    {
        e.preventDefault();
    }
    else
    {
        if (index <= 1) // Verifica se se Seleccionó más de 1 Hobby.
        {
            e.preventDefault();
        }
    }
});

for (var year = 1920 ; year <= 2010; year++)
{  
    var option = document.createElement("option");
    option.text = year;
    option.value = year;
    
    DOM.year.appendChild(option)
    
}
DOM.year.value = 2010;

let index = 0;

DOM.music.addEventListener("click", () =>
{
    DOM.checkboxes.forEach(count);
});

DOM.handmade.addEventListener("click", () =>
{
    DOM.checkboxes.forEach(count);
});

DOM.sport.addEventListener("click", () =>
{
    DOM.checkboxes.forEach(count);
});

DOM.art.addEventListener("click", () =>
{
    DOM.checkboxes.forEach(count);
});

DOM.games.addEventListener("click", () =>
{
    DOM.checkboxes.forEach(count);
});

DOM.lecture.addEventListener("click", () =>
{
    DOM.checkboxes.forEach(count);
});

function count(checkbox)
{
    if (checkbox.id != "check")
    {
        if (checkbox.checked)
        {
            index++;
            if (index > 1)
            {
                console.log(index);
                DOM.hobby.style.visibility = "hidden";
            }
            DOM.aficiones.value += checkbox.value + ",";
        }
    }
}

function togglePass(pass, check){
    pass.type = check.checked ? "text" : "password";
}

function enableDNI(element, dni)
{
    if (element.value != "")
    {
        dni.disabled = false;
    }
    else
    {
        dni.disabled = true;
    }
}

function verify(dni) // Función para validar el D.N.I.
{
    var numero, letra, letras;
    var expresion_regular_dni = /^[XYZ]?\d{2,9}[A-Z]$/;

    if(expresion_regular_dni.test(dni) === true)
    {
        numero = dni.substr(0, dni.length - 1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        letra = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        letras = letras.substring(numero, numero + 1);
        if (letras != letra.toUpperCase())
        {
            alert('El D.N.I. o N.I.E. es Incorrecto, Verifica que los Números y la Letra o Letras Estén Bien.');
            return false; // Si devuelve false no se envía el formulario.
        }
        else
        {
            return true; // Devuelvo true, envía el formulario.
        }
    }
    else
    {
        alert('El D.N.I. o N.I.E. es Incorrecto, Verifica que los Números y la Letra o Letras Estén Bien.');
        return false; // Si devuelve false no se envía el formulario.
    }
}