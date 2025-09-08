const http = require("http");
const { parse } = require("querystring");

const server = http.createServer((req, res) =>{
    if(req.method === "GET"){

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
        
        <body>
        <h1>Hola escribe tu nombre</h1>
        <form method="POST">
        <input type="text" name="nombre" required />
        <button>ingresar</button>   
        </form> 
        <body>
        `);
    }else{

        let body = "";
        req.on("data", d => body += d);
        req.on("end", () => {

        const datos = parse(body);

        const nombre = datos.nombre;

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(`
            
        <h1>Hola, mucho gusto ${nombre}</h1>
        <a href="/">volver</a>
        `);
    });

    }

});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});