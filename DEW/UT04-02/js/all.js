import * as modulo from "./main.js"; // Para usar el modificador Universal hay que crear un alias y acceder a las funciones importadas a través del alias ej: (Alias modulos) = modulos.curso.

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
    modulo.togglePass(DOM.pass, DOM.check)
});
DOM.document.addEventListener("change", () =>
{
    modulo.enableDNI(DOM.document, DOM.dni)
});
DOM.form.addEventListener("submit", (e) =>
{
    let result = modulo.verify(DOM.dni.value)
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

for (var year = 1960 ; year <= new Date().getFullYear(); year++)
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