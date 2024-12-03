    var option = "";

    const DOM = {
        year : document.getElementById("year"),
        dni : document.getElementById("dni"),
        check : document.getElementById("check"),
        pass : document.getElementById("pass"),
        title : document.getElementById("title"), // Elemento small.
        desc : document.getElementById("desc"), // Elemeto small.
        tit : document.getElementById("tit"), // Elemento input.
        des : document.getElementById("des"), // Elemento textarea.
        aficiones : document.getElementById("aficiones"),
        // username_required : document.getElementById("username_required"),
        // pass_required : document.getElementById("pass_required"),
        // userdata_required : document.getElementById("userdata_required"),
        // surname_required : document.getElementById("surname_required"),
        // phone_required : document.getElementById("phone_required"),
        // cp_required : document.getElementById("cp_required"),
        // dni_required : document.getElementById("dni_required"),
        // tit_required : document.getElementById("tit_required"),
        // des_required : document.getElementById("des_required"),
        checkboxes : document.querySelectorAll("input[type='checkbox']")
    }

    for (var year = 1960 ; year <= 2024; year++) {
      
        var option = document.createElement("option");
        option.text = year;
        option.value = year;
        
        document.getElementById("year").appendChild(option)
        
    }
    DOM.year.value = 2010;

    tit.addEventListener("input", function()
    {
        title.innerHTML = tit.value.length;
    });

    des.addEventListener("input", function()
    {
        desc.innerHTML = des.value.length;
    });

    function enableDNI(element)
    {
        // let dni = document.getElementById("dni");

        if (element.value != "")
        {
            DOM.dni.disabled = false;
        }
        else
        {
            DOM.dni.disabled = true;
        }
    }

    function togglePass()
    {
        // const check = document.getElementById("check");
        // const pass = document.getElementById("pass");

        DOM.pass.type = DOM.check.checked ? "text" : "password";
    }

    function verify() // Función para validar el D.N.I.
    {    
        // let dnielement = document.getElementById("dni");
        let dni = DOM.dni.value;
        var numero, letra, letras;
        var expresion_regular_dni = /^[XYZ]?\d{1,9}[A-Z]$/;
    
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