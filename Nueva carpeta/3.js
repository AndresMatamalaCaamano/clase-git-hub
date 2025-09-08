const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function esBisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        return console.log("El año si es bisiesto");
    } else {
        return console.log("El año no es bisiesto");
    }
}   


rl.question("Ingrese un año para saber si este es bisiesto o no", function(respuesta){
    let año = respuesta;
    console.log(esBisiesto(año));

    rl.close();


});






