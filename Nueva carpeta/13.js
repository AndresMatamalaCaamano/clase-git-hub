const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let Trabajadores = [];
let total = 0;

rl.question("¿Cuántos trabajadores desea agregar a la fundación? ", function(respuesta) {

    let numero = Number(respuesta);

    IngresarTrabajadores(numero, 0);
});


function IngresarTrabajadores(numero, i) {

    if (i < numero) {
        rl.question(`Por favor ingrese el nombre del integrante número ${i + 1}: `, function(n) {
            let nombre = n;
            rl.question(`Por favor ingrese el sueldo de ${nombre}: `, function(s) {
                let sueldo = Number(s);
                Trabajadores.push({ nombre: nombre, sueldo: sueldo });
                IngresarTrabajadores(numero, i + 1);
            });
        });

    } else {

        console.log(" ")
        console.log("-------- Lista de trabajadores (Honestidad) --------");
        for (let trabajador of Trabajadores) {
            console.log(`Nombre: ${trabajador.nombre}, Sueldo: ${trabajador.sueldo}`);
        }

        console.log(" ")
        console.log("-------- Sueldos Máximos, Mínimos y Promedio --------");
        let maximo = Trabajadores[0];
        let minimo = Trabajadores[0];

        for (let trabajador of Trabajadores) {

            if (trabajador.sueldo > maximo.sueldo) {
                maximo = trabajador;
            }

            if (trabajador.sueldo < minimo.sueldo) {
                minimo = trabajador;
            }

            total += trabajador.sueldo;
        }

        let promedio = total / numero;

        console.log(`El sueldo más alto es de ${maximo.nombre} con $${maximo.sueldo}`);
        console.log(`El sueldo más bajo es de ${minimo.nombre} con $${minimo.sueldo}`);
        console.log(`El promedio de sueldos es: $${promedio}`);

        rl.close();
    }
}

//Profe si supiera que esto lo hize con un for al principio..... pesimo servicio node.js por ser asíncrono