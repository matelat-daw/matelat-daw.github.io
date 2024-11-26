const DOM = {
    num1: document.getElementById("num1"),
    num2: document.getElementById("num2"),
    oper: document.getElementById("oper"),
    result: document.getElementById("result")
};

function operate()
{
    let total;
    switch (DOM.oper.value)
    {
        case "+":
            total = +DOM.num1.value + +DOM.num2.value;
            break;
        case "-":
            total = DOM.num1.value - DOM.num2.value;
            break;
        case "*":
            total = DOM.num1.value * DOM.num2.value;
            break;
        case "/":
            if (DOM.num2.value == "0")
            {
                alert("No Mostroso no podés dividir por 0.");
                total = "Intenta Otra Operación";
            }
            else
            {
                total = DOM.num1.value / DOM.num2.value;
            }
            break;
    }
    DOM.result.innerHTML = total;
}