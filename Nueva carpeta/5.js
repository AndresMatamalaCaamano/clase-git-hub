const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese el numero de Kilómetros recorridos por su coche: ", function(num1){
    rl.question("Ingrese el número de litros consumidos: ", function(num2){
        let resultado = parseFloat(num2) / parseFloat(num1);
        console.log(`El resultado de su consumo de combustibles segun sus kilometros son: ${resultado}`);
        process.exit();
    })
})

