const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer número: ', function(num1){
    rl.question('Ingrese el segundo número: ', function(num2){
        rl.question('Ingrese la operación (+, -, *, /, %): ', (operacion) => {
            let resultado;
            switch (operacion) {
                case '+':
                    resultado = Number(num1) + Number(num2);
                    break;
                case '-':
                    resultado = Number(num1) - Number(num2);
                    break;
                case '*':
                    resultado = Number(num1) * Number(num2);
                    break;
                case '/':
                    if (Number(num2) !== 0) {
                        resultado = Number(num1) / Number(num2);
                    } else {
                        console.log('Error: no ce divide en cero >:v .');
                        rl.close();
                        return;
                    }
                    break;

                case '%':

                    resultado = Number(num1) % Number(num2);

                break;

                    
                default:
                    console.log('Operación no válida.');
                    rl.close();
                    return;
            }

            console.log(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
            rl.close();
        });
    });
});