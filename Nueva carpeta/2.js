const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("ingrese algua palabra", (palabra) => {

    let pala = palabra;

    let palaconver = pala.toLowerCase();

    if(pala === palaconver ){
        console.log("La palabra esta minuscula");
    }else{
        console.log("la palabra esta mayuscula");
    }

    rl.close();


});