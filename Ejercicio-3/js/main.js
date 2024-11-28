    var option = "";
    var titleIndex = 0;
    var descIndex = 0;

    for (var year = 1960 ; year <= 2024; year++) {
      
        var option = document.createElement("option");
        option.text = year;
        option.value = year;
        
        document.getElementById("year").appendChild(option)
        
    }
    document.getElementById("year").value = 2010;

    function countTitle(event)
    {
        let title = document.getElementById("title");
        let max = 15;

        if (event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 39 && event.keyCode != 40)
        {
            if (titleIndex > 0 && event.keyCode == 8 || titleIndex > 0 && event.keyCode == 46)
            {
                titleIndex--;
                title.innerHTML = titleIndex;
            }
            else
            {
                if (titleIndex < max)
                {
                    titleIndex++;
                    title.innerHTML = titleIndex;
                }
            }
        }
    }

    function countDesc(event)
    {
        let desc = document.getElementById("desc");
        let max = 120;

        if (event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 39 && event.keyCode != 40)
        {
            if (descIndex > 0 && event.keyCode == 8 || descIndex > 0 && event.keyCode == 46)
            {
                descIndex--;
                desc.textContent = descIndex;
            }
            else
            {
                if (descIndex < max)
                {
                    descIndex++;
                    desc.textContent = descIndex;
                }
            }
        }
    }

    function verify() // Función para validar las contraseñas de registro de alumnos y las de modificación, también valida el D.N.I.
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