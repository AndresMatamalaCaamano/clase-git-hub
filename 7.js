const http = require("http");
const { parse } = require("querystring");

let Trabajadores = [];
let total = 0;

const server = http.createServer((req, res) => {
  // Página principal
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    res.end(`
      <h2>Registro de Trabajadores</h2>
      <form method="POST" action="/agregar">
        <label>Nombre: <input type="text" name="nombre" required /></label><br><br>
        <label>Sueldo: <input type="number" name="sueldo" required /></label><br><br>
        <button type="submit">Agregar</button>
      </form>
      <br>
      <a href="/lista">Ver lista de trabajadores</a>
    `);

  // Ruta para agregar trabajador
  } else if (req.method === "POST" && req.url === "/agregar") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const datos = parse(body);
      const nombre = datos["nombre"];
      const sueldo = Number(datos["sueldo"]);

      Trabajadores.push({ nombre, sueldo });

      res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
      res.end(`
        <h1>Trabajador agregado correctamente ✅</h1>
        <a href="/">Agregar otro</a><br>
        <a href="/lista">Ver lista</a>
      `);
    });

  // Ruta para ver lista
  } else if (req.method === "GET" && req.url === "/lista") {
    if (Trabajadores.length === 0) {
      res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
      res.end("<h2>No hay trabajadores registrados aún.</h2><a href='/'>Volver</a>");
    } else {
      let listado = "";
      total = 0;
      let maximo = Trabajadores[0];
      let minimo = Trabajadores[0];

      for (let trabajador of Trabajadores) {
        listado += `<li>${trabajador.nombre} → $${trabajador.sueldo}</li>`;
        total += trabajador.sueldo;

        if (trabajador.sueldo > maximo.sueldo) maximo = trabajador;
        if (trabajador.sueldo < minimo.sueldo) minimo = trabajador;
      }

      const promedio = total / Trabajadores.length;

      res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
      res.end(`
        <h2>Lista de Trabajadores</h2>
        <ul>${listado}</ul>
        <h3>Estadísticas</h3>
        <p>Sueldo más alto: ${maximo.nombre} con $${maximo.sueldo}</p>
        <p>Sueldo más bajo: ${minimo.nombre} con $${minimo.sueldo}</p>
        <p>Promedio: $${promedio.toFixed(2)}</p>
        <a href="/">Volver</a>
      `);
    }

  // Página no encontrada
  } else {
    res.writeHead(404, { "Content-type": "text/html; charset=utf-8" });
    res.end("<h1>Página no encontrada</h1><a href='/'>Volver</a>");
  }
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});