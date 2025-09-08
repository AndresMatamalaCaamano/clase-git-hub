const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;
let nombre = "";

console.log("---- Menu ----");
console.log("1-. Cafe $500");
console.log("2-. Bebida $1600");
console.log("3-. Energetica $2100");
console.log("4-. Agua Mineral $1000");
console.log("5-. Completo $2300");
console.log("6-. Churrasco $5000");
console.log("7-. Galletas $2000");
console.log("8-. Salir");

function mostrarMenu() {
    rl.question("¿Qué desea comprar?: ", function(op) {
        let opcion = parseInt(op);

        switch(opcion) {
            case 1:
                console.log("Compraste un Cafe");
                total += 500;
                break;
            case 2:
                console.log("Compraste una Bebida");
                total += 1600;
                break;
            case 3:
                console.log("Compraste una Energetica");
                total += 2100;
                break;
            case 4:
                console.log("Compraste un Agua Mineral");
                total += 1000;
                break;
            case 5:
                console.log("Compraste un Completo");
                total += 2300;
                break;
            case 6:
                console.log("Compraste un Churrasco");
                total += 5000;
                break;
            case 7:
                console.log("Compraste unas Galletas");
                total += 2000;
                break;
            case 8:
                let fechaActual = new Date();
                console.log("\n---- Boleta ----");
                console.log("Cliente: " + nombre);
                console.log("Total: $" + total);
                console.log("Fecha: " + fechaActual.toLocaleString());
                console.log("----------------");

                console.log(" ")

                console.log("\n---- Boleta del cajero ----");
                console.log("Caja: Numero 1 ");
                console.log(`total recaudado del dia de hoy ` + total)
                console.log("Fecha: " + fechaActual.toLocaleString());
                console.log("----------------");
                rl.close();
                return; 
            default:
                console.log("Opcion no valida");
                break;
        }

        mostrarMenu(); 
    });
}

rl.question("Ingrese su nombre para ingresar al cajero: ", function(n) {
    nombre = n;
    mostrarMenu();
});
