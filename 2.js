const http = require("http");
const { parse } = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <form method="POST">
        <input name="Nombre" />
        <button>Saludar</button>
      </form>
    `);
  } else {
    let body = "";
    req.on("data", d => body += d);
    req.on("end", () => {
      const nombre = parse(body).Nombre;
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`<h1>Hola ${nombre}</h1><a href="/">Volver</a>`);
    });
  }
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});