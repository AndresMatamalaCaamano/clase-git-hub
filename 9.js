const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
    if(req.method === "GET"){

        res.writeHead(200, {"content-type": "text/html; Charset=utf-8"});
        res.end(`
            
            <h1>Convertidor de temperaturas</h1>
            <form method = "POST">
            <input type="number" name="temperatura" required />
            <select name="Grados">
            <option value="Celsius a Fahrenheit">Celsius a Fahrenheit</opcion>
            <option value="Fahrenheit a Celsius">Fahrenheit a Celsius</opcion>
            </select>
            <button>calcular</button>
            </form>
            `);
    }else{

        let body= "";
        req.on("data", d => body += d);
        req.on("end", () => {


            const datos = parse(body);
            const temperatura = parseFloat(datos.temperatura);
            const op = datos.Grados;

            switch(op){

                case "Celsius a Fahrenheit":

                resultado =`( ${temperatura} * 9 / 5 ) + 32 = ${(temperatura * 9 / 5) + 32}`;

                break;

                case "Fahrenheit a Celsius":

                resultado =` (${temperatura} - 32) * 5 / 9 = ${(temperatura - 32) * 5 / 9}`;
                
                break;

                default:

                 resultado = "Operación no válida";


                break;
            }

            res.writeHead(200, {"content-type": "text/html; Charset=utf-8"});
            res.end(`

                <h1>Resultado</h1>
                <p>${resultado}</p>
                <a href="/">volver</a>
            `);

        })
    }
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});