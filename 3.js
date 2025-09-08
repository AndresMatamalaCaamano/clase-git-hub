const http = require("http");
const { parse } = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <form action="/Menu" method="POST">
        <input type="number" name="num1" required />
        <input type="number" name="num2" required />
        <button>Aplicar todas las operaciones</button>
      </form>
    `);
  } else {
    let body = "";
    req.on("data", d => body += d);
    req.on("end", () => {
      const datos = parse(body);
      const n1 = parseFloat(datos.num1);
      const n2 = parseFloat(datos.num2);

      const suma = n1 + n2;
      const resta = n1 - n2;
      const multi = n1 * n2;
      const div = n2 !== 0 ? (n1 / n2) : "No se puede dividir entre 0";

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`
        <h1>Resultados</h1>
        <p>${n1} + ${n2} = ${suma}</p>
        <p>${n1} - ${n2} = ${resta}</p>
        <p>${n1} * ${n2} = ${multi}</p>
        <p>${n1} / ${n2} = ${div}</p>
        <a href="/Menu">Volver</a>
      `);
    });
  }
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});