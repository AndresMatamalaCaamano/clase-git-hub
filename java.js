let rotacion = 0;
const contenedor = document.getElementById("contenedor");
contenedor.addEventListener("click", function() {
    rotacion += 90;
    this.style.transform = `rotate(${rotacion}deg)`;
});