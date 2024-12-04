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
    aficiones : document.getElementById("aficiones"),
    checkboxes : document.querySelectorAll("input[type='checkbox']"),
    submit : document.getElementById("submit")
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
    {modulo.togglePass(DOM.pass, DOM.check)}
});
DOM.document.addEventListener("change", function()
{
    {modulo.enableDNI(DOM.document, DOM.dni)}
});
DOM.submit.addEventListener("submit", (e) =>
{
    {let result = modulo.verify(DOM.dni.value)
        if (!result)
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