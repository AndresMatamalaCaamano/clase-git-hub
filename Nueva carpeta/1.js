

function swap(arr, i, j) {
    if (i >= 0 && j >= 0 && i < arr.length && j < arr.length) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      console.log("Índices fuera de rango");
    }
    return arr;
}

let numeros = [10, 20, 30, 40, 50];

console.log("Original:", numeros);

swap(numeros, 0, 4);

console.log("Modificado:", numeros);
