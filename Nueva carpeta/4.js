const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Calculemos el area de un cuadrado")
console.log("----------------------------------")
rl.question("ingrese un lado de su cuadrado: ", function(num1){
        let resultado = Number(num1) * Number(num1) ;
        console.log(`El area de su cuadrado es de: ${resultado}`)
        rl.close();

});