const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese un mes del año, para calcular cuantos días tiene dicho mes y en que estación del año estamos: ", function(n){

    const mes = parseInt(n);

    switch(mes){
        case 1:
            console.log("Usted ha elegido a ENERO, Este mes tiene 31 días y su estacion del año es de: Invierno");
            break;
        case 2:
            console.log("Usted ha elegido a FEBRERO, Este mes tiene 28 días y su estacion del año es de: Verano");
            break;
        case 3:
            console.log("Usted ha elegido a MARZO, Este mes tiene 31 días y su estacion del año es de: Otoño");
            break;
        case 4:
            console.log("Usted ha elegido a ABRIL, Este mes tiene 30 días y su estacion del año es de: Otoño");
            break;
        case 5:
            console.log("Usted ha elegido a MAYO, Este mes tiene 31 días y su estacion del año es de: Otoño");
            break;
        case 6:
            console.log("Usted ha elegido a JUNIO, Este mes tiene 30 días y su estacion del año es de: Invierno");
            break;
        case 7:
            console.log("Usted ha elegido a JULIO, Este mes tiene 31 días y su estacion del año es de: Invierno");
            break;
        case 8:
            console.log("Usted ha elegido a AGOSTO, Este mes tiene 31 días y su estacion del año es de: Invierno");
            break;
        case 9:
            console.log("Usted ha elegido a SEPTIEMBRE, Este mes tiene 30 días y su estacion del año es de: Fin de invierno y inicio de primavera el 21");
            break;
        case 10:
            console.log("Usted ha elegido a OCTUBRE, Este mes tiene 31 días y su estacion del año es de: Primavera y Otoño");
            break;
        case 11:
            console.log("Usted ha elegido a NOVIEMBRE, Este mes tiene 30 días y su estacion del año es de: Primavera");
            break;
        case 12:
            console.log("Usted ha elegido a DICIEMBRE, Este mes tiene 31 días y su estacion del año es de: Verano");
            break;
        default:
            console.log("Opcion no valida");
            break;
    }

    process.exit();

});