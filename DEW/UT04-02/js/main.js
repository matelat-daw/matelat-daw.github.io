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

export {togglePass, enableDNI, verify}; 