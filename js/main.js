let todosLosNumeros = [];

function calcular() {
    let continuar;
    let resultadoAnterior;

    do {
        let operador;
        let numeros = [];

        if (resultadoAnterior === undefined) {
            operador = prompt("Ingrese el operador (+, -, *, /):");
            numeros.push(parseFloat(prompt("Ingrese el primer número:")));
            numeros.push(parseFloat(prompt("Ingrese el segundo número:")));

            if (numeros.some(isNaN)) {
                alert("Error: Ingresar únicamente números.");
                return;
            }
        }
        else {
            operador = prompt("Ingrese el operador (+, -, *, /):");
            numeros.push(resultadoAnterior);
            numeros.push(parseFloat(prompt("Ingrese el número adicional:")));

            if (isNaN(numeros[numeros.length - 1])) {
                alert("Error: Ingresar únicamente números.");
                return;
            }
            if (!['+', '-', '*', '/'].includes(operador)) {
                alert("Error: Operador no válido. Reiniciando desde cero.");
                resultadoAnterior = undefined;
                continue;
            }
        }

        for (let i = 0; i < numeros.length; i++) {
            todosLosNumeros.push(numeros[i]);
        }

        function operacion(operador, numeros) {
            let resultado;

            switch (operador) {
                case '+':
                    resultado = numeros.reduce((a, b) => a + b, 0);
                    break;
                case '-':
                    resultado = numeros.reduce((a, b) => a - b);
                    break;
                case '*':
                    resultado = numeros.reduce((a, b) => a * b, 1);
                    break;
                case '/':
                    resultado = numeros.reduce((a, b) => a / b);
                    break;
                default:
                    resultado = 'Error: Operador no válido';
                    break;
            }

            return resultado;
        }

        let resultado = operacion(operador, numeros);
        let maximoGlobal = Math.max(...todosLosNumeros);
        let minimoGlobal = Math.min(...todosLosNumeros);
        let numeroAleatorio = Math.floor(Math.random() * (maximoGlobal - minimoGlobal + 1)) + minimoGlobal;
        alert("El resultado es: " + resultado + "\nEl número más alto utilizado es: " + maximoGlobal + "\nEl número más bajo utilizado es: " + minimoGlobal + "\nEl número aleatorio entre el máximo y el mínimo es: " + numeroAleatorio);

        continuar = confirm("¿Desea continuar operando sobre el resultado anterior?");

        resultadoAnterior = resultado;

    } while (continuar);
}

calcular();
