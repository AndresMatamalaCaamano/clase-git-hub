const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const sudoku = [
    [0, 3, 4, 6, 7, 8, 0, 1, 2],
    [6, 0, 2, 1, 9, 5, 3, 4, 8],
    [0, 9, 8, 3, 4, 2, 5, 6, 7],
    [0, 5, 9, 7, 6, 1, 4, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 8, 0],
    [2, 8, 7, 4, 1, 9, 6, 3, 0],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const sudokusolucion = [ //Solucion al sudoku
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

let contadorbueno = 0;
let contadormalo = 0;

for (let i = 0; i < sudoku.length; i++){
    console.log(sudoku[i]);
}

console.log("A continuacion usted rellenara los numeros que estan con 0, empezara con la primera fila y columna, y avanzara de uno en uno");

rl.question("Que numero cree que es el correcto en la primera fila y columna?: ", function(n){
    sudoku[0][0] = Number(n);

    if (Number(n) === sudokusolucion[0][0]){
        contadorbueno = contadorbueno + 1;
    } else {
        contadormalo = contadormalo + 1;
    }

    rl.question("Que numero cree que es el correcto en la primera fila y septima columna?: ", function(n2){
        sudoku[0][6] = Number(n2);

        if (Number(n2) === sudokusolucion[0][6]){
            contadorbueno = contadorbueno + 1;
        } else {
            contadormalo = contadormalo + 1;
        }

        rl.question("Que numero cree que es el correcto en la segunda fila y segunda columna?: ", function(n3){
            sudoku[1][1] = Number(n3);

            if (Number(n3) === sudokusolucion[1][1]){
                contadorbueno = contadorbueno + 1;
            } else {
                contadormalo = contadormalo + 1;
            }

            rl.question("Que numero cree que es el correcto en la tercera fila y primera columna?: ", function(n4){
                sudoku[2][0] = Number(n4);

                if (Number(n4) === sudokusolucion[2][0]){
                    contadorbueno = contadorbueno + 1;
                } else {
                    contadormalo = contadormalo + 1;
                }

                rl.question("Que numero cree que es el correcto en la cuarta fila y primera columna?: ", function(n5){
                    sudoku[3][0] = Number(n5);

                    if (Number(n5) === sudokusolucion[3][0]){
                        contadorbueno = contadorbueno + 1;
                    } else {
                        contadormalo = contadormalo + 1;
                    }

                    rl.question("Que numero cree que es el correcto en la cuarta fila y novena columna?: ", function(n6){
                        sudoku[3][8] = Number(n6);

                        if (Number(n6) === sudokusolucion[3][8]){
                            contadorbueno = contadorbueno + 1;
                        } else {
                            contadormalo = contadormalo + 1;
                        }

                        rl.question("Que numero cree que es el correcto en la septima fila y segunda columna?: ", function(n7){
                            sudoku[6][1] = Number(n7);

                            if (Number(n7) === sudokusolucion[6][1]){
                                contadorbueno = contadorbueno + 1;
                            } else {
                                contadormalo = contadormalo + 1;
                            }

                            rl.question("Que numero cree que es el correcto en la septima fila y novena columna?: ", function(n8){
                                sudoku[6][8] = Number(n8);

                                if (Number(n8) === sudokusolucion[6][8]){
                                    contadorbueno = contadorbueno + 1;
                                } else {
                                    contadormalo = contadormalo + 1;
                                }

                                rl.question("Que numero cree que es el correcto en la octava fila y novena columna?: ", function(n9){
                                    sudoku[7][8] = Number(n9);

                                    if (Number(n9) === sudokusolucion[7][8]){
                                        contadorbueno = contadorbueno + 1;
                                    } else {
                                        contadormalo = contadormalo + 1;
                                    }

                                    for (let i = 0; i < sudoku.length; i++){
                                        console.log(sudoku[i]);
                                    }

                                    if (contadorbueno == 9){
                                        console.log(true)
                                    }

                                    if (contadormalo == 9){
                                        console.log(false)
                                    }

                                    if (contadorbueno <= contadormalo && contadormalo <= contadorbueno){
                                        console.log("Casi!, intentalo de nuevo")
                                    }

                                    process.exit();
                                });
                            });
                        });
                    });
                });
            });


        });
    })
    

});

