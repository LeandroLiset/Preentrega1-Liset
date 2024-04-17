

function calcular() {
    let continuar;
    let resultadoAnterior;

    do {
        let operador;
        let numero1;
        let numero2;

        if (resultadoAnterior === undefined) {
            operador = prompt("Ingrese el operador (+, -, *, /):");
            numero1 = parseFloat(prompt("Ingrese el primer número:"));
            numero2 = parseFloat(prompt("Ingrese el segundo número:"));

            if (isNaN(numero1) || isNaN(numero2)) {
                alert("Error: Ingresar únicamente números.");
                return;
            }
        }
        else {
            operador = prompt("Ingrese el operador (+, -, *, /):");
            numero1 = resultadoAnterior;
            numero2 = parseFloat(prompt("Ingrese el número adicional:"));

            if (isNaN(numero2)) {
                alert("Error: Ingresar únicamente números.");
                return;
            }
            if (operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/') {
                alert("Error: Operador no válido. Reiniciando desde cero.");
                resultadoAnterior = undefined;
                continue;
            }
        }

        function operacion(operador, num1, num2) {
            if (operador === '+') {
                return num1 + num2;
            }
            else if (operador === '-') {
                return num1 - num2;
            }
            else if (operador === '*') {
                return num1 * num2;
            }
            else if (operador === '/') {
                if (num2 !== 0) {
                    return num1 / num2;
                } else {
                    return 'Error: División por cero';
                }
            }
            else {
                return 'Error: Operador no válido';
            }
        }

        let resultado = operacion(operador, numero1, numero2);
        alert("El resultado es: " + resultado);

        continuar = confirm("¿Desea continuar operando sobre el resultado anterior?");

        resultadoAnterior = resultado;

    } while (continuar);
}




