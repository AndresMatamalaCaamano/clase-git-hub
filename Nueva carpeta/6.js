const readline = require("readline");
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
});

let promedios = [];
let nombres = [];
let i = 0; 


function estudiante(){
if (i >= 15) {
console.log(" Resultados finales:");
for (let j = 0; j < nombres.length; j++) {
console.log(`Estudiante ${j+1}: ${nombres[j]} - Promedio: ${promedios[j]}`);
}
rl.close();
return;
}

rl.question(`Ingrese el nombre del estudiante ${i+1}: `, (nombre)=> {
nombres.push(nombre);

function promedio(){
rl.question("Ingrese la primera nota: ", (nota)=> {
nota = parseFloat(nota);
            
rl.question("Ingrese la segunda nota: ", (nota2)=> {
nota2 = parseFloat(nota2);
                    
rl.question("Ingrese la tercera nota: ", (nota3)=> {
nota3 = parseFloat(nota3);
                        
rl.question("Ingrese la cuarta nota: ", (nota4)=> {
nota4 = parseFloat(nota4);   
                        
rl.question("Ingrese la quinta nota: ", (nota5)=> {
nota5 = parseFloat(nota5);

rl.question("Ingrese la sexta nota: ", (nota6)=> {
nota6 = parseFloat(nota6);
                                    
let promedio = (nota + nota2 + nota3 + nota4 + nota5 + nota6) / 6;
console.log(`El promedio de ${nombre} es: ${promedio}`);
promedios.push(promedio);

i++;        
estudiante(); 
});         
});
});  
});           
});
});
        }

promedio(); 
    });
}

estudiante();
