    var option = "";
    const title = document.getElementById("title"); // Elemento small.
    const desc = document.getElementById("desc"); // Elemeto small.
    const tit = document.getElementById("tit"); // Elemento input.
    const des = document.getElementById("des"); // Elemento textarea.

    for (var year = 1960 ; year <= 2024; year++) {
      
        var option = document.createElement("option");
        option.text = year;
        option.value = year;
        
        document.getElementById("year").appendChild(option)
        
    }
    document.getElementById("year").value = 2010;

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
        let dni = document.getElementById("dni");

        if (element.value != "")
        {
            dni.disabled = false;
        }
        else
        {
            dni.disabled = true;
        }
    }

    function togglePass()
    {
        const check = document.getElementById("check");
        const pass = document.getElementById("pass");

        pass.type = check.checked ? "text" : "password";
    }

    function verify() // Función para validar el D.N.I.
    {    
        let dnielement = document.getElementById("dni");
        let dni = dnielement.value;
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