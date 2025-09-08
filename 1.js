const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Página principal
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <h1>Ejemplos sin Express</h1>
        <p><a href="/sumar">Ir a sumar números</a></p>
        <p><a href="/datos">Ingresar nombre y edad</a></p>
      `);
    }

    // Formulario de suma
    else if (req.url === '/sumar') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <h1>Suma de Números</h1>
        <form action="/sumar" method="POST">
          <input type="number" name="num1" placeholder="Número 1" required />
          <input type="number" name="num2" placeholder="Número 2" required />
          <button type="submit">Sumar</button>
        </form>
      `);
    }

    // Formulario de datos
    else if (req.url === '/datos') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <h1>Ingresar Datos</h1>
        <form action="/datos" method="POST">
          <input type="text" name="nombre" placeholder="Tu nombre" required />
          <input type="number" name="edad" placeholder="Tu edad" required />
          <button type="submit">Enviar</button>
        </form>
      `);
    }

    else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Página no encontrada');
    }
  }

  else if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // juntar datos
    });

    req.on('end', () => {
      const datos = parse(body);

      // POST de suma
      if (req.url === '/sumar') {
        const suma = Number(datos.num1) + Number(datos.num2);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Resultado</h1><p>La suma es: <b>${suma}</b></p><a href="/">Volver</a>`);
      }

      // POST de datos
      else if (req.url === '/datos') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Datos Recibidos</h1><p>Hola <b>${datos.nombre}</b>, tienes <b>${datos.edad}</b> años.</p><a href="/">Volver</a>`);
      }
    });
  }
});

server.listen(3000, () => {
  console.log('Servidor funcionando en http://localhost:3000');
});
