const http = require('http');

const server = http.createServer((req, res) => {

  const url = new URL(req.url, `http://${req.headers.host}`);
  const num1 = Number(url.searchParams.get("num1")) || 0;
  const num2 = Number(url.searchParams.get("num2")) || 0;


  const suma = num1 + num2;


  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(`la suma de ${num1} y ${num2}: ${suma}`);
  
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});