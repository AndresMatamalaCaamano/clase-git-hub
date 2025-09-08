const http = require("http");
const { parse } = require("querystring");

const server = http.createServer((req, res) =>{
    if(req.method === "GET"){

        res.writeHead(200, {"Content-type":"text/html; Charset=utf-8"});
        res.end(`

            <h3>Ingrese una palabra para saber si esta es mayuscula o no</h3>
            <form method="POST">
            <input type="text" name="palabra" required />
            <button>comprobar</button>
            </form>
            `);

        }else{
            let body="";
            req.on("data", d => body += d);
            req.on("end", () => {

                const datos = parse(body);
                const Palabra = datos.palabra;


                if(Palabra === Palabra.toLowerCase()){
                    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                    res.end(`
                        <h1>La palabra esta en minuscula</h1>
                        <a href="/">Volver</a>
                        `);
                }else{
                    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                    res.end(`
                        <h1>La palabra esta en Mayusculas </h1>
                        <a href="/">Volver</a>
                        `);
                }

            });
        }

});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});