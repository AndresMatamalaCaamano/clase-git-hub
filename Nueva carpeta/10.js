const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Convertidor de Temperaturas");
console.log("1. Celsius a Fahrenheit");
console.log("2. Fahrenheit a Celsius");

rl.question("Elige una opción (1 o 2): ", function(opcion) {
    if (opcion === "1") {
        rl.question("Ingresa los grados Celsius: ", function(celsius) {
            let resultado = (Number(celsius) * 9 / 5) + 32;
            console.log(`${celsius}°C equivalen a ${resultado.toFixed(2)}°F`);
            rl.close();
        });
    } else if (opcion === "2") {
        rl.question("Ingresa los grados Fahrenheit: ", function(fahrenheit) {
            let resultado = (Number(fahrenheit) - 32) * 5 / 9;
            console.log(`${fahrenheit}°F equivalen a ${resultado.toFixed(2)}°C`);
            rl.close();
        });
    } else {
        console.log("Opción no válida.");
        rl.close();
    }
});
