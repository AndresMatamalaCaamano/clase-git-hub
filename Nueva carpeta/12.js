const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;

}

rl.question("¿Cuántos números primos quiere generar? ", function(cantidad)  {

    const cantida = (cantidad);

    const numerosPrimos = new Array(cantida);

    let contador = 0;

    let numero = 2;

    while (contador < cantida) {

        if (esPrimo(numero)) {

            numerosPrimos[contador] = numero;
            contador++;

        }

        numero++;
    }

    console.log("Lista de números primos generados:");
    console.log(`A continuacion se les mostrar ${cantida} numeros primos:`);

    console.log(numerosPrimos)


    rl.close();
});