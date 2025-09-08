const http = require('http');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const nombre = url.searchParams.get("nombre") || "invitado";

  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(`Hola, ${nombre}`);
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});