const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
    if(req.method === "GET"){

        res.writeHead(200, {"content-type": "text/html"});
        res.end(`
            
        <h1>Escriba un numero del 1 a 12 para saber que mes es</h1>
        <form method = "POST">
        <input type="number" name="mes" required />
        <button>Consultar</button>
        </form>
            `);

    }else{

        let body= "";
        req.on("data", d => body += d);
        req.on("end", () => {

        const datos = parse(body);
        const mes = parseInt(datos.mes);

        switch(mes){
        case 1:
            res.writeHead(200, {"content-type": "text/html"});
            res.end(`
            <p>Usted ha elegido a ENERO, Este mes tiene 31 días y su estacion del año es de: Invierno</p>
            `);
          
        break;
        case 2:
            res.writeHead(200, {"content-type": "text/html"});
            res.end(`
            <p>"Usted ha elegido a FEBRERO, Este mes tiene 28 días y su estacion del año es de: Verano"</p>
            `);
            
        break;
        case 3:
            res.writeHead(200, {"content-type": "text/html"});
            res.end(`
            <p>"Usted ha elegido a MARZO, Este mes tiene 31 días y su estacion del año es de: Otoño"</p>
            `);
         
        break;
        case 4:
            res.writeHead(200, {"content-type": "text/html"});
            res.end(`
            <p>"Usted ha elegido a ABRIL, Este mes tiene 30 días y su estacion del año es de: Otoño"</p>
            `);
        break;
        case 5:
            res.writeHead(200, {"content-type": "text/html"});
            res.end(`
            <p>"Usted ha elegido a ABRIL, Este mes tiene 30 días y su estacion del año es de: Otoño"</p>
            `);
        break;
        case 6:
            res.writeHead(200, {"content-type": "text/html"});
            res.end(`
            <p>"Usted ha elegido a ABRIL, Este mes tiene 30 días y su estacion del año es de: Otoño"</p>
            `);
         
        break;
        case 7:
            res.writeHead(200, {"content-type": "text/html"});
            res.end(`
            <p>"Usted ha elegido a ABRIL, Este mes tiene 30 días y su estacion del año es de: Otoño"</p>
            `);
        break;
        case 8:
            res.writeHead(200, {"content-type": "text/html"});
            res.end(`
            <p>"Usted ha elegido a ABRIL, Este mes tiene 30 días y su estacion del año es de: Otoño"</p>
            `);
        break;
        case 9:
            res.writeHead(200, {"content-type": "text/html"});
            res.end(`
            <p>"Usted ha elegido a ABRIL, Este mes tiene 30 días y su estacion del año es de: Otoño"</p>
            `);
        break;
        case 10:
            res.writeHead(200, {"content-type": "text/html"});
            res.end(`
            <p>"Usted ha elegido a ABRIL, Este mes tiene 30 días y su estacion del año es de: Otoño"</p>
            `);
      
        break;
        case 11:
            res.writeHead(200, {"content-type": "text/html"});
            res.end(`
            <p>"Usted ha elegido a ABRIL, Este mes tiene 30 días y su estacion del año es de: Otoño"</p>
            `);
        
        break;
        case 12:
            res.writeHead(200, {"content-type": "text/html"});
            res.end(`
            <p>"Usted ha elegido a ABRIL, Este mes tiene 30 días y su estacion del año es de: Otoño"</p>
            `);
      
        break;

        default:
            console.log("Opcion no valida");
        break;

        }
        });

    } 
});


server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});