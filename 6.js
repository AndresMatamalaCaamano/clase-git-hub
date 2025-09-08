const http = require("http");
const { parse } = require("querystring");

const server = http.createServer((req, res) => {

    if(req.method === "GET"){
        res.writeHead(200, {"Content-type" : "text/html; charset=utf-8"});
        res.end(` 
            
            <h2>Ingrese el año para saber si es bisiesto</h2>
            <form method="POST">
            <input type="number" name="año" required />
            <button>Comprobar</button>
            </form>
            `)
    }else{
        let body="";
        req.on("data", d => body += d);
        req.on("end",() => {

            const datos = parse(body);
            const Años = parseInt(datos["año"]);

            if((Años % 4 === 0 && Años % 100 !== 0) || (Años % 400 === 0)){
                res.writeHead(200, {"Content-type" : "text/html; Charset=utf-8"});
                res.end(`
                    
                    <h1>El año si es bisiesto</h1>
                    <a href="/">volver</a>
                `);
            }else{
                res.writeHead(200, {"Content-type" : "text/html; Charset=utf-8"});
                res.end(`
                    
                    <h1>El año no es bisiesto</h1>
                    <a href="/">volver</a>
                `);
            }
        });
    }
});


server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
