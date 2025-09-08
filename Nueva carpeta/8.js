const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la base del triángulo: ', function(base) {
    rl.question('Ingrese la altura del triángulo: ', function(altura) {
        const area = Number(base) * Number(altura) / 2;
        console.log(`El área del triángulo es: ${area}`);
        rl.close();
    });
});  