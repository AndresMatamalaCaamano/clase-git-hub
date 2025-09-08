const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function paroimpar (n){
    if (n % 2 === 0) {
        return `${n} es par`;
    } else {
        return `${n} es Impar`;
    }
}

rl.question("Ingrese su numero, para saber si es par o impar: ", function(n){
        console.log(paroimpar(n));
        process.exit();
});
