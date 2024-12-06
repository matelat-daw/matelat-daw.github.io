const DOM = {
    form : document.getElementById("form"),
    form_submit : document.getElementById("form_submit"),
    username: document.getElementById("username"),
    pass : document.getElementById("pass"),
    check : document.getElementById("check"),
    userdata: document.getElementById("userdata"),
    surname: document.getElementById("surname"),
    phone: document.getElementById("phone"),
    cp: document.getElementById("cp"),
    year : document.getElementById("year"),
    document : document.getElementById("document"),
    dni : document.getElementById("dni"),
    par : document.getElementById("par"),
    emp : document.getElementById("emp"),
    account : document.getElementById("account_required"),
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
    hobby : document.getElementById("hobby_required")
};

const ERROR = {
    username_error : document.getElementById("username_error"),
    pass_error : document.getElementById("pass_error"),
    userdata_error : document.getElementById("userdata_error"),
    surname_error : document.getElementById("surname_error"),
    phone_error : document.getElementById("phone_error"),
    cp_error : document.getElementById("cp_error"),
    dni_error : document.getElementById("dni_error"),
    account_error : document.getElementById("account_error"),
    hobby_error : document.getElementById("hobby_error"),
    title_error : document.getElementById("title_error"),
    desc_error : document.getElementById("desc_error")
};

checkErrors();

function checkErrors()
{
    let errors = 0;

    Object.keys(ERROR).forEach(function(key)
    {
        switch(key)
        {
            case "username_error":
                if (DOM.username.validationMessage != "")
                {
                    username_error.innerHTML = DOM.username.validationMessage;
                    errors++;
                }
                else
                {
                    username_error.innerHTML = "";
                }
                break;
            case "pass_error":
                if (DOM.pass.validationMessage != "")
                {
                    pass_error.innerHTML = DOM.pass.validationMessage;
                    errors++;
                }
                else
                {
                    pass_error.innerHTML = "";
                }
                break;
            case "userdata_error":
                if (DOM.userdata.validationMessage != "")
                {
                    userdata_error.innerHTML = DOM.userdata.validationMessage;
                    errors++;
                }
                else
                {
                    userdata_error.innerHTML = "";
                }
                break;
            case "surname_error":
                if (DOM.surname.validationMessage != "")
                {
                    surname_error.innerHTML = DOM.surname.validationMessage;
                    errors++;
                }
                else
                {
                    surname_error.innerHTML = "";
                }
                break;
            case "phone_error":
                if (DOM.phone.validationMessage != "")
                {
                    phone_error.innerHTML = DOM.phone.validationMessage;
                    errors++;
                }
                else
                {
                    phone_error.innerHTML = "";
                }
                break;
            case "cp_error":
                if (DOM.cp.validationMessage != "")
                {
                    cp_error.innerHTML = DOM.cp.validationMessage;
                    errors++;
                }
                else
                {
                    cp_error.innerHTML = "";
                }
                break;
            case "dni_error":
                if (DOM.dni.disabled)
                {
                    dni_error.innerHTML = DOM.phone.validationMessage;
                    errors++;
                }
                else
                {
                    if (DOM.dni.validationMessage != "")
                    {
                        dni_error.innerHTML = DOM.dni.validationMessage;
                        errors++;
                    }
                    else
                    {
                        dni_error.innerHTML = "";
                    }
                }
                break;
            case "account_error":
                if (DOM.account.style.visibility != "hidden")
                {
                    account_error.innerHTML = DOM.account.innerHTML;
                    errors++;
                }
                else
                {
                    account_error.innerHTML = "";
                }
                break;
            case "title_error":
                if (DOM.tit.validationMessage != "")
                {
                    title_error.innerHTML = DOM.tit.validationMessage;
                    errors++;
                }
                else
                {
                    title_error.innerHTML = "";
                }
                break;
            case "desc_error":
                if (DOM.des.validationMessage != "")
                {
                    desc_error.innerHTML = DOM.des.validationMessage;
                    errors++;
                }
                else
                {
                    desc_error.innerHTML = "";
                }
                break;
            case "hobby_error":
                if (DOM.hobby.style.visibility != "hidden")
                {
                    hobby_error.innerHTML = DOM.hobby.innerHTML;
                    errors++;
                }
                else
                {
                    hobby_error.innerHTML = "";
                }
                break;
        }
    });
    if (errors > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

DOM.form_submit.addEventListener("click", () => {
    checkErrors();
});

DOM.par.addEventListener("click", () => {
    DOM.account.innerHTML = "";
});

DOM.emp.addEventListener("click", () => {
    DOM.account.innerHTML = "";
});

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
    let errors = checkErrors();
    if (errors)
    {
        e.preventDefault();
        checkErrors();
    }
    else
    {
        let result = verify(DOM.dni.value)
        if (!result) // Verifica si el DNI es Correcto.
        {
            e.preventDefault();
        }
        else
        {
            if (already.length <= 1) // Verifica se se Seleccionó más de 1 Hobby.
            {
                e.preventDefault();
            }
            else
            {
                for (var i = 0; i < already.length; i++)
                    DOM.aficiones.value += already[i] + ", ";
            }
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

let already = [];

DOM.music.addEventListener("click", () =>
{
    if (DOM.music.checked)
    {
        already.push(DOM.music.value);
    }
    else
    {
        fixHobbies(DOM.music.value);
    }
    checkHobbies();
});

DOM.handmade.addEventListener("click", () =>
{
    if (DOM.handmade.checked)
    {
        already.push(DOM.handmade.value);
    }
    else
    {
        fixHobbies(DOM.handmade.value);
    }
    checkHobbies();
});

DOM.sport.addEventListener("click", () =>
{
    if (DOM.sport.checked)
    {
        already.push(DOM.sport.value);
    }
    else
    {
        fixHobbies(DOM.sport.value);
    }
    checkHobbies();
});

DOM.art.addEventListener("click", () =>
{
    if (DOM.art.checked)
    {
        already.push(DOM.art.value);
    }
    else
    {
        fixHobbies(DOM.art.value);
    }
    checkHobbies();
});

DOM.games.addEventListener("click", () =>
{
    if (DOM.games.checked)
    {
        already.push(DOM.games.value);
    }
    else
    {
        fixHobbies(DOM.games.value);
    }
    checkHobbies();
});

DOM.lecture.addEventListener("click", () =>
{
    if (DOM.lecture.checked)
    {
        already.push(DOM.lecture.value)
    }
    else
    {
        fixHobbies(DOM.lecture.value);
    }
    checkHobbies();
});

function fixHobbies(hobby)
{
    let position = already.indexOf(hobby);
    already.splice(position, 1);
}

function checkHobbies()
{
    if (already.length > 1)
    {
        DOM.hobby.style.visibility = "hidden";
    }
    else
    {
        DOM.hobby.style.visibility = "visible";
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