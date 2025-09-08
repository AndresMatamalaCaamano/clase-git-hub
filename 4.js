const http = require("http");
const { parse } = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <form method="POST">
        <input type="number" name="num1" required />
        <input type="number" name="num2" required />
        <select name="operacion">
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multi">Multiplicación</option>
          <option value="div">División</option>
        </select>
        <button>Calcular</button>
      </form>
    `);
  } else {
    let body = "";
    req.on("data", d => body += d);
    req.on("end", () => {
      const datos = parse(body);
      const n1 = parseFloat(datos.num1);
      const n2 = parseFloat(datos.num2);
      const op = datos.operacion;

      let resultado;

      switch (op) {
        case "suma":
          resultado = `${n1} + ${n2} = ${n1 + n2}`;
          break;
        case "resta":
          resultado = `${n1} - ${n2} = ${n1 - n2}`;
          break;
        case "multi":
          resultado = `${n1} * ${n2} = ${n1 * n2}`;
          break;
        case "div":
          resultado = n2 !== 0 ? `${n1} / ${n2} = ${n1 / n2}` : "No se puede dividir entre 0";
          break;
        default:
          resultado = "Operación no válida";
      }

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`
        <h1>Resultado</h1>
        <p>${resultado}</p>
        <a href="/">Volver</a>
      `);
    });
  }
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});